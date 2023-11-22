import {
  iosVhFix,
} from './modules/utils.js';
import {
  initFooterAccordion,
} from './modules/footer.js';
import {
  initAsideAnimation,
} from './modules/aside.js';
import {
  initModal,
} from './modules/modal.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    initFooterAccordion();
    initAsideAnimation();
    initModal();
  } );
} );
