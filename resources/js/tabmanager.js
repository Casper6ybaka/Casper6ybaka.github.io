const main = document.getElementById("main");
const brukerstotte = document.getElementById("brukerstotte");

const tabs = [main, brukerstotte]
function gotoBrukerstotte() {
    tabs.forEach(tab => tab.style.display = 'none');
    brukerstotte.style.display = 'block';
}

function gotoMain() {
    tabs.forEach(tab => tab.style.display = 'none');
    main.style.display = 'block';
}



function showWeek(weekid) {
    document.getElementById(weekid).style.display = "block";
}