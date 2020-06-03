import React from 'react';
import { Card as AntdCard, Tooltip } from 'antd';

const { Meta } = AntdCard;

const Card = ({ title, imageUrl, releaseYear }) => {
  const Details = () => (
    <>
      <p style={{ margin: 0, padding: 0 }}>{title}</p>
      <p style={{ margin: 0, padding: 0 }}>{`Release year - ${releaseYear}`}</p>
    </>
  );

  return (
    <Tooltip title={releaseYear ? <Details /> : title} placement="bottom">
      <AntdCard hoverable cover={<img alt="example" src={imageUrl} />}>
        <Meta title={title} />
      </AntdCard>
    </Tooltip>
  );
};

export default Card;
