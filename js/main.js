$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    infinity: true,
    lazyLoad: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1,

        },
        1000: {
            items: 1,

        }
    }
})

function menu() {
    document.getElementById("menu").classList.toggle("d-block");
}