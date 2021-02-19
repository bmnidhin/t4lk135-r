
let pointer = 0;
// function playIT(url,cover,title) {
//   localStorage.setItem('url',url),
//   localStorage.setItem('cover',cover),
//   localStorage.setItem('title',title)
// }
let play = {
    url:localStorage.getItem('url'),
    cover:localStorage.getItem('cover'),
    title:localStorage.getItem('title')
  }

  export {play}; // a list of exported variables