export const calculateNumberOfComments = (comments) => comments.length;
export const addComment = (container, { creation_date: createdAt, username, comment }) => {
  console.log(container);
  const li = document.createElement('li');
  li.classList.add('comment-box');

  const date = (new Date(createdAt)).toLocaleDateString();
  const innerHTML = `
    <div class="details">
      <div class="username-date">
        <strong clas="username">${username}</strong>
        <span class="date">${date}</span>
      </div>
      <div class="comment">
        <span>${comment}</span>
      </div>
    </div>
  `;
  li.innerHTML = innerHTML;
  container.appendChild(li);
};