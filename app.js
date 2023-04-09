const startBtn = document.querySelector('.product')
const startBtn2= document.querySelector('.product-business')
const screens = document.querySelectorAll('.screen')



startBtn.addEventListener('click', (event) => {
    event.preventDefault()
        if (event.target.classList.contains('product-btn')){
screens[0].classList.add('up') 
}

})

startBtn2.addEventListener('click', (event) => {
    event.preventDefault()
        if (event.target.classList.contains('product-business-btn')){
screens[1].classList.add('up') 
}

})




