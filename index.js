const input = document.getElementById("todolist-input");
const todolist = document.getElementById("todo-list");
 function addlist(){
   if(input.value === ''){
     alert("You must entre a task")
   } 
   else{
      let li = document.createElement("li")
      li.innerHTML = input.value;
      todolist.appendChild(li)
      let span = document.createElement("span")
      span.innerHTML = "\u00d7"
      li.appendChild(span)
   }

   input.value = "";
   saveData()
}



todolist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData() 

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

        saveData()
    }
}, false)


function saveData(){
    localStorage.setItem("data", todolist.innerHTML)
}
function constantdata(){
    todolist.innerHTML = localStorage.getItem("data")
}
constantdata()









