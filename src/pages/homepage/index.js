import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/index';
import Card from '../../components/card';
import clapperIcon from '../../assets/icon.jpg';

//Static data
const tiles = [
  { id: '1', title: 'Movies', imageUrl: clapperIcon, to: '/movies' },
  { id: '2', title: 'Series', imageUrl: clapperIcon, to: '/series' },
];

const HomePage = () => (
  <Layout title="Popular Tiles">
    <Row gutter={[16, 16]}>
      {tiles.map(({ to, id, ...otherProps }) => (
        <Col lg={4} md={6} sm={6} xs={12} key={id}>
          <Link to={to}>
            <Card {...otherProps} />
          </Link>
        </Col>
      ))}
    </Row>
  </Layout>
);

export default HomePage;
