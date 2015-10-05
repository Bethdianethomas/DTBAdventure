
function Adventure(yCoord, xCoord, endX, endY, bound){
	this.yCoord = yCoord;
	this.xCoord = xCoord;
	this.endX = endX;
	this.endY = endY;
	this.bound = bound;
};

Adventure.prototype.killAbe = function () {
		document.getElementById(this.endY.toString() + 
			this.endX.toString()).innerHTML = "<img src='dead.jpg' class='img'></img>";
};

Adventure.prototype.target = function(){
		document.getElementById(this.endY.toString() + 
			this.endX.toString()).innerHTML = "<img src='retire.png' class='img'></img>";
};

Adventure.prototype.movAbe = function(){
		document.getElementById(this.yCoord.toString() + 
			this.xCoord.toString()).innerHTML = "<img src='small_abe.png' class='img'></img>";
};

Adventure.prototype.hideAbe = function (xChange, yChange) {
		document.getElementById((this.yCoord + 
			yChange).toString() + (this.xCoord + xChange).toString()).innerHTML = "";
};

var adventure = new Adventure(0,0,8,8,8);

function makeTable(rows, cols){
  	document.write('<table class="burns">');
  		for (var i = 0; i < rows; i++) {
    		document.write('<tr>'); 
      			for (var j = 0; j < cols; j++){
        			document.write('<td class="cell" id="' + i.toString() + j.toString() + '"></td>');
      			};
    		document.write('</tr>');
   		 };
  	document.write('</table>');
}
makeTable(9,9);	
