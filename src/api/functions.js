import APIFactory from './factory.js';
import credentials from './credentials.js';

import data from './data.js';

const apiPlaceholder = APIFactory({ credentials, fetch });

// NOTE: THIS are placeholders for the real API

const fakeData = {
  likes: data.items.map((item) => ({ item_id: item.id, likes: 0 })),
  all_comments: data.items.map((item) => ({
    item_id: item.id,
    comments: [
      {
        username: 'Jane',
        comment: 'Hi this is the first comment',
        created_at: '2021-10-13',
      },
      {
        username: 'Michael',
        comment: 'This is really great!',
        created_at: '2021-10-12',
      },
      {
        username: 'Evelyn',
        comment: 'Wow Amazing!!!!',
        created_at: '2021-10-14',
      },
    ],
  })),
};

apiPlaceholder.getNewReleases = async () => data.items;

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
    created_at: '2021-10-13',
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