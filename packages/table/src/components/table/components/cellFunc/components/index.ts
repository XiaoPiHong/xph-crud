import Link from "./link";
import Actions from "./actions";
import Tag from "./tag";
import Copy from "./copy";

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
  /** 复制 */
  copy: {
    Comp: Copy,
  },
};

export { cellComponentMap };
