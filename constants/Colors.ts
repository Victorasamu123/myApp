/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#ffa500';
const tintColorDark = 'orange';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    backgroundHeader : 'rgb(242,242,242)',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#8a2be2',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    backgroundHeader : 'rgb(1,1,1)',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#c68e17',
    tabIconSelected: tintColorDark,
  },
};
