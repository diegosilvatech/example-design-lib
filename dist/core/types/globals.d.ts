import { theme } from 'styles';
export declare type ColorStyleProps = keyof typeof theme.colors;
export declare type TextTypesProps = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
export declare type TextSizeProps = keyof typeof theme.font.sizes;
export declare type TextWeightProps = keyof typeof theme.font.weights;
export declare type TextOpacitiesProps = keyof typeof theme.font.opacities;
