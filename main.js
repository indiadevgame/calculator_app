const {app , BrowserWindow} = require("electron");

function CreateWindow(){

    const Win = new BrowserWindow({
        width:350,
        height: 600,
        resizable:false,
        // alwaysOnTop:true,
        webPreferences:{
            nodeIntegration: true
        }
    })

    Win.loadFile("index.html")

};


app.whenReady().then(CreateWindow);