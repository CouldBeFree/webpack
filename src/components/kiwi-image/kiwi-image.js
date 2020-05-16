import img from './photo.jpg';
import './kiwi-image.scss';

class KiwiImage {
  render() {
    const image = document.createElement('img');
    image.src = img;
    image.classList.add('kiwi-image');
    const body = document.querySelector('body');
    body.appendChild(image);
  }
}

export default KiwiImage;
