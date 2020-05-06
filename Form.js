class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}


/*
var firebaseConfig = {
  apiKey: "AIzaSyDLRO6MWBszgXC0PJ-DLiiR-mNqphfWPZo",
  authDomain: "racing-5fc08.firebaseapp.com",
  databaseURL: "https://racing-5fc08.firebaseio.com",
  projectId: "racing-5fc08",
  storageBucket: "racing-5fc08.appspot.com",
  messagingSenderId: "758814928354",
  appId: "1:758814928354:web:cd51417feee45bc0aeddbb"
};
*/