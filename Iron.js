class Iron{
	constructor(x,y,width, height)
	{
		
		var Iron_options = {

			restitution:0.8,
			friction:3,
			density:30

		}
		
		this.x = x;
		this.y = y;
		this.h = height;
        this.w = width;

		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, Iron_options);
		World.add(world, this.body);

	}
	display()
	{
			var ironpos = this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("black");

			rect(0, 0, this.w, this.h);

			pop()
	}

}