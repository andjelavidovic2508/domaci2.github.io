$(document).ready(function ()
{
    var date = new Date();
    $("#datum").html("Date: " + date.getDate() + ". " + (date.getMonth()+1) + ". " + date.getFullYear() + ".");
});
