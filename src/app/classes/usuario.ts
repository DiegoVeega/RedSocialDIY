import { color } from './color'

export class usuario{

    name: string;
    username: string;
    titulo: string;
    edad: number;
    favcolor: color;
    picture: string;

    constructor(info: any){
        console.log(info);
        this.name = info.name;
        this.username = info.username;
        this.edad = info.age;
        this.favcolor = new color(info.favcolor);
        this.picture = info.propicture;
    }

}