

type Words = {
    [key:string]: string
}


class Dict {

    private words:Words
    constructor() {
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term];
    }

    static hello(){
        return "hello";
    }
}


class Word {
    constructor(
        public term:string,
        public def:string
    ){}
}

const kimchi = new Word('kimchi', '한국음식')

const dict = new Dict()
dict.add(kimchi)
dict.def("kimchi")
Dict.hello()

function test(){
Dict.hello()
}
test()

type Nickname = string
type Health = number
type Friends = Array<string>


type Team = 'read'|'blue'|'green'|'yellow'


// interface is only used for object type explanation
interface Player  {
    nickname: String,
    team: Team,
    health: Health
}

// type is vesatile
type Person = {
    nickname: String,
    team: Team,
    health: Health
}

const nico : Player = {
    nickname: "nico",
    health: 10,
    team: 'yellow'
}

// abstract class User {
//     constructor(
//         public firstName:string,
//         public lastName:string
//     ){}
//     abstract sayHi(name:string):string;
//     abstract fullName():string
// }


// class PlayerTwo extends User{
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     sayHi(name:string){
//         return `Hello ${name}.My name is  ${this.fullName()}`
//     }
// }

interface User {
    firstName:string,
    lastName:string,
    sayHi(name:string):string
    fullName():string
}

interface Human {
    health:number
}

class PlayerTwo implements User,Human{
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
   
    fullName(){
            return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name}.My name is  ${this.fullName()}`
    }
}