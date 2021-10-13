import './style.scss';
import API from './api/functions.js';

const populateList = (item) => {
  const itemsContainer = document.getElementById('items-container');
  const div = document.createElement('DIV');
  div.setAttribute('class', 'item-container');
  const photo = document.createElement('IMG');
  photo.setAttribute('src', item[3]);
  photo.setAttribute('class', 'album-photo');
  div.appendChild(photo);
  const heart = document.createElement('SPAN');
  heart.innerHTML = '❤';
  heart.setAttribute('class', 'heart');
  const title = document.createElement('P');
  const likes = document.createElement('P');
  const titleText = document.createTextNode(item[1]);
  title.appendChild(titleText);
  title.appendChild(heart);
  likes.innerHTML = `${item[4]} likes`;
  const comments = document.createElement('BUTTON');
  comments.textContent = 'Comments';
  div.appendChild(title);
  div.appendChild(likes);
  div.appendChild(comments);
  itemsContainer.appendChild(div);
};

const main = async () => {
  const data = await API.getNewReleases();

  data.forEach((element) => {
    const itemDetails = Object.values(element);
    populateList(itemDetails);
  });
};

main();