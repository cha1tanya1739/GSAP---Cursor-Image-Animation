let cursor = document.querySelector("#cursor");
var img = document.querySelector("#image")

window.addEventListener('mousemove', function(debts) {
    gsap.to(cursor, {
        x:debts.x,
        y:debts.y,
        duration:0.5,
        ease:"back.out"
    });
});

img.addEventListener('mouseenter', function() {
    cursor.innerHTML = "View More";
    gsap.to("#image img", {
        scale:1.07,
        duration:0.5
    });
    gsap.to(cursor, {
        scale:5,
        backgroundColor:"#ffffff75"
    });
});

img.addEventListener('mouseleave', function() {
    cursor.innerHTML = "";
    gsap.to("#image img", {
        scale:1,
        duration:0.5
    });

    gsap.to(cursor, {
        scale:1,
        backgroundColor:"#ffffff"
    });
});