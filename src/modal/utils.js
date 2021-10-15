export const calculateNumberOfComments = (comments) => comments.length;
export const addComment = (container, { creation_date: createdAt, username, comment }) => {
  const li = document.createElement('li');

  const date = (new Date(createdAt)).toLocaleDateString();
  // li.textContent = `${date} ${username}: ${comment}`;
  const innerHTML = `
    <span>${date}</span> <strong>${username}:</strong> <span>${comment}</span>
  `;
  li.innerHTML = innerHTML;
  container.appendChild(li);
};