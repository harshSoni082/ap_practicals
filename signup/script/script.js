function clearForm(form)
{
    var inputs = form.getElementsByTagName("input")
    for(var i=0; i<inputs.length-2; i++)
    {
        inputs[i].value = "";
    }
}

function clearForms()
{
    var forms = document.getElementsByTagName("form");
    for(var i=0; i<forms.length; i++)
    {
        clearForm(forms[i]);
    }
}

function validateRetypePassword()
{
    var pass = document.getElementsByClassName("pass")[1];
    var repass = document.getElementsByClassName("repass")[0];
    var supBtn = document.getElementsByClassName("signup-btn")[0];
    if(pass.value != repass.value)
    {
        supBtn.active = false;
    }
    else
    {
        supBtn.active = true;
        supBtn.click()
    }
}

function switchTab(active, inactive)
{
    var which = active.innerHTML;
    var signinContainer = document.getElementsByClassName('login-container')[0];
    var signupContainer = document.getElementsByClassName('signup-container')[0];

    if(which == 'Sign In')
    {
        signinContainer.style.display = "none";
        signupContainer.style.display = "block";
    }
    else
    {
        signinContainer.style.display = "block";
        signupContainer.style.display = "none";
    }

    active.style.backgroundColor = "rgb(250, 251, 252)";
    active.style.borderBottom = "1px solid rgb(237, 240, 243)";
    inactive.style.backgroundColor = "white";
    inactive.style.borderBottom = "0";
}

function loginSignupTab()
{
    var tabs = document.getElementsByClassName("login-slider")[0];
    var signin = tabs.getElementsByClassName("login-link")[0];
    var signup = tabs.getElementsByClassName("signup-link")[0];

    signup.addEventListener('click', function() {switchTab(signin, signup);}, false);
    signin.addEventListener('click', function() {switchTab(signup, signin);}, false);

}

function start()
{
    loginSignupTab();
    document.getElementsByClassName('signup-btn')[0].addEventListener('click', validateRetypePassword, false);
}

window.addEventListener("load", start, false);