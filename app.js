
var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav');
var grid;



var adventure;

    function setUp() {
        console.log("hello");
        grid = new Grid(9, 9);
        grid.makeTable();
        adventure = new Adventure(0,0,8,8,8);
        adventure.movAbe();
        adventure.target();
};
// function name() {
//     var xcoord = prompt("enter how many rows you want");
//     var ycoord = prompt("enter how many columes you want")
//     grid = new Grid(xcoord, ycoord);
    
// };


function mov(xDel, yDel, x, y, bound) {
	
	if(adventure.xCoord === (adventure.endX + xDel) && adventure.yCoord === (adventure.endY + yDel)) {
        adventure.xCoord += x;
        adventure.yCoord += y;
        adventure.hideAbe(xDel, yDel);	
        adventure.killAbe();
        dead.play();
        alert("Whuuthaa!!??");
	}
	else if (adventure.yCoord === bound && yDel != 0) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (adventure.xCoord === bound && xDel != 0) {
        coon.play();
        alert("D'oh!!!");
    }
    else {
        adventure.xCoord += x;
        adventure.yCoord += y;
        adventure.hideAbe(xDel, yDel);
		adventure.movAbe();
	};
}




function movDown() {
	mov(0, -1, 0, 1, 8);
}; 
function movUp() {
	mov(0, 1, 0, -1, 0);
}; 
function movLeft() {
	mov(1, 0, -1, 0, 0);
}; 
function movRight() {
	mov(-1, 0, 1, 0, 8);
};

function reset() {
    adventure.hideAbe(0,0);
    adventure.xCoord = 0;
    adventure.yCoord = 0;
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


