let getFishId = document.getElementById("demo_opt_3");
let noFishChangeTxt = document.getElementById("noFishChangeTxt");

getFishId.addEventListener("load", () => {
    if (getFishId.checked == true) {
        noFishChangeTxt.innerHTML = "No Fish";
    } else {
        noFishChangeTxt.innerHTML = "Fish";
    }
});
getFishId.addEventListener('click', () => {
    if (getFishId.checked == true) {
        noFishChangeTxt.innerHTML = 'No Fish';
    } else {
        noFishChangeTxt.innerHTML = 'Fish'
    }
})