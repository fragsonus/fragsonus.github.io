'use strict';

var cardsArray = [{
  'name': '0',
  'title': 'yumcha-BUSD',
}, {
  'name': '11',
  'title': 'yumcha-ycSDR',
}, {
  'name': '10',
  'title': 'yumcha-BNB',
}, {
  'name': '2',
  'title': 'yumcha',
}, {
  'name': '3',
  'title': 'yumcha-ycPEG',
}, {
  'name': '1',
  'title': 'ycVT-BUSD',
}, {
  'name': '12',
  'title': 'ycVT-ycSDR',
}, {
  'name': '6',
  'title': 'ycVT-yumcha',
}, {
  'name': '4',
  'title': 'ycCMC-BUSD',
}, {
  'name': '7',
  'title': 'ycCMC-yumcha',
},{
  'name': '9',
  'title': 'ycBCOM-BUSD',
},{
  'name': '8',
  'title': 'ycBCOM-yumcha',
}, {
  'name': '5',
  'title': 'mQQQ-yumcha',
}];

var gameGrid = cardsArray;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

var card = document.createElement('div');
card.classList.add('card');
card.id = 'logcard';

var front = document.createElement('div');
front.classList.add('front');
front.id = 'log';

grid.appendChild(card);
card.appendChild(front);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;

  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');
  front.id = item.name;
  front.setAttribute('spinnable','yes');

  var back = document.createElement('div');
  back.classList.add('back');
  back.id = item.name + 'back';
  back.setAttribute('spinnable','yes');

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);

  var x = document.createElement("H1");
  x.innerHTML = item.title;
  front.appendChild(x);

  var x = document.createElement("H1");
  x.innerHTML = item.title;
  back.appendChild(x);

});

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.getAttribute('spinnable') !== 'yes') {
    return;
  }

  if (clicked.parentNode.classList.contains('selected')){
  	clicked.parentNode.classList.remove('selected');
  }
  else {
  	clicked.parentNode.classList.add('selected');
  };
});
