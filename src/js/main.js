import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import burger from "./modules/burger";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import scrolling from "./modules/scrolling";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  new WOW().init();
  
  modals();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn', 3000);
  sliders('.main-slider-item', 'vertical', '', '', 3000);
  forms();
  burger('.burger-menu', '.burger');
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
  pictureSize('.sizes-block');
  accordion('.accordion-heading');
  scrolling('.pageup');
});