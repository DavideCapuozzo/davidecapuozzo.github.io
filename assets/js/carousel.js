
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        perPage: 3,
        rewind : true,
        type: 'loop',
        gap: "10px",
        breakpoints: {
            1200: { perPage: 2},
            640 : { perPage: 1},
        },
      } );
      
    splide.mount();
} );