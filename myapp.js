
// console.log("Hello World")
function makeCoffee(sugar, milk) { 
    var instructions = "Boil water,";

    instructions += " pour into cup,";
    instructions += " add coffee granules,";
    instructions += " add " + sugar + " spoons of sugar,";
    instructions += " add " + milk + "% milk.";
   
    return instructions;
}

console.log(makeCoffee(2, 20));

var car = {
    color: "red",
    speed: 200,
    drive: function () { return "drive"; }
};

var shoppinglist = [
    "Apple",
    "Orange",
    "Pear"
]

var automovel = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons: ["piston1", "piston2", { maker: "BMW" } ]
    }
};