import './modal.scss';
import API from '../api/functions.js';
import { calculateNumberOfComments, addComment } from './utils.js';

let modalActive = false;

export default {
  showModal: async ({ album_name: albumName, image, id }) => {
    if (modalActive) return;
    modalActive = true;
    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.appendChild(modal);
    modal.classList.remove('hidden');
    const innerHTML = `
    <div class="content">
        <div class="close-btn">
          <i class="fas fa-times"></i>
        </div>
        <div class="image">
          <img src="${image}" alt="album-art">
          <div class="play-btn">
            <i class="fas fa-play-circle"></i>
          </div>
        </div>
        <span class="heading">${albumName}</span>
        <span class="sub-heading">Comments (0)</span>
        <ul class="comments">

        </ul>
        <span class="sub-heading">Add a comment</span>
        <form action="#" autocomplete="off">
            <input type="text" placeholder="Your name" name="username">
            <textarea name="insights" placeholder="Your insights"></textarea>
            <input type="submit" value="Comment">
        </form>
      </div>`;
    modal.innerHTML = innerHTML;
    const commentsBox = modal.querySelector('.comments');

    let comments = await API.getCommentsFor(id);

    comments.forEach((commentDetails) => {
      addComment(commentsBox, commentDetails);
    });

    let totalComments = calculateNumberOfComments(comments);
    const subHeading = modal.querySelector('.sub-heading');
    subHeading.textContent = `Comments (${totalComments})`;

    const form = modal.querySelector('form');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = form.username.value;
      const comment = form.insights.value;
      if (!username || !comment) {
        return;
      }
      form.username.value = '';
      form.insights.value = '';
      await API.addCommentFor(id, username, comment);

      // clear commentsBox
      commentsBox.innerHTML = '';
      comments = await API.getCommentsFor(id);
      comments.forEach((commentDetails) => {
        addComment(commentsBox, commentDetails);
      });
      // update Comments counter
      totalComments += 1;
      subHeading.textContent = `Comments (${totalComments})`;
    });

    modal.querySelector('.close-btn').addEventListener('click', () => {
      modalActive = false;
      modal.remove();
    });
  hideModal: () => {
    modalActive = false;
    document.getElementById('modal')?.remove();
  },
};