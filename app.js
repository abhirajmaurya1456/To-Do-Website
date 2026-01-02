let input=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("#add");
// let del=document.querySelector("#delete");
btn.addEventListener("click",function(){
    // ul.insertAdjacentHTML("beforeend",`<li>${input.value}</li>`);
    let li=document.createElement("li");
    let del=document.createElement("button");
    del.classList.add("delete");
    del.innerText="delete";
    li.innerText=input.value;
    li.append(del);
    ul.appendChild(li);
    input.value=""; 
});
// let delbtns=document.querySelectorAll(".delete");
// for (let delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let parent=delbtn.parentElement;
//         parent.remove();
//         console.log("deleted");
//     });
// }

    ul.addEventListener("click",function(e){
        // console.log(e.target.nodeName);
        if(e.target.nodeName=="BUTTON"){
            let listItem=e.target.parentElement;
            console.log(listItem,"deleted");
            listItem.remove();
        }
    });
