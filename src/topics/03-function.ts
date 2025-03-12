import { AddonHookFunction } from './../../node_modules/rollup/dist/rollup.d';


 


function AddNumbers(a:number, b:number){
    return a + b;
}

const AddNumbers2 = (a:number, b:number) => {
    return `${a + b}`;
}

function muliply(firstNumber: number, secondNumber?: number, base:number = 2): number{
    return firstNumber * base ;
}



//const sum: number = AddNumbers(2, 3);
//const sum2: string = AddNumbers2(2, 3);
//const multiplyresult: number = muliply(5);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const heal = (character: Character, amount:number) => {
    
    character.hp += amount;
}

const strinder: Character = {
    name: 'Strinder',
    hp: 100,
    showHp(){
        console.log('points', this.hp);
    }
}

heal(strinder, 20);
strinder.showHp();
//console.log({sum, sum2, multiplyresult});


export{};


