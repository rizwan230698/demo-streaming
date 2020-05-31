import React from 'react';
import { Card as AntdCard } from 'antd';

const { Meta } = AntdCard;

const Card = ({ title, imageUrl }) => (
  <AntdCard hoverable cover={<img alt="example" src={imageUrl} />}>
    <Meta title={title} />
  </AntdCard>
);

export default Card;
