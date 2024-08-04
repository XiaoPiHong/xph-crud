// Helper function to get value by path
export const getValueByPath = (obj: Record<string, any>, path: string): any => {
  const keys = path.split(".").filter(Boolean);
  let current = obj;
  for (const key of keys) {
    if (current[key] !== void 0) {
      current = current[key];
    } else {
      return void 0; // Return undefined if the path is invalid
    }
  }
  return keys.length ? current : void 0;
};

/**
 * @description 通过属性为包含.的字符串的对象从值对象中获取值
 * @param fields = { current: 'data.current', pageSize: 'data.pageSize' }
 * @param values = { data: { current: 1, pageSize: 10 } }
 * @returns = { current: 1, pageSize: 10 }
 *
 */
export const getValuesByPathObj = (
  fields: Record<string, string>,
  values: Record<string, any>
): Record<string, any> => {
  const result: Record<string, any> = {};

  // Iterate over the fields object
  for (const [key, path] of Object.entries(fields)) {
    result[key] = getValueByPath(values, path);
  }

  return result;
};
