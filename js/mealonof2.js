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
}

// Check&Unchek With Day 

// Meal On/Off Section 
{
    { // Lunch Section
        let clickToCheckUncheckL = document.querySelector('.clickToCheckUncheckL');
        let txtCheckUncheckL = document.querySelector('.txtCheckUncheckL');
        let txtOnOfL = document.querySelector('.txtOnOfL');
        let dayCheckForL = document.querySelectorAll('.dayCheckForL');



        window.addEventListener('load', OnLoadFuntion => {
            if (clickToCheckUncheckL.checked == true) {
                txtCheckUncheckL.innerHTML = "Meal Off";
                txtOnOfL.innerHTML = "Untill I Turn Off";
                for (let i = 0; i < dayCheckForL.length; i++) {
                    const lunchCheck = dayCheckForL[i];
                    lunchCheck.setAttribute('checked', 'checked');
                }
            } else {
                txtCheckUncheckL.innerHTML = "Meal On";

                txtOnOfL.innerHTML = "Untill I Turn On";
                for (let i = 0; i < dayCheckForL.length; i++) {
                    const lunchCheck = dayCheckForL[i];
                    lunchCheck.removeAttribute('checked', 'checked');
                }
            }
        })


        clickToCheckUncheckL.addEventListener('click', OnClickFuntion => {
            if (clickToCheckUncheckL.checked == true) {
                txtCheckUncheckL.innerHTML = "Meal Off";
                txtOnOfL.innerHTML = "Untill I Turn Off";


                for (let i = 0; i < dayCheckForL.length; i++) {
                    const lunchCheck = dayCheckForL[i];
                    lunchCheck.setAttribute('checked', 'checked');
                }
            } else {
                txtCheckUncheckL.innerHTML = "Meal On";
                txtOnOfL.innerHTML = "Untill I Turn On";

                for (let i = 0; i < dayCheckForL.length; i++) {
                    const lunchCheck = dayCheckForL[i];
                    lunchCheck.removeAttribute('checked', 'checked');
                }
            }
        })
    }

    { // Dinner Section
        let clickToCheckUncheckD = document.querySelector('.clickToCheckUncheckD');
        let txtCheckUncheckD = document.querySelector('.txtCheckUncheckD');
        let txtOnOfD = document.querySelector('.txtOnOfD');
        let dayCheckForD = document.querySelectorAll('.dayCheckForD');



        window.addEventListener('load', OnLoadFuntionD => {
            if (clickToCheckUncheckD.checked == true) {
                txtCheckUncheckD.innerHTML = "Meal Off";
                txtOnOfD.innerHTML = "Untill I Turn Off";
                for (let i = 0; i < dayCheckForD.length; i++) {
                    const lunchCheck = dayCheckForD[i];
                    lunchCheck.setAttribute('checked', 'checked');
                }
            } else {
                txtCheckUncheckD.innerHTML = "Meal On";

                txtOnOfD.innerHTML = "Untill I Turn On";
                for (let i = 0; i < dayCheckForD.length; i++) {
                    const lunchCheck = dayCheckForD[i];
                    lunchCheck.removeAttribute('checked', 'checked');
                }
            }
        })


        clickToCheckUncheckD.addEventListener('click', OnClickFuntionD => {
            if (clickToCheckUncheckD.checked == true) {
                txtCheckUncheckD.innerHTML = "Meal Off";
                txtOnOfD.innerHTML = "Untill I Turn Off";


                for (let i = 0; i < dayCheckForD.length; i++) {
                    const lunchCheck = dayCheckForD[i];
                    lunchCheck.setAttribute('checked', 'checked');
                }
            } else {
                txtCheckUncheckD.innerHTML = "Meal On";
                txtOnOfD.innerHTML = "Untill I Turn On";

                for (let i = 0; i < dayCheckForD.length; i++) {
                    const lunchCheck = dayCheckForD[i];
                    lunchCheck.removeAttribute('checked', 'checked');
                }
            }
        })
    }


    // Package Section

    { //Lunch Section
        { // Normal Section
            let clickToCheckUncheckNormalL = document.querySelector('.clickToCheckUncheckNormalL');
            let txtCheckUncheckNormalL = document.querySelector('.txtCheckUncheckNormalL');
            let txtOnOfNormalL = document.querySelector('.txtOnOfNormalL');
            let dayCheckForNormalL = document.querySelectorAll('.dayCheckForNormalL');



            window.addEventListener('load', OnLoadFuntion => {
                if (clickToCheckUncheckNormalL.checked == true) {
                    txtCheckUncheckNormalL.innerHTML = "Meal Off";
                    txtOnOfNormalL.innerHTML = "Untill I Turn Off";
                    for (let i = 0; i < dayCheckForNormalL.length; i++) {
                        const lunchCheckNormal = dayCheckForNormalL[i];
                        lunchCheckNormal.setAttribute('checked', 'checked');
                    }
                } else {
                    txtCheckUncheckNormalL.innerHTML = "Meal On";

                    txtOnOfNormalL.innerHTML = "Untill I Turn On";
                    for (let i = 0; i < dayCheckForNormalL.length; i++) {
                        const lunchCheckNormal = dayCheckForNormalL[i];
                        lunchCheckNormal.removeAttribute('checked', 'checked');
                    }
                }
            })


            clickToCheckUncheckNormalL.addEventListener('click', OnClickFuntion => {
                if (clickToCheckUncheckNormalL.checked == true) {
                    txtCheckUncheckNormalL.innerHTML = "Meal Off";
                    txtOnOfNormalL.innerHTML = "Untill I Turn Off";


                    for (let i = 0; i < dayCheckForNormalL.length; i++) {
                        const lunchCheckNormal = dayCheckForNormalL[i];
                        lunchCheckNormal.setAttribute('checked', 'checked');
                    }
                } else {
                    txtCheckUncheckNormalL.innerHTML = "Meal On";
                    txtOnOfNormalL.innerHTML = "Untill I Turn On";

                    for (let i = 0; i < dayCheckForNormalL.length; i++) {
                        const lunchCheckNormal = dayCheckForNormalL[i];
                        lunchCheckNormal.removeAttribute('checked', 'checked');
                    }
                }
            })
        }

        { // Spacial Section
            let clickToCheckUncheckSpacialL = document.querySelector('.clickToCheckUncheckSpacialL');
            let txtCheckUncheckSpacialL = document.querySelector('.txtCheckUncheckSpacialL');
            let txtOnOfSpacialL = document.querySelector('.txtOnOfSpacialL');
            let dayCheckForSpacialL = document.querySelectorAll('.dayCheckForSpacialL');



            window.addEventListener('load', OnLoadFuntion => {
                if (clickToCheckUncheckSpacialL.checked == true) {
                    txtCheckUncheckSpacialL.innerHTML = "Meal Off";
                    txtOnOfSpacialL.innerHTML = "Untill I Turn Off";
                    for (let i = 0; i < dayCheckForSpacialL.length; i++) {
                        const lunchCheckSpacial = dayCheckForSpacialL[i];
                        lunchCheckSpacial.setAttribute('checked', 'checked');
                    }
                } else {
                    txtCheckUncheckSpacialL.innerHTML = "Meal On";

                    txtOnOfSpacialL.innerHTML = "Untill I Turn On";
                    for (let i = 0; i < dayCheckForSpacialL.length; i++) {
                        const lunchCheckSpacial = dayCheckForSpacialL[i];
                        lunchCheckSpacial.removeAttribute('checked', 'checked');
                    }
                }
            })


            clickToCheckUncheckSpacialL.addEventListener('click', OnClickFuntion => {
                if (clickToCheckUncheckSpacialL.checked == true) {
                    txtCheckUncheckSpacialL.innerHTML = "Meal Off";
                    txtOnOfSpacialL.innerHTML = "Untill I Turn Off";


                    for (let i = 0; i < dayCheckForSpacialL.length; i++) {
                        const lunchCheckSpacial = dayCheckForSpacialL[i];
                        lunchCheckSpacial.setAttribute('checked', 'checked');
                    }
                } else {
                    txtCheckUncheckSpacialL.innerHTML = "Meal On";
                    txtOnOfSpacialL.innerHTML = "Untill I Turn On";

                    for (let i = 0; i < dayCheckForSpacialL.length; i++) {
                        const lunchCheckSpacial = dayCheckForSpacialL[i];
                        lunchCheckSpacial.removeAttribute('checked', 'checked');
                    }
                }
            })
        }

    }

    { //Dinner Section
        { // Normal Section
            let clickToCheckUncheckNormalD = document.querySelector('.clickToCheckUncheckNormalD');
            let txtCheckUncheckNormalD = document.querySelector('.txtCheckUncheckNormalD');
            let txtOnOfNormalD = document.querySelector('.txtOnOfNormalD');
            let dayCheckForNormalD = document.querySelectorAll('.dayCheckForNormalD');



            window.addEventListener('load', OnLoadFuntion => {
                if (clickToCheckUncheckNormalD.checked == true) {
                    txtCheckUncheckNormalD.innerHTML = "Meal Off";
                    txtOnOfNormalD.innerHTML = "Untill I Turn Off";
                    txtOnOfNormalD.innerHTML = "Untill I Turn Off";
                    for (let i = 0; i < dayCheckForNormalD.length; i++) {
                        const lunchCheckNormal = dayCheckForNormalD[i];
                        lunchCheckNormal.setAttribute('checked', 'checked');
                    }
                } else {
                    txtCheckUncheckNormalD.innerHTML = "Meal On";

                    txtOnOfNormalD.innerHTML = "Untill I Turn On";
                    txtOnOfNormalD.innerHTML = "Untill I Turn On";
                    for (let i = 0; i < dayCheckForNormalD.length; i++) {
                        const lunchCheckNormal = dayCheckForNormalD[i];
                        lunchCheckNormal.removeAttribute('checked', 'checked');
                    }
                }
            })


            clickToCheckUncheckNormalD.addEventListener('click', OnClickFuntion => {
                if (clickToCheckUncheckNormalD.checked == true) {
                    txtCheckUncheckNormalD.innerHTML = "Meal Off";
                    txtOnOfNormalD.innerHTML = "Untill I Turn Off";
                    txtOnOfNormalD.innerHTML = "Untill I Turn Off";


                    for (let i = 0; i < dayCheckForNormalD.length; i++) {
                        const lunchCheckNormal = dayCheckForNormalD[i];
                        lunchCheckNormal.setAttribute('checked', 'checked');
                    }
                } else {
                    txtCheckUncheckNormalD.innerHTML = "Meal On";
                    txtOnOfNormalD.innerHTML = "Untill I Turn On";
                    txtOnOfNormalD.innerHTML = "Untill I Turn On";

                    for (let i = 0; i < dayCheckForNormalD.length; i++) {
                        const lunchCheckNormal = dayCheckForNormalD[i];
                        lunchCheckNormal.removeAttribute('checked', 'checked');
                    }
                }
            })
        }

        { // Spacial Section
            let clickToCheckUncheckSpacialD = document.querySelector('.clickToCheckUncheckSpacialD');
            let txtCheckUncheckSpacialD = document.querySelector('.txtCheckUncheckSpacialD');
            let txtOnOfSpacialD = document.querySelector('.txtOnOfSpacialD');
            let dayCheckForSpacialD = document.querySelectorAll('.dayCheckForSpacialD');



            window.addEventListener('load', OnLoadFuntion => {
                if (clickToCheckUncheckSpacialD.checked == true) {
                    txtCheckUncheckSpacialD.innerHTML = "Meal Off";
                    txtOnOfSpacialD.innerHTML = "Untill I Turn Off";
                    for (let i = 0; i < dayCheckForSpacialD.length; i++) {
                        const lunchCheckSpacial = dayCheckForSpacialD[i];
                        lunchCheckSpacial.setAttribute('checked', 'checked');
                    }
                } else {
                    txtCheckUncheckSpacialD.innerHTML = "Meal On";

                    txtOnOfSpacialD.innerHTML = "Untill I Turn On";
                    for (let i = 0; i < dayCheckForSpacialD.length; i++) {
                        const lunchCheckSpacial = dayCheckForSpacialD[i];
                        lunchCheckSpacial.removeAttribute('checked', 'checked');
                    }
                }
            })


            clickToCheckUncheckSpacialD.addEventListener('click', OnClickFuntion => {
                if (clickToCheckUncheckSpacialD.checked == true) {
                    txtCheckUncheckSpacialD.innerHTML = "Meal Off";
                    txtOnOfSpacialD.innerHTML = "Untill I Turn Off";


                    for (let i = 0; i < dayCheckForSpacialD.length; i++) {
                        const lunchCheckSpacial = dayCheckForSpacialD[i];
                        lunchCheckSpacial.setAttribute('checked', 'checked');
                    }
                } else {
                    txtCheckUncheckSpacialD.innerHTML = "Meal On";
                    txtOnOfSpacialD.innerHTML = "Untill I Turn On";

                    for (let i = 0; i < dayCheckForSpacialD.length; i++) {
                        const lunchCheckSpacial = dayCheckForSpacialD[i];
                        lunchCheckSpacial.removeAttribute('checked', 'checked');
                    }
                }
            })
        }

    }
}


// Regular CheckBox Section 

{ //Lunch
    let RegularCheckeNormalL = document.querySelector('.RegularCheckeNormalL');
    let RegularCheckeSpacilL = document.querySelector('.RegularCheckeSpacilL');
    window.addEventListener('load', () => {
        if (RegularCheckeNormalL.checked !== true) {
            RegularCheckeSpacilL.setAttribute('checked', 'checked');
        } else {

            RegularCheckeSpacilL.removeAttribute('checked', 'checked');
        }
    })
    RegularCheckeNormalL.addEventListener('click', () => {
        if (RegularCheckeNormalL.checked == true) {
            RegularCheckeSpacilL.removeAttribute('checked', 'checked');
        } else {
            RegularCheckeSpacilL.setAttribute('checked', 'checked');

        }
    })
    RegularCheckeSpacilL.addEventListener('click', () => {
        if (RegularCheckeSpacilL.checked == true) {
            RegularCheckeNormalL.removeAttribute('checked', 'checked');
        } else {
            RegularCheckeNormalL.setAttribute('checked', 'checked');

        }
    })
}

{ //Dinner
    let RegularCheckeNormalD = document.querySelector('.RegularCheckeNormalD');
    let RegularCheckeSpacilD = document.querySelector('.RegularCheckeSpacilD');
    window.addEventListener('load', () => {
        if (RegularCheckeNormalD.checked !== true) {
            RegularCheckeSpacilD.setAttribute('checked', 'checked');
        } else {

            RegularCheckeSpacilD.removeAttribute('checked', 'checked');
        }
    })
    RegularCheckeNormalD.addEventListener('click', () => {
        if (RegularCheckeNormalD.checked == true) {
            RegularCheckeSpacilD.removeAttribute('checked', 'checked');
        } else {
            RegularCheckeSpacilD.setAttribute('checked', 'checked');

        }
    })
    RegularCheckeSpacilD.addEventListener('click', () => {
        if (RegularCheckeSpacilD.checked == true) {
            RegularCheckeNormalD.removeAttribute('checked', 'checked');
        } else {
            RegularCheckeNormalD.setAttribute('checked', 'checked');

        }
    })
}