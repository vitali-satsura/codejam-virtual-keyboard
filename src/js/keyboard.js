
import {
  ROW1, ROW2, ROW3, ROW4, ROW5
} from './data';

export class Keyboard {
  constructor() {
    this.lang = '';
    this.isShiftPressed = false;
    this.caseState = 'lower';
  }

  // lang = '';
  // isShiftPressed = false;
  // caseState = 'lower';

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

  language(language) {
    if (localStorage.getItem('language')) {
      this.lang = localStorage.getItem('language');
    } else {
      localStorage.setItem('language', language);
      this.lang = lang;
    }
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

  mouseClick(keyElement, key) {
    keyElement.addEventListener('click', (event) => {
      textarea.focus();
      const text = keyElement.querySelector(':not(.hidden)').textContent;
      switch (key) {
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
              textarea.value.slice(textarea.selectionStart + 1, textarea.value.length);
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
          break;

        case 'ShiftLeft':
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
          textarea.selectionEnd -= textarea.length;
          break;

        case 'ArrowDown':
          break;

        case 'MetaLeft':
          break;

        default:
          textarea.value += text;
          break;
      }
    });
  }

  toggleCase() {
    if (!this.isShiftPressed) {
      const keyElements = document.querySelectorAll('.key');
      keyElements.forEach((keyElement) => {
        if (this.lang === 'eng') {
          if (keyElement.classList[1].includes('Key')) {
            const spanElements = keyElement.querySelectorAll(`.${this.lang}`);
            spanElements.forEach(element => {
              element.classList.toggle('hidden');
            });
          }
        } else {
          const keys = ['Backquote', 'BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];
          keys.forEach((value) => {
            if (keyElement.classList[1].includes('Key') || keyElement.classList.contains(value)) {
              const spanElements = keyElement.querySelectorAll(`.${this.lang}`);
              spanElements.forEach(element => {
                element.classList.toggle('hidden');
              });
            }
          });
        }
      });
    } else {
      const spanElements = document.querySelectorAll(`.${this.lang}`);
      spanElements.forEach(element => {
        element.classList.toggle('hidden');
      });
      this.caseState === 'upper' ? this.caseState = 'lower' : this.caseState = 'upper';
    }
  }

  changeLanguage() {
    const currentElements = keyboard.querySelectorAll(`.${this.lang}.${this.caseState}`);
    currentElements.forEach((element) => {
      element.classList.toggle('hidden');
    });

    if (this.lang === 'eng') {
      this.lang = 'rus';
      localStorage.setItem('language', 'rus');
    } else {
      this.lang = 'eng';
      localStorage.setItem('language', 'eng');
    }

    const hiddenElements = keyboard.querySelectorAll(`.${this.lang}.${this.caseState}`);
    hiddenElements.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }


}



