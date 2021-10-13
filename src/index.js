import './style.scss';
import API from './api/functions.js';
import Modal from './modal/index.js';

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
  comments.setAttribute('id', 'comments-button');
  comments.textContent = 'Comments';
  comments.addEventListener('click', () => Modal.showModal('showModal called!!'));
  div.appendChild(title);
  div.appendChild(likes);
  div.appendChild(comments);
  itemsContainer.appendChild(div);
};

const main = async () => {
  const data = await API.getNewReleases();

  // console.log('Data:', data);
  // const likes = await API.getAllLikes();
  // console.log('likes: ', likes);
  // const comments = await API.getCommentsFor('item_1');
  // console.log('comments: ', comments);
  // const likesFor = await API.getLikesFor('item_1');
  // console.log('likesFor: ', likesFor);
  // console.log('post like:', await API.addLikeFor('item_1'));
  // console.log(await API.addCommentFor('item_1', 'Phillip', 'Hello This is a new comment!'));

  data.forEach((element) => {
    const itemDetails = Object.values(element);
    populateList(itemDetails);
  });
};

main();