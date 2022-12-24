
window.onload = function () {
    let playbtn = document.getElementById("playbtn");
    let feedbtn = document.getElementById("feedbtn");
    let petbtn = document.getElementById("petbtn");
    let trainbtn = document.getElementById("trainbtn");


    let Tan = document.getElementById("Tan");
    let petid = document.getElementById("petid");
    let dFace = document.getElementById("dFace");
    let musselid = document.getElementById("musselid");
    let ear = document.getElementById("ear");
    let pawr = document.getElementById("paw-r");
    let pawl = document.getElementById("paw-l");
    let mouth = document.getElementById("mouthid");

    let ball = document.getElementById("ball");
    let bowl = document.getElementById("bowl");





    playbtn.addEventListener("click", function (e) {
        e.preventDefault;
        ball.style.display = "block";
        bowl.style.display = "none";

        ball.classList.remove("ball-move");
        ball.offsetWidth = ball.offsetWidth;
        ball.classList.add("ball-move");

        document.getElementById('dFace').className = '';
        dFace.offsetWidth = dFace.offsetWidth;
        dFace.classList.add("p-head-move");

        document.getElementById('ear').className = '';
        ear.offsetWidth = ear.offsetWidth;
        ear.classList.add("lean");

        document.getElementById("mouthid").className = '';
        mouth.offsetWidth = mouth.offsetWidth;
        mouth.classList.add("mouth-move");

    }, false);


    feedbtn.addEventListener("click", function (e) {
        e.preventDefault;
        ball.style.display = "none";
        bowl.style.display = "block";


        document.getElementById('dFace').className = '';
        dFace.offsetWidth = dFace.offsetWidth;
        dFace.classList.add("face-move");

        musselid.classList.remove("face-move");
        musselid.offsetWidth = musselid.offsetWidth;
        musselid.classList.add("face-move");

        document.getElementById('ear').className = '';
        ear.offsetWidth = ear.offsetWidth;
        ear.classList.add("ear-move");

        document.getElementById('bowl').className = '';
        bowl.offsetWidth = bowl.offsetWidth;
        bowl.classList.add("bowl-move");

        document.getElementById("Tan").className = '';
        Tan.offsetWidth = Tan.offsetWidth;
        Tan.classList.add("body-move");

        document.getElementById("mouthid").className = '';

    }, false);


    petbtn.addEventListener("click", function (e) {
        e.preventDefault;
        ball.style.display = "none";
        bowl.style.display = "none";

        document.getElementById('petid').className = '';
        petid.offsetWidth = petid.offsetWidth;
        petid.classList.add("tongue");

        document.getElementById('dFace').className = '';
        dFace.offsetWidth = dFace.offsetWidth;
        dFace.classList.add("head-move");

        document.getElementById("mouthid").className = '';

    }, false);

    let count = 0;
    trainbtn.addEventListener("click", function (e) {
        e.preventDefault;
        count++;
        if (count % 2 === 1) {
            pawr.classList.remove("paw-move");
            pawr.offsetWidth = pawr.offsetWidth;
            pawr.classList.add("paw-move");
        }
        else {
            pawl.classList.remove("paw-move");
            pawl.offsetWidth = pawl.offsetWidth;
            pawl.classList.add("paw-move");
        }
        document.getElementById("mouthid").className = '';


    }, false);


/*
  Reference: https://css-tricks.com/restart-css-animation/
*/}