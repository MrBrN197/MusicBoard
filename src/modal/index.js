import './modal.scss';

export default {
  showModal: () => {
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
          <img src="https://images.unsplash.com/photo-1632207191677-8446985f9d65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1161&q=80" alt="album-art">
        </div>
        <span class="heading">Space 3</span>
        <span class="sub-heading">Comments (2)</span>
        <ul>
          <li>03/11/2021 Alex: I'd love to buy it</li>
          <li>03/12/2021 Mia: I love</li>
        </ul>
        <span class="sub-heading">Add a comment</span>
        <form action="#">
            <input type="text" placeholder="Your name">
            <textarea name="insights" placeholder="Your insights"></textarea>
            <input type="submit" value="Comment">
        </form>
      </div>`;
    modal.innerHTML = innerHTML;
    modal.querySelector('.close-btn').addEventListener('click', () => {
      modal.remove();
    });
  },
  hideModal: () => document.getElementById('modal')?.remove(),
};