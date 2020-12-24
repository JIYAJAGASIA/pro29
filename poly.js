class poly{
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(50,200,20);
      this.image= loadImage("polygon.png")
      
      World.add(world, poly);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      imageMode (CENTER)
      image(poly_img, poly.position.x,poly.position.y,40,40);
    }
  }