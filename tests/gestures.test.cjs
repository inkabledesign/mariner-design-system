const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// Exercise the component callbacks without a native runtime. Native rendering and
// UI-thread serialization are verified separately by the mobile export/build.
function loadComponent(relativePath) {
  let gesture;
  const completions = [];
  const sharedValues = [];
  const react = {
    createElement: (type, props, ...children) => ({ type, props, children }),
    useEffect: () => {},
  };
  const mocks = {
    react,
    'react-native': {
      View: 'View', Pressable: 'Pressable',
      StyleSheet: { create: value => value },
      useWindowDimensions: () => ({ width: 400, height: 800 }),
    },
    'react-native-gesture-handler': {
      GestureDetector: 'GestureDetector',
      usePanGesture: config => (gesture = config),
    },
    'react-native-worklets': { scheduleOnRN: (fn, ...args) => fn(...args) },
    'react-native-reanimated': {
      createAnimatedComponent: component => component,
      useSharedValue: value => {
        const shared = { value };
        sharedValues.push(shared);
        return shared;
      },
      useAnimatedStyle: fn => fn(),
      withTiming: (value, options, callback) => {
        if (callback) completions.push(callback);
        return value;
      },
      interpolate: (value, input, output) => output[0] +
        (value - input[0]) / (input[1] - input[0]) * (output[1] - output[0]),
      Extrapolation: { CLAMP: 'clamp' },
    },
    '@inkabledesign/mariner-theme': {
      theme: { color: { light: { brand: { primary: { 100: '#000' } } } } },
    },
  };
  const filename = path.resolve(__dirname, '..', relativePath);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React, esModuleInterop: true },
  }).outputText;
  const exports = {};
  vm.runInNewContext(code, {
    exports,
    require: name => mocks[name] || { default: name },
  }, { filename });
  return { Component: exports.default, getGesture: () => gesture, completions, sharedValues };
}

function card() {
  const harness = loadComponent('packages/components/organisms/SwipeableCardStack/index.tsx');
  const dismissed = [];
  const tree = harness.Component({ data: ['card'], currentIndex: 0,
    renderCard: item => item, onIndexChange: index => dismissed.push(index) });
  const child = tree.children[0][0];
  child.type(child.props);
  return { ...harness, dismissed };
}

test('card dismissal waits for a successfully completed animation', () => {
  const h = card();
  h.getGesture().onDeactivate({ translationY: 200, canceled: false });
  assert.deepEqual(h.dismissed, []);
  h.completions[0](true);
  assert.deepEqual(h.dismissed, [1]);
});

test('interrupted card animation does not dismiss the card', () => {
  const h = card();
  h.getGesture().onDeactivate({ translationY: 200, canceled: false });
  h.completions[0](false);
  assert.deepEqual(h.dismissed, []);
});

test('canceled card gesture resets without dismissal', () => {
  const h = card();
  h.getGesture().onUpdate({ translationY: 200 });
  h.getGesture().onDeactivate({ translationY: 200, canceled: true });
  assert.equal(h.sharedValues[1].value, 0);
  assert.equal(h.completions.length, 0);
  assert.deepEqual(h.dismissed, []);
});

test('short card swipe returns to its original position', () => {
  const h = card();
  h.getGesture().onUpdate({ translationY: 50 });
  h.getGesture().onDeactivate({ translationY: 50, canceled: false });
  assert.equal(h.sharedValues[1].value, 0);
  assert.equal(h.completions.length, 0);
});

test('canceled button drag preserves selection', () => {
  const h = loadComponent('packages/components/molecules/ButtonGroup/index.tsx');
  const changed = [];
  h.Component({ options: [{ id: 'a' }, { id: 'b' }], selectedId: 'a', onChange: id => changed.push(id) });
  h.getGesture().onUpdate({ translationX: 102 });
  h.getGesture().onDeactivate({ canceled: true });
  assert.equal(h.sharedValues[0].value, 0);
  assert.deepEqual(changed, []);
});
