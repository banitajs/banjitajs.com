function validate()
    {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="bannitajs" && password=="123")
    {
        window.open("main.html", "_self");
    }
    else
    {
        alert("pieslēgšanās neizdevās, parole vai/un lietotājvārds nepareizs");
    }
    }