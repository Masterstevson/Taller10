
// let btn_green = document.getElementsById("btngreen");
let body = document.getElementById("body");
let nav_div_1 = document.getElementById("nav-div-1");
let div_nav = document.getElementById("div-nav");
var numero = 1;

const dato = sessionStorage.getItem('dato');

const container = document.getElementById("container");
const containerdos = document.getElementById("containerdos");

container.addEventListener('click',(e)=>{
	if (e.target.classList.contains('div-acordeon')) 
	{
		e.target.parentElement.classList.toggle('scale')
	}
	
});

containerdos.addEventListener('click',(a)=>{
	if (a.target.classList.contains('div-acordeon')) 
	{
		a.target.parentElement.classList.toggle('scale2')
	}
	
});


function changeTema1(x)
{
	
		// body.style.backgroundColor = "green";
		body.style.backgroundColor = x.value;
		nav_div_1.style.backgroundColor = x.value;
		div_nav.style.backgroundColor = x.value;



		if (x.value == "#9E23FF") 
		{
			sessionStorage.setItem('dato', 4);
		}else if (x.value == "#147CF1") 
		{
			sessionStorage.setItem('dato', 1);
		}else if (x.value == "#FF9E1B") 
		{
			sessionStorage.setItem('dato', 2);
		}
		else if (x.value == "#FF19E7") 
		{
			sessionStorage.setItem('dato', 3);
		}
		
		
			
		
		
	
}

function colorInicial()
{

	if (dato == 4) 
	{
		body.style.backgroundColor = "#9E23FF";
		nav_div_1.style.backgroundColor = "#9E23FF";
		div_nav.style.backgroundColor = "#9E23FF";

	}else if (dato == 1) 
	{
		body.style.backgroundColor = "#147CF1";
		nav_div_1.style.backgroundColor = "#147CF1";
		div_nav.style.backgroundColor = "#147CF1";
	}
	else if (dato == 2) 
	{
		body.style.backgroundColor = "#FF9E1B";
		nav_div_1.style.backgroundColor = "#FF9E1B";
		div_nav.style.backgroundColor = "#FF9E1B";
	}
	else if (dato == 3) 
	{
		body.style.backgroundColor = "#FF19E7";
		nav_div_1.style.backgroundColor = "#FF19E7";
		div_nav.style.backgroundColor = "#FF19E7";
	}
	else  
	{
		body.style.backgroundColor = "#147CF1";

	}

	
}