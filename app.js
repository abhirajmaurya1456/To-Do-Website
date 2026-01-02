let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("#add");
btn.addEventListener("click", function () {
    let li = document.createElement("li");
    let del = document.createElement("button");
    del.classList.add("delete");
    del.innerText = "delete";
    li.innerText = input.value;
    li.append(del);
    ul.appendChild(li);
    input.value = "";
});
ul.addEventListener("click", function (e) {
    if (e.target.nodeName == "BUTTON") {
        let listItem = e.target.parentElement;
        console.log(listItem, "deleted");
        listItem.remove();
    }
});
