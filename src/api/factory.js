export default ({ credentials, fauxFetch: fetch }) => {
  credentials.access_token = 'BQD81oYEnQ3ZhNT4A9q89jR6OW3a6f4h_sq4g6U8x4WqrkmGJAb--OepFWHlLVwYAHDB0H2JqRmiNawazis';

  const involvementBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
  const appId = 'oM0i9Hfjd7ZwqdP4izVj';

  const headers = {
    Authorization: '', // NOTE: can't use spotify api until Auth header is initialized
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const accessTokenPromise = fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${credentials.cid}:${credentials.cs}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
    .then((resp) => resp.json())
    .then((data) => {
      credentials.access_token = data.access_token;
      headers.Authorization = `Bearer ${credentials.access_token}`;
    });

  const APIMethods = {
    async getNewReleases() {
      await accessTokenPromise;
      const response = await fetch('https://api.spotify.com/v1/browse/new-releases?limit=21', {
        method: 'GET',
        headers,
      });
      const data = await response.json();

      const allAlbumLikes = await this.getAllLikes();
      console.log('allAlbumLikes:', allAlbumLikes);

      return data.albums.items.map((item) => {
        // console.log('item:', item);
        const artist = item.artists.map((artist) => artist.name).join(', ');
        // console.log('artist:', artist);
        const likes = allAlbumLikes.find((album) => album.item_id === item.id)?.likes || 0;
        return {
          id: item.id,
          album_name: item.name,
          artist,
          likes,
          image: item.images[0].url,
          link: item.external_urls.spotify,
        };
      });
    },
    async getAllLikes() {
      const response = await fetch(`${involvementBaseURL}apps/${appId}/likes`);
      const data = await response.text();
      return JSON.parse(data);
    },
    async getLikesFor(id) {
      const data = await this.getAllLikes();
      return data.find((i) => i.item_id === id)?.likes;
    },
    async getCommentsFor(id) {
      try {
        const response = await fetch(`${involvementBaseURL}apps/${appId}/comments?item_id=${id}`);
        const data = await response.json();
        if (data.error) {
          throw Error;
        }
        return data;
      } catch {
        return [];
      }
    },
    async addLikeFor(id) {
      try {
        const response = await fetch(`${involvementBaseURL}apps/${appId}/likes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            item_id: id,
          }),
        });

        const createdStatus = await response.text();
        if (createdStatus !== 'Created') throw Error;
        return true;
      } catch (err) {
        return false;
      }
    },
    async addCommentFor(id, username, comment) {
      try {
        const response = await fetch(`${involvementBaseURL}apps/${appId}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            item_id: id,
            username,
            comment,
          }),
        });
        const createdStatus = await response.text();
        if (createdStatus !== 'Created') throw Error;
        return true;
      } catch (err) {
        return false;
      }
    },
    async getAlbum(id) {
      fetch(`https://api.spotify.com/v1/albums/${id}`, { headers });
      throw new Error('not implemented:', id);
    },
  };
  return APIMethods;
};
