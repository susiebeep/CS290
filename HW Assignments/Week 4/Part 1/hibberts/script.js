/*Create the 4 x 4 table with specified properties*/
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
table.setAttribute('border', '1');

for(var i = 0; i < 4; i++)
{
	var row = document.createElement('tr');
	for (var j = 0; j < 4; j ++)
	{
		if (i == 0)
		{
			var head = document.createElement('th');
			head.textContent = 'Header ' + (j + 1);
			row.appendChild(head);
		}
		else
		{
		
			var col = document.createElement('td');
			col.textContent = i + ', ' + (j + 1);
			row.appendChild(col);
		}
		
	}
	tableBody.appendChild(row);
}

table.appendChild(tableBody);	
document.body.appendChild(table);

/*Create the direction buttons*/
var up = document.createElement('button');
up.id = 'up';
up.textContent = 'Up';
document.body.appendChild(up);

var down = document.createElement('button');
down.id = 'down';
down.textContent = 'Down';
document.body.appendChild(down);

var left = document.createElement('button');
left.id = 'left';
left.textContent = 'Left';
document.body.appendChild(left);

var right = document.createElement('button');
right.id = 'right';
right.textContent = 'Right';
document.body.appendChild(right);


/*Create the Mark Cell button*/
var markCell = document.createElement('button');
markCell.id = 'markCell';
markCell.textContent = 'Mark Cell';
document.body.appendChild(markCell);


/*Create functions for directional buttons*/
var rows = document.getElementsByTagName('tr');
var cols1 = rows[1].getElementsByTagName('td'); //row 1 columns
var rowIndex = 1; //current row
var colIndex = 0; //current column


/*When page loads the upper left, non-header cell should be selected*/
document.addEventListener('DOMContentLoaded', function(event)
{
	cols1[0].style.border = '5px solid black';
});


/*Moving up, row - 1*/
function upClick(event)
{
	rows = document.getElementsByTagName('tr');
	cols = rows[rowIndex].getElementsByTagName('td');
	cols[colIndex];
	
	/*Check not moving beyond edges of table. Change border back
	to 1px on previously selected cell and change border to 5px on 
	currently selected cell*/
	if (rowIndex == 2 || rowIndex == 3)
	{
		cols[colIndex].style.border = '1px solid black';
		--rowIndex;
		cols = rows[rowIndex].getElementsByTagName('td');
		cols[colIndex].style.border = '5px solid black';	
	}	
}

/*Moving down, row + 1*/
function downClick(event)
{
	rows = document.getElementsByTagName('tr');
	cols = rows[rowIndex].getElementsByTagName('td');
	cols[colIndex];
	
	/*Check not moving beyond edges of table. Change border back
	to 1px on previously selected cell and change border to 5px on 
	currently selected cell*/
	if (rowIndex == 1 || rowIndex == 2)
	{
		cols[colIndex].style.border = '1px solid black';
		++rowIndex;
		cols = rows[rowIndex].getElementsByTagName('td');
		cols[colIndex].style.border = '5px solid black';	
	}	
}

/*Moving left, col - 1*/
function leftClick(event)
{
	rows = document.getElementsByTagName('tr');
	cols = rows[rowIndex].getElementsByTagName('td');
	cols[colIndex];
	
	/*Check not moving beyond edges of table. Change border back
	to 1px on previously selected cell and change border to 5px on 
	currently selected cell*/
	if (colIndex >= 1)
	{
		cols[colIndex].style.border = '1px solid black';
		--colIndex;
		cols = rows[rowIndex].getElementsByTagName('td');
		cols[colIndex].style.border = '5px solid black';	
	}		
}

/*Moving right, col + 1*/
function rightClick(event)
{
	rows = document.getElementsByTagName('tr');
	cols = rows[rowIndex].getElementsByTagName('td');
	cols[colIndex];
	
	/*Check not moving beyond edges of table. Change border back
	to 1px on previously selected cell and change border to 5px on 
	currently selected cell*/
	if (colIndex <= 2)
	{
		cols[colIndex].style.border = '1px solid black';
		++colIndex;
		cols = rows[rowIndex].getElementsByTagName('td');
		cols[colIndex].style.border = '5px solid black';	
	}	
}

/*Assign click events to the directional buttons*/
document.getElementById('up').addEventListener('click', upClick);
document.getElementById('down').addEventListener('click', downClick);
document.getElementById('left').addEventListener('click', leftClick);
document.getElementById('right').addEventListener('click', rightClick);
	
/*Create markCell function*/
function markCellClick(event)
{
	rows = document.getElementsByTagName('tr');
	cols = rows[rowIndex].getElementsByTagName('td');
	cols[colIndex].style.backgroundColor = 'yellow';
}	

/*Assign click event for markCell function*/	
document.getElementById('markCell').addEventListener('click', markCellClick);	
	
	
	
	
	
	
	
	
	

