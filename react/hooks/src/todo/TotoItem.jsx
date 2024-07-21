import React,{ useContext } from 'react';
import { List, Tag } from 'antd';
import Con from '../_context';

// 子组件
const TotoItem = (props) => {
  const {del} = useContext(Con);
  return (
    <div>
      <List
        bordered
        dataSource={props.data}
        renderItem={(item,index) => (
          <List.Item>
            {item}
            <Tag closeIcon onClose={() => {del(index)}}>
              删除
            </Tag>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TotoItem;