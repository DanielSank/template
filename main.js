import image from "./bitmap.png";

async function render() {
    console.log('button clicked');
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Set background image
    const img = new Image();
    img.src = image;
    img.onload = function() {
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio  = Math.min ( hRatio, vRatio );
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width*ratio, img.height*ratio);
        // Title
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "35px goudy";
        console.log(ctx.shadowOffsetX);
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 1;
        ctx.shadowColor = "#000000";
        ctx.letterSpacing = "4px";
        ctx.fillText(document.getElementById("title-entry").value, 10, 40);
        // Rules
        ctx.font = "24px mplantin";
        ctx.letterSpacing = "2px";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = "#000000";
        ctx.font = "24px mplantin";
        ctx.fillText("Lorem ipsum.", 50, 340);
    };
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");
    // Set canvas size
    const canvas = document.getElementById('mycanvas');
    canvas.style.height = "200mm";
    canvas.style.width = "120mm";
    // Draw box around canvas
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const button = document.createElement('button');
    button.innerText = "dynamic button";
    document.body.appendChild(button);

    console.log("Checking fonts");
    document.fonts.ready.then(function() {
        console.log("fonts ready");
        button.onclick = render;
    });
});

