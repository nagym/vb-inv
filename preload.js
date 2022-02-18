// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer } = require('electron')
//const Buffer = require('buffer').Buffer;

//const asd = require('plugin')

const asd = (buf) => ipcRenderer.invoke('asd', buf)

function generate_buffer_data(size) {
  //return new Blob([new ArrayBuffer(size)], { type: 'application/octet-stream' });
  return new Uint8Array(size)
};


const data = generate_buffer_data(6220800)



contextBridge.exposeInMainWorld('nodeCrypto', {
  sha256sum(data) {
    const hash = crypto.createHash('sha256')
    hash.update(data)
    return hash.digest('hex')
  }
})

//Use buffer
function exchangeBuffer() {
  let first = data
  if (first[0] != 0) {
      alert('sheeet #1');
    }

  asd(data).then(res => {
    if (res[0] != 123) {
      alert('sheeet #2');
    }
  })
}

function schedule() {
  setTimeout(() => {
    exchangeBuffer()
    schedule();
  }, 34)
}

window.addEventListener('DOMContentLoaded', () => {

  schedule()


/*navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    document.getElementById('camera').srcObject = stream;
  }).catch(function () {
    alert('could not connect stream');
  });*/
})
