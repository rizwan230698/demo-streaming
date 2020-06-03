import React from 'react';
import { Card as AntdCard, Tooltip } from 'antd';
import { CardSummary, CardTitle, CardFooter } from './style';

const { Meta } = AntdCard;

const Card = ({ title, imageUrl, releaseYear, description }) => {
  const Details = () => (
    <>
      <CardTitle>{title}</CardTitle>
      <CardSummary>{description}</CardSummary>
      <CardFooter>{`Release year - ${releaseYear}`}</CardFooter>
    </>
  );

  return (
    <Tooltip
      title={releaseYear ? <Details /> : title}
      placement="bottom"
      color="rgba(0,0,0,.95)"
    >
      <AntdCard hoverable cover={<img alt="example" src={imageUrl} />}>
        <Meta title={title} />
      </AntdCard>
    </Tooltip>
  );
};

export default Card;
