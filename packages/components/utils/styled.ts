import { Pressable, Text, View } from 'react-native';
import { cssInterop } from 'nativewind';

export const StyledView = cssInterop(View, { className: 'style' });
export const StyledText = cssInterop(Text, { className: 'style' });
export const StyledPressable = cssInterop(Pressable, { className: 'style' });
