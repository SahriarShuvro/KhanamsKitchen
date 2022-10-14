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

        let dayShowL = document.querySelectorAll(".p-d");
        let dayShowD = document.querySelectorAll(".p-dd");
        let dayShow1 = document.querySelectorAll(".p-d1");
        let dayShow2 = document.querySelectorAll(".p-d2");
        let dayShow3 = document.querySelectorAll(".p-d3");
        let dayShow4 = document.querySelectorAll(".p-d4");
        for (let i = 0; i <= month; i++) {
            day++
            dayShowL[i].innerHTML = day;
            dayShowD[i].innerHTML = day;
            dayShow1[i].innerHTML = day;
            dayShow2[i].innerHTML = day;
            dayShow3[i].innerHTML = day;
            dayShow4[i].innerHTML = day;
        }
        if (day > month) {
            day = 0
        }
    }

} {
    {
        let clickBTN1 = document.getElementById('expandDtlsID1');
        let clickBTN2 = document.getElementById('expandDtlsID2');
        let clickBTN3 = document.getElementById('expandDtlsID3');
        let clickBTN4 = document.getElementById('expandDtlsID4');

        let ActiveDtls1 = document.getElementById('ActiveDtls1');
        let ActiveDtls2 = document.getElementById('ActiveDtls2');
        let ActiveDtls3 = document.getElementById('ActiveDtls3');
        let ActiveDtls4 = document.getElementById('ActiveDtls4');

        clickBTN1.addEventListener('click', function() {
            ActiveDtls1.classList.toggle('ActiveDtls1')
        })
        clickBTN2.addEventListener('click', function() {
            ActiveDtls2.classList.toggle('ActiveDtls2')
        })
        clickBTN3.addEventListener('click', function() {
            ActiveDtls3.classList.toggle('ActiveDtls3')
        })
        clickBTN4.addEventListener('click', function() {
            ActiveDtls4.classList.toggle('ActiveDtls4')
        })
    } {}

}