import axios from 'axios';
export default axios.create({
  baseURL:
    'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
});
