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
        alert("shdfkjshdf");
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

    var SignInSignUpModel = document.getElementById('cred-model');
    var closeTab = document.getElementsByClassName('close')[0];
    closeTab.addEventListener('click', function() {closeModel(SignInSignUpModel);}, false)
}

function signInScreen()
{
    var regModel = document.getElementById('cred-model');
    regModel.style.display = "block";
    loginSignupTab();
}

function closeModel(model)
{
    clearForms();
    model.style.display = "none";
}

var counter = 0;
function removeToDo(div)
{
    div.parentNode.removeChild(div);
    counter--;
}

function addNewToDo(e)
{
    var prnt = document.getElementsByClassName('to-dos')[0];
    var text = document.getElementsByClassName('add-box')[0];
    var div = document.createElement('div');
    var p = document.createElement('p');
    var x = document.createElement('p');
    div.style.width = "100%";
    div.style.marginTop = "2%";
    div.style.border = "1px solid #003366";
    div.style.backgroundColor = "#c6e2ff";
    div.style.display = "flex";
    div.id = "div" + counter;
    p.style.boxSizing = "border-box";
    p.style.width = "96%";
    p.innerHTML = text.value;
    p.style.paddingLeft = "2%";
    p.style.boxSizing = "border-box";
    x.innerHTML = "x";
    x.id = "x" + counter;

    text.value = "";
    div.appendChild(p);
    div.appendChild(x);
    prnt.appendChild(div);

    (function(div)
    {
        x.addEventListener('click', function(){removeToDo(div);}, false);
    })(div)
    counter++;
    e.preventDefault();
}

function start()
{
    loginSignupTab();
    document.getElementsByClassName('nav-signup')[0].addEventListener('click', signInScreen, false);
    document.getElementsByClassName('signup-btn')[0].addEventListener('click', validateRetypePassword, false);
    document.getElementsByClassName('add-btn')[0].addEventListener('click', addNewToDo, false);
    
}

window.addEventListener("load", start, false);