import '../scss/style.scss';
import '../../node_modules/normalize.css/normalize.css';
import { Keyboard } from './keyboard';

window.addEventListener("DOMContentLoaded", function () {
  const keyboard = new Keyboard();
  keyboard.init();
});