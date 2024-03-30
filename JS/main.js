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

    // JavaScript to handle adding books to the wishlist
    $(document).ready(() => {
        $('.add-to-wishlist').click(function (event) {
            event.preventDefault();
            var bookId = $(this).data('book-id');
            addToWishlist(bookId);
        });

        function addToWishlist(bookId) {
            // Example: Send an AJAX request to add the book to the wishlist
            $.ajax({
                url: '/wishlist/add',
                type: 'POST',
                data: { bookId: bookId },
                success: function (response) {
                    alert('Book added to wishlist!');
                },
                error: function (xhr, status, error) {
                    console.error('Error adding book to wishlist:', error);
                }
            });
        }
    });
})

function profileMenu() {
    let subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu");
}

function genreMenu() {
    let genMenu = document.getElementById("genMenu")
    genMenu.classList.toggle("open-genre");
}