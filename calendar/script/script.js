var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function loadYear(curr_year)
{
    document.getElementsByClassName("year")[0].innerHTML = "";
    document.getElementsByClassName("year")[0].innerHTML = curr_year;
}

function loadMonth(curr_month)
{
    document.getElementsByClassName("month")[0].innerHTML = "";
    document.getElementsByClassName("month")[0].innerHTML = months[curr_month];
}

function loadWeek()
{
    var week = document.getElementsByClassName("weekdays")[0];
    for(var i=0; i<weekdays.length; i++)
    {
        var div = document.createElement("div");
        div.innerHTML = weekdays[i];

        week.appendChild(div);
    }
}

function removeWeek()
{
    var week = document.getElementsByClassName("weekdays")[0];
    week.innerHTML = "";
}

function loadDays(curr_day, curr_month)
{
    // var curr_date = new Date();
    var startDay = curr_day-1;
    var curr_month = curr_month;
    var leftDays = startDay;
    var day = document.getElementsByClassName("days")[0];
    if (startDay == -1)
    {
        leftDays = 6;
        startDay = 6;
    }
    for(var i=leftDays; i>0; i--)
    {
        var div = document.createElement("div");
        div.innerHTML = days[curr_month-1] - i + 1;
        div.style.backgroundColor = "rgb(240, 240, 240)";
        div.style.color = "rgb(180, 180, 180)";
        day.appendChild(div);
    }
    for(var i=1; i<=days[curr_month]; i++)
    {
        var div = document.createElement("div");
        div.innerHTML = i;

        day.appendChild(div);
    }

}

function removeDays()
{
    var day = document.getElementsByClassName("days")[0];
    day.innerHTML = "";
}

function setCalendar(day, month, year)
{
    loadYear(year);
    loadMonth(month);
    loadWeek();
    loadDays(day, month);
}

function setPrevCalendar()
{
    var month_nme = document.getElementsByClassName("month")[0].innerHTML;
    var month = months.indexOf(month_nme);
    month = parseInt(month);
    month -= 1;
    if(month < 0)
    {
        month = 11;
    }

    var year = 2020;
    var date = new Date(year, month, 1);
    var day = date.getDay();

    removeWeek();
    removeDays();
    setCalendar(day, month, year);
}

function setNextCalendar()
{
    var month_nme = document.getElementsByClassName("month")[0].innerHTML;
    var month = months.indexOf(month_nme);
    month = parseInt(month);
    month = (month + 1) % 12;

    var year = 2020;
    var date = new Date(year, month, 1);
    var day = date.getDay();

    removeWeek();
    removeDays();
    setCalendar(day, month, year);
}

function start()
{
    var curr_date = new Date();
    day = 1;
    month = curr_date.getMonth();
    year = curr_date.getFullYear();

    if (parseInt(year) % 4 == 0)
    {
        days[1] = 29;
    }
    else
    {
        days[1] = 28;
    }

    setCalendar(day, month, year);

    var nxt = document.getElementsByClassName("next")[0];
    var prev = document.getElementsByClassName("prev")[0];
    nxt.addEventListener("click", setNextCalendar, false);
    prev.addEventListener("click", setPrevCalendar, false);
}

window.addEventListener("load", start, false);