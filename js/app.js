'use strict';

var cardsArray = [{
  'name': '13',
  'title': 'yumcha-BUSD',
}, {
  'name': '2',
  'title': 'yumcha',
}, {
  'name': '14',
  'title': 'ycCMC-BUSD',
}, {
  'name': '16',
  'title': 'ycVT-BUSD',
}, {
  'name': '0',
  'title': 'yumcha-BUSDv1',
}, {
  'name': '11',
  'title': 'yumcha-ycSDRv1',
}, {
  'name': '10',
  'title': 'yumcha-BNBv1',
}, {
  'name': '3',
  'title': 'yumcha-ycPEGv1',
}, {
  'name': '1',
  'title': 'ycVT-BUSDv1',
}, {
  'name': '12',
  'title': 'ycVT-ycSDRv1',
}, {
  'name': '6',
  'title': 'ycVT-yumchav1',
}, {
  'name': '4',
  'title': 'ycCMC-BUSDv1',
}, {
  'name': '7',
  'title': 'ycCMC-yumchav1',
},{
  'name': '9',
  'title': 'ycBCOM-BUSDv1',
},{
  'name': '8',
  'title': 'ycBCOM-ymchv1',
}, {
  'name': '5',
  'title': 'mQQQ-yumchav1',
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

var v1 = 0;

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

  if (v1 < 4) {
    var x = document.createElement("H1");
    x.innerHTML = item.title;
    front.appendChild(x);

    var x = document.createElement("H1");
    x.innerHTML = item.title;
    back.appendChild(x);
  } else {
    var x = document.createElement("H1");
    x.innerHTML = item.title;
    x.setAttribute('class','faded');
    front.appendChild(x);

    var x = document.createElement("H1");
    x.innerHTML = item.title;
    x.setAttribute('class','faded');
    back.appendChild(x);
  }
  v1++;

  if (item.name === '11' || item.name === '12'|| item.name === '9'|| item.name === '7' || item.name === '5' || item.name === '4' || item.name === '8'|| item.name === '16'|| item.name === '3' || item.name === '10') {
    card.setAttribute('class','hidden');
  }

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
