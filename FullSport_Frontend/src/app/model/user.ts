export class User {
    
    // attributes
    #_name:string;
    #_last_name:string;
    #_password:string;
    #_email:string;
    #_role:string;


    // constructor
    constructor(
        name:string,
        last_name:string,
        password:string,
        email:string,
        role:string,
    )
    {
        this.#_name      = name;
        this.#_last_name = last_name;
        this.#_password  = password;
        this.#_email     = email;
        this.#_role      = role;
    }

    // getters
    public get name(){
        return this.#_name;
    }

    public get last_name(){
        return this.#_last_name;
    }

    public get password(){
        return this.#_password;
    }

    public get email(){
        return this.#_email;
    }

    public get role(){
        return this.#_role;
    }


    // setters
    public set name(value:string){
        this.#_name = value;
    }

    public set last_name(value:string){
        this.#_last_name = value;
    }

    public set password(value:string){
        this.#_password = value;
    }

    public set email(value:string){
        this.#_email = value;
    }

    public set role(value:string){
        this.#_role = value;
    }
}
