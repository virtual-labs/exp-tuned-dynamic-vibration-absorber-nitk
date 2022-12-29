function runPage3() {
    background(255);
    console.log("hello");
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    fill(0);
    push();
    textSize(30);
    textFont("Comic Sans MS");
    text('Tuned Vibration Absorber',280, 50);


    textSize(16);
    text("CONTROLS", 750, 540);
    text("VARIABLES", 730, 130);
    pop();

    textSize(15);
    fill(250, 114, 43);
    strokeWeight(0);
   // text('ω1 = ' + spring1.w1.toFixed(4) + " rad/s", 310, 680);
   // text('ω2 = ' + spring1.w2.toFixed(4) + " rad/s", 480, 680);
  //  text('ω1m = ' + (Math.pow((spring1.x , 0.5)).toFixed(4) + " rad/s", 310, 720)
    
    // text('X2/Xst = ' + (abs(spring1.x1/(spring1.F0/spring1.k1))).toFixed(4) , 350, 695)
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
    magFac2.initialise();
    magFac2.draw();

    
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
