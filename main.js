const { app, BrowserWindow } = require('electron')
            const fs = require('fs');
            const path = require('path');
console.log("starting electron hehehe");



const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/favicon.png',
    webPreferences: {
        nodeIntegration: true,
        //enableRemoteModule: true,
        contextIsolation: false
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//