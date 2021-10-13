export default ({ credentials, fetch }) => {
  const headers = {
    Authorization: `Bearer ${credentials.access_token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const APIMethods = {
    getNewReleases: async () => {
      const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
        method: 'GET',
        headers,
      });
      const data = await response.json();

      return data.albums.items.map((item) => {
        const artists = item.artists.map((artist) => ({
          href: artist.href,
          name: artist.name,
          type: artist.type,
          id: artist.id,
          artist: artist.name,
        }));

        return {
          id: item.id,
          name: item.name,
          artists,
          type: item.type,
          album_type: item.album_type,
          image: item.images[0].url,
        };
      });
    },
  };
  return APIMethods;
};
