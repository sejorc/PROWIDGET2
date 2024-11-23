window.addEventListener('DOMContentLoaded', () => {
    const systemInfoDiv = document.getElementById('system-info');
    const cpuLoadDiv = document.getElementById('cpu-load');
    const memoryInfoDiv = document.getElementById('memory-info');

    let lastMemoryInfo = JSON.parse(localStorage.getItem('lastMemoryInfo')) || {
        total: 0,
        free: 0,
        used: 0
    };

    let lastCpuLoad = JSON.parse(localStorage.getItem('lastCpuLoad')) || {
        cpus: []
    };

    // Mostrar el último estado conocido de la memoria al cargar la página
    const totalGB = (lastMemoryInfo.total / 1024 / 1024).toFixed(2);
    const freeGB = (lastMemoryInfo.free / 1024 / 1024).toFixed(2);
    const usedGB = (lastMemoryInfo.used / 1024 / 1024).toFixed(2);

    memoryInfoDiv.innerHTML = `RAM:<br>`;
    memoryInfoDiv.innerHTML += `Total: ${totalGB} GB<br>`;
    memoryInfoDiv.innerHTML += `Free: ${freeGB} GB<br>`;
    memoryInfoDiv.innerHTML += `Used: ${usedGB} GB<br>`;

    // Mostrar el último estado conocido de la CPU al cargar la página
    if (lastCpuLoad.cpus.length > 0) {
        cpuLoadDiv.innerHTML = 'CPU:<br>';
        let total = 0;
        let totalCores = 0;
        for (let i = 0; i < lastCpuLoad.cpus.length; i++) {
            if (i == lastCpuLoad.cpus.length - 1) {
                cpuLoadDiv.innerHTML += `[${Math.round(lastCpuLoad.cpus[i].load)}%]`;
            } else {
                cpuLoadDiv.innerHTML += `[${Math.round(lastCpuLoad.cpus[i].load)}%]-`;
            }
            total += lastCpuLoad.cpus[i].load;
            totalCores++;
        }
        cpuLoadDiv.innerHTML += `<br><br>TOTAL: ${Math.round(total / totalCores)}%`;
    }

    window.electron.getCpuLoad()
        .then(cpuLoad => {
            lastCpuLoad = cpuLoad;
            localStorage.setItem('lastCpuLoad', JSON.stringify(lastCpuLoad));

            cpuLoadDiv.innerHTML = 'CPU:<br>';
            let total = 0;
            let totalCores = 0;
            for (let i = 0; i < cpuLoad.cpus.length; i++) {
             //si es multiplo de 3, salto de linea
                // if (i % 3 == 0) {
                //     cpuLoadDiv.innerHTML += `<br>`;
                //     cpuLoadDiv.innerHTML += `|${Math.round(cpuLoad.cpus[i].load)}%|`;
                // }
                //pintar los nucleos en una tabla de 2 columnas
                if (i % 2 == 0) {
                    cpuLoadDiv.innerHTML += `<br>`;
                }
                cpuLoadDiv.innerHTML += `|${Math.round(cpuLoad.cpus[i].load)}%|`;
                
                total += cpuLoad.cpus[i].load;
                totalCores++;
            }
            cpuLoadDiv.innerHTML += `<br><br>TOTAL: ${Math.round(total / totalCores)}%`;
        })
        .catch(error => {
            cpuLoadDiv.innerHTML += `<br>Error obteniendo la carga de CPU: ${error}`;
        });

    window.electron.getMemoryInfo()
        .then(memoryInfo => {
            lastMemoryInfo = memoryInfo;
            localStorage.setItem('lastMemoryInfo', JSON.stringify(lastMemoryInfo));

            const totalGB = (memoryInfo.total / 1024 / 1024).toFixed(2);
            const freeGB = (memoryInfo.free / 1024 / 1024).toFixed(2);
            const usedGB = (memoryInfo.used / 1024 / 1024).toFixed(2);

            memoryInfoDiv.innerHTML = `RAM:<br>`;
            memoryInfoDiv.innerHTML += `Total: ${totalGB} GB<br>`;
            memoryInfoDiv.innerHTML += `Free: ${freeGB} GB<br>`;
            memoryInfoDiv.innerHTML += `Used: ${usedGB} GB<br>`;
        })
        .catch(error => {
            memoryInfoDiv.innerHTML += `<br>Error obteniendo información de memoria: ${error}`;
        });
});