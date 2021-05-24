importScripts('https://unpkg.com/prettier@2.3.0/standalone.js');
importScripts('https://unpkg.com/prettier@2.3.0/parser-typescript.js');
importScripts(
    'https://unpkg.com/@highlightjs/cdn-assets@10.7.2/highlight.min.js'
);

const banner = `

/**
 * Created using blockly-playwright
 */

`;

// Listen for changes from the main thread
onmessage = function (e) {
    try {
        // Format the code using prettier
        const formatedResult = prettier.format(`${banner} ${e.data}`, {
            parser: 'typescript',
            plugins: prettierPlugins,
        });
        // Use highlight JS to highlight the code
        const highlightedResult = hljs.highlightAuto(formatedResult);
        // Send formatted code the main thread
        postMessage([highlightedResult.value, formatedResult]);
    } catch (e) {
        // Send exception to the main thread
        postMessage(e);
    }
};
