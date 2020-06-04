import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Sort = ({ handleChange, styles }) => {
  return (
    <>
      <Select
        defaultValue="titleAToZ"
        style={{ width: 180, marginBottom: 10, ...styles }}
        onChange={handleChange}
      >
        <Option value="titleAToZ">Title (A-Z)</Option>
        <Option value="titleZToA">Title (Z-A)</Option>
        <Option value="releaseYearLowToHigh">Release year (Oldest)</Option>
        <Option value="releaseYearHighToLow">Release year (Latest)</Option>
      </Select>
    </>
  );
};
export default Sort;
