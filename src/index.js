import './style.scss';
import 'whatwg-fetch';

fetch('/api/hitCount', response => {
  return response.json();
}).then(payload => {
  document.write(`<h1>hit count: ${payload.hitCount}</h1>`);
});
