importScripts('https://unpkg.com/prettier@2.3.0/standalone.js');
importScripts('https://unpkg.com/prettier@2.3.0/parser-babel.js');
importScripts(
    'https://unpkg.com/@highlightjs/cdn-assets@10.7.2/highlight.min.js'
);

// Listen for changes from the main thread
onmessage = function (e) {
    try {
        // Format the code using prettier
        const formatedResult = prettier.format(e.data, {
            parser: 'babel',
            plugins: prettierPlugins,
        });
        // Use highlight JS to highlight the code
        const highlightedResult = hljs.highlightAuto(formatedResult);
        // Send formatted code the main thread
        postMessage(highlightedResult.value);
    } catch (e) {
        // Send exception to the main thread
        postMessage(e);
    }
};
