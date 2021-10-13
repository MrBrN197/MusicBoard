import APIFactory from './factory.js';
import credentials from './credentials.js';

const apiPlaceholder = APIFactory({ credentials, fetch });

// NOTE: THIS are placeholders for the real API

apiPlaceholder.getNewReleases = async () => {
  const object = {
    id: '5Gso3d4CscCijv0lmajZWd',
    album_name: 'Life of a DON',
    artist: 'Don Toliver',
    image: 'https://i.scdn.co/image/ab67616d0000b273ab738b25b86bf02f0346c53d',
    likes: 23,

  };
  return Array(6).fill(object);
};

apiPlaceholder.getAllLikes = async () => [
  { item_id: 'item_1', likes: 5 },
  { item_id: 'item_2', likes: 5 },
  { item_id: 'item_3', likes: 5 },
];
apiPlaceholder.getLikesFor = async () => 3;
apiPlaceholder.getCommentsFor = async () => [
  { username: 'Mrs Girl', comment: 'This is the first comment', creation_date: '2021-10-12' },
  { username: 'Mr Man', comment: 'This is the second comment', creation_date: '2021-10-13' },
];

export default apiPlaceholder;