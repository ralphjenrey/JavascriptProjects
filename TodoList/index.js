

const ul = document.getElementById("myUL");
const li = document.getElementsByTagName("li");
let i = document.querySelectorAll("i");
function newElement(){
	const input = document.getElementById("myInput").value;
  const item = document.createTextNode(input);
  const newList = document.createElement("li");
  const ii = document.createElement("i");
  ul.appendChild(newList);
  newList.appendChild(item);
  
   setI(ii, newList);
     i = document.querySelectorAll("i");
     i.forEach((click) => {
 click.addEventListener("click", (i) => {
 		const remove = i.target.parentNode;
    remove.remove();
 })
})
}

function setI(item, target){
	item.classList.add("fa","fa-close");
  item.setAttribute('onclick', 'close()');
  target.appendChild(item);
}

const list = ul.querySelectorAll("li");
//Get all list of the ul
list.forEach((li) => {
	const i = document.createElement("i");
  setI(i, li);
});







