// $(document).ready(function(e) {
//      var width = $(document).width();

//      function goRight() {
//           $(".car").animate({
//           left: width
//         }, 5000, function() {
//            setTimeout(goLeft, 50);
//           });
//         }
//         function goLeft() {
//             $(".car").animate({
//             left: 0
//           }, 5000, function() {
//              setTimeout(goRight, 50);
//           });
//         }

//         setTimeout(goRight, 50);
//     });
   
// $(document).ready(function(e) {
//      var width = $(document).width();

//      function goDown() {
//           $(".cop").animate({
//           top: width
//         }, 4000, function() {
//            setTimeout(goUp, 100);
//           });
//         }
//         function goUp() {
//             $(".cop").animate({
//             top: -50
//           }, 5000, function() {
//              setTimeout(goDown, 50);
//           });
//         }

//         setTimeout(goUp, 50);
//     });
    

    
// $(document).ready(function(){
//     animateDiv();
    
// });

// function makeNewPosition(){
    
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;
    
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
    
// }

// function animateDiv(){
//     var newq = makeNewPosition();
//     //var oldq = $('.tank').offset();
//     var speed = 10000;
    
//     $('.tank').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv();        
//     });
    
// };



// $(document).ready(function(e) {
//      var width = $(document).width();

//      function goRight() {
//           $(".motorcycle").animate({
//           bottom: '+=50', right: '+=50'
//         }, 5000, function() {
//            setTimeout(goLeft, 50);
//           });
//         }
//         function goLeft() {
//             $(".motorcycle").animate({
//             left: '+=50', bottom: '+=50'
//           }, 5000, function() {
//              setTimeout(goRight, 50);
//           });
//         }

//         setTimeout(goRight, 50);
//     });