import Split from 'split.js';
import './demo.css';

if (window.Worker) {
    // Setup copy text variable
    let copyText = '';

    // Setup split JS
    Split(['#split-0', '#split-1'], {
        minSize: 300,
    });

    // Setup clipboard JS
    new ClipboardJS('#copy', {
        text: function () {
            return copyText;
        },
    });

    const code = document.querySelector('#code');
    // Create instance of the webworker
    const worker = new Worker('worker.js');

    // On message callback from web worker
    worker.onmessage = function (e) {
        code.innerHTML = e.data[0];
        copyText = e.data[1];
    };

    worker.postMessage(`
    import * as React from "react";    
    `);
} else {
    console.error(
        'Web Workers not supported!. Please use this application on Chrome/Firefox/MS Edge'
    );
}
