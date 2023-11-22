const containerNode = document.querySelector( '.information--footer' );

const initFooterAccordion = () => {
  if ( !containerNode ) return;

  containerNode.addEventListener( 'click', ( evt ) => {
    if ( evt.target.closest( '.info-item__title button' ) && window.matchMedia( '(max-width: 743px)' ).matches ) {
      evt.target.closest( '.info-item' ).classList.toggle( 'info-item--open' );
    }
  } );
};

export {
  initFooterAccordion
};
