class Flyer{
  constructor(name,speed){
    this.name=name;
    this.speed=speed;
  }
  fly(){//Flyer.prototype.fly
    console.log(this.name+" 以时速 "+this.speed+" 飞行");
  }
}
class Plane extends Flyer{
  constructor(name,speed,score){
    super(name,speed);
    this.score=score;
  }
  getScore(){//Plane.prototype.getScore
    console.log("击落敌机,得"+this.score+"分")
  }
}
var f16=new Plane("F16",1000,20);
f16.fly();
f16.getScore();