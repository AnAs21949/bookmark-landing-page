
const showIconBtn1 = document.querySelector(".s-1");
const showIconBtn2 = document.querySelector(".s-2");
const showIconBtn3 = document.querySelector(".s-3");
const showIconBtn4 = document.querySelector(".s-4");

const hideIconBtn1 = document.querySelector(".h-1");
const hideIconBtn2 = document.querySelector(".h-2");
const hideIconBtn3 = document.querySelector(".h-3");
const hideIconBtn4 = document.querySelector(".h-4");

const answer1 = document.querySelector(".a-1");
const answer2 = document.querySelector(".a-2");
const answer3 = document.querySelector(".a-3");
const answer4 = document.querySelector(".a-4");

showIconBtn1.addEventListener("click",function(){
    showIconBtn1.classList.add("hide");
    hideIconBtn1.classList.add("show");
    answer1.classList.add("show-answer");
})
hideIconBtn1.addEventListener("click",function(){
    showIconBtn1.classList.remove("hide");
    hideIconBtn1.classList.remove("show");
    answer1.classList.remove("show-answer");
})



showIconBtn2.addEventListener("click",function(){
    showIconBtn2.classList.add("hide");
    hideIconBtn2.classList.add("show");
    answer2.classList.add("show-answer");
})
hideIconBtn2.addEventListener("click",function(){
    showIconBtn2.classList.remove("hide");
    hideIconBtn2.classList.remove("show");
    answer2.classList.remove("show-answer");
})


showIconBtn3.addEventListener("click",function(){
    showIconBtn3.classList.add("hide");
    hideIconBtn3.classList.add("show");
    answer3.classList.add("show-answer");
})
hideIconBtn3.addEventListener("click",function(){
    showIconBtn3.classList.remove("hide");
    hideIconBtn3.classList.remove("show");
    answer3.classList.remove("show-answer");
})



showIconBtn4.addEventListener("click",function(){
    showIconBtn4.classList.add("hide");
    hideIconBtn4.classList.add("show");
    answer4.classList.add("show-answer");
})
hideIconBtn4.addEventListener("click",function(){
    showIconBtn4.classList.remove("hide");
    hideIconBtn4.classList.remove("show");
    answer4.classList.remove("show-answer");
})







let bookmarking = document.querySelector('#bookmarking'),
    searching = document.querySelector('#searching'),
    sharing = document.querySelector('#sharing');
    tabs = document.querySelector('.feature-tabs');
let bookmarkContent = document.querySelector('.section-3');
bookmarking.classList.add('current');

tabs.addEventListener('click', function() {
    let searchClick = searching.contains(event.target);
    console.log(event.target);
    let shareClick = sharing.contains(event.target);
    let bookClick = bookmarking.contains(event.target);
    if(!searchClick) {
        searching.classList.remove('current');
    }
    if(!shareClick){
        sharing.classList.remove('current');
    }
    if(!bookClick){
        bookmarking.classList.remove('current');
    }
})



bookmarking.addEventListener('click', function(e) {
    e.preventDefault();
    if(bookmarking.contains(e.target)){
        bookmarking.classList.add('current');
    }
    bookmarkContent.innerHTML =
    `<div class="figure-1">
    <div class="image">
        <img src="./images/illustration-features-tab-1.svg" alt=""></img>
        <div class="blue"></div>
    </div>
    </div>
    <div class="hero">
        <div class="hero-container">
            <p class="title">Bookmark in one click</p>
            <p class="motivation">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.  </p>
            <button class="blue">More Info</button>
        </div>
    </div>`
        
});


searching.addEventListener('click', function(e) {
    e.preventDefault();
    if(searching.contains(e.target)){
        searching.classList.add('current');
    }
    bookmarkContent.innerHTML =
    `<div class="figure-1">
    <div class="image">
        <img src="./images/illustration-features-tab-2.svg" alt=""></img>
        <div class="blue"></div>
    </div>
    </div>
    <div class="hero">
        <div class="hero-container">
            <p class="title">Intelligent search</p>
            <p class="motivation">Our powerful search feature will help you find saved sites in no time at all, No need to trawl through all your bookmarks.</p>
            <button class="blue">More Info</button>
        </div>
    </div>`     
});




sharing.addEventListener('click', function(e) {
    e.preventDefault();
    if(sharing.contains(e.target)){
        sharing.classList.add('current');
    }

    bookmarkContent.innerHTML =
    `<div class="figure-1">
    <div class="image">
        <img src="./images/illustration-features-tab-3.svg" alt=""></img>
        <div class="blue"></div>
    </div>
    </div>
    <div class="hero">
        <div class="hero-container">
            <p class="title">Share your Bookmarks</p>
            <p class="motivation">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button</p>
            <button class="blue">More Info</button>
        </div>
    </div>`
        
});


const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const linksContainer = document.querySelector(".links");

openBtn.addEventListener("click", function(){
    linksContainer.classList.add("show")
    openBtn.classList.add("hide");
    closeBtn.classList.add("show");
})
closeBtn.addEventListener("click", function(){
    linksContainer.classList.remove("show");
    openBtn.classList.remove("hide");
    closeBtn.classList.remove("show");
})



    
    
    
    function validation(){
    var input = document.querySelector(".input");
    // var text = document.getElementById("text");
    const error = document.querySelector(".error")
    var pattern =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value.match(pattern)){
        // form.classList.add("valid");
        text.classList.remove("show")
        error.classList.remove("show");
        input.style.boxShadow = 'none';

    }else {
        error.classList.add("show");
        text.classList.add("show")
        input.style.boxShadow = 'hsl(0, 94%, 66%) 0px 1px 4px, hsl(0, 94%, 66%) 0px 0px 0px 3px';
    }
}




