import { IXphFormProps } from "xph-crud";

declare global {
  interface INewXphFormProps extends IXphFormProps<{ MyComponentName: {} }> {}
}
