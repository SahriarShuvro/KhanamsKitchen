{
    document.getElementById("submit2").addEventListener("click", function(event) {
        event.preventDefault();

        checkData();
    });

    let email = document.getElementById("sing-in-page");



    function checkData() {
        var emailValue = email.value.trim();


        if (emailValue == "") {
            setError(email, "Please enter your email");
        } else if (!isEmail(emailValue)) {
            setError(email, "Email is not Valid");
        } else {
            setSuccess(email);
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