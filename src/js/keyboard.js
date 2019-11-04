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

  keyDown() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      textarea.focus();
      const keyElement = document.querySelector(`.${event.code}`);
      const text = keyElement.querySelector(':not(.hidden)').textContent;

      this.addActiveState(keyElement);

      switch (event.code) {
        case 'Backspace':
          textarea.value = textarea.value.slice(0, textarea.value.length - 1);
          break;

        case 'CapsLock':
          this.toggleCase();
          break;

        case 'Tab':
          textarea.value += '\t';
          break;

        case 'Delete':
          if (textarea.selectionStart < textarea.value.length) {
            const tmp = textarea.selectionStart;
            textarea.value = textarea.value.slice(0, textarea.selectionStart) +
              textarea.value.slice(textarea.selectionEnd + 1, textarea.value.length);
            textarea.selectionStart = tmp;
          }

          break;

        case 'Enter':
          textarea.value += '\n';
          break;

        case 'Space':
          textarea.value += ' ';
          break;

        case 'ShiftRight':
          if (!this.isShiftPressed) {
            this.isShiftPressed = true;
            this.toggleCase();
          }
          break;

        case 'ShiftLeft':
          if (!this.isShiftPressed) {
            this.isShiftPressed = true;
            this.toggleCase();
          }
          break;

        case 'ControlLeft':
          break;

        case 'ControlRight':
          break;

        case 'AltLeft':
          break;

        case 'AltRight':
          break;

        case 'ArrowLeft':
          textarea.selectionEnd -= 1;
          break;

        case 'ArrowRight':
          textarea.selectionStart += 1;
          break;

        case 'ArrowUp':

          break;

        case 'ArrowDown':
          break;

        case 'MetaLeft':
          break;

        default:
          textarea.value += text;
          break;
      }

      if (event.ctrlKey && event.altKey) {
        this.changeLanguage();
      }

    });
  }

  keyUp() {
    document.addEventListener('keyup', (event) => {
      const keyElement = document.querySelector(`.${event.code}.active`);
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.toggleCase();
        this.isShiftPressed = false;
      }
      this.removeActiveState(keyElement);
    });
  }

  addActiveState(element) {
    element.classList.add('active');
  }

  removeActiveState(element) {
    element.classList.remove('active');
  }
}


window.addEventListener("DOMContentLoaded", function () {
  const keyboard = new Keyboard();
  keyboard.init();
});