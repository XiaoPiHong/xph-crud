export interface IAuthProps {
  children: React.ReactElement;
  auth?: (key: string) => boolean;
  key: string | Array<string>;
}
