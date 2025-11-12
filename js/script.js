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
            changeLang(lang);
            active == separator[1] ? changeLang(separator[0]) : changeLang(separator[1]);
        }
        else{
            lang.classList.remove('header_separator--active');
            if(lang == separator[1]) {
                active = separator[0];
                changeLang(separator[0]);
            }
            else{
                active = separator[1];
                changeLang(separator[1]);
            }
        }
    })
})

function changeLang(a){
    a.classList.toggle('header_separator--active');
}

function rollerReviews(){
    reviews.forEach( review =>{
        for (let i = 1; i <= reviews.length; i++){
            const classReviewList = review.className;
            if (classReviewList.endsWith(`${i.toString()}`)) {
                review.classList.replace(`reviews_${i}`, `reviews_${(i % reviews.length) + 1}`);
                break;
            }
        }
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
}
burgerBtn.addEventListener('click', openMenu);