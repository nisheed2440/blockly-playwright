import './demo.css';

if (window.Worker) {
    const code = document.querySelector('#code');
    const worker = new Worker('worker.js');

    worker.onmessage = function (e) {
        code.innerHTML = e.data;
    };

    worker.postMessage('const test=hi";console.log(test)');
} else {
    console.error(
        'Web Workers not supported!. Please use this application on Chrome/Firefox/MS Edge'
    );
}
