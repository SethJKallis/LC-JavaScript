// Function One
function Pokemon (PokemonName1,PokemonName2,PokemonName3,PokemonName4, PokemonName5){
    this.PokemonName1= PokemonName1;
    this.PokemonName2= PokemonName2;
    this.PokemonName3= PokemonName3;
    this.PokemonName4= PokemonName4;
    this.PokemonName5= PokemonName5;
}
// function Two
function Game(Name1,Name2,Name3, Name4, Name5){
    this.Name1= Name1;
    this.Name2= Name2;
    this.Name3= Name3;
    this.Name4= Name4;
    this.Name5= Name5;
}

/////////////////////////////////////////////

// Create objects pokemon
let Pokemon1 = new Pokemon('Charmander', 'squirtle', 'bulbasaur', 'pikachu', 'magikarp');
let Pokemon2 = new Pokemon('Rattata','Hitmonlee','Hitmonchan','Lugia','Haunter')

// Create objects for games
let Game1 = new Game('minecraft', 'fortnite','GTA','warzone','halo');
let Game2 = new Game('Call of Duty', 'Pubg', 'Darksouls','Bloodborne','Dragon Age')

//////////////////////////////////////////

// LOGGING OBJECTS IN THE CONSOLE
console.log (Pokemon1);
console.log (Pokemon2);
// console.log(Pokemon1 instanceof Pokemon ? 'it is a pokemon' : 'it is not a pokemon');

console.log(Game1);
console.log(Game2);
// console.log(Game1 instanceof Game ? 'it is a Game' : 'it is not a Game');

////////////////////////////////////////

// PROMPTS FOR USER INPUTS
let pickYourPokemon = prompt('Pick a pokemon:')
let pickYourGame = prompt('Pick a game:')

//////////////////////////////////////////

// Checking if the prompt() is a value in the object

// POKEMON
document.write(Object.values(Pokemon1).includes(pickYourPokemon) ? "IT IS A POKEMON<br>" : "IT IS NOT A POKEMON<br>")
console.log(Object.values(Pokemon2).includes(pickYourPokemon) ? "IT IS A POKEMON" : "IT IS NOT A POKEMON")

// GAMES
document.write(Object.values(Game1).includes(pickYourGame) ? "IT IS A GAME" : "IT IS NOT A GAME")
console.log(Object.values(Game2).includes(pickYourGame) ? "IT IS A GAME" : "IT IS NOT A GAME")

/////////////////////////////////////////