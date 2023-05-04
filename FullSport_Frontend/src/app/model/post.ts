export class Post{
  #_image:string;
  #_title:string;
  #_body:string;
  #_user_id:string;
  #_comments_id:string;
  #_likes:number;
  #_comments:number;
  constructor(
      image:string,
      title:string,
      body:string,
      user_id:string,
      comments_id:string,
      likes:number,
      comments:number,
  ){
      this.#_image = image;
      this.#_title = title;
      this.#_body = body;
      this.#_user_id = user_id;
      this.#_comments_id = comments_id;
      this.#_likes = likes;
      this.#_comments = comments;
  }

  //get
  public get image(){
      return this.#_image;
  }
  public get title(){
      return this.#_title;
  }
  public get body(){
      return this.#_body;
  }
  public get user_id(){
      return this.#_user_id;
  }
  public get comments_id(){
      return this.#_comments_id;
  }
  public get likes(){
      return this.#_likes;
  }
  public get comments(){
    return this.#_comments;
}

  //set
  public set image(value:string){
      this.#_image=value;
  }
  public set title(value:string){
      this.#_title=value;
  }
  public set body(value:string){
      this.#_body=value;
  }
  public set user_id(value:string){
      this.#_user_id=value;
  }
  public set comments_id(value:string){
      this.#_comments_id=value;
  }
  public set likes(value:number){
      this.#_likes=value;
  }
  public set comments(value:number){
    this.#_comments=value;
}
}
