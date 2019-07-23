import _ from 'lodash';
import wait from './assets/wait.png'
import printMe from './print.js';
import Data from './assets/data.xml';
import './style.css'

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = wait;
    element.appendChild(myIcon);

    var s = document.createElement('span')
    s.classList.add('iconfont','icon-account')
    element.appendChild(s)


    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    console.log(Data);
    return element;
}
  
document.body.appendChild(component());


if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }