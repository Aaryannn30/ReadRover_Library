$(document).ready(() => {

    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    let navText = ["<i class='bx bxs-right-arrow-circle bx-flip-horizontal' ></i>", "<i class='bx bxs-right-arrow-circle bx-flip-vertical' ></i>"]

    $('#main-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText, // Adjust navigation icons as needed,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('.books-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 1,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 5   
            },
            1600: {
                items: 8
            }
        }
    })
})

function profileMenu() {
    let subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu");
}

function genreMenu() {
    let genMenu = document.getElementById("genMenu")
    genMenu.classList.toggle("open-genre");
}