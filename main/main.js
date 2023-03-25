var today=new Date();
var month=today.getMonth();;
console.log(month);	

if(month<=3)
	{
		document.write("Fall");
		document.write("<br>");
	}
	else if(3<month && 7<=month)
	{
		document.write("Summer");
		document.write("<br>");
	}
	else
	{
		document.write("Winter");
		document.write("<br>");
	}
	
	
	
	
	
	