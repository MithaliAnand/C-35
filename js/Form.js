class Form {
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html('Car Racing game');
        title.position(350,0);


        var input = createInput("Enter your name");
        var button = createButton("Play");

        var greeting = createElement('h3');

        input.position(250,130);
        button.position(350,180);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount=playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " + name);
            greeting.position(280,160);
        })
    }
}