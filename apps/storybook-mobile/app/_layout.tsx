import '../global.css';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import StorybookUIRoot from '../.storybook/Storybook';

import { fontAssets } from '@inkabledesign/mariner-assets';

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync(fontAssets).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return null;

  return <StorybookUIRoot />;
}
