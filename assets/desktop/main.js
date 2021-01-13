import './../common/common.scss';
import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import AppComponent from 'c/loader';
import CloseButton from 'c/closeButton';


const appTemplate = createElement(`c-app`, { is: AppComponent });
const appTemplate2 = createElement(`c-app`, { is: CloseButton });

document.querySelector('#app').appendChild(appTemplate);
document.querySelector('#app').appendChild(appTemplate2);