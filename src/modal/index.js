export default {
  showModal: (details) => {
    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.appendChild(modal);
    modal.classList.remove('hidden');

    const content = document.createElement('div');
    modal.appendChild(content);
    content.classList.add('content');
  },
  hideModal: () => document.getElementById('modal')?.remove(),
};