{
    {
        let disableCheck = document.querySelectorAll(".check-dis");

        const d = new Date("July 30, 2022 21:00:00");
        let day = d.getDate();
        let hour = d.getHours();
        let minute = d.getMinutes();
        for (let i = 0; i < 1; i++) {
            day++;
            if (hour > 00) {
                disableCheck[i].setAttribute("disabled", "disabled");
            } else if (minute > 30) {
                disableCheck[i].setAttribute("disabled", "disabled");

            }
        }
    }

    // Dinner 

    {
        let disableCheck = document.querySelectorAll(".check-d");

        const d = new Date();
        let day = d.getDate();
        let hour = d.getHours();
        let minute = d.getMinutes();
        for (let i = 0; i < 1; i++) {
            day++;
            if (hour > 14) {
                disableCheck[i].setAttribute("disabled", "disabled");
            } else if (minute > 30) {
                disableCheck[i].setAttribute("disabled", "disabled");

            }
        }
    }

    // {
    //     let disableCheck = document.querySelectorAll(".check-d");

    //     const d = new Date();
    //     let day = d.getDate();
    //     for (let i = 0; i < 1; i++) {
    //         day++;
    //         disableCheck[i].setAttribute("disabled", "disabled");
    //     }
    // }
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
    }
}