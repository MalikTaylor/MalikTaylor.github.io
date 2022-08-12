filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("project-work-block");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    w3AddClass(x[i], "hide");
    if (x[i].className.indexOf(c) > -1){
        w3RemoveClass(x[i], "hide");
        w3AddClass(x[i], "show");
    } 
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("project-nav-container");
var btns = btnContainer.getElementsByClassName("project-nav-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
    console.log(current)
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active") 
    this.className += " active";
    current[0].classList.remove("active") 
    this.className += " active";
    });
}
