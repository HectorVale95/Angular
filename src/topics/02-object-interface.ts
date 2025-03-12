const skills: string[]  = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
}

strider.hometown = 'Rivendell';

console.table(strider);


//ejemplo realizado por mi
const valor: string[] = [ 'Hola', 'helloo', 'word', 'mundo'];


interface caracteres{
    name: string;
    palabras: number;
    dificultad: string;
}

const saludos: caracteres ={
    name: 'Español',
    palabras: 4,
    dificultad: 'facil',
};

console.table(saludos);


//reforzamiento
const personajes: string[] =['goku', 'vegeta', 'gohan', 'trunks'];

interface guerreros{
    name: string;
    poder: number;
    raza: string;
}

const personaje: guerreros ={
    name: 'goku',
    poder: 10000,
    raza: 'sayayin',
};

console.table(personaje);
export{};