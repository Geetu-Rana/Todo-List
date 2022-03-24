document.querySelector("#form").addEventListener("submit",myfunction);
if(localStorage.getItem("tododata")==null){
var todolist=[];
}else{
    todolist= JSON.parse(localStorage.getItem("tododata"))
}

function myfunction(){
    event.preventDefault();
    var name =document.querySelector("#name").value;
    var quentity=document.querySelector("#qty").value;
    var prior = document.querySelector("#priority").value;
    
    var todoObj= {
        itemName: name,
        itemQty: quentity,
        itemPrior: prior,
    };
todolist.push(todoObj)
localStorage.setItem("tododata", JSON.stringify(todolist));
}

