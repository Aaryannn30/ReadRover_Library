$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })
<<<<<<< HEAD
=======

    $('#main-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // Adjust navigation icons as needed,
        autoplay: true,
        autoplayHoverPause: true
    })

// JavaScript to handle adding books to the wishlist
$(document).ready(() => {
    $('.add-to-wishlist').click(function(event) {
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
            success: function(response) {
                alert('Book added to wishlist!');
            },
            error: function(xhr, status, error) {
                console.error('Error adding book to wishlist:', error);
            }
        });
    }
});
>>>>>>> ee168b24e4054bfb03812a3fa2a8a9d3ab7801a2
})

