const os = require('os');
const si = require('systeminformation');

class SystemInfo {
    constructor() {
        this.os = os;
        this.si = si;
    }

    async getSystemInfo() {
        const data = await si.get({
            cpu: 'manufacturer, brand, speed, cores, physicalCores, processors',
            osInfo: 'platform, distro, release, codename, kernel, arch',
            mem: 'total, free, used',// active, available',
            currentLoad: 'currentload, currentload_user, currentload_system, currentload_nice, currentload_idle, currentload_irq, raw_currentload',
            fsSize: 'fs, type, size, used, available, use, mount',
            networkInterfaces: 'iface, ip4, ip6, mac, internal, virtual',
            battery: 'hasbattery, cyclecount, ischarging, maxcapacity, currentcapacity, percent, acconnected, type, model',
            graphics: 'controllers, displays, vendor, model, vram, vramDynamic, resolutionx, resolutiony, colordepth, currentResX, currentResY, currentRefreshRate, currentResX, currentResY, currentRefreshRate, maxResX, maxResY, maxRefreshRate',
            versions: 'kernel, node, v8, npm, pm2, openssl, chrome, electron, gpu, ffmpeg',
            shell: 'history',
            dockerInfo: 'containers, containersRunning, containersPaused, containersStopped, images',
            memLayout: 'bank, type, size, clockSpeed, formFactor, partNum, serialNum',
            diskLayout: 'name, type, size, interfaceType, smartStatus',
            networkStats: 'iface, operstate, rx_bytes, tx_bytes, rx_sec, tx_sec, ms',
            networkConnections: 'protocol, localaddress, localport, peeraddress, peerport, state'
        });

        return data;
    }

    async getCpuLoad() {
        const data = await si.currentLoad();
        return data;
    }

    async getCpuTemperature() {
        const data = await si.cpuTemperature();
        return data;
    }

    async getMemoryInfo() {
        const data = await si.mem();
        return data;
    }

    async getDiskInfo() {
        const data = await si.fsSize();
        return data;
    }

    async getNetworkInfo() {
        const data = await si.networkInterfaces();
        return data;
    }

    async getBatteryInfo() {
        const data = await si.battery();
        return data;
    }

    async getGraphicsInfo() {
        const data = await si.graphics();
        return data;
    }

    async getFullLoad() {
        const data = await si.fullLoad();
        return data;
    }

    async getNetworkStats() {
        const data = await si.networkStats();
        return data;
    }

    async getNetworkConnections() {
        const data = await si.networkConnections();
        return data;
    }
}

module.exports = SystemInfo;