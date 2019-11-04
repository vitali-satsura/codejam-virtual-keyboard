const ROW1 = [
  ['Backquote', '`', '~', 'ё', 'Ё'],
  ['Digit1', '1', '!', '1', '!'],
  ['Digit2', '2', '@', '2', '"'],
  ['Digit3', '3', '#', '3', '№'],
  ['Digit4', '4', '$', '4', ';'],
  ['Digit5', '5', '%', '5', '%'],
  ['Digit6', '6', '^', '6', ':'],
  ['Digit7', '7', '&', '7', '?'],
  ['Digit8', '8', '*', '8', '*'],
  ['Digit9', '9', '(', '9', '('],
  ['Digit0', '0', ')', '0', ')'],
  ['Digit-', '-', '_', '-', '_'],
  ['Equal=', '=', '+', '=', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']
];

const ROW2 = [
  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  ['KeyQ', 'q', 'Q', 'й', 'Й'],
  ['KeyW', 'w', 'W', 'ц', 'Ц'],
  ['KeyE', 'e', 'E', 'у', 'У'],
  ['KeyR', 'r', 'R', 'к', 'К'],
  ['KeyT', 't', 'T', 'е', 'Е'],
  ['KeyY', 'y', 'Y', 'н', 'Н'],
  ['KeyU', 'u', 'U', 'г', 'Г'],
  ['KeyI', 'i', 'I', 'ш', 'Ш'],
  ['KeyO', 'o', 'O', 'щ', 'Щ'],
  ['KeyP', 'p', 'P', 'з', 'З'],
  ['BracketLeft', '[', '{', 'х', 'Х'],
  ['BracketRight', ']', '}', 'ъ', 'Ъ'],
  ['Backslash', '\\', '|', '\\', '/'],
  ['Delete', 'Del', 'Del', 'Del', 'Del']
];

const ROW3 = [
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'a', 'A', 'ф', 'Ф'],
  ['KeyS', 's', 'S', 'ы', 'Ы'],
  ['KeyD', 'd', 'D', 'в', 'В'],
  ['KeyF', 'f', 'F', 'а', 'А'],
  ['KeyG', 'g', 'G', 'п', 'П'],
  ['KeyH', 'h', 'H', 'р', 'Р'],
  ['KeyJ', 'j', 'J', 'о', 'О'],
  ['KeyK', 'k', 'K', 'л', 'Л'],
  ['KeyL', 'l', 'L', 'д', 'Д'],
  ['Semicolon', ';', ':', 'ж', 'Ж'],
  ['Quote', "'", '"', 'э', 'Э'],
  ['Enter', 'Enter', 'Enter', 'Enter', 'Enter']
];

const ROW4 = [
  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['KeyZ', 'z', 'Z', 'я', 'Я'],
  ['KeyX', 'x', 'X', 'ч', 'Ч'],
  ['KeyC', 'c', 'C', 'с', 'С'],
  ['KeyV', 'v', 'V', 'м', 'М'],
  ['KeyB', 'b', 'B', 'и', 'И'],
  ['KeyN', 'n', 'N', 'т', 'Т'],
  ['KeyM', 'm', 'M', 'ь', 'Ь'],
  ['Comma', ',', '<', 'б', 'Б'],
  ['Period', '.', '>', 'ю', 'Ю'],
  ['Slash', '/', '?', '.', ','],
  ['ArrowUp', '\u25B2', '&#9650;', '&#9650;', '&#9650;'],
  ['ShiftRight', "Shift", 'Shift', 'Shift', 'Shift']
];

const ROW5 = [
  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', 'Space', 'Space', 'Space', 'Space'],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ArrowLeft', '&#9664;', '&#9664;', '&#9664;', '&#9664;'],
  ['ArrowDown', '&#9660;', '&#9660;', '&#9660;', '&#9660;'],
  ['ArrowRight', '&#9654;', '&#9654;', '&#9654;', '&#9654;'],
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
];

class keyboard {
  constructor() { }

  lang = '';
  isShiftPressed = false;
  caseState = 'lower';

  init() {
    this.language('eng');

    document.body.insertAdjacentHTML('afterBegin',
      '<div class="container"><textarea id="textarea" class="textarea" rows="5" cols="50"></textarea><div id="keyboard" class="keyboard"></div></div>');

    const kb = document.getElementById('keyboard');
    kb.appendChild(this.createKeys(ROW1));
    kb.appendChild(this.createKeys(ROW2));
    kb.appendChild(this.createKeys(ROW3));
    kb.appendChild(this.createKeys(ROW4));
    kb.appendChild(this.createKeys(ROW5));

    this.keyDown();
    this.keyUp();
  }

  createKeys(keyRow) {
    const fragment = document.createDocumentFragment();

    const row = document.createElement('div');
    row.classList.add('row');

    keyRow.forEach(key => {
      const keyElement = document.createElement('div');
      keyElement.classList.add('key');
      if (this.lang === 'eng') {
        keyElement.insertAdjacentHTML('afterBegin',
          `<span class="rus lower hidden">${key[3]}</span><span class="rus upper hidden">${key[4]}</span><span class="eng lower">${key[1]}</span><span class="eng upper hidden">${key[2]}</span>`);
      } else {
        keyElement.insertAdjacentHTML('afterBegin',
          `<span class="rus lower">${key[3]}</span><span class="rus upper hidden">${key[4]}</span><span class="eng lower hidden">${key[1]}</span><span class="eng upper hidden">${key[2]}</span>`);
      }

      keyElement.classList.add(key[0]);


      row.appendChild(keyElement);
      fragment.appendChild(row);
      this.mouseClick(keyElement, key[0]);
    });

    return fragment;
  }
}