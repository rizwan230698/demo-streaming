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

const SeriesPage = () => {
  const [sortBy, setSortBy] = useState('titleAToZ');
  const [searchBy, setSearchBy] = useState('');
  const { state, fetchStreams } = useContext(Context);

  const handleSelectChange = (value) => {
    //set the select value to state
    setSortBy(value);
  };

  const handleInputChange = (e) => {
    //set the input value to state
    setSearchBy(e.target.value);
  };

  useEffect(() => {
    //fetch streams if state is empty
    Object.keys(state).length === 0 && fetchStreams();
  }, [fetchStreams, state]);

  //If state is empty return spinner else return cards
  return (
    <Layout title="Popular Series">
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
            {filterData(state, 'series')
              .filter((item) =>
                //filter those item whose title includes searchBy(state)
                item.title.toLowerCase().includes(searchBy.toLowerCase())
              )
              //call the sort function from utils accordingly
              .sort((a, b) => utils[sortBy](a, b))
              .map(({ title, images }) => (
                <Col lg={4} md={6} sm={6} xs={12}>
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

export default SeriesPage;
