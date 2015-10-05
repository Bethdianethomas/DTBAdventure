
var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav');
var gridAbe;
var adventure;
var abePosition;
// var thing = new Thing(9,9);



function setUp() {
        console.log("hello");
        gridAbe = new Grid(9, 9);
        gridAbe.makeTable();
        adventure = new Adventure(0,0,8,8,8);
        abePosition = adventure.coord;
        adventure.movAbe();
        adventure.target();
        portal = new Thing(5,5);
        portal.superPower();
};

function atEnd(xDel, yDel) {
    return(adventure.coord.x === (adventure.end.x + xDel) && adventure.coord.y === (adventure.end.y + yDel));

};

function mov(xDel, yDel, x, y, bound) {
	
	if(atEnd(xDel, yDel)) {
        adventure.coord.x += x;
        adventure.coord.y += y;
        blackHole();
        adventure.hideAbe(xDel, yDel);
        adventure.killAbe();
        dead.play();
        alert("Whuuthaa!!??");
	}
	else if (adventure.coord.y === bound && yDel !== 0) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (adventure.coord.x === bound && xDel !== 0) {
        coon.play();
        alert("D'oh!!!");

    }
    else {
        adventure.coord.x += x;
        adventure.coord.y += y;
        console.log("mov: " + adventure.coord.x + adventure.coord.y);
        adventure.movAbe();
        blackHole();
        adventure.hideAbe(xDel, yDel);
	};
}

function movDown() {
	mov( -1, 0, 1, 0, 8);
}; 
function movUp() {
	mov(1, 0, -1, 0, 0);
}; 
function movLeft() {
	mov(0, 1, 0, -1, 0);
}; 
function movRight() {
	mov(0, -1, 0, 1, 8);
};

function reset() {
    adventure.hideAbe(0,0);
    adventure.coord.x = 0;
    adventure.coord.y = 0;
    adventure.movAbe();
    adventure.target();
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            movLeft();
            break;
        case 38:
            movUp();
            break;
        case 39:
            movRight();
            break;
        case 40:
            movDown();
            break;
        case 32:
            reset();
            break;
   }
};



// function name() {
//     var xcoord = prompt("enter how many rows you want");
//     var ycoord = prompt("enter how many columes you want")
//     gridAbe = new gridAbe(xcoord, ycoord);
    
// };


