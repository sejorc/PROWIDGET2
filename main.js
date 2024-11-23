const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const SystemInfo = require('./src/SystemInfo');

let mainWindow;

function createWindow() {

    mainWindow = new BrowserWindow({
        // width: 800,
        // height: 600,
        transparent: true,
        frame: false,
        skipTaskbar: true,
        alwaysOnTop: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    mainWindow.loadFile('index.html');
    
    setInterval(() => {
        mainWindow.webContents.reload();
    }, 5000);
}

app.on('ready', () => {
    createWindow();

    const systemInfo = new SystemInfo();
    // console.log("-----------------------------COMPROBAMOS SI SISTEMINFO SE CREA CORRECTAMENTE-----------------------------");
    // console.log(systemInfo);
    // console.log("---------------------------------------------------------------------------------------------------------");

    ipcMain.handle('get-system-info', async () => {
       // console.log("Solicitando información del sistema...");
        return await systemInfo.getSystemInfo();
    });

    ipcMain.handle('get-cpu-load', async () => {
       // console.log("Solicitando carga de CPU   ...");
        return await systemInfo.getCpuLoad();
    });

    ipcMain.handle('get-memory-info', async () => {
       // console.log("Solicitando información de memoria...");
        return await systemInfo.getMemoryInfo();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

