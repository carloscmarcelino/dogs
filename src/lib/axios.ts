import axios from 'axios';

const config = {
  baseURL: 'https://dogsapi.origamid.dev/json/',
};

export default axios.create(config);
