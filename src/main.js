import Prism from 'prismjs';
import 'font-awesome/scss/font-awesome.scss';
import './css/style.scss';
require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images
require.context('./files', false, /\.(gz|json)$/); // Import all files

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

});
