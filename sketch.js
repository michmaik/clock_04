function setup() {
  createCanvas (600,600)
  angleMode(DEGREES)
}

function draw() {
   background (0)
   translate (width/2,height/2)
   
     for (var r = 1; r <= 12; r++) {
        push();
        rotate(r * 30);
        fill(248,244,255);
        noStroke();
        rect (135,0,10,10);
        pop();
    }

   // hours 
   
   push();
   if (hour()>12){
     var h = hour()-12
   }else{
     h= hour()
   }
   
  rotate (h*30);
  fill(244,0,161)
  noStroke();
  rect(0, -160, 50, 50);
  pop();
   
   //minutes
   
   push();
   rotate ((minute()*6));
   fill (255,255,0);
   noStroke();
   rect(0, -150, 20, 20);
   pop();
   
   
   //second
   
	push();
	rotate((second())*6);
	fill(	102,255,102);
	noStroke();
	rect(0, -145, 10, 10);
	pop();
      fill(255)
  text(hour(),width/2,height/3)
}