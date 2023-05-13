import { type PropsWithExcludes, type FormProps, type LabelProps, type CommonProps, type FlexProps } from './types';
export type GroupProps = CommonProps & FlexProps & (LabelProps | FormProps | PropsWithExcludes);
export declare const Row: (props: GroupProps) => JSX.Element;
export declare const Dos: (props: GroupProps) => JSX.Element;
export declare const Col: (props: GroupProps) => JSX.Element;
//# sourceMappingURL=Group.d.ts.map