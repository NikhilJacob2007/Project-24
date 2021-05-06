class Rock{
	constructor(x,y,width, height)
	{
		
		var Rock_options = {

			restitution:0.8,
			friction:0.9,
			density:12

		}
		
		this.x = x;
		this.y = y;
		this.h = height;
        this.w = width;

		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, Rock_options);
		World.add(world, this.body);

	}
	display()
	{
			var rockpos=this.body.position;		
			push()
			translate(rockpos.x, rockpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");

			rect(0, 0, this.w, this.h);

			pop()
	}

}