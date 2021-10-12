export default ({ credentials, fetch }) => {
  const headers = {
    Authorization: `Bearer ${credentials.access_token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const APIMethods = {
  };
  return APIMethods;
};
