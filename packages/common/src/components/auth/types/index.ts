export interface IAuthProps {
  /**
   * 鉴权内容
   */
  children: React.ReactElement;
  /**
   * 鉴权函数
   */
  auth?: (key: string) => boolean;
  /**
   * 鉴权标识
   */
  authCode: string | Array<string>;
}
