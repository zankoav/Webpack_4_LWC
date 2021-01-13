// Version: 1.0

import { LightningElement, track } from 'lwc';
import './closeButton.scss';
import CLOSE_BUTTON from 'img/close-button.svg';


const ICONS = {
    closeButton: CLOSE_BUTTON
}

export default class CloseButton extends LightningElement {
    @track ICONS = ICONS;
}