// Swiper is a constructor to slide the content inside the particular container
var swiper = new Swiper(".slide-content", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    fade: 'true',
    grabCursor: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,

        },
        990: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
        1500: {
            slidesPerView: 5,
        },
        1600: {
            slidesPerView: 6,
        },
    },
});

var swiper = new Swiper(".slide-content1", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    fade: 'true',
    grabCursor: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,

        },
        990: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
        1500: {
            slidesPerView: 5,
        },
        1600: {
            slidesPerView: 6,
        },
    },
});



// Count down for expiration of product deal
var countDate = new Date("Feb 24, 2023 11:27:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("datetime").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s Left";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("datetime").innerHTML = "EXPIRED";
    }
}, 1000);

// End of Logic for count down


// Login for making navigation header responsive in different screens
const toggleBtn = document.querySelector('.bar');
const toggleIcon = document.querySelector('.bar i');
const drop_down = document.querySelector('.drop__down');
const vi = document.querySelector('#viewALL');

// $('[data-bs-toggle="tooltip"]').tooltip();
function viewALL(view){
    if(view.matches){
        vi.innerHTML = "<i class='fa fa-border-all'></i>"
    }
    else{
        vi.innerHTML = "View ALL"

    }
}

var media = window.matchMedia("(max-width:634px)");
viewALL(media)
media.addListener(viewALL)
toggleBtn.onclick = function () {
    drop_down.classList.toggle('open');
    const isOpen = drop_down.classList.contains('open')
    
    toggleIcon.classList = isOpen ? 'fa fa-xmark' : 'fa fa-bars'
}

viewALL();
