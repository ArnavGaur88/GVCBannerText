/*var hostName = "m12.cloudmqtt.com";
var port = 16479;
var userName = "sxdzesyk";
var password = "dc_pY7Q7gOTw";

var clientID = "ws" + Math.random();
var client = new Paho.MQTT.Client(hostName, port, "", clientID);

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Connected : Credentials are correct!");
    client.subscribe("/Banner");
    var message = new Paho.MQTT.Message("Hello");
}

// called when the client fails
function onFailure(invocationContext, errorCode, errorMessage) {
    console.log("Could not connect to WebSocket server! Check your user credentials if they are correct or you're behind a firewall that doesn't allow outgoing connections to port 37073");
}

// connect the client
client.connect({
    useSSL: false,
    userName: /*settings.userName.toString() 'sxdzesyk',
    password: /*settings.password.toString() 'dc_pY7Q7gOTw',
    onSuccess: onConnect,
    onFailure: onFailure
});

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("Connection Lost : "+responseObject.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived(message) {
    console.log("Message Arrived : "+message.payloadString);
}

//Set a listener for a button click event for send button
document.getElementById("send-button").addEventListener('click', sendMessage());


function sendMessage(){
    var text = document.getElementById("message-box").value;
    message = new Paho.MQTT.Message(text);
    message.destinationName = "/Banner";
    client.send(message);
    console.log("Message Sent : "+text);
};*/




 var client;

 var connected = false;

 var mqttHost = 'm12.cloudmqtt.com';
 var topic = '/Banner';
 client = new Paho.MQTT.Client("m12.cloudmqtt.com", 36479, "web_" + parseInt(Math.random()));
 // set callback handlers
 client.onConnectionLost = onConnectionLost;
 client.onMessageArrived = onMessageArrived;

 // connect the client
var options = {
    useSSL: true,
    userName: "sxdzesyk",
    password: "dc_pY7Q7gOTw",
    onSuccess:onConnect
}

// connect the client
client.connect(options);




 // called when the client connects
 function onConnect() {
 // Once a connection has been made, make a subscription and send a message.
     connected = true;
 console.log("onConnect");
 var message = new Paho.MQTT.Message("Subscribed to topic");
 message.destinationName = '/Banner';
 client.subscribe(topic);
 client.send(message);
 }

 // called when the client loses its connection
 function onConnectionLost(responseObject) {
 if (responseObject.errorCode !== 0) {
 console.log("onConnectionLost:" + responseObject.errorMessage);
 }
 }


     document.getElementById("send-button").addEventListener('click', sendMessage());

     function sendMessage() {
         var text = document.getElementById("message-box").value;
         message = new Paho.MQTT.Message(text);
         message.destinationName = "/Banner";
         client.send(message);
         console.log("Message sent!");
     }

 // called when a message arrives
 function onMessageArrived(message) {
 console.log("onMessageArrived:" + message.payloadString);
 }
