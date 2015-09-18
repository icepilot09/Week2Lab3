/* global cy */
$(document).ready(function() {
   var width = $(document).width();
   var height = $(document).height();
   var vid = 0;

   $('#btnAddCopCar').click(function() {
       var div = $('<div class="CopCar"></div>').attr('id', 'v'+ vid);
       $(document.body).append(div);
       var v = new CopCar('#v'+vid);
       function randomSpawnPoint(){
            var x = Math.floor((Math.random() * width) + 1);
            var y = Math.floor((Math.random() * height) + 1);
            $( "#v" +vid ).css({
                "left":x + "px",
                "top":y + "px",  
            })
            }
       randomSpawnPoint();
       v.move();
       vid++

   });
   
   $('#btnAddCar').click(function() {
       var div = $('<div class="Car"></div>').attr('id', 'v'+ vid);
       $(document.body).append(div);
       var c = new Car('#v'+vid);
       function randomSpawnPoint(){
            var x = Math.floor((Math.random() * width) + 1);
            var y = Math.floor((Math.random() * height) + 1);
            $( "#v" +vid ).css({
                "left":x + "px",
                "top":y + "px",  
            })
            }
       randomSpawnPoint();      
       c.move();
       vid++;
   });
   
   $('#btnmotorCycle').click(function() {
       var div = $('<div class="Motorcycle"></div>').attr('id', 'v'+ vid);
       $(document.body).append(div);
       var m = new Motorcycle('#v'+vid);
       function collisionDamage(){

       }
       function randomSpawnPoint(){
            var x = Math.floor((Math.random() * width) + 1);
            var y = Math.floor((Math.random() * height) + 1);
            $( "#v" +vid ).css({
                "left":x + "px",
                "top":y + "px",  
            })
            }
       collisionDamage();
       randomSpawnPoint();       
       m.move();
       vid++;

   });
   
   $('#btnTank').click(function() {
       var div = $('<div class="Tank"></div>').attr('id', 'v'+ vid);
       $(document.body).append(div);
       var t = new Tank('#v'+vid);
       function randomSpawnPoint(){
            var x = Math.floor((Math.random() * width) + 1);
            var y = Math.floor((Math.random() * height) + 1);
            $( "#v" +vid ).css({
                "left":x + "px",
                "top":y + "px",  
            })
            }
       randomSpawnPoint();
       t.move();
       vid++;
   });
   
   function Vehicle(divid){
       this.tolerance = 1;
       this.divid = '#' + divid;
       this.speed = 5000;
   }
   Vehicle.prototype.moveRight = function() {
       $(this.divid).animate({
           left: width}, 
           { duration: this.speed, queue: false,
           complete: this.moveLeft.bind(this)}
       );
   };
   Vehicle.prototype.moveLeft = function() {
       
       $(this.divid).animate({
           left: 0}, 
           { duration: this.speed, queue: false,
           complete: this.moveRight.bind(this)}
       );
   }
   Vehicle.prototype.moveDown = function() {
       
       $(this.divid).animate({
           top: height}, 
           { duration: this.speed, queue: false, 
           complete: this.moveUp.bind(this)}
       );
   }
   Vehicle.prototype.moveUp = function() {
       
       $(this.divid).animate({
           top: 0}, { 
               duration: this.speed, 
               queue: false, 
               complete: this.moveDown.bind(this)
           }
       );
   }
   Vehicle.prototype.move = function (direction) {
       this.moveRight();
       this.moveDown();
   }
       
   Vehicle.prototype.remove = function () {

   }

   function Car(vid) {
       this.tolerance = 2;
       this.speed = 3000;
       this.divid = vid;
       this.move = function() {
           this.moveRight();
       }
   }
   Car.prototype = Vehicle.prototype;

   function CopCar(vid) {
       this.tolerance = 5;
       this.speed = 2000;
       this.divid = vid;
       this.move = function() {
           this.moveDown();
       }
   }
   
   CopCar.prototype = Vehicle.prototype;
   
   function Motorcycle(vid) {
       this.tolerance = 1;
       this.speed = 1500;
       this.divid = vid;
   }
   
   Motorcycle.prototype = Vehicle.prototype;
   
   function Tank(vid) {
       this.tolerance = 10;
       this.speed =6000;
       this.divid = vid;
       this.move = function () {
           this.moveRight();
       }
   }
   
   Tank.prototype = Vehicle.prototype;
   
});