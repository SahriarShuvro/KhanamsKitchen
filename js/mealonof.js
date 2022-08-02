{
    let disableCheckL = document.querySelectorAll(".check-dis");
    let disableCheckD = document.querySelectorAll(".check-d");

    const d = new Date();
    let day = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    for (let i = 0; i < 1; i++) {
        day++;
        if (hour > 00) {
            disableCheckL[i].setAttribute("disabled", "disabled");
        }
    }
    for (let i = 0; i < 1; i++) {
        day++;
        if (hour > 14) {
            disableCheckD[i].setAttribute("disabled", "disabled");
        } else if (minute > 30) {
            disableCheckD[i].setAttribute("disabled", "disabled");

        }
    }

}

{
    {
        let dayOfMonth = [30, 27, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30]
        let d = new Date();
        let month = dayOfMonth[d.getMonth()];
        let day = d.getDate() - 1;

        let dayShow = document.querySelectorAll(".p-d");
        for (let i = 0; i <= month; i++) {
            day++
            dayShow[i].innerHTML = day;
            if (day > month) {
                day = 0
            }
        }
    } {
        let dayOfMonth = [30, 27, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30]
        let d = new Date();
        let month = dayOfMonth[d.getMonth()];
        let day = d.getDate() - 1;

        let dayShow = document.querySelectorAll(".p-dd");
        for (let i = 0; i <= month; i++) {
            day++
            dayShow[i].innerHTML = day;
            if (day > month) {
                day = 0
            }
        }
    }
}