export const calculateNumberOfComments = (comments) => comments.length;
export const addComment = (container, { creation_date: createdAt, username, comment }) => {
  const li = document.createElement('li');
  const date = (new Date(createdAt)).toLocaleDateString();
  li.textContent = `${date} ${username}: ${comment}`;
  container.appendChild(li);
};