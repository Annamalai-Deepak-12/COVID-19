var container = document.createElement("div");
container.style.textAlign="center";
container.setAttribute("class","container");
var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
container.append(input);
var button= document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary")
button.innerHTML="SEARCH"
button.addEventListener("click",foo);
container.append(button);
var active = document.createElement("div");
active.setAttribute("id","active")
container.append(active);
var confirm = document.createElement("div");
confirm.setAttribute("id","confirm");
container.append(confirm)
var death = document.createElement("div");
death.setAttribute("id","death")
container.append(death);
document.body.append(container);


async function foo(){
  let countryname=document.getElementById("country").value;
  let url = `https://api.covid19api.com/dayone/country/${countryname}`;
  let res = await fetch(url);
  let res1= await res.json();
  console.log(res1);
  let index = res1.length-1;
  console.log(res1[index].Active);
  active.innerHTML=`Total Active cases:${res1[index].Active}`;
  confirm.innerHTML=`Total Confirmed cases:${res1[index].Confirmed}`;
  death.innerHTML=`Total Death cases:${res1[index].Deaths}`
}
