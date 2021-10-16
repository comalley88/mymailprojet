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


