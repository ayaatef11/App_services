
 function showAlert() {
    var name = document.getElementById("name").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var time = document.getElementById("time").value;
    var timezone = document.getElementById("timezone").value;
    var messageBox = document.getElementById("message-box");
    messageBox.innerHTML = `
        <img src="photo/petrong.png" >
        <h1><strong> 30 Minute Meeting </strong> </h1> 
        <h2><strong>Hello , </strong> ${name}</h2>
        <h3>Meeting Details</h3>
        <p><strong>Day :</strong> ${day}</p>
        <p><strong>Month :</strong> ${month}</p>
        <p><strong>Time :</strong> ${time}</p>
        <p><strong>Time Zone:</strong> ${timezone}</p>
    `;
    messageBox.style.display = "block";
}