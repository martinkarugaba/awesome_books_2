import { DateTime } from './luxon.js';

const date = document.querySelector('.date');

let now = DateTime.now();
now = now.toLocaleString(DateTime.DATETIME_MED);

date.innerText = now;