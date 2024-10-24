import React from "react";
import { XphTable, TXphTableProps } from "xph-crud";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  gender: "male" | "female";
}

/** 模拟分页接口 */
const getTablePage = async (params) => {
  console.log(params);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          key: "1",
          name: "胡彦斌",
          age: 32,
          address:
            "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1", // 超长英文
          gender: "male",
        },
        {
          key: "2",
          name: "李雷",
          age: 28,
          address: "东城区东华门大街2号",
          gender: "male",
        },
        {
          key: "3",
          name: "韩梅梅",
          age: 30,
          address: "南山区南山路3号",
          gender: "female",
        },
        {
          key: "4",
          name: "王小明",
          age: 25,
          address: "北城区北门大街4号",
          gender: "male",
        },
        {
          key: "5",
          name: "赵丽颖",
          age: 29,
          address: "中城区中山路5号",
          gender: "female",
        },
        {
          key: "6",
          name: "陈晓",
          age: 31,
          address: "西湖区湖底公园6号",
          gender: "male",
        },
        {
          key: "7",
          name: "刘亦菲",
          age: 27,
          address: "东城区东华门大街7号",
          gender: "female",
        },
        {
          key: "8",
          name: "张三",
          age: 33,
          address: "南山区南山路8号",
          gender: "male",
        },
        {
          key: "9",
          name: "李四",
          age: 26,
          address: "北城区北门大街9号",
          gender: "male",
        },
        {
          key: "10",
          name: "王五",
          age: 35,
          address: "中城区中山路10号",
          gender: "male",
        },
        {
          key: "11",
          name: "赵六",
          age: 34,
          address: "西湖区湖底公园11号",
          gender: "male",
        },
        {
          key: "12",
          name: "孙七",
          age: 28,
          address: "东城区东华门大街12号",
          gender: "female",
        },
        {
          key: "13",
          name: "周八",
          age: 29,
          address: "南山区南山路13号",
          gender: "male",
        },
        {
          key: "14",
          name: "吴九",
          age: 31,
          address: "北城区北门大街14号",
          gender: "male",
        },
        {
          key: "15",
          name: "郑十",
          age: 27,
          address: "中城区中山路15号",
          gender: "male",
        },
        {
          key: "16",
          name: "何十一",
          age: 30,
          address: "西湖区湖底公园16号",
          gender: "female",
        },
        {
          key: "17",
          name: "冯十二",
          age: 33,
          address: "东城区东华门大街17号",
          gender: "male",
        },
        {
          key: "18",
          name: "褚十三",
          age: 32,
          address: "南山区南山路18号",
          gender: "female",
        },
        {
          key: "19",
          name: "卫十四",
          age: 29,
          address: "北城区北门大街19号",
          gender: "male",
        },
        {
          key: "20",
          name: "蒋十五",
          age: 28,
          address: "中城区中山路20号",
          gender: "male",
        },
        {
          key: "21",
          name: "沈十六",
          age: 31,
          address: "西湖区湖底公园21号",
          gender: "male",
        },
      ]);
    }, 1000);
  });
};

const ReactApp: React.FC = () => {
  const props: TXphTableProps<DataType> = {
    table: {
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "性别",
          dataIndex: "gender",
          key: "gender",
        },
        {
          title: "地址",
          dataIndex: "address",
          key: "address",
          width: 300,
          ellipsis: true,
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age",
        },
      ],
      fullHeight: true,
      api: getTablePage,
      /** 客户端自动将数据源分页 */
      autoPagination: true,
    },
  };

  return (
    <div style={{ height: "600px", position: "relative" }}>
      <XphTable<DataType> {...props} />
    </div>
  );
};

export default ReactApp;
