

/////////////////////////////////Make and move Abe//////////////////////////////////

function Adventure(xCoord, yCoord, endX, endY, bound) {
	this.begin = new Thing(xCoord, yCoord);
	this.coord = new Thing(xCoord, yCoord);
	this.end = new Thing(endX, endY);
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
	document.getElementById((this.coord.x 
		+ xChange).toString() + (this.coord.y + yChange).toString()).innerHTML = "";
};



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




function Thing(x, y, name) {
	this.x = x;
	this.y = y;
	this.name = name;
	this.superPower = function(){
		document.getElementById(this.x.toString() + this.y.toString()).innerHTML = "<img id='portal'src='https://lh5.ggpht.com/uOc3iqkehwJddeJ1d1HtaAQdSAVaViqPydyRfDFN8GGU9zrTkxKA5x7YDJ_3fkJSZA=w300'></img>";
		console.log(this.x.toString() + this.y.toString());
		

		
	}
	
};








