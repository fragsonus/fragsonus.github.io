'use strict';

var cardsArray = [{
  'name': '0',
  'title': 'BUSD-yumcha',
},{
  'name': '10',
  'title': 'WBNB-yumcha',
}, {
  'name': '2',
  'peg': 'yumcha',
}, {
  'name': '3',
  'peg': 'ycPEG-yumcha',
}, {
  'name': '5',
  'peg': 'mQQQ-yumcha',
}, {
  'name': '1',
  'peg': 'ycVT-BUSD',
}, {
  'name': '6',
  'peg': 'ycVT-yumcha',
}, {
  'name': '4',
  'peg': 'ycCMC-BUSD',
}, {
  'name': '7',
  'peg': 'ycCMC-yumcha',
},{
  'name': '9',
  'peg': 'ycBCOM-BUSD',
},{
  'name': '8',
  'peg': 'ycBCOM-yumcha',
}];

var PegArray = ['na','$100.00','na','na','$2.28','$340.00',
                  '$100.00','$2.28','$184.82'];

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
