import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: React.ComponentType) => (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Story />
    </GestureHandlerRootView>
  ),
];
