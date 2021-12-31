import { DefaultTheme, GlobalStyleComponent } from 'styled-components';
declare type GlobalStylesProps = {
    removeBackgroundColor?: boolean;
};
declare const GlobalStyles: GlobalStyleComponent<GlobalStylesProps, DefaultTheme>;
export default GlobalStyles;
