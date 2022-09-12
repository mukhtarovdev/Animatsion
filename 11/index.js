object = [
{
    ism: "mustafo",
    familiya: "mukhtarov",
    yosh: 14,
},
{
    ism: "andrey",
    familiya: "gandreyev",
    yosh: 20,
},
{
    ism: "axmad",
    familiya: "raxmatboyev",
    yosh: 99,
},
{
    ism: "axmad",
    familiya: "raxmatboyev",
    yosh: 99,
},
{
    ism: "axmad",
    familiya: "raxmatboyev",
    yosh: 99,
},
{
    ism: "axmad",
    familiya: "raxmatboyev",
    yosh: 99,
},
{
    ism: "axmad",
    familiya: "raxmatboyev",
    yosh: 99,
},
{
    ism: "axmad",
    familiya: "raxmatboyev",
    yosh: 99,
},
{
    ism: "axmad",
    familiya: "raxmatboyev",
    yosh: 99,
},
{
    ism: "axmad",
    familiya: "raxmatboyev",
    yosh: 99,
}
]
let table = document.querySelector("table")
let tbody = document.querySelector(".tbody")
let button = document.querySelector(".button")

let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")


let tahrirButton = document.querySelector(".tahrirbutton")

table.classList.add("table", "table-dark")

object.forEach((element, index) => { 
    button11 = document.createElement("button");
    button11.innerText="Ochirish";
    button11.classList.add("btn","btn-danger");

    button22= document.createElement("button")
    button22.classList.add("btn","btn-success")
    button22.innerText="Tahrirlash"

    tr = document.createElement("tr")
    td1 = document.createElement("td")
    td1.innerText=index+1
    td2 = document.createElement("td")
    td2.innerText=element.ism
    td3 = document.createElement("td")
    td3.innerText=element.familiya
    td4 = document.createElement("td")
    td4.innerText=element.yosh
    td5 = document.createElement("td")
    td5.appendChild(button11)
    td6 = document.createElement("td")
    td6.appendChild(button22)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tbody.appendChild(tr)


            
        button22.addEventListener("click",function () {
        
        inp1.value=element.ism
        inp2.value=element.familiya
        inp3.value=element.yosh

    })
   
});
tahrirButton.addEventListener("click",function (ie) {
    ie.preventDefault() 
    object.splice(index+1,{
        ism : inp1.value,
        familiya : inp2.value,
        yosh: inp3.value
    })  
})
          

       button.addEventListener("click", function (hodisa) {
        hodisa.preventDefault()
        tbody.innerHTML=""
        object.push(
            {
                ism : inp1.value,
                familiya : inp2.value,
                yosh : inp3.value
            })
        
object.forEach((element, index) => { 
    button11 = document.createElement("button");
    button11.innerText="Ochirish";
    button11.classList.add("btn","btn-danger");

    button22= document.createElement("button")
    button22.classList.add("btn","btn-success")
    button22.innerText="Tahrirlash"

    tr = document.createElement("tr")
    td1 = document.createElement("td")
    td1.innerText=index+1
    td2 = document.createElement("td")
    td2.innerText=element.ism
    td3 = document.createElement("td")
    td3.innerText=element.familiya
    td4 = document.createElement("td")
    td4.innerText=element.yosh
    td5 = document.createElement("td")
    td5.appendChild(button11)
    td6 = document.createElement("td")
    td6.appendChild(button22)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tbody.appendChild(tr)
});
let div  = document.querySelector("#div")
if (inp1.value=="" || inp2.value=="" || inp3.value=="") {
    let h1a = document.createElement("h1")
    h1a.innerHTML ="Iltimos inputni tuldiring"
    h1a.style.fontSize = 20+"px"
    h1a.style.color = "red"
    h1a.style.textAlign="center"
    div.innerHTML=""


    div.appendChild(h1a)

}
else{
    object.push({
        ism:inp1.value,
        familiya:inp2.value,
        yosh:inp3.value
    })
}
})
function editHtmlTbleSelectedRow() 
{
    let  rIndex,
     tablee = document.getElementById("table");
      tablee.rows[rIndex].colls[0].innerHTML = inp1;
      tablee.rows[rIndex].colls[1].innerHTML = inp2;
      tablee.rows[rIndex].colls[2].innerHTML = inp3;
}
button11.addEventListener('click', editHtmlTbleSelectedRow);