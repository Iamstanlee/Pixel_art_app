function makeGrid()
{
var height = prompt("Enter Height of grid :");
var width = prompt("Enter Width of grid :");

if((height <= 35) && (width <= 75))
{
	var table = $('#pixel');
 	var row = 0;
while( row < height)
	{
	table.append('<tr>');
	var column = 0;
while( column < width)
	{
	table.append("<td>");
	column++;
	}
	row++;
	}
}
	else
	{
		alert("Maximum grid size is 35(height) by 75(width).");
	}
}

$('#buttonB').on('click',function(e)
{
	e.preventDefault();
	makeGrid();
});

//Apply color to boxes
 $('#pixel').on('click','td', function(){
 	var Color = $('#colorPicker').val();
 	$(this).css('background-color',Color);
 });

 //Eraser
 $('#pixel').on('dblclick','td',function(){
 	$(this).css('background-color','#fff');
 });

//how to Use
 $('#buttonA').on('click',function(e)
{
	e.preventDefault();
	alert("\tHOW TO USE :\n 1. Start by choosing a preferred grid size (max : 35 by 75).\n 2. Pick a color from the color bar.\n 3. Color a box by clicking on it, Double-Click to remove color, Press the Small buttons to RESET grid to default and FILL to fill background with desired color.\n\t\t ENJOY! ");
});

//Reset background(table)
function Reset()
{
	$('td').removeAttr('style');
	$('table').removeAttr('style');
}

$('#buttonC').on('click',function(e){
	e.preventDefault();
 	Reset();
 });

// Fill
function Fill()
{
	var Color = $('#colorPicker').val();
	$('#pixel').css('background-color',Color);
}

$('#buttonD').on('click',function(e){
	e.preventDefault();
 	Fill();
 });



