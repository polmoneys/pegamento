import { type CommonProps, type PropsWithExcludes, type FormProps, type LabelProps, type GridPropsWithItems, type GridPropsWithoutItems } from './types';
export type GridProps = CommonProps & (GridPropsWithItems | GridPropsWithoutItems) & (LabelProps | FormProps | PropsWithExcludes);
declare const Grid: (props: GridProps) => JSX.Element;
export default Grid;
export declare const Stack: (props: GridProps) => JSX.Element;
//# sourceMappingURL=Grid.d.ts.map