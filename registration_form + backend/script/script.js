function formValidate()
{
    var form = document.getElementsByTagName('form')[0];
    var inputs = form.getElementsByTagName('input');
    var nme_match = new RegExp('name', "i");
    var nme_re = new RegExp('[^a-z]+', "i");
    var tel_re = new RegExp('{\d, 10}');
    for(var i=0; i<inputs.length-1; i++)
    {
        var nme = inputs[i].getAttribute('name');
        if(inputs[i].value == "")
        {
            inputs[i].focus();
            break;
        }
        if(nme_match.test(nme))
        {
            if(nme_re.test(inputs[i].value))
            {
                // inputs[i].style.borderWidth = "2px";
                inputs[i].style.borderStyle = "solid";
                inputs[i].style.borderColor = "rgb(237,85,101)";
                inputs[i].focus();
                event.preventDefault();
            }
            else
            {
                inputs[i].style.borderColor = "transparent";
            }
        }
        if(nme == 'pincode')
        {
            if(inputs[i].value.length != 6)
            {
                // inputs[i].style.borderWidth = "2px";
                inputs[i].style.borderStyle = "solid";
                inputs[i].style.borderColor = "rgb(237,85,101)";
                inputs[i].style.
                inputs[i].focus();
                event.preventDefault();
            }
            else
            {
                inputs[i].style.borderColor = "transparent";
            }
        }
    }
}

function addStates()
{
    var states_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", 
                               "Assam", "Bihar", "Chandigarh", "Chhattisgarh", 
                               "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", 
                               "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", 
                               "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", 
                               "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", 
                               "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura",
                               "Uttar Pradesh", "Uttaranchal", "West Bengal");
    var country = document.getElementsByClassName("state")[0];
    country.options[0] = new Option('Select State', '', true);
    for(var i=0; i<states_arr.length; i++)
    {
        country.options[i+1] = new Option(states_arr[i], states_arr[i]);
    }
}

function start()
{
    addStates();
    var submit = document.getElementsByClassName('signup-btn')[0];
    submit.addEventListener('click', formValidate, false);
}

window.addEventListener('load', start, false);