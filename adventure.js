
/////////////////////////////////Make and move Abe//////////////////////////////////

function Adventure(xCoord, yCoord, endX, endY, bound) {
	this.coord = new Thing(xCoord, yCoord);
	this.end = new Thing(endX, endY);
	// this.xCoord = xCoord;
	// this.yCoord = yCoord;
	this.bound = bound;
};

Adventure.prototype.killAbe = function () {
	document.getElementById(this.end.y.toString() + 
		this.end.x.toString()).innerHTML = "<img src='dead.jpg' class='img'></img>";
};

Adventure.prototype.target = function(){
	document.getElementById(this.end.y.toString() + 
		this.end.x.toString()).innerHTML = "<img src='retire.png' class='img'></img>";
};

Adventure.prototype.movAbe = function(){
	document.getElementById(this.coord.x.toString() + 
		this.coord.y.toString()).innerHTML = "<img src='small_abe.png' class='img'></img>";
};

Adventure.prototype.hideAbe = function (xChange, yChange) {
	document.getElementById(this.coord.x + xChange).toString() + (this.coord.y + yChange).toString()).innerHTML = "";
};

// Adventure.prototype.movBad = function() {
// 	document.getElementById(this.yCoord.toString() + 
// 		this.xCoord.toString()).innerHTML = "<img src='small_abe.png' class='img'></img>";
// };
///////////////////////////////////////Move Bad Guy//////////////////////////////////////////

// function BadAss(yCoord, xCoord, endX, endY, bound){
// 	this.yCoord = yCoord;
// 	this.xCoord = xCoord;
	// this.endX = endX;
	// this.endY = endY;
// 	this.bound = bound;
// };

// BadAss.prototype.movBad = function() {
// 	document.getElementById(this.yCoord.toString() + 
// 		this.xCoord.toString()).innerHTML = "<img src='small_abe.png' class='img'></img>";
// };

// }

///////////////////////////////////Gird set up///////////////////////////////////////////////


function Grid(rows,cols) {
	this.rows = rows;
	this.cols = cols;
	this.makeTable = function() {
		document.write('<table class="burns">');
		for (var i = 0; i < rows; i++) {
			document.write('<tr>'); 
			for (var j = 0; j < cols; j++){
				document.write('<td class="cell" id="' + i.toString() + j.toString() + '"></td>');
			};
			document.write('</tr>');
		};
		document.write('</table>');
	};
};	



//////////////////////////thing///////////////////////////////////

function Thing(x, y) {
	this.x = x;
	this.y = y;



	
}






