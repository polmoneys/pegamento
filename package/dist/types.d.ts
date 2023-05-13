import { type ReactNode, type KeyboardEvent, type HTMLAttributes } from 'react';
export interface CommonProps {
    children: ReactNode | ReactNode[];
    className?: string;
    id?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
    DANGEROUS?: Dictionary;
    stretch?: boolean;
    gap?: Unit;
    size?: Unit;
    ratio?: Ratios;
    border?: Positions | 'inset' | 'outset';
    padding?: Axis;
    marginAuto?: Positions;
}
export type GridPropsWithItems = HTMLAttributes<HTMLElement> & {
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    items: Stops;
    direction: Direction;
};
export type GridPropsWithoutItems = HTMLAttributes<HTMLElement> & {
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    items?: never;
    direction?: never;
};
export interface FlexProps {
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
    wrap?: FlexWrap;
    direction?: FlexDirection;
}
export type Tags = 'section' | 'article' | 'nav' | 'aside' | 'header' | 'footer' | 'label' | 'fieldset' | 'p' | 'h1' | 'h2' | 'h3' | 'ul' | 'ol' | 'li' | 'div' | 'form';
export type Unit = `${string}em` | `${string}rem` | `${string}px` | `${string}%` | `${string}fr` | `${string}vh` | `${string}vw` | `calc(${string})`;
export type Positions = 't' | 'b' | 'l' | 'r';
export type Axis = 'x' | 'y' | 'xy';
export type Dictionary<T = string | number> = Record<string, T>;
export type Ratios = 'landscape' | 'portrait' | 'auto' | 'square' | 'ultrawide';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
export type Direction = 'x' | 'y';
export interface Stop {
    stop: [Unit, Unit];
    color: string;
    name: string;
}
export interface Stops extends Array<Stop> {
}
export interface PropsWithExcludes {
    as: Exclude<Tags, 'label' | 'form'>;
}
export interface LabelProps {
    as: 'label';
    htmlFor: string;
}
export interface FormProps {
    as: 'form';
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
//# sourceMappingURL=types.d.ts.map