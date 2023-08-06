'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const button = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal')
btnsOpenModal.forEach((btn, index) => {
  console.log(btnsOpenModal[index].textContent);
  btn.addEventListener('click', function(){
    console.log(`${index+1} Button Clicked`);
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  });
});
const closemodal = function(){
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
button.addEventListener('click', closemodal)
overlay.addEventListener('click', closemodal)

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closemodal()
  }
});
