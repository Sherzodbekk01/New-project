const imgList = document.getElementById('marketList');
const scrollRight = document.getElementById('market-scroll-right');
const scrollLeft = document.getElementById('market-scroll-left');

if (scrollLeft !== null || scrollRight !== null) {
  scrollRight.addEventListener('click', () => {
    imgList.scrollBy(560, 0);
  });

  scrollLeft.addEventListener('click', () => {
    imgList.scrollBy(-560, 0);
  });
}