function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    var button = document.getElementById("myMenu");
    button.classList.add('hidden') 
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var button = document.getElementById("myMenu");
    button.classList.remove ('hidden') 
}

// function switchMode() {
//     document.getElementById("dark-light");
//     let element = document.body;
//     element.classList.toggle("switchmode");
// }

function goHome() {
    document.location.href="/index.html";
}