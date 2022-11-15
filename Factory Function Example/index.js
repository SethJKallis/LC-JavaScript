// function vehicles(make, year, color){
//     return{
//         make : make,
//         year : year,
//         color : color,
//         display(){
//             console.log(`Make: ${make}\nYear: ${year}\nColor: ${color}`)
//         },
//         rev() {
//             console.log("Vroom! Vroom!");
//         }
//     }
// }

// let BMW = vehicles("M3", 2016, "Black")
// BMW.display()

function vehicles(config){
    return{
        make : config.make,
        year : config.year,
        color : config.color,
        displayInfo(){
            console.log(`Make: ${config.make}\nYear: ${config.year}\nColor: ${config.color}`)
        },
        displayCar(){
            if (config.color == 'blue') {
                console.log('🚙')
            }else if (config.color == 'red') {
                console.log('🚗');             
            }else if (config.color == 'white') {
                console.log('🚓')
            } else {
                console.log('👲')
            } 
        },
        rev() {
            if (config.make == "no car") {
                console.log("🎵Better run, better run! Outrun my Gun!🎵");
            } else {
                console.log("Vroom! Vroom!");
            }
        }
    }
}

let BMW = vehicles({
    make: "M3",
    year:  2016,
    color: "red"
})
BMW.displayInfo()
BMW.displayCar()
BMW.rev()

console.log('---------------');

let nissan = vehicles({
    make: "GTR",
    year: 2014,
    color: "blue"
})
nissan.displayInfo()
nissan.displayCar()
nissan.rev()

console.log('---------------');

let subaru = vehicles({
    make: "Impreza",
    year: 2014,
    color: "white"
})
subaru.displayInfo()
subaru.displayCar()
subaru.rev()

console.log('---------------');


let man = vehicles({
    make: "no car",
    year: 1200 + "BC",
    color: "asian",
})

man.displayInfo()
man.displayCar()
man.rev()

console.log('---------------');
