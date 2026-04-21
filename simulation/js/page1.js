function runPage1() {
    background(255);
    // image(bg, 0, 0)
    
    stroke(0);
    var sketchCanvas = createCanvas(850, 500);
    sketchCanvas.parent("canvas-container");

    fill(0);
    push();
    textSize(30);
    textFont("Nunito");
    // text('Tuned Dynamic Vibration Absorber',200, 50);
    //text('Forced Vibration with rotating unbalance' , 200 , 80);

    textSize(16);
    // text("CONTROLS", 750, 540);
    // text("VARIABLES", 730, 130);
    pop();

    push();
    // stroke(0, 100);

    // for (let i = 20; i < 591; i++) {
    //     point(i, 480);
    //     i += 2;
    // }

    // for (let i = 480; i < 570; i++) {
    //     point(300, i);
    //     i += 2;
    // }
    pop();
    textFont("Nunito");
    spring1.initialise(F0,w,m1,k1,m2 , k2 );
    spring1.update(t, factor);
    spring1.show(0, 1, 0);
    // text("m1" , 450 , 100);
    // text("k1" , 650+20 , 280 );
    // text("k2" , 650+20 , 400 );
    // text("m1" , 450 , 100+180 );
    // text("m2" , 450 ,250 +150);

    position_graph1.update(spring1.y1);
    position_graph1.draw(255, 0,0)

    position_graph2.update(spring1.y2);
    position_graph2.draw(255, 0, 0)

    position_graph3.update(spring1.y3);
    position_graph3.draw(255, 0,0)

    // strokeWeight(0)

    text('Machine with  an absorber' , 450 , 180);
    text('Machine without an absorber' , 450 , 20);

    textSize(16);
    textFont("nunito")
    fill(250, 114, 43);
    
    // text('ω1 = ' + spring1.w1.toFixed(4) + " rad/s", 50, 690);
    // text('ω2 = ' + spring1.w2.toFixed(4) + " rad/s", 50, 720);
    // text('ω/ω2 = ' + (spring1.w/spring1.w2).toFixed(4) + " rad/s", 310, 720)
    // text('ω/ω1 = ' + (spring1.w/spring1.w1).toFixed(4) + " rad/s", 310, 690)
    // text('X1 = ' + abs((spring1.x1)).toFixed(4) + "", 500, 690)
    // text('X2 = ' + abs((spring1.x2)).toFixed(4) + "", 500, 720)

    document.querySelector("#w1").textContent =+ spring1.w1.toFixed(4) + " rad/s";
    document.querySelector("#w2").textContent =+ spring1.w2.toFixed(4) + " rad/s";
    document.querySelector("#ww1").textContent =+ (spring1.w/spring1.w2).toFixed(4) + " rad/s";
    document.querySelector("#ww2").textContent =+(spring1.w/spring1.w1).toFixed(4)+ " rad/s";
    document.querySelector("#x1").textContent =+ abs((spring1.x1)).toFixed(4) ;
    document.querySelector("#x2").textContent =+ abs((spring1.x2)).toFixed(4) ;

   // text('X1/Xst = ' +  (abs(spring1.x1/(spring1.F0/spring1.k1))).toFixed(4) , 40, 720)
   // text('X2/Xst = ' + (spring1.w/spring1.w1).toFixed(4) + " rad/s", 310, 690)
    
    strokeWeight(0);   
    // line(0, 650, 680, 650)
    // line(300,650,300,750) 
    $('#p1, #p2, #p3,#p4,#p5,#p6').each(function() {
      // Perform actions on each element
      $(this).css('display', 'block');

  });
  $('#p7, #p8').each(function() {
    // Perform actions on each element
    $(this).css('display', 'none');

});
  //  line (spring1.masscoordinates[0]+10, spring1.masscoordinates[1]+10, position_graph1.graphend[0]+10, position_graph1.graphend[1]+10)
   // line (spring1.masscoordinates[2]+10, spring1.masscoordinates[3]+10, position_graph2.graphend[0]+10, position_graph2.graphend[1]+10)

    //text('η = ' + (slider_ang_freq.inp / spring1.wn).toFixed(4), 310, 535);
    //text('z = ' + z.inp.toFixed(4), 310, 550);
    fill(0,0,0)
    textSize(20);
    // text("Undamped Tuned Vibration Absorber", 115, 150);

  //   F0.draw();
  //   w.draw();
  // //  mu.draw();
  //   m1.draw();
  //   k1.draw();
  //   m2.draw();
  //   k2.draw();
  //   button1.draw();
  //   button2.draw();
  F0 = $("#FoSpinner").spinner("value");
  w = $("#wSpinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1= $("#m1Spinner").spinner("value");
  k2= $("#k2Spinner").spinner("value");
  m2= $("#m2Spinner").spinner("value");


    t = t + dt;
}
