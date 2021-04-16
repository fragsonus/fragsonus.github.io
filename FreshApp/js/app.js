'use strict';

var cardsArray = [{
  'name': '0',
  'peg': 0,
}, {
  'name': '1',
  'peg': 100,
}, {
  'name': '2',
  'peg': 0,
}, {
  'name': '3',
  'peg': 0,
}, {
  'name': '4',
  'peg': 2.28,
}, {
  'name': '5',
  'peg': 340,
}, {
  'name': '6',
  'peg': 100,
}, {
  'name': '7',
  'peg': 2.28,
},{
  'name': '8',
  'peg': 184.82,
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
  front.id = item.name;
  front.setAttribute('spinnable','yes');

  var back = document.createElement('div');
  back.classList.add('back');
  back.id = item.name + 'back';
  back.setAttribute('spinnable','yes');

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);

  var x = document.createElement("P");
  x.setAttribute('class', 'alignright');
  x.innerHTML = 'Peg: '+item.peg;
  front.appendChild(x);

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
