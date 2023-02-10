function runPage3() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    fill(0);
    push();
    textSize(30);
    textFont("Comic Sans MS");
    text('Tuned Dynamic Vibration Absorber',200, 50);

    textSize(16);
    text("CONTROLS", 750, 540);
    text("VARIABLES", 730, 130);
    pop();

 
   // text('ω1 = ' + spring1.w1.toFixed(4) + " rad/s", 310, 680);
   // text('ω2 = ' + spring1.w2.toFixed(4) + " rad/s", 480, 680);
  //  text('ω1m = ' + (Math.pow((spring1.x , 0.5)).toFixed(4) + " rad/s", 310, 720)
    
    // text('X2/Xst = ' + (abs(spring1.x1/(spring1.F0/spring1.k1))).toFixed(4) , 350, 695)
    let sum  = 40
    textSize(21)
    text('Legend' , 490 , 170+sum)

    stroke('red');
   // text("Ω1" , 70+ 100*spring1.om1 +50, 450+10);
    strokeWeight(10);
    stroke('blue');
    point(70+ 100*spring1.om1 +50, 450+10);
    strokeWeight(10);
    stroke('green');
    point(70+ 100*spring1.om2+50 , 440);
    strokeWeight(10);
    stroke('red');
    point(120 +  spring1.w1*100+50 , 460);
 

    let sub = 60;
    strokeWeight(1.0);
    line(500-sub, 200+sum-10, 510-sub, 200+sum)
    stroke('black');
    textSize(16);
    text('Frequency response curve ' , 520-sub , 200+sum);
    text('with the absorber' , 520-sub , 220+sum)
    strokeWeight(0.5); 

    stroke('black');
    strokeWeight(1);
    line(500-sub, 230+sum-10, 510-sub, 230+sum)
    textSize(16);
    text('Frequency response curve' , 520-sub , 240+sum);
    text('wihtout the absorber' , 520-sub , 260+sum);
    textSize(10);
  //  fill(250, 114, 43);
    strokeWeight(0);

    stroke('red');
    strokeWeight(10)
    point(450 ,275+sum)
    textSize(16);
    strokeWeight(0);
    stroke('black');
    text('ω1' , 470 , 278+sum);

    strokeWeight(0);

    stroke('blue');
    strokeWeight(10)
    point(450 ,295+sum)
    textSize(16);
    strokeWeight(0);
    stroke('black');
    text('Ω1' , 470 , 298+sum);
    strokeWeight(0);

    stroke('green');
    strokeWeight(10)
    point(450 ,315+sum)
    textSize(16);
    strokeWeight(0);
    stroke('black');
    text('Ω2' , 470 , 318+sum);
    strokeWeight(0);

    




   // stroke(0,0,0)
//    text("Ω2" , 70+100*spring1.om2+50 , 440); //add blue colour
 //   text("ω1" , 120 +  spring1.w1*100+50 , 480); //add green colour
  // remove text near the points, let the colour and what it represent be in the legend
  // int he graph only colours should be there
    textSize(16);
    textFont("Comic Sans MS")
    fill(250, 114, 43);
    text('X2 = ' + (abs(spring1.x2)).toFixed(4) , 100, 695)
    text('Xst = ' + ((spring1.F0/spring1.k1)).toFixed(4) , 100, 720)

    strokeWeight(0.5);   
    line(0, 650, 680, 650)
    line(300,650,300,750) 
    spring1.initialise(F0.inp,w.inp,k1.inp,m1.inp,k2.inp,m2.inp);
    spring1.update(t, factor);
    //spring1.show(0, 1, 0);

    magFac1.initialise();
    magFac1.draw();
   // magFac3.initialise();
   // magFac3.draw();
 //   magFac2.initialise();
  //  magFac2.draw();
    magFac4.initialise();
    magFac4.draw();

    
    stroke(255);
    fill(255);
    rect(30, 125, 550, 55);
    button5.draw()
    
    F0.draw();
    w.draw();
    k1.draw();

    m1.draw();
    k2.draw();
    m2.draw();
    t = t+dt;
    //clear.mousePressed(clearMe);
}
