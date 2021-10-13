import APIFactory from './factory.js';
import credentials from './credentials.js';

const apiPlaceholder = APIFactory({ credentials, fetch });

// NOTE: THIS are placeholders for the real API

const fakeData = {
  likes: [
    {
      item_id: '5Gso3d4CscCijv0lmajZWd',
      likes: 0,
    },
  ],
  all_comments: [
    {
      item_id: '5Gso3d4CscCijv0lmajZWd',
      comments: [
        {
          creation_date: '2021-10-12',
          username: 'Mrs Man',
          comment: 'This is the first comment',
        },
        {
          creation_date: '2021-10-13',
          username: 'Mrs Girl',
          comment: 'This is the second comment',
        },
      ],
    },
  ],
};

apiPlaceholder.getNewReleases = async () => {
  const object = {
    id: '5Gso3d4CscCijv0lmajZWd',
    album_name: 'Life of a DON',
    artist: 'Don Toliver',
    image: 'https://i.scdn.co/image/ab67616d0000b273ab738b25b86bf02f0346c53d',
    likes: 0,

  };
  return Array(6).fill(object);
};

apiPlaceholder.getAllLikes = async () => fakeData.likes;
apiPlaceholder.getLikesFor = async (id) => fakeData.likes.find((l) => l.item_id === id).likes;
apiPlaceholder.getCommentsFor = async (id) => {
  const user = fakeData.all_comments.find((c) => c.item_id === id);
  if (!user) return null;
  return user.comments;
};

apiPlaceholder.addCommentFor = async (id, username, comment) => {
  const user = fakeData.all_comments.find((c) => c.item_id === id);
  if (!user) return false;
  user.comments.push({
    creation_date: '2021-10-13',
    username,
    comment,
  });
  return true;
};
apiPlaceholder.addLikeFor = async (id) => {
  const user = fakeData.likes.find((l) => l.item_id === id);
  if (!user) {
    return false;
  }
  user.likes += 1;
  return true;
};

export default apiPlaceholder;