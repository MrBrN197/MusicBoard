import './style.scss';

import API from './api/functions.js';

const main = async () => {
  const data = await API.getNewReleases();
  console.log('Data:', data);
};
main();
