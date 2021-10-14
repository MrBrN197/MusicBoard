export const calculateNumberOfComments = (comments) => comments.length;
export const addComment = (container, { created_at: createdAt, username, comment }) => {
  const li = document.createElement('li');
  const date = (new Date(createdAt)).toLocaleDateString();
  li.textContent = `${date} ${username}: ${comment}`;
  container.appendChild(li);
};