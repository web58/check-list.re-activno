const modalNode = document.querySelector( '.modal' );
const modalTriggerNode = document.querySelector( '.action__btn' );
const modalCloseNode = document.querySelector( '.modal__close' );

const initModal = () => {
  if ( !modalTriggerNode || !modalNode || !modalCloseNode ) return;

  function onEscKeydown( evt ) {
    if ( evt.key === 'Escape' ) {
      closeModal();
    }
  }

  function closeModal() {
    document.documentElement.style.overflow = '';
    modalNode.classList.remove( 'modal--open' );
  }

  function openModal() {
    document.documentElement.style.overflow = 'hidden';
    modalNode.classList.add( 'modal--open' );
  }

  modalTriggerNode.addEventListener( 'click', openModal );
  modalCloseNode.addEventListener( 'click', closeModal );
  document.addEventListener( 'keydown', onEscKeydown );
};

export {
  initModal
};
