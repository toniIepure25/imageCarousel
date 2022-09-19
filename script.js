const images = document.querySelectorAll("#images");

console.log(images);

// let poz = 0;
// setInterval(() => {
//   poz -= 10;
//   for (let i = 0; i < images.length; ++i)
//     images[i].style.transform = `translateY(${poz}px)`;
// }, 20);

let poz = 0;
let cnt = 1;
setInterval(() => {
  poz -= 604;
  cnt++;
  for (let i = 0; i < images.length; ++i)
    images[i].style.transform = `translateY(${poz}px)`;
  if (cnt > images.length) {
    poz += cnt * 604 - 604;
    for (let i = 0; i < images.length; ++i)
      images[i].style.transform = `translateY(${poz}px)`;
    cnt = 1;
  }
}, 3000);
