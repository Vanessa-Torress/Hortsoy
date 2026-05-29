const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('servicos.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('components.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });
const window = dom.window;
const document = window.document;

// Inject CSS
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

// Inject JS
const script = document.createElement('script');
script.textContent = js;
document.body.appendChild(script);

setTimeout(() => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(a => {
        const computedStyle = window.getComputedStyle(a);
        console.log(`Text: ${a.textContent}`);
        console.log(`Classes: ${a.className}`);
        console.log(`FontSize: ${computedStyle.fontSize}`);
        console.log(`FontWeight: ${computedStyle.fontWeight}`);
        console.log(`Padding: ${computedStyle.padding}`);
        console.log(`LineHeight: ${computedStyle.lineHeight}`);
        console.log('---');
    });
    
    // Also check the structure of the nav
    const header = document.querySelector('hortsoy-header');
    if (header) {
        console.log("Header innerHTML snippet:");
        console.log(header.innerHTML.substring(0, 500) + '...');
    }
}, 500);
