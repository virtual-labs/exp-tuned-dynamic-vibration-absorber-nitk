class System {
  constructor(x, y, _w, _h) {
    this.width = _w;
    this.h = _h;
    this.x_equilibrium = x;
    this.y_equilibrium = y;
    this.F0 = 0;
    this.w = 0;
    this.k1 = 0;
    this.k0 = 0;
    this.m1 = 0;
    this.k2 = 0;
    this.k3 = 0;
    this.m2 = 0;
    this.w1 = 0;
    this.w2 = 0;
    this.x1 = 0;
    this.x2 = 0;
    this.masscoordinates = [];
    this.x1w1 = 0;
    this.x2w1 = 0;
    this.x2w1 = 0;
    this.x2w2 = 0;
    this.calcu1 = 0;
    this.calcu2 = 0;
    this.xm = 0;
    // this.mu = 0;
    this.x1m = 0 ;
    this.om1w1 = 0;
    this.term1a = 0;
    this.term2b= 0 ; 
    this.term3c = 0 ;
    this.t1a = 0;
    this.t2b = 0;
    this.t3c = 0;
    this.om1 = 0;
    this.om2 = 0 ;


    
  }

  initialise(_F0, _w, _m1, _k1, _m2, _k2) {
    //if(_w>3.8  && _w<4.1 || (_w> 2.4 && _w<=2.65) )_w= _w - 0.5

    this.F0 = _F0;
    this.w = _w;

    this.m1 = 2000;
    this.k1 = _k1;
    this.m2 = _m2;
    this.k2 = _k2;
    // this.mu = _mu;
    //this.m1 = this.m2/this.mu;
    //  this.k1 = this.mu*this.k2;

    this.denom = this.m1 * this.m2 * Math.pow(this.w, 4) - (this.m1 * this.k2 + this.m2 * (this.k1 + this.k2) * Math.pow(this.w, 2) +this.k1 * this.k2);
    this.x1 = ((this.k2 - this.m2 * this.w * this.w) * this.F0) / 500000;
    this.x1_unabsorbed = ((this.k2) * this.F0) / 40000;
    this.x2 = (this.k2 * this.F0) / 1000000;
    this.om1 = Math.pow(this.k2 / this.m1, 0.5);
    this.om2 = Math.pow((this.k1 + 2 * this.k2) / this.m2, 0.5);
    this.w1 = Math.pow(this.k1/this.m1 , 0.5);
    this.w2 = Math.pow(this.k2/this.m2 , 0.5);
    this.m2 = 0;
    this.term1a = (1+ (1+this.m2/this.m1)*(this.w2/this.w1)*(this.w2/this.w1));
    this.term2b = (1 + (1+ this.m2/this.m1)*(this.w2/this.w1)*(this.w2/this.w1) - 4*(this.w2/this.w1)*(this.w2/this.w1));
    this.term3c = 2*(this.w2/this.w1)*(this.w2/this.w1);
    this.om1w1 = (this.term1a + Math.pow(this.term2b,0.5))/(this.term3c);
    this.om1w1 = Math.pow(this.om1w1 , 0.5);
    this.om2w2 = (this.term1a - Math.pow(this.term2b,0.5))/(this.term3c);
    this.om2w2 = Math.pow(this.om2w2 , 0.5);
    // console.log("the value of om1" , this.om1);
    // console.log("the value of om2" , this.om2);
    
    
  }

  update(t, _mulfact) {
    //this.fi = atan((-2*this.z*this.w / this.wn) / (1 - (this.w*this.w)/(this.wn*this.wn)));
    this.t = t;
    // this.y = -15*Math.sin(t*this.w*10);
    //this.x =  15*Math.cos(t*this.w*10);
    this.y3 = -(_mulfact * this.x1_unabsorbed * Math.sin(this.w * t * 5));
    this.y2 = -(_mulfact * this.x2 * Math.sin(this.w * t * 5));
    this.y1 = -(_mulfact * this.x1 * Math.sin(this.w * t * 5));
    //  console.log("the value of y1 is" , this.y1);
    //  console.log("the value of y2 is " , this.y2);

  }

  show(_stroke, _strockweight, _fill) {
    push();

    let wid = spr.width - 35;
    let hei = spr.height - 130;

    if (abs(this.w - this.om1) <= 0.1 || abs(this.w - this.om2) <= 0.1) 
    {
      this.y1 = this.y1 * 10;
      this.y2 = this.y2 * 10;
    } 
    else {
      this.y1 = this.y1 * 10;
      this.y2 = this.y2 * 10;
    }

    let constant = 150;

    // spring
    image(spr,this.x_equilibrium - wid / 2 + 125,constant + this.y_equilibrium+100 - 220-5 - 2 * hei + this.y2 - 15 - 10 - 7 + 27+18.5+20.5,wid,hei + this.y1 + 10);
    fill(0, 0, 0);
    textSize(15);
    //text("K1",this.x_equilibrium - (wid/2)-30, constant+this.y_equilibrium -12.5 -(hei/2) +this.y1+10)

    image(spr,this.x_equilibrium - wid / 2 - 10+105 ,constant + this.y_equilibrium+100-245-12.5 -25 -2 * hei -10 -5 -9 +20,wid,hei + this.y2 - 22);
   
    image(spr,this.x_equilibrium - wid / 2 + 155,constant + this.y_equilibrium+100-245-12.5 -25 -2 * hei -10 -5 -9 +20,wid,hei + this.y2 - 22);
  
    text("k1",this.x_equilibrium + 125+55,constant + this.y_equilibrium+30-170 - 2 * hei  + this.y2 +2+21-30)

    text("k2", this.x_equilibrium + 125+55,constant + this.y_equilibrium+100 -220-5 - 2 * hei + this.y2+this.y1 - 15 - 10 - 7 + 27+90+35-30)
    //image(spr,this.x_equilibrium -(wid/2) ,this.y_equilibrium -(this.h/2) +this.y1 , this.width-20, this.h)

  
    //text("K2",this.x_equilibrium -(wid/2)-30, this.y_equilibrium -12.5-25 -(1.5*hei) + this.y2 +10)

    // base
    rectMode(CENTER);
    fill(0, 0, 0);
    rect(this.x_equilibrium + 125,constant + this.y_equilibrium-325,this.width + 40,this.h - 20);

    // mass
    rect();
    stroke(_stroke);
    strokeWeight(_strockweight);
    fill(_fill);

  
    rectMode(CENTER);
    fill(139, 69, 19);
    rect(this.x_equilibrium + 125,constant + this.y_equilibrium+30-170 - 2 * hei  + this.y2 +2+21,this.width - 20 + 10 + 20,this.h + 25); // bottom mass
    fill(255,255,255);
    textSize(13);
    text("m1",this.x_equilibrium + 125-5,constant + this.y_equilibrium+30-170 - 2 * hei  + this.y2 +2+21+3)

    
    rectMode(CENTER);
    fill(139, 69, 19);
    rect(
      this.x_equilibrium + 125,
      constant + this.y_equilibrium+100 -220-5 - 2 * hei + this.y2+this.y1 - 15 - 10 - 7 + 27+90+35,
      this.width - 20,
      this.h
    ); // top mass
    fill(255, 255, 255);
    textSize(13);
    
    text("m2", this.x_equilibrium + 125-5,
      constant + this.y_equilibrium+100 -220-5 - 2 * hei + this.y2+this.y1 - 15 - 10 - 7 + 27+90+35+3)
    // text("m2",this.x_equilibrium-80,250+this.y_equilibrium -50 -(2*hei) + this.y2-5)

    image(spr,this.x_equilibrium - wid / 2 + 125,constant + this.y_equilibrium-210-75 - 50-5 - 2 * hei - 15 - 10 - 7 + 27,wid,hei-20 + this.y2 + 10);
    fill(0, 0, 0);
    textSize(15);



    rectMode(CENTER);
    fill(0, 0, 0);
    rect(this.x_equilibrium + 125,constant + this.y_equilibrium-250-145-90,this.width + 40,this.h - 20);
    fill(139, 69, 19);
    rect(this.x_equilibrium + 125,constant + this.y_equilibrium-100-185 - 50-5 - 2 * hei - 15 - 10 - 7 + 27+hei-40 + this.y2 + 10+20+15,this.width - 20 + 10 + 20,this.h + 5);
    //this.y_equilibrium+100-250-25- 2 * hei + this.y2 + this.y1 +40
    fill(255, 255, 255);
    textSize(13);
    
    text("m1",this.x_equilibrium + 125-5,constant + this.y_equilibrium-100-185 - 50-5 - 2 * hei - 15 - 10 - 7 + 27+hei-40 + this.y2 + 10+20+15+3)

  /*
    rectMode(CENTER);
    fill(0, 0, 0);
   // rect(this.x_equilibrium + 10,constant + this.y_equilibrium-250-100-25,this.width + 40+340,this.h - 20);
    fill(139, 69, 19);
    rect(this.x_equilibrium + 10,constant + this.y_equilibrium-100-75 - 50-5 - 2 * hei - 15 - 10 - 7 + 27+hei-40 + this.y1 + this.y2+ 10+20+340,this.width - 20 + 10 + 20,this.h + 5);
    //this.y_equilibrium+100-250-25- 2 * hei + this.y2 + this.y1 +40
    fill(255, 255, 255);
    textSize(12);
*/

    // ellipse(370+50 +40,constant+this.y_equilibrium -50 -(2*hei) +this.y2-15-20, 32, 32);
    //fill(255,0,255);
    //rect(this.x_equilibrium - this.width/2, this.y_equilibrium + this.y2 +this.h+50, this.width, this.h)

    let r = 10.6;

    //console.log("the value ofx,yi",this.x,this.y);
    let x = r * Math.sin(this.t * this.w * 10 + 10);
    let y = r * Math.cos(this.t * this.w * 10 + 10);

    fill(255, 0, 0);
    // ellipse(459 +x  ,constant+this.y_equilibrium -50 -(2*hei) +this.y2-15-20 + y, 6, 6);

    pop();

    this.masscoordinates = [
      this.x_equilibrium,
      this.y_equilibrium - this.h / 2 - hei + this.y1 - this.h / 2 + 10,
      this.x_equilibrium,
      this.y_equilibrium - 50 - 2 * hei + this.y2 + 10,
    ];
  }

  static mag_func3(x, obj) {
    let solution = 0;
    // let avg = (obj.w1+ obj.w2)/2;
    let real = Math.pow(obj.k1 / obj.m1, 0.5);
    if (x / real < 0) solution = 1 / (1 - Math.pow(x / real, 2));
    else {
      solution = 1 / (Math.pow(x / real, 2) - 1);
    }

    if (abs(solution) < 2000) {
      return abs(solution);
    } else {
      return 2000;
    }
  }


  static mag_func2(x, obj) {
    x = x/4;
    let term1 = 1;
    let term2 = 1 + obj.k2 / obj.k1 - Math.pow(x/ obj.w1, 2);
    let term3 = 1 - Math.pow(x / obj.om2, 2);
    let term4 = obj.k2 / obj.k1;
    console.log(Math.pow(x / obj.om1, 2));
    let solution = term1 / (term2 * term3 - term4);
    if (abs(solution) < 2000) {
      return abs(solution);
    } else {
      return 2000;
    }
  }

  static mag_func1(x, obj) {
    x = x; 
    let term1 = (1 - Math.pow(obj.w / obj.om2w2), 0.5);
    let term2 = 1 + obj.k2 / obj.k1 - Math.pow(x/ obj.om1w1, 2);
    let term3 = 1 - Math.pow(x/ obj.om2w2, 2);
    let term4 = obj.k2 / obj.k1;
    let solution = term1 / (term2 * term3 - term4);
    if (abs(solution) < 200) {
      return abs(solution);
    } else {
      return 200;
    }
  }

  
  static mag_func4(x, obj) {
    x = x/5 ; 
    let term1 = (1 - Math.pow(obj.w / obj.w2), 0.5);
    let term2 = 1 + obj.k2 / obj.k1 - Math.pow(x/ obj.w1, 2);
    let term3 = 1 - Math.pow(x/ obj.w2, 2);
    let term4 = obj.k2 / obj.k1;
    let solution = term1 / (term2 * term3 - term4);
    if (abs(solution) < 200) {
      return abs(solution);
    } else {
      return 200;
    }
  }


}
