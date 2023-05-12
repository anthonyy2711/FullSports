export class PLGames{
    #_id:number;
    #_name_league:string;
    #_logo_league:string;
    #_round:number;
    #_date_event:Date; 	
    #_name_home:string;
    #_name_away:string;	
    #_logo_home:string;
    #_logo_away:string; 	
    #_goals_home:number;
    #_goals_away:number;
    #_status:string;


    constructor(
        id:number,
        name_league:string,
        logo_league:string,
        round:number,
        date_event:Date, 	
        name_home:string,
        name_away:string,	
        logo_home:string,
        logo_away:string,	
        goals_home:number,
        goals_away:number,
        status:string,
    ){
        this.#_id=id; 
        this.#_name_league=name_league;
        this.#_logo_league=logo_league;
        this.#_round=round;
        this.#_date_event=date_event;
        this.#_name_home=name_home;
        this.#_name_away=name_away;
        this.#_logo_home=logo_home;
        this.#_logo_away=logo_away;
        this.#_goals_home=goals_home;
        this.#_goals_away=goals_away;
        this.#_status=status;          
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

    public get round(){
        return this.#_round;
    }

    public get date_event(){
        return this.#_date_event;
    }

    public get name_home(){
        return this.#_name_home;
    }

    public get name_away(){
        return this.#_name_away;
    }

    public get logo_home(){
        return this.#_logo_home;
    }

    public get logo_away(){
        return this.#_logo_away;
    }

    public get goals_home(){
        return this.#_goals_home;
    }

    public get goals_away(){
        return this.#_goals_away;
    }

    public get status(){
        return this.#_status;
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

    public set round(value:number){
        this.#_round=value;
    }

    public set date_event(value:Date){
        this.#_date_event=value;
    }

    public set name_home(value:string){
        this.#_name_home=value;
    }

    public set name_away(value:string){
        this.#_name_away=value;
    }

    public set logo_home(value:string){
        this.#_logo_home=value;
    }

    public set logo_away(value:string){
        this.#_logo_away=value;
    }

    public set goals_home(value:number){
        this.#_goals_home=value;
    }

    public set goals_away(value:number){
        this.#_goals_away=value;
    }

    public set status(value:string){
        this.#_status=value;
    }




}