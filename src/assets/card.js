// import '/src/assets/css/card.css';
// (document).ready(function(){
//     var zindex = 10;
//
//     (".card").click(function(e){
//         e.preventDefault();
//
//         var isShowing = false;
//
//         if ((this).hasClass("show")) {
//             isShowing = true
//         }
//
//         if ((".cards").hasClass("showing")) {
//             // a card is already in view
//             (".card.show")
//                 .removeClass("show");
//
//             if (isShowing) {
//                 // this card was showing - reset the grid
//                 (".cards")
//                     .removeClass("showing");
//             } else {
//                 // this card isn't showing - get in with it
//                 (this)
//                     .css({zIndex: zindex})
//                     .addClass("show");
//
//             }
//
//             zindex++;
//
//         } else {
//             // no cards in view
//             (".cards")
//                 .addClass("showing");
//             (this)
//                 .css({zIndex:zindex})
//                 .addClass("show");
//
//             zindex++;
//         }
//
//     });
// });