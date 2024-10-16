var message
function show_message(m,c="black",b="white")
{
    message = document.createElement("div")
    message.style='text-align:center;overflow:scroll;font-size:20px;position:absolute;top:10%;left:40%;width:300px;height:300px;box-shadow:10px 10px 10px gray;border-radius:20px;border:1px black solid;'
    message.style.color=c
    message.style.background=b
    message.innerHTML="<h1>Diloge Box</h1>"
    message.innerHTML+=m
    document.body.appendChild(message)
    message.innerHTML+="<br><br><br><button onclick='closemessage()'>OK</button>";
}

function closemessage()
{
    document.body.removeChild(message)
}