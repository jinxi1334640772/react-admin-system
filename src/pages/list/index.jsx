import React, { useState, useEffect } from "react";
import { Card, Table, Avatar } from "antd";
const result = [
  { thumbnailUrl: "zhangjinxi", title: "这是title", url: "这是一12个图片的url" },
  { thumbnailUrl: "zhangjinxi", title: "这是title", url: "这是一1个图片的url" },
  { thumbnailUrl: "zhangjinxi", title: "这是title", url: "这是一2个图片的url" },
  { thumbnailUrl: "zhangjinxi", title: "这是title", url: "这是一3个图片的url" },
  { thumbnailUrl: "zhangjinxi", title: "这是title", url: "这是一4个图片的url" },
  { thumbnailUrl: "zhangjinxi", title: "这是title", url: "这是一5个图片的url" },
  { thumbnailUrl: "zhangjinxi", title: "这是title", url: "这是一6个图片的url" },
  { thumbnailUrl: "zhangjinxi", title: "这是title", url: "这是一7个图片的url" },
  { thumbnailUrl: "zhangjinxi", title: "这是title", url: "这是一8个图片的url" },
];
const { Column } = Table;
const List = () => {
  // 设置列表信息
  const [data, setData] = useState([]);
  console.log("object", data);
  // 设置页码信息
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState();

  useEffect(() => {
    console.log({ page });
    (async () => {
      setData(() => result);
      setPageInfo(() => ({
        current: 1,
        pageSize: 10,
        total: 100,
        onChange: (page) => setPage(page),
      }));
    })();
  }, [page]);

  return (
    <Card title="React 子应用列表页">
      <h2 style={{ fontSize: "26px", color: "#fb4487" }}>
        曾经充满数据的一个列表（因服务器到期，此处数据已丢失）
      </h2>
      {
        <Table rowKey="url" dataSource={data} pagination={pageInfo}>
          <Column dataIndex="thumbnailUrl" render={(text) => <Avatar src={text} />} />
          <Column dataIndex="title" />
          <Column dataIndex="url" render={(text) => <>￥ {text}</>} />
        </Table>
      }
    </Card>
  );
};

export default List;
