const arr = [
  {
    name: "Alex",
    age: 22,
    profetion: "Developer",
  },
  {
	name: "Andres",
    age: 19,
    profetion: "Developer",
  },
  {
  name: "Yeison",
  age: 19,
  profetion: "Developer",
},
{
name: "Andres",
age: 19,
profetion: "Developer",
}
];
const users = document.getElementById("users");
const filtro = document.getElementById("filtro")

function Present(arr) {
	users.innerHTML= ''
  arr.map(user => {
	let res = `Hi my name is ${user.name} and i have ${user.age} years of age`
	users.innerHTML += `
	<li>${res}</li>
	`;		

})
}

function filter(){
	const unick = [...new Set(arr.map(user => user.age))];
	unick.forEach(ages => {
		let res = `
		<option value="${ages}">${ages}</option>
		`;
		filtro.innerHTML += res
		
	})
}

function MostrarFiltro(){
	filtro.addEventListener('change', function(){
		let select = parseInt(filtro.value)
		let users = arr.filter(user => user.age === select)	
	    Present(users)
	})

}

MostrarFiltro()
filter()
Present(arr);
