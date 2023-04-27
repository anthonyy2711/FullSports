export class News{
    #_new_img:string;
    #_new_title:string;
    #_new_description:string;
    #_author_img:string;
    #_author_name:string;	
    #_new_date:Date; 	

    constructor(
        new_img:string,
        new_title:string,
        new_description:string,
        author_img:string,
        author_name:string,	
        new_date:Date,
    ){
        this.#_new_img = new_img;
        this.#_new_title = new_title;
        this.#_new_description = new_description;
        this.#_author_img = author_img;
        this.#_author_name = author_name; 	
        this.#_new_date = new_date;  
    }

    //get
    public get new_img(){
        return this.#_new_img;
    }
    public get new_title(){
        return this.#_new_title;
    }
    public get new_description(){
        return this.#_new_description;
    }
    public get author_img(){
        return this.#_author_img;
    }
    public get author_name(){
        return this.#_author_name;
    }
    public get new_date(){
        return this.#_new_date;
    }

    //set
    public set new_img(value:string){
        this.#_new_img=value;
    }
    public set new_title(value:string){
        this.#_new_title=value;
    }
    public set new_description(value:string){
        this.#_new_description=value;
    }
    public set author_img(value:string){
        this.#_author_img=value;
    }
    public set author_name(value:string){
        this.#_author_name=value;
    }
    public set new_date(value:Date){
        this.#_new_date=value;
    }
}