{
    let lunchClick = document.getElementById('lunch-ck');
    let dinnerClick = document.getElementById('dinner-ck');
    let lunchSection = document.getElementById('lunchSing');
    let dinnerSection = document.getElementById('dinnerSing');


    lunchClick.addEventListener('click', function() {
        lunchSection.classList.toggle('lunchDisableSing');
    });
    dinnerClick.addEventListener('click', function() {
        dinnerSection.classList.toggle('dinnerDisableSing');
    });
}



// Blank Err 

{
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault();

        checkData();
    });

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    let location = document.getElementById("location");
    let profession = document.getElementById("profession");
    let locationLunch = document.getElementById("locationLunch");
    let enterLunch = document.getElementById("enterLunch");
    let locationDinner = document.getElementById("locationDinner");
    let enterDinner = document.getElementById("enterDinner");


    function checkData() {
        var usernameValue = username.value.trim();
        var emailValue = email.value.trim();
        var phoneValue = phone.value.trim();
        var pass1Value = pass1.value.trim();
        var pass2Value = pass2.value.trim();
        var locationValue = location.value.trim();
        var professionValue = profession.value.trim();
        var locationLunchValue = locationLunch.value.trim();
        var enterLunchValue = enterLunch.value.trim();
        var locationDinnerValue = locationDinner.value.trim();
        var enterDinnerValue = enterDinner.value.trim();

        if (usernameValue == "") {
            setError(username, "Please enter your name");
        } else {
            setSuccess(username);
        }

        if (emailValue == "") {
            setError(email, "Please enter your email");
        } else if (!isEmail(emailValue)) {
            setError(email, "Email is not Valid");
        } else {
            setSuccess(email);
        }

        if (phoneValue == "") {
            setError(phone, "Please enter your name");
        } else {
            setSuccess(phone);
        }

        if (pass1Value == "") {
            setError(pass1, "Please enter your password");
        } else {
            setSuccess(pass1);
        }


        if (pass2Value == "") {
            setError(pass2, "Password can't be blank");
        } else if (pass1Value !== pass2Value) {
            setError(pass2, "Password does not match");
        } else {
            setSuccess(pass2);
        }

        if (locationValue == "") {
            setError(location, "Please enter your location");
        } else {
            setSuccess(location);
        }

        if (professionValue == "") {
            setError(profession, "Please enter your location");
        } else {
            setSuccess(profession);
        }

        if (locationLunchValue == "") {
            setError(locationLunch, "Please enter your location");
        } else {
            setSuccess(locationLunch);
        }

        if (enterLunchValue == "") {
            setError(enterLunch, "Please enter your location");
        } else {
            setSuccess(enterLunch);
        }

        if (locationDinnerValue == "") {
            setError(locationDinner, "Please enter your location");
        } else {
            setSuccess(locationDinner);
        }

        if (enterDinnerValue == "") {
            setError(enterDinner, "Please enter your location");
        } else {
            setSuccess(enterDinner);
        }

        if (enterDinnerValue == "") {
            setError(enterDinner, "Please enter your location");
        } else {
            setSuccess(enterDinner);
        }
    }

    function setError(u, msg) {
        let parentBox = u.parentElement;
        parentBox.className = "sing-grupe error";
        let span = parentBox.querySelector("span");
        span.innerText = msg;
    }

    function setSuccess(u) {
        var parentBox = u.parentElement;
        parentBox.className = "sing-grupe success";
    }

    function isEmail(e) {
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(e);
    }

}

// Lunch Dinner Check

{
    let lunchCheckS = document.getElementById('lunch-ck');
    let dinnerCheckS = document.getElementById('dinner-ck');
    let submit = document.getElementById('submit');
    let errMessage = document.getElementById('errMessage');

    submit.addEventListener('click', function() {
        if (lunchCheckS.checked || dinnerCheckS.checked) {
            errMsg.innerHTML = "";
        } else {
            errMessage.innerHTML = "(You must select at least one meal)";
        }
    });

}
// Agree Check 
{
    let agreeCheck = document.getElementById('agreeCheck');
    let submit = document.getElementById('submit');
    let errMsg = document.getElementById('errMsg');

    submit.addEventListener('click', function() {
        if (agreeCheck.checked) {
            errMsg.innerHTML = "";
        } else {
            errMsg.innerHTML = "(You must agree to the Terms of Service)";
        }
    });

}

// Show and Hide Password
{
    {
        let state = false;
        let eyeIcon = document.getElementById('eyeIcon');
        let passShow = document.getElementById('pass1');

        eyeIcon.addEventListener('click', function toggle() {
            if (state) {
                passShow.setAttribute('type', 'text');
                eyeIcon.style.color = '#000000';
                state = false;
            } else {
                passShow.setAttribute('type', 'password');
                eyeIcon.style.color = '#999898';
                state = true;
            }

        })

    } {
        let state = false;
        let eyeIcon = document.getElementById('eyeIcon2');
        let passShow = document.getElementById('pass2');

        eyeIcon.addEventListener('click', function toggle() {
            if (state) {
                passShow.setAttribute('type', 'text');
                eyeIcon.style.color = '#000000';
                state = false;
            } else {
                passShow.setAttribute('type', 'password');
                eyeIcon.style.color = '#999898';
                state = true;
            }

        })

    }
}