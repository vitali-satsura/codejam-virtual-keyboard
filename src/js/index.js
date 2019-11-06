import '../scss/style.scss';
import 'normalize.css/normalize.css';
import Keyboard from './keyboard';

window.addEventListener("DOMContentLoaded", () => {
  const keyboard = new Keyboard();
  keyboard.init();
});