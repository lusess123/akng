import {Injectable} from '@angular/core';

@Injectable()
export class TodolistService {
    AddText :string;

    List :TextInfo[] =[];

    add(text:string){
        if(text && this.List.findIndex(a=>a.Text == text) < 0 ){
            this.List.push({Text:text});
        }
    }

    remove(text :string){
        this.List = this.List.filter(a=>a.Text != text);
    }


}

export class TextInfo {
    Text :string ;
    State? :string ;
}