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
        <Option value="titleZtoA">Title (Z-A)</Option>
        <Option value="releaseYearLowToHigh">Release year (oldest)</Option>
        <Option value="releaseYearHighToLow">Release year (latest)</Option>
      </Select>
    </>
  );
};
export default Sort;
