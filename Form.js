class Form{
    constructor(){
        this.namein = createInput("Enter name here");
        this.optionin = createInput("Enter option number here");
        this.submit = createButton("Submit");
    }
    display(){
        var title = createElement('h2')
        title.html("MyQuiz Game");
        title.position(380, 10);

        this.namein.position(100, 200);
        this.optionin.position(500, 200);
        this.submit.position(350, 250);

        this.submit.mousePressed(()=>{
            title.hide();
            this.namein.hide();
            this.optionin.hide();
            this.submit.hide();

            contestant.name = this.namein.value();
            contestant.option = this.optionin.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }
}