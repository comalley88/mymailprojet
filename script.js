var messageCount = document.querySelectorAll('p').length;

document.querySelector('#compteur').textContent = messageCount;

// capture poubelle

document.querySelectorAll(".trash")
.forEach(trash => {
    trash.addEventListener("click", function () {
    trash.parentNode.remove()
    var messageCount = document.querySelectorAll('p').length;
    document.querySelector('#compteur').textContent = messageCount;
} 
    )
});

document.querySelector('#btn-add').addEventListener("click", function() {

    var newDiv = document.querySelector('body').appendChild(document.createElement("div"))
    newDiv.className = "row";
    var newAvatar = newDiv.appendChild(document.createElement("img"));
    newAvatar.className = "avatar";
    newAvatar.src = "avatar-1.jpg";
    var newMessageDiv = newDiv.appendChild(document.createElement("div"));
    newMessageDiv.className= "messageContainer";
    var newName = newMessageDiv.appendChild(document.createElement("h6"));
    newName.textContent = "Adele";
    var lastMessage = newMessageDiv.appendChild(document.createElement("p"));
    lastMessage.textContent = document.querySelector("#text-input").value;
    var newTrash = newDiv.appendChild(document.createElement("img"));
    newTrash.className = "trash";
    newTrash.src = "trash.png";

    document.querySelector("#text-input").value = "";

    var messageCount = document.querySelectorAll('p').length;
    document.querySelector('#compteur').textContent = messageCount;

    document.querySelectorAll(".trash")
.forEach(trash => {
    trash.addEventListener("click", function () {
    trash.parentNode.remove()
    var messageCount = document.querySelectorAll('p').length;
    document.querySelector('#compteur').textContent = messageCount;
} 
    )
});
}

)




