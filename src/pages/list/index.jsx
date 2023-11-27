import React, { useState, useEffect } from "react";
import { Card, Table, Avatar } from "antd";
import Mock from 'mockjs';
let result= Mock.mock({
  "list|1-100":[
    {
      'name|1-10':'@name',
      id:'@id',
      increment:'@increment',
      firstName:'@first',
      title:'@title',
      titlee:'@title(5,10)',
      case:'@float(1,100)',
      integer:'@integer(1,3)',
      'type|1':[1,2,3,'hah'],
      'status|1':['12','23'],
      time:'@datetime',
      boolean:'boolean',
      image:"@img()"
    }
  ]
})
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
      setData(() => result.list);
      setPageInfo(() => ({
        current: 1,
        pageSize: 100,
        total: 1000,
        onChange: (page) => setPage(page),
      }));
    })();
  }, [page]);

  return (
    <Card title="React 子应用列表页">
      {/* <h2 style={{ fontSize: "26px", color: "#fb4487" }}>
        曾经充满数据的一个列表（因服务器到期，此处数据已丢失）
      </h2> */}
      {
        <Table rowKey="increment" dataSource={data} pagination={pageInfo}>
          <Column dataIndex="id" />
          <Column dataIndex="increment" />
          <Column dataIndex="firstName" />
          <Column dataIndex="titlee" />
          <Column dataIndex="title" />
          <Column dataIndex="case" />
          <Column dataIndex="time" />
          <Column dataIndex="image" render={(text) => <Avatar src={text} />} />
          <Column dataIndex="integer" render={(text) => <>￥ {text}</>} />
        </Table>
      }
    </Card>
  );
};

export default List;
