
const input = document.getElementById("input");
const listcorp = document.getElementById("list-corp");

function addtask() {
    if (input.value === '') {
        alert("YOU MUST WRITE SOMETHING!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value; 
        listcorp.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
    updateTaskCount();
}
function updateTaskCount() {
    const totalTasks = listcorp.children.length;
    const completedTasks = document.querySelectorAll("#list-corp li.checked").length;
    document.getElementById("task-counter").textContent = 
        `${completedTasks}/${totalTasks} tâches complétées`;
}

listcorp.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        updateTaskCount();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcorp.innerHTML);  
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listcorp.innerHTML = savedData;
    }
    updateTaskCount(); 
}
showTask();
