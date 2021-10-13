import './style.scss';

import API from './api/functions.js';

const main = async () => {
  const data = await API.getNewReleases();
  console.log('Data:', data);

  const likes = await API.getAllLikes();
  console.log('likes: ', likes);
  const comments = await API.getCommentsFor('item_1');
  console.log('comments: ', comments);
  const likesFor = await API.getLikesFor('item_1');
  console.log('likesFor: ', likesFor);
};
main();