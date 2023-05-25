export class spanishTeams{
    #_id:number;
    #_name_team:string; 	
    #_team_logo:string;
    #_team_founded:number;	
    #_venue_name:string;
    #_venue_capacity:number; 	


    constructor(
        id:number,
        name_team:string, 	
        team_logo:string,
        team_founded:number,	
        venue_name:string,
        venue_capacity:number,
    ){
        this.#_id=id; 
        this.#_name_team=name_team;
        this.#_team_logo=team_logo;
        this.#_team_founded=team_founded;
        this.#_venue_name=venue_name;
        this.#_venue_capacity=venue_capacity;
    }

    public get id(){
        return this.#_id;
    }

    public get name_team(){
        return this.#_name_team;
    }

    public get team_logo(){
        return this.#_team_logo;
    }

    public get team_founded(){
        return this.#_team_founded;
    }

    public get venue_name(){
        return this.#_venue_name;
    }

    public get venue_capacity(){
        return this.#_venue_capacity;
    }    


    public set id(value:number){
        this.#_id=value;
    }

    public set name_team(value:string){
        this.#_name_team=value;
    }

    public set team_logo(value:string){
        this.#_team_logo=value;
    }

    public set team_founded(value:number){
        this.#_team_founded=value;
    }

    public set venue_name(value:string){
        this.#_venue_name=value;
    }

    public set venue_capacity(value:number){
        this.#_venue_capacity=value;
    }


}