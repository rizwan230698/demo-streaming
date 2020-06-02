import React, { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'antd';

import { Context } from '../../context/DataContext';
import { filterData } from '../../utils/filterData';
import Layout from '../../components/Layout/index';
import Card from '../../components/card';
import Spinner from '../../components/spinner';
import Sort from '../../components/sort';
import Search from '../../components/search';
import utils from '../../utils/sort';
import { Container } from './style';

const MoviesPage = () => {
  const [sortBy, setSortBy] = useState('titleAToZ');
  const [searchBy, setSearchBy] = useState('');
  const { state, fetchStreams } = useContext(Context);

  const handleSelectChange = (value) => {
    setSortBy(value);
  };

  const handleInputChange = (e) => {
    setSearchBy(e.target.value);
  };

  useEffect(() => {
    Object.keys(state).length === 0 && fetchStreams();
  }, [fetchStreams, state]);

  return (
    <Layout title="Popular Movies">
      {Object.keys(state).length === 0 ? (
        <Spinner size="large" />
      ) : (
        <Container>
          <Search handleChange={handleInputChange} />
          <Sort
            handleChange={handleSelectChange}
            styles={{ alignSelf: 'flex-end' }}
          />

          <Row gutter={[16, 16]}>
            {filterData(state, 'movie')
              .filter((item) =>
                item.title.toLowerCase().includes(searchBy.toLowerCase())
              )
              .sort((a, b) => utils[sortBy](a, b))
              .map(({ title, images }) => (
                <Col lg={4} md={6} sm={6} xs={12} key={title}>
                  <Card
                    key={title}
                    title={title}
                    imageUrl={images['Poster Art'].url}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </Layout>
  );
};

export default MoviesPage;
