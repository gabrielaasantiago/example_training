
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
        pistons: ["piston1", "piston2", { maker: "BMW" }, {maker: "BMW2"} ]
    },
    drive: function () { return "drive"; }
};

var array = [
    "string",
    100,
    ["embed", 200],
    { car: "ford" },
    function () { return "drive"; },
    "new value"
];
const a = 10;

console.log(automovel.make);
console.log(automovel.engine.pistons[1]);
console.log(array[a - 5 - 2]);
console.log(automovel["engine"]);
console.log(automovel["engine"]["pistons"]);
console.log(automovel["engine"]["pistons"][1]);
console.log(automovel["engine"]["pistons"][3]["maker"]);

var pointer = "make";

console.log(automovel[pointer]);

console.log(automovel["en" + "gine"]);
console.log(automovel.engine);

console.log(automovel["speed"] *= 2);
console.log(array);
console.log(array.shift());
console.log(array);
console.log(array.pop());
console.log(array);
console.log(array.unshift("float"));
console.log(array);
console.log(array.push("keep going", 2022, 23.99, function () { return beGood }));
console.log(array);
console.log(array.splice(2, 2));
console.log(array);
console.log(array.splice(1, 0, "inserting elements", 23.4 ));
console.log(array);
console.log(array.splice(2, 2, 100, 23.4));
console.log(array);


console.log( myName, printName() );
var myName = "Santiago";
function printName() { 
    console.log(b, embed());
    var b = 700;
    function embed() { return "show" };
    return "Gabi Aparecida"
}

var engine2 =
{
    maker: "Ford",
    headGasket: {
        pots: [
            "piston1",
            "piston1"
        ]
    }
}

function runExpression()
{ 
    var c = 10;

    function add()
    { 
        console.log( engine2 );
        return c + 90
    }

    add();
}

console.log(engine2[0]);
console.log(engine2.headGasket);
console.log(engine2.headGasket.pots[0]);
console.log(runExpression());


    
