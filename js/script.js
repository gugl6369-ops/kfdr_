const cardList = document.querySelector(".our-work_card-list"),
      cards = document.querySelectorAll(".our-work_card"),
      separator = document.querySelectorAll(".header_separator");
let active = separator[0];

cards.forEach( card => {
    const btns = card.querySelectorAll(".our-work_scroll-title");
    btns.forEach( (btn, index) =>{
        btn.addEventListener('click', ()  => {
            cardList.style.transform = `translateX(${-index * 100}%)`;
            
        })
    })
})


separator.forEach( (lang) => {
    
    lang.addEventListener('click', () =>{
        if (lang != active) {
            active = lang;
            activeLang(lang);
            if(active == separator[1]) {
                deActiveLang(separator[0]);
            }
            else{
                deActiveLang(separator[1]);
            }
        }
        else{
            lang.classList.remove('header_separator--active');
            if(lang == separator[1]) {
                active = separator[0];
                activeLang(separator[0]);
            }
            else{
                active = separator[1];
                activeLang(separator[1]);
            }
        }
    })
})

function activeLang(a){
    a.classList.add('header_separator--active');
}
function deActiveLang(a){
    a.classList.remove('header_separator--active');
}