// import APIFactory from './factory.js';
// import credentials from './credentials.js';

// export default APIFactory({ credentials, fetch });

// NOTE: THIS IS A placeholder for the real API
const apiPlaceholder = {
  async getNewReleases() {
    const object = {
      id: '5Gso3d4CscCijv0lmajZWd',
      album_name: 'Life of a DON',
      artist: 'Don Toliver',
      image: 'https://i.scdn.co/image/ab67616d0000b273ab738b25b86bf02f0346c53d',
      likes: 23,

    };
    return Array(6).fill(object);
  },
};
export default apiPlaceholder;