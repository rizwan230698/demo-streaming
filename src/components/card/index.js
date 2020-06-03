import React from 'react';
import { Card as AntdCard, Tooltip } from 'antd';

const { Meta } = AntdCard;

const Card = ({ title, imageUrl, releaseYear, description }) => {
  const Details = () => (
    <>
      <h3
        style={{
          margin: 0,
          padding: 0,
          color: 'white',
          fontWeight: 600,
          fontSize: '14px',
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, padding: 0, fontSize: '12px', fontWeight: 300 }}>
        {description}
      </p>
      <small
        style={{ margin: 0, padding: 0 }}
      >{`Release year - ${releaseYear}`}</small>
    </>
  );

  return (
    <Tooltip
      overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
      title={releaseYear ? <Details /> : title}
      placement="bottom"
    >
      <AntdCard hoverable cover={<img alt="example" src={imageUrl} />}>
        <Meta title={title} />
      </AntdCard>
    </Tooltip>
  );
};

export default Card;
