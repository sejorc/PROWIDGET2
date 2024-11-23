const { contextBridge, ipcRenderer } = require('electron');

try {
    contextBridge.exposeInMainWorld('electron', {
        //getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
        getCpuLoad: () => ipcRenderer.invoke('get-cpu-load'),
        getMemoryInfo: () => ipcRenderer.invoke('get-memory-info'),
    });

    console.log("contextBridge ha expuesto el objeto 'electron'");
} catch (error) {
    console.error("Error en preload.js:", error);
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded: preload.js ejecutado");
});
