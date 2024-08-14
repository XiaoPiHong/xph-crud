import Link from "./link";
import Actions from "./actions";
import Tag from "./tag";

const cellComponentMap = {
  /** 超链接 */
  link: {
    Comp: Link,
  },
  /** 操作组 */
  actions: {
    Comp: Actions,
  },
  /** tag标签 */
  tag: {
    Comp: Tag,
  },
};

export { cellComponentMap };
