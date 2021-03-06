import { Color } from './color';

export class Usuario {

    name: string;
    username: string;
    edad: number;
    favcolor: Color;
    picture: string;
    _id: string;

    constructor(info: any) {
        this.name = info.name;
        this.username = info.username;
        this.edad = info.age;
        this.favcolor = new Color(info.favcolor);
        this.picture = info.propicture;
        this._id = info._id;
    }

}
