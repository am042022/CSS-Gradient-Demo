const root = document.documentElement;
const colors = {green:'#00ff00', blue:'#0066ff', red:"#ff0000", orange:"#FF6901", yellow:"#FFE401", purple:"#9301FF"}

window.onload = function(){
    console.log('haha your bad a coding')
    document.getElementsByClassName('color-selector-dropdown')[0].selectedIndex = 1
    document.getElementById("color-selector-hex1").innerHTML = `HEX Code: ${colors.blue}`;

    document.getElementsByClassName('color-selector-dropdown')[1].selectedIndex = 2
    document.getElementById("color-selector-hex2").innerHTML = `HEX Code: ${colors.green}`;        
}

document.addEventListener("mousemove", evt =>{
    //Calculates mouse coordinates percentage
    let mouseX = evt.clientX / innerWidth * 100 + "%";
    let mouseY =  evt.clientY / innerHeight * 100 +"%";
    //console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`)

    //Assigns mouse coord percentages to the CSS variables
    root.style.setProperty("--mouse-x", mouseX)
    root.style.setProperty("--mouse-y", mouseY)
})

//Changes how the gradient is displayed
document.addEventListener("click", evt =>{
    //gets current type
    let cgradientType = getComputedStyle(root).getPropertyValue("--gradient-type");
    console.log(typeof cgradientType)
    switch (cgradientType){
        case "closest-corner":
            console.log("test1")
            root.style.setProperty("--gradient-type", "closest-side");
            break;
        case "closest-side":
            console.log("test2")
            root.style.setProperty("--gradient-type", "farthest-corner");
            break;
        case "farthest-corner":
            console.log("test3")
            root.style.setProperty("--gradient-type", "farthest-side");
            break;
        case "farthest-side":
            console.log("test4")
            root.style.setProperty("--gradient-type", "closest-corner");
            break;
    }
})

function changeColor(num){
    switch(num){
        case 1:
            let a = document.getElementsByClassName('color-selector-dropdown')[0]
            let valueA = a.options[a.selectedIndex].value;
            root.style.setProperty("--color-1", colors[valueA])
            document.getElementById("color-selector-hex1").innerHTML = `HEX Code: ${colors[valueA]}`;
            break;
        case 2:
            let b = document.getElementsByClassName('color-selector-dropdown')[1]
            let valueB = b.options[b.selectedIndex].value;
            root.style.setProperty("--color-2", colors[valueB])
            document.getElementById("color-selector-hex2").innerHTML = `HEX Code: ${colors[valueB]}`;
            break;
    }
}