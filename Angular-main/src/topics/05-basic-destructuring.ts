interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 100,
    songDuration: 200,
    song: 'Cancion',
    details: {
        author: 'Nata',
        year: 2021
    }
}

const song = 'new song';

   

const {song:anohterSong,
      songDuration:duration,
      details
    } = audioPlayer;
const{ author} = details;



console.log('Song: ', song);
console.log('Another song: ', anohterSong);
console.log('Song duration: ', duration);
console.log('Author: ', author);

// Destructuring arrays
const [, , , , trunk = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gohan', 'Piccolo'];


console.log('Personaje 3 ', trunk);