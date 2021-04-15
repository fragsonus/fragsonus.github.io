'use strict';

var cardsArray = [{
  'name': '0',
  'img': 'img/blueshell.png'
}, {
  'name': '1',
  'img': 'img/star.png'
}, {
  'name': '2',
  'img': 'img/bobomb.png'
}, {
  'name': '3',
  'img': 'img/mario.png'
}, {
  'name': '4',
  'img': 'img/luigi.png'
}, {
  'name': '5',
  'img': 'img/peach.png'
}, {
  'name': '6',
  'img': 'img/1up.png'
}, {
  'name': '7',
  'img': 'img/mushroom.png'
}, {
  'name': '8',
  'img': 'img/thwomp.png'
}];

var gameGrid = cardsArray;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;

  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');
  front.id = item.name + 'front';

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';
  back.id = item.name + 'back';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION') {
    return;
  }

  if (clicked.parentNode.classList.contains('selected')){
  	clicked.parentNode.classList.remove('selected');
  }
  else {
  	clicked.parentNode.classList.add('selected');
  };
});
