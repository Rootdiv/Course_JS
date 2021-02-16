//Обязательное задание. Часть1
'use strict';

function DomElement(selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
}

DomElement.prototype.createElem = function() {
  const elem = document.createElement('div');
  const one = this.selector[0];
  if (one === '.') {
    elem.className = this.selector.substring(1);
  } else if (one === '#') {
    elem.setAttribute('id', this.selector.substring(1));
  }
  elem.style.cssText = 'height: ' + this.height + '; width: ' + this.width + ';' +
    ' background: ' + this.bg + '; font-size: ' + this.fontSize + ';';
  elem.textContent = this.text;
  document.body.prepend(elem);
};

const domElement = new DomElement('#elem', '100px', '37%', 'green', '25px', 'Элемент класса');
domElement.createElem();
domElement.selector = '.new-elem';
domElement.height = '50px';
domElement.createElem();
