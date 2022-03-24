var completedItems=JSON.parse(localStorage.getItem("completedtodo"));
console.log(completedItems);

completedItems.map(function (elem,index) {
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=elem.itemName;
    var td2=document.createElement("td");
    td2.innerText=elem.itemQty;
    var td3=document.createElement("td");
    td3.innerText=elem.itemPrior;

    tr.append(td1,td2,td3);
    document.querySelector("#body").append(tr);
})