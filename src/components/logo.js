import logoImage from '../assets/img/logo.png'
import '../css/logo.css'

export const logo = () => {
  const img = document.createElement('img');
  img.src = logoImage;
  document.body.prepend(img);
}