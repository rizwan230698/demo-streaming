import React from 'react';
import { Card as AntdCard, Tooltip } from 'antd';

const { Meta } = AntdCard;

const Card = ({ title, imageUrl }) => (
  <Tooltip title={title} placement="bottom">
    <AntdCard hoverable cover={<img alt="example" src={imageUrl} />}>
      <Meta title={title} />
    </AntdCard>
  </Tooltip>
);

export default Card;
