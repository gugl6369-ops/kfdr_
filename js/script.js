const cardList = document.querySelector(".our-work_card-list"),
      cards = document.querySelectorAll(".our-work_card"),
      separator = document.querySelectorAll(".header_separator"),
      reviews = document.querySelectorAll(".reviews_cart"),
      reviewsBlock = document.querySelector(".reviews_list"),
      reviewsBtn = document.getElementById("reviewsBtn"),
      reviewsSubtitle = document.querySelector(".reviews_subtitle-block"), 
      burgerBtn = document.querySelector('.header_burger'),
      menuTemplate = document.getElementById("template"),
      header = document.querySelector('.header'),
      body = document.querySelector('body');
      


let menuContent = menuTemplate.content;
let active = separator[0];
let openMenuBool = false;
let menu;
let menuNav;

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

function rollerReviews(){
    console.log('click');
    reviews.forEach(cat =>{
            if(cat.classList.contains("reviews_1")) {
                cat.classList.add("reviews_3"); 
                cat.classList.remove("reviews_1"); 
            }
            else if(cat.classList.contains("reviews_2")) {
                cat.classList.add("reviews_1"); 
                cat.classList.remove("reviews_2"); 
            }
            else if(cat.classList.contains("reviews_3")) {
                cat.classList.add("reviews_4"); 
                cat.classList.remove("reviews_3"); 
            }
            else if(cat.classList.contains("reviews_4")) {
                cat.classList.add("reviews_2");
                cat.classList.remove("reviews_4");
            }
        // 1 2 3 4
        // 3 1 4 2
        // 1 > 3
        // 3 > 4
        // 4 > 2
        // 2 > 1
    })
}

reviewsBlock.addEventListener( 'click', rollerReviews);

function structureReviews(){
    reviews.forEach(cat =>{
        for(let i = 1; i <= 4; i++){
            if(cat.classList.contains(`reviews_${i}`)){ cat.classList.remove(`reviews_${i}`)}
        }
        cat.classList.contains("reviews_1");
    })
    reviewsBtn.style.display = 'none';
    reviewsSubtitle.style.display = 'flex';
}

reviewsBtn.addEventListener('click', structureReviews);

burgerBtn.addEventListener('click', openMenu);



function openMenu(){
    
    if(!openMenuBool){
        openMenuBool = true; 
        console.log(menuContent);
        const menuCopy = menuContent.cloneNode(true);
        header.appendChild(menuCopy);
        menu = document.querySelector('.menu');
        body.style.overflow = "hidden";
        menuNav = document.querySelectorAll('.menu_subtitle');
        menuNav.forEach( btn =>{
            console.log(btn);
            btn.addEventListener('click', openMenu);   
        })
        
    }
   
    else{
        openMenuBool = false;
        header.removeChild(menu);
        body.style.overflow = "auto";
        menuNav.forEach( btn =>{
            btn.removeEventListener('click', openMenu);   
        })
    }
    console.log(openMenuBool);
    
    
}