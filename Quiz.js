class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    play(){
        background("cyan");
        stroke("black");
        fill("black");
        textSize(30);
        textFont("Arial");
        text("Results of the Quiz", 330, 50);

        Contestant.getContestantInfo();
        if(allContestants !== undefined){
            var dispPos = 260;
            fill("blue");
            textSize(20);
            text("NOTE: Contestant who answered correctly is highlighted in green color!", 130, 230);
            for(var cont in allContestants){
                if(allContestants[cont].option === "1")
                    fill("green");
                else
                    fill("red");
                textSize(16);
                text(allContestants[cont].name+":"+allContestants[cont].option, 300, dispPos);
                dispPos+=20;
            }
        }
    }
}