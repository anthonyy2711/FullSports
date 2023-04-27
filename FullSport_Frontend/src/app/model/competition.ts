export class Competition{
    #_id:number;
    #_name_league:string;
    #_logo_league:string;
    #_position:number;
    #_name_team:string; 	
    #_team_logo:string;
    #_played_games:number;	
    #_games_win:number;
    #_games_draw:number; 	
    #_games_lost:number;
    #_points:number;


    constructor(
        id:number,
        name_league:string,
        logo_league:string,
        position:number,
        name_team:string, 	
        team_logo:string,
        played_games:number,	
        games_win:number,
        games_draw:number,	
        games_lost:number,
        points:number,
    ){
        this.#_id=id; 
        this.#_name_league=name_league;
        this.#_logo_league=logo_league;
        this.#_position=position;
        this.#_name_team=name_team;
        this.#_team_logo=team_logo;
        this.#_played_games=played_games;
        this.#_games_win=games_win;
        this.#_games_draw=games_draw;
        this.#_games_lost=games_lost;
        this.#_points=points;          
    }

    public get id(){
        return this.#_id;
    }

    public get name_league(){
        return this.#_name_league;
    }

    public get logo_league(){
        return this.#_logo_league;
    }

    public get position(){
        return this.#_position;
    }

    public get name_team(){
        return this.#_name_team;
    }

    public get team_logo(){
        return this.#_team_logo;
    }

    public get played_games(){
        return this.#_played_games;
    }

    public get games_win(){
        return this.#_games_win;
    }

    public get games_draw(){
        return this.#_games_draw;
    }

    public get games_lost(){
        return this.#_games_lost;
    }

    public get points(){
        return this.#_points;
    }

    


    public set id(value:number){
        this.#_id=value;
    }

    public set name_league(value:string){
        this.#_name_league=value;
    }

    public set logo_league(value:string){
        this.#_logo_league=value;
    }

    public set position(value:number){
        this.#_position=value;
    }

    public set name_team(value:string){
        this.#_name_team=value;
    }

    public set team_logo(value:string){
        this.#_team_logo=value;
    }

    public set played_games(value:number){
        this.#_played_games=value;
    }

    public set games_win(value:number){
        this.#_games_win=value;
    }

    public set games_draw(value:number){
        this.#_games_draw=value;
    }

    public set games_lost(value:number){
        this.#_games_lost=value;
    }

    public set points(value:number){
        this.#_points=value;
    }

}