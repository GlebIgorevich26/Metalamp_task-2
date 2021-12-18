let slyderContainer = document.querySelector('#listItems');
let rectangleImg = document.querySelectorAll('#rectangle');



const slyderDir = ['room', 'room1', 'room3'];
const urlImage = "url(./img/"
const pngImage = ".png)";

slyderContainer.style.backgroundImage = urlImage + slyderDir[0] + pngImage;
document.querySelector('.next__img').addEventListener('click', nextclickButton);
document.querySelector('.prev__img').addEventListener('click', prevclickButton);
let count = 0;


function nextclickButton(){
  document.querySelector('.prev__img').disabled = false;
  count++;
  if (count < slyderDir.length) {
    document.querySelector('#listItems').style.backgroundImage = urlImage + slyderDir[count] + pngImage;
    rectangleImg[count].style.backgroundColor = 'white';
  }
  if (count == slyderDir.length) {
    document.querySelector('.next__img').disabled = true;
  }
}
console.log(count);

function prevclickButton(){
  document.querySelector('.next__img').disabled = false;

  count--
  if (count > 0) {
    document.querySelector('#listItems').style.backgroundImage = urlImage + slyderDir[count] + pngImage;
    rectangleImg[count].style.backgroundColor = '';
  }
  else if (count == 0) {
    document.querySelector('.prev__img').disabled = true;
  }
}