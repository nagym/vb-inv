// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function generate_buffer_data(size) {
    return new Blob([new ArrayBuffer(size)], { type: 'application/octet-stream' });
};


const buffer = generate_buffer_data(6220800)

//send buffer 20 per sec async!


