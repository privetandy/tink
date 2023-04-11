const startBtn = document.querySelector('.product')
const TWORK= document.querySelector('.TWORK')
const screens = document.querySelectorAll('.screen')
const back = document.querySelector('.back')
const back2 = document.querySelector('.back2')
const backmain = document.querySelector('.backmain')
const open = document.getElementById('open');

const modal_cont = document.getElementById('modal_cont');
const modal = document.getElementById('modal')


startBtn.addEventListener('click', (event) => {
    event.preventDefault()
        if (event.target.classList.contains('product-btn')){
screens[0].classList.add('up') 
}

})

TWORK.addEventListener('click', (event) => {
   
screens[1].classList.add('up') 


})




back.addEventListener('click',(event) => {
    screens[0].classList.remove('up')
})

back2.addEventListener('click',(event) => {
    screens[1].classList.remove('up')
})

backmain.addEventListener('click',(event) => {
    screens[0].classList.remove('up')
    screens[1].classList.remove('up')
})


open.addEventListener('click', (event)=> {
    modal_cont.classList.add('show');
    modal.innerHTML = '<div><iframe width="860" height="615" src="https://www.youtube.com/embed/TR-cakkJ-4k?autoplay=1&controls=0"  frameborder="0"  allowfullscreen></iframe> </div>';

});

const close = document.getElementById('close'); 

close.addEventListener('click', (event)=> {
    modal_cont.classList.remove('show');
    modal.innerHTML = ' ';
    
    
});