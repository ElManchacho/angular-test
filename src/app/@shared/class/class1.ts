
// Defining global Object class for object management

export class Class1 {

    id: number;

    text: string;

    constructor(newId:number, newText: string="") {

        this.id = newId
        this.text = newText

    }

    getClassText(){

        return this.text;

    }

    setClassText(newText:string){

        this.text = newText

    }

}