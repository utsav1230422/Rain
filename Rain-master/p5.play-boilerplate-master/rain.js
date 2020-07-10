class rain {
    constructor() {
        this.size = rand(25,35);
        this.x = rand(0,width);
        this.y= rand(-80,height+80);
        this.text = getRandomText();
        this.update();
    }
    draw(){
        textSize(this.size);
        if(Math.random()>0.1)
            fill("white");
        else
            fill("purpule");
        text(this.text,this.x,this.y);
    }
    
    update(){
        this.y+=this.size;
        
        if(this.y>height+80){
            this.y = rand(-80,this.size);
            this.x = rand(0,width);
        }

        this.text = getRandomText();     
        this.draw();
    }
}

function rand(min,max){
    return floor(random(min,max));
}

function getRandomText(){
    return one[rand(0,one.length)]
}
    