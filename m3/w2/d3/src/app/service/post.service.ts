import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }



  fetchaPosts() { //ritorna una promise che contiene l'array dei posts
    let arrayPromise = fetch("/assets/db.json").then(response => { return response.json(); });
    console.log("è stato chiamato il service", arrayPromise);
    return arrayPromise;
  }

  editPostyById(id:number, title:string){
    let arrayPromise= this.fetchaPosts();
    arrayPromise.then((arrayPosts:Post[])=>{
    arrayPosts.filter(post => { return post.id == id })[0].title=title

    })
  }


}
