

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
