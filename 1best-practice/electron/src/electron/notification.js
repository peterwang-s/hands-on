import {
  remote,
  // Menu,
  ipcRenderer
} from "electron";

class CustomNotification {
  constructor(remote) {
    this.remote = remote;
  }

  setBadgeCount(number) {
    ipcRenderer.sendSync("update-badge", number);

    if (process.platform === "darwin") {
      // macOS 设置徽章计数器
      this.remote.app.setBadgeCount(number);
    }
  }

  /**
   * 进程间通信的俩种实现方式
   * remote
   */
  setBadgeText(text) {
    // ipcRenderer.sendSync('update-badge', text) // windows 上不可以添加文本内容
    if (process.platform === "darwin") {
      this.remote.app.dock.setBadge(text);
    } else {
      console.log("非mac 操作系统");
    }
  }

  /**
   * 进程间通信的俩种实现方式
   * sendSync&send
   */
  beep() {
    ipcRenderer.sendSync("beep"); //  需要设置 event.returnValue = ''
    // ipcRenderer.send('beep')
  }

  beepOnce() {
    ipcRenderer.sendSync("beep-once"); //  需要设置 event.returnValue = ''
    // ipcRenderer.send('beep-once')
  }
}

export default new CustomNotification(remote);


export class CustomNotify {
  constructor(renderderCallback) {
    this.renderderCallback = function(event, text) {
      renderderCallback(text);
    };
    ipcRenderer.on("message", this.renderderCallback);
  }

  destory() {
    ipcRenderer.removeListener("message", this.renderderCallback);
  }
}

export class DownloadNotify {
  constructor(process) {
    this.process = process

    ipcRenderer.on("down-process", this.process);
    // ipcRenderer.on("down-cancel", (event, data) => {
    //   console.log("cancle");
    // });
    // ipcRenderer.on("down-done", (event, data) => {
    //   console.log("done");
    // });
    // ipcRenderer.on("down-fail", (event, data) => {
    //   console.log("fail");
    // });
  }

  destory() {
    ipcRenderer.removeListener("down-process", this.process);
  }
}
