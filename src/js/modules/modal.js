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

  function onModalClick( evt ) {
    if ( evt.target.classList.contains( 'modal--open' ) ) {
      closeModal();
    }
  }

  modalTriggerNode.addEventListener( 'click', openModal );
  modalCloseNode.addEventListener( 'click', closeModal );
  modalNode.addEventListener( 'click', onModalClick );
  document.addEventListener( 'keydown', onEscKeydown );
};

export {
  initModal
};
