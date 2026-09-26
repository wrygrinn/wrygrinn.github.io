function sendMail(){
var params = {
    name: document.getElementById("name").value ,
    email: document.getElementById("email").value ,
    message: document.getElementById("message").value ,
    };


const serviceID = "service_5exqf5l";
const templateID = "template_5tos4ul";

emailjs.send(serviceID,templateID,params)

.then(
res => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Message sent! :D");
})
.catch(err=>console.log(err));
}
