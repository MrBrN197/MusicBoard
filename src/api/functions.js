import APIFactory from './factory.js';
import credentials from './credentials.js';
// import newReleases from './releases.json';
// import album from './album.json';
// let fetch;
// if (process.env.NODE_ENV === 'development') {
//   fetch = (url) => Promise.resolve(
//     {
//       json: () => {
//         let result = [];
//         if (url.match('^https://api.spotify.com/v1/albums/')) {
//           result = album;
//         } else if (url.includes('new-releases')) {
//           result = newReleases;
//         }
//         return Promise.resolve(result);
//       },
//       text: () => Promise.resolve(JSON.stringify([
//         {
//           item_id: '4wKGNANAC9OHjccAiihjGO',
//           likes: 5,
//         },
//       ])),
//     },
//   );
// }

export default APIFactory({ credentials, fetch });