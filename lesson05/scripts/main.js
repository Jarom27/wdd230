const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", e => {
    if (input.value !== '') {
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "✖️";
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener("click", e => {
            list.removeChild(li);
            input.focus();
        });
        input.value = "";
    }
    else {
        alert("You need to write something!!!");
        input.focus();
    }
});
input.focus();