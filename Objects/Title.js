
var Title = {
        
    
    container: undefined,

    Start: undefined,


    start_button_text_style: new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 35,
        fill: '#555555',
        strokeThickness: 10,
    }),
    Title_text_style: new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 75,
        fill: '#555555',
        strokeThickness: 15,
    }),







    init: function () {
        this.container = new PIXI.Container();
        this.container.interactiveChildren = true;
        app.stage.addChild(this.container);

        // Title text
        this.Title = new PIXI.Text("HENLO'SKI", this.Title_text_style);
        this.Title.x = document.body.clientWidth/2;
        this.Title.y = 100;
        this.container.addChild(this.Title);



        // Begin Game -- button, currently endless mode
        this.Start = new PIXI.Container();
        this.Start.x = document.body.clientWidth/2;
        this.Start.y = 300;

        const Start_rect = new PIXI.Graphics();
        Start_rect.beginFill(0xffffff);
        Start_rect.lineStyle(10, 0xffffff);
        Start_rect.drawRect(0,0,400,70);
        Start_rect.zIndex = 1;

        const Start_text = new PIXI.Text("START GAME", this.P1Button_text_style);
        Start_text.zIndex = 2;

        this.Start.interactive = true;
        this.Start.buttonMode = true;
        this.Start.on('pointerdown', () => {

            //Map.Generate();
            Game.init();
            Title.destroy();
        });
        this.Start.addChild(Start_text);
        this.Start.addChild(Start_rect);
        this.container.addChild(this.Start);


        /*
        // Map view mode
        this.ViewMap = new PIXI.Container();
        this.ViewMap.x = document.body.clientWidth/2;
        this.ViewMap.y = 300;

        const ViewMap_rect = new PIXI.Graphics();
        ViewMap_rect.beginFill(0xffffff);
        ViewMap_rect.lineStyle(10, 0xffffff);
        ViewMap_rect.drawRect(0,0,400,70);
        ViewMap_rect.zIndex = 1;

        const ViewMap_text = new PIXI.Text("START GAME", this.P1Button_text_style);
        ViewMap_text.zIndex = 2;

        this.ViewMap.interactive = true;
        this.ViewMap.buttonMode = true;
        this.ViewMap.on('pointerdown', () => {

            Map.Generate();
            Map.viewMode_init();
            Title.destroy();
        });



        this.Start.addChild(ViewMap_text);
        this.Start.addChild(ViewMap_rect);
        this.container.addChild(this.ViewMap);
        */
    },



    destroy: function () {
        Title.container.destroy();
    }
}
