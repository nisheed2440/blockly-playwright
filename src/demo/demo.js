import Split from 'split.js';
import Blockly from 'blockly';
import ClipboardJS from 'clipboard';
import './custom-toolbox';
import './demo.css';

if (window.Worker) {
    // Setup variables
    let copyText = '';
    let demoWorkspace = null;
    // Get data from localstorage if it exists
    const inputXML = localStorage.getItem('workspace');
    // Toastr options
    window.toastr.options.positionClass = 'toast-bottom-right';
    window.toastr.options.preventDuplicates = true;
    window.toastr.options.timeOut = 500;

    // Setup split JS
    Split(['#split-0', '#split-1'], {
        minSize: 300,
        onDragEnd: () => {
            Blockly.svgResize(demoWorkspace);
        },
    });

    // Setup clipboard JS
    const clipboard = new ClipboardJS('#copy', {
        text: function () {
            return copyText;
        },
    });

    // Copy success callback
    clipboard.on('success', () => {
        window.toastr.success('Copied!');
    });

    const code = document.querySelector('#code');
    // Create instance of the webworker
    const worker = new Worker('worker.js');

    // On message callback from web worker
    worker.onmessage = function (e) {
        code.innerHTML = e.data[0];
        copyText = e.data[1];
    };

    // Send initial message
    worker.postMessage('/** Generated code will show up here */');

    // Create the blockly workspace
    demoWorkspace = Blockly.inject('blockly-div', {
        media: 'https://unpkg.com/blockly/media/',
        toolbox: document.getElementById('toolbox'),
        zoom: {
            controls: true,
        },
    });

    // Add listener for workspace changes and send it to webworker
    demoWorkspace.addChangeListener(() => {
        const output = Blockly.JavaScript.workspaceToCode(demoWorkspace);
        const outputXML = Blockly.Xml.domToText(
            Blockly.Xml.workspaceToDom(demoWorkspace)
        );
        worker.postMessage(output);
        // Update the localstorage with the latest updates to workspace
        localStorage.setItem('workspace', outputXML);
    });

    // If there exists a saved workspace initialize the demo with it
    if (inputXML) {
        Blockly.Xml.domToWorkspace(
            Blockly.Xml.textToDom(inputXML),
            demoWorkspace
        );
    }
} else {
    console.error(
        'Web Workers not supported!. Please use this application on Chrome/Firefox/MS Edge'
    );
}
