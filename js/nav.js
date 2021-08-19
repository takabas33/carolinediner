// var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
// var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
// jQuery( window ).on( 'scroll', function() {
//   if ( jQuery( this ).scrollTop() > navPos ) {
//     jQuery( 'body' ).css( 'padding-top', navHeight );
//     jQuery( '#global-nav' ).addClass( 'm_fixed' );
//   } else {
//     jQuery( 'body' ).css( 'padding-top', 0 );
//     jQuery( '#global-nav' ).removeClass( 'm_fixed' );
// //   }
// });




let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});



// ネオン
// https://dribbble.com/shots/2955075-Neon-Sign-in-CSS