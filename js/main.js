(() => {
  const refs = {

    openModalBtn2: document.querySelector('[data-modal-open2]'),
    closeModalBtn2: document.querySelector('[data-modal-close2]'),
    modal2: document.querySelector('[data-modal2]'),

    openModalBtn3: document.querySelector('[data-modal-open3]'),
    closeModalBtn3: document.querySelector('[data-modal-close3]'),
    modal3: document.querySelector('[data-modal3]'),

     openModalBtn4: document.querySelector('[data-modal-open4]'),
    closeModalBtn4: document.querySelector('[data-modal-close4]'),
    modal4: document.querySelector('[data-modal4]'),

    openModalBtn5: document.querySelector('[data-modal-open5]'),
    closeModalBtn5: document.querySelector('[data-modal-close5]'),
    modal5: document.querySelector('[data-modal5]'),

    openModalBtn6: document.querySelector('[data-modal-open6]'),
    closeModalBtn6: document.querySelector('[data-modal-close6]'),
    modal6: document.querySelector('[data-modal6]'),

    openModalBtn7: document.querySelector('[data-modal-open7]'),
    closeModalBtn7: document.querySelector('[data-modal-close7]'),
    modal7: document.querySelector('[data-modal7]'),
  };

  refs.openModalBtn2.addEventListener('click', toggleModal2);
  refs.closeModalBtn2.addEventListener('click', toggleModal2);

  refs.openModalBtn3.addEventListener('click', toggleModal3);
  refs.closeModalBtn3.addEventListener('click', toggleModal3);

   refs.openModalBtn4.addEventListener('click', toggleModal4);
  refs.closeModalBtn4.addEventListener('click', toggleModal4);

  refs.openModalBtn5.addEventListener('click', toggleModal5);
  refs.closeModalBtn5.addEventListener('click', toggleModal5);

   refs.openModalBtn6.addEventListener('click', toggleModal6);
  refs.closeModalBtn6.addEventListener('click', toggleModal6);

     refs.openModalBtn7.addEventListener('click', toggleModal7);
  refs.closeModalBtn7.addEventListener('click', toggleModal7);
  
  function toggleModal2() {
    refs.modal2.classList.toggle('is-hidden2');
  }

  function toggleModal3() {
    refs.modal3.classList.toggle('is-hidden3');
  }

   function toggleModal4() {
    refs.modal4.classList.toggle('is-hidden4');
  }

   function toggleModal5() {
    refs.modal5.classList.toggle('is-hidden5');
  }

   function toggleModal6() {
    refs.modal6.classList.toggle('is-hidden6');
  }

  function toggleModal7() {
    refs.modal7.classList.toggle('is-hidden7');
  }

})();