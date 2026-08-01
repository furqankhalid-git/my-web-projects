document.getElementById("addBtn").addEventListener("click", function() {
    let task = document.getElementById("taskInput").value;
    
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task + ' <button onclick="this.parentElement.remove()">Delete</button>';
    
    document.getElementById("list").appendChild(li);
    
    document.getElementById("taskInput").value = "";
});
