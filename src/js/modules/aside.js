const containerNode = document.querySelector( '.information--aside' );

const initAsideAnimation = () => {
  if ( !containerNode ) return;
  document.querySelectorAll( '.info-item' ).forEach( ( item ) => {
    item.addEventListener( 'mouseenter', ( evt ) => {
      containerNode.classList.add( 'is-hovered' );
      if ( evt.target === containerNode.children[ 0 ] ) {
        containerNode.style.setProperty( '--cover-position', 'left 50% center' );
      }
      if ( evt.target === containerNode.children[ 1 ] ) {
        containerNode.style.setProperty( '--cover-position', 'right center' );
      }
    } );
  } );
  containerNode.addEventListener( 'mouseleave', ( evt ) => {
    evt.target.style.setProperty( '--cover-position', 'left center' );
    evt.target.classList.remove( 'is-hovered' );
  } );
};

export {
  initAsideAnimation
};
