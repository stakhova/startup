

// переміщення
// let corX, corY
// let square =  document.querySelectorAll(".enter-item")
// square.forEach(box=>{
//     box.onmousedown = function(e){
//
//         corX = e.screenX - box.getBoundingClientRect().x
//         corY = e.screenY - box.getBoundingClientRect().y
//         box.addEventListener("mousemove", move)
//     }
//     function move(e){
//         box.style.position = "fixed"
//         box.style.left = e.screenX - corX + "px"
//         box.style.top = e.screenY - corY + "px"
//     }
//     box.onmouseup = function (){
//         box.removeEventListener("mousemove", move)
//     }
// })

let activeBox=null
let square =  document.querySelectorAll(".enter-item")
square.forEach(box=>{
    box.addEventListener('dragstart',function (event){
        setTimeout(()=>{
            this.style.display='none'
        },0)
        activeBox=event.target

    })
    box.addEventListener('dragend',function (event){
        setTimeout(()=>{
            this.style.display='block'
        },0)
    })
})
//
let borders = document.querySelectorAll('.enter-item_br')
borders.forEach(br=>{
    console.log(br)
    br.addEventListener('dragenter',function (event){
        event.preventDefault()
        br.style.backgroundColor="grey"
    })
    br.addEventListener('dragover',function (event){
        event.preventDefault()
        // br.style.backgroundColor="grey"
    })
    br.addEventListener('dragleave',function (event){
        // event.preventDefault()
        br.style.backgroundColor="transparent"
    })
    br.addEventListener('drop',function (event){
        // event.preventDefault()
        br.appendChild(activeBox)
        check()
        console.log(event)
    })
})


function check(){
    let bingo=0
    square.forEach(box=>{
        console.log("ddddddsffsdfs"+box)
        if(!box.closest('.enter-item_br')) return false
        if(box.closest('.enter-item_br').getAttribute('data-color') == box.getAttribute('data-color')){
            console.log("bingo")
            bingo++
        }else return false
        if(bingo==4){
            document.querySelector('.enter-corr').style.visibility='visible'

        }
    })


}

// let corX,corY
// let square =  document.querySelectorAll(".enter-item")
//
// function drag(event){
//     event.preventDefault()
//     corX = event.pageX - square.getBoundingClientRect().x
//     corY = event.pageY - square.getBoundingClientRect().y
//     event.target.style.top = event.pageY + "px"
//     event.target.addEventListener('mousemove',move)
//     event.target.addEventListener('mouseup',function () {
//         event.target.removeEventListener('mousemove', move)
//     })
// }
// square.addEventListener('mousedown',drag)
//
// function move(event){
//     square.style.top = event.pageY - corX + "px"
//     square.style.left = event.pageX- corY + "px"
// }





$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:true
});


// animate block
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.2]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}




/// scroll top
let up = function () {
    let btnTop = document.querySelector('.scroll-top');
    let btnVisible = function () {
        if (window.scrollY >= 700) {
            btnTop.classList.add('scroll-visible');
        } else {
            btnTop.classList.remove('scroll-visible');
        }
    };
    let topscroll = function () {
        if(window.scrollY!=0) {
            setTimeout(function() {
                window.scrollTo(0,window.scrollY-100);
                topscroll();
            }, 10);
        }
    };
    // let topscroll = function () {
    //     let scrButHref = this.href.slice((this.href.indexOf('#')+1))
    //     let elemToScroll = document.getElementById(scrButHref).getBoundingClientRect().y
    //
    //     topscrollFinish(elemToScroll,scrButHref)
    //     console.log(scrButHref)
    // };
    //  function topscrollFinish (elemToScroll,scrButHref){
    //      if(Math.abs(pageYOffset - elemToScroll) > 100 ) {
    //          if (pageYOffset > elemToScroll) {
    //              setTimeout(function () {
    //                  window.scrollTo(0, window.scrollY - 100);
    //                  topscrollFinish();
    //              }, 10);
    //          }
    //      }else window.scrollTo(0, elemToScroll);
    // }

    window.addEventListener('scroll', btnVisible);
    btnTop.addEventListener('click', topscroll);
};
up();

let menuItem = document.querySelectorAll('.header-menu a')
function Scroll(){
    menuItem.forEach(item=>{
        console.log( item.href.slice((item.href.indexOf('#')+1)))
        menuItem.addEventListener("click", Scroll)
    })
}



// local storage userValue
function userValue(){
    let inputName = document.querySelector('#userName').value,
        inputEmail = document.querySelector('#userEmail').value,
        inputSubject= document.querySelector('#userSubject').value,
        inputCompany= document.querySelector('#userCompany').value,
        inputMess = document.querySelector('#userMess').value,
        userData = document.querySelector("#userData")

    localStorage.setItem('name', inputName);
    localStorage.setItem('email', inputEmail );

    let nameValue = localStorage.getItem("name"),
        emailValue = localStorage.getItem("email");
    console.log(nameValue);
    console.log(emailValue);
    console.log(localStorage);

    // window.localStorage.setItem('name', 'Obaseki Nosa');
    // window.localStorage.setItem('user', JSON.stringify(person));



    userData.innerHTML = "name:" + nameValue + "<br>email: " + emailValue  + "<br>subject: " + inputSubject + "<br>company: " + inputCompany + "<br>message:  " + inputMess
}


////// popup
//popup contact
 document.querySelector('.contact-row span').addEventListener('click', function(){
    document.querySelector('#popup-contact').classList.add("model-open");
     userValue()
});

// popup start
document.querySelector('.header-button span').addEventListener('click', function(){
    document.querySelector('#popup-start').classList.add("model-open");
});

//popup close
document.querySelectorAll('.model-close').forEach(function (item) {
    item.addEventListener('click', function(){
        document.querySelector('#popup-contact').classList.remove("model-open");
        document.querySelector('#popup-start').classList.remove("model-open");
    });
});
document.querySelectorAll('.model-bg').forEach(function (item) {
    item.addEventListener('click', function(){
        document.querySelector('#popup-start').classList.remove("model-open");
        document.querySelector('#popup-contact').classList.remove("model-open");
    });
});






// accordion

let acc = document.querySelectorAll(".blog-readmore");
console.log(acc.length)
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        console.log(this.previousElementSibling)
        console.log(acc)
        // acc.innerHTML='LESS'
        // this.classList.toggle("active");
        let textAcc = this.previousElementSibling;
        // if (acc[i].innerHTML == "Read more") {
        //     acc[i].innerHTML = "Read less";
        // } else {
        //     acc[i].innerHTML = "Read more";
        // }
        if (textAcc.style.overflowY === "initial") {
            acc[i].innerHTML = "READ MORE";
            textAcc.style.overflowY = "hidden";
            textAcc.style.height = "115px";
        } else {
            textAcc.style.overflowY = "initial";
            textAcc.style.height = "auto";
            acc[i].innerHTML = "READ LESS";
        }
    });
}



// // triple click
// let throttle = false;
// document.querySelector('.triple').addEventListener('click', function (evt) {
//     let o = this,
//         ot = this.textContent,
//         name = document.querySelector('.services-name')
//
//     if (!throttle && evt.detail === 3) {
//         name.textContent = 'Hack This Site!';
//         name.style.color="red"
//         name.style.fontWeight="bold"
//         throttle = true;
//         setTimeout(function () {
//             o.textContent = ot;
//             throttle = false;
//         }, 1000);
//     }
// });


let throttle = false;
document.querySelector('.triple').addEventListener('click', function (evt) {
    let o = this,
        ot = this.textContent,
        name = document.querySelectorAll('.services-name')

     if (!throttle && evt.detail === 3) {
         for (let i = 0; i < name.length; i++) {
             console.log(name)
                console.log(evt.target)
                name[0].textContent = 'Hello';
                name[1].textContent = 'My';
                name[2].textContent = 'Friend!';
                name[i].style.color = "#c0301c";
                name[i].style.fontWeight = "bold";
                throttle = true;
                setTimeout(function () {
                    o.textContent = ot;
                    throttle = false;
                }, 1000);
            }
    }
});


// let throttle = false;
// let acc = document.querySelectorAll(".blog-readmore");
// let i;
// console.log(acc.length)
// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         let textAcc = this.previousElementSibling;
//         if (textAcc.style.overflowY === "initial") {
//             textAcc.style.overflowY = "hidden";
//             textAcc.style.height = "115px";
//
//         } else {
//             textAcc.style.overflowY = "initial";
//             textAcc.style.height = "auto";
//
//         }
//     });
// }




// burger menu
let burger = document.querySelector('.burger span'),
    menu = document.querySelector('.header-menu')

document.querySelector('.burger').addEventListener('click', function(){
    burger.classList.toggle('burger-active')
    menu.classList.toggle("animate")
    if(burger.classList.contains('burger-active')){
        document.body.style.overflow = "hidden"
    } else{
        document.body.style.overflow = "auto"
    }
});
document.querySelectorAll('.header-menu li').forEach(item=>{
    item.addEventListener('click', function(){
        burger.classList.remove('burger-active')
        menu.classList.remove('animate')
        document.body.style.overflow = "auto"
    });
})





// let slide_left = document.getElementById('slide-left'),
//     slide_right = document.getElementById('slide-right'),
//     total_img = document.getElementsByClassName('team-item'),
//     idx = 0;
//
// slide_right.addEventListener('click', moveLeft);
// function moveLeft(){
//     slide_left.style.display = 'block';
//     total_img[idx].style.display = 'none';
//     total_img[++idx].style.display = 'block';
//     if (idx === total_img.length - 1) {
//         slide_right.style.display = 'none';
//     }
// }
//
// slide_left.addEventListener('click', moveRight);
// function moveRight(){
//     slide_right.style.display = 'block';
//     total_img[idx].style.display = 'none';
//     total_img[--idx].style.display = 'block';
//     if (idx === 0) {
//         slide_left.style.display = 'none';
//     }
// }
//

// filter image
let filterBox = document.querySelectorAll('.works-item');
let filter = document.querySelectorAll('.works-list li')
let filterlist = document.querySelector('.works-list')

let filterActive






if(localStorage.filter){
    filterActive = localStorage.filter
}else{
    filterActive= filterlist.firstElementChild

}
filterActive.classList.add('filter-active')
console.log(filterActive)

filter.forEach(function (item) {
    item.addEventListener('click', (event) => {
        filterActive.classList.remove('filter-active')
        filterActive = event.target
        event.target.classList.add('filter-active')
        filters()
    });
})

function filters() {
    console.log()
    // if (event.target.tagName !== 'LI') return false;
    let filterClass = filterActive.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
}
filters(filterActive)










// slider dots
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}
/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("client-citation");
    let dots = document.getElementsByClassName("client-drop");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" client-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " client-active";
}


// // drop elements
// let enter = document.querySelectorAll(".enter-item")
//
// enter.forEach(item =>{
//     item.addEventListener('mousedown',drag)
// })
// function drag(event){
//     event.preventDefault()
//     event.target.myParam = {
//         shiftX: event.pageX - event.target.getBoundingClientRect().x,
//         shiftY: event.pageY - event.target.getBoundingClientRect().y
//     }
//     event.target.style.top = event.pageY + "px"
//     event.target.addEventListener('mousemove',move)
//     event.target.addEventListener('mouseup',function () {
//         console.log(event.target.myParam.shiftX)
//         event.target.removeEventListener('mousemove', move)
//     })
// }


// let myParam = {}
function move(){
    console.log(event.target.myParam)
    console.log(event.target)
    event.target.style.top = event.pageY - event.target.myParam.shiftX+ "px"
    event.target.style.left = event.pageX- event.target.myParam.shiftY+ "px"
}








