// Navbar
document.getElementById("overlay").addEventListener('click', closeNav);


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    var button = document.getElementById("myMenu");
    button.classList.add('hidden') 
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var button = document.getElementById("myMenu");
    button.classList.remove ('hidden') 
    document.getElementById("overlay").style.display = "none";
}

// Switch between dark and light mode
function switchMode() {
    document.getElementById("modeLight");
    let element = document.body;
    element.classList.toggle("switchmode");
}

// Home icon function
function goHome() {
    document.location.href="../index.html";
}