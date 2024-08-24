export interface IAuthProps {
  children: React.ReactElement;
  auth?: (key: string) => boolean;
  authCode: string | Array<string>;
}
