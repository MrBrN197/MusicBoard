import './style.scss';
import API from './api/functions.js';
import Modal from './modal/index.js';
import countTotalItems from './countTotalItems.js';

const populateList = (item) => {
  const itemsContainer = document.getElementById('items-container');
  const div = document.createElement('DIV');
  div.setAttribute('class', 'item-container');
  const photo = document.createElement('IMG');
  photo.setAttribute('src', item.image);
  photo.setAttribute('class', 'album-photo');
  div.appendChild(photo);
  const heart = document.createElement('SPAN');
  const likes = document.createElement('P');
  heart.innerHTML = '❤';
  heart.setAttribute('class', 'heart');
  heart.addEventListener('click', async () => {
    await API.addLikeFor(item.id);
    const newLikes = await API.getLikesFor(item.id);
    likes.innerHTML = `${newLikes} likes`;
  });
  const title = document.createElement('P');
  const titleText = document.createTextNode(item.artist);
  title.appendChild(titleText);
  title.appendChild(heart);
  likes.innerHTML = `${item.likes} likes`;
  const comments = document.createElement('BUTTON');
  comments.setAttribute('id', 'comments-button');
  comments.textContent = 'Comments';
  comments.addEventListener('click', () => Modal.showModal({
    image: item.image,
    id: item.id,
    album_name: item.album_name,
  }));
  div.appendChild(title);
  div.appendChild(likes);
  div.appendChild(comments);
  itemsContainer.appendChild(div);
};

const main = async () => {
  const data = await API.getNewReleases();

  data.forEach((element) => {
    populateList(element);
  });
};

const showTotalOfItems = async () => {
  const total = countTotalItems();
  const totalItems = document.getElementById('total-items');
  totalItems.innerHTML = `(${total})`;
};

const initialize = async () => {
  // await main();
  // await showTotalOfItems();
  Modal.showModal({
    album_name: 'Easy On Me',
    image: 'https://i.scdn.co/image/ab67616d0000b273e202fbaf5e7f436d8fc47c19',
    id: '224jZ4sUX7OhAuMwaxp86S',
    likes: 0,
    artist: 'Adele',
  });
};

initialize();
