
class keyboard {
  constructor() { }

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