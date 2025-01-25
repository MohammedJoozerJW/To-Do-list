const inp = document.getElementById("inp")
const btn = document.getElementById("btn")
const items = document.querySelector(".items")

btn.addEventListener("click", () => {
    if (inp.value.trim()) {
        const li = document.createElement("li")
        li.innerText = inp.value;
        const btn2 = document.createElement("button")
        btn2.innerText = "Del"
        btn2.setAttribute("class", "btn")
        li.appendChild(btn2);
        items.appendChild(li);

        btn2.addEventListener("click", () => {
            items.removeChild(li)
        })
        inp.value = "";
    }
})