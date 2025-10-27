const cardList = document.querySelector(".our-work_card-list");
const cards = document.querySelectorAll(".our-work_card");



cards.forEach( card => {
    const btns = card.querySelectorAll(".our-work_scroll-title");
    btns.forEach( (btn, index) =>{
        btn.addEventListener('click', ()  => {
            cardList.style.transform = `translateX(${-index * 100}%)`;
            
        })
    })
})

