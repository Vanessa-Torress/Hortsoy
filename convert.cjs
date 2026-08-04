const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public', 'blog');
const destDir = path.join(__dirname, 'src', 'pages', 'blog');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

function toCamelCase(str) {
    return str.replace(/-([a-z0-9])/g, g => g[1].toUpperCase());
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

files.forEach(file => {
    const html = fs.readFileSync(path.join(srcDir, file), 'utf8');

    // Extract everything between <!-- Page Banner --> and <!-- Footer -->
    const match = html.match(/<!-- Page Banner -->([\s\S]*?)<!-- Footer -->/);
    if (!match) return;

    let content = match[1];

    // Replace class= with className=
    content = content.replace(/class=/g, 'className=');

    // Replace unclosed img tags
    content = content.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');

    // Replace href="blog-xyz.html" with to="/blog/xyz"
    content = content.replace(/href="blog-([^"]+)\.html"/g, 'to="/blog/$1"');
    content = content.replace(/href="\.\.\/index\.html"/g, 'to="/"');
    content = content.replace(/href="\.\.\/sobre\.html"/g, 'to="/sobre"');

    // Replace a tags for internal routing with Link tags
    content = content.replace(/<a([^>]*)to=([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1to=$2>$3</Link>');

    // Fix src="../assets..." to src="/assets..."
    content = content.replace(/src="\.\.\/assets/g, 'src="/assets');

    // Remove comments
    content = content.replace(/<!--[\s\S]*?-->/g, '');

    const baseName = file.replace('blog-', '').replace('.html', '');
    const componentName = 'Blog' + baseName.split('-').map(capitalize).join('');

    const jsxContent = `import { Link } from 'react-router-dom';

export default function ${componentName}() {
    return (
        <main>
${content}
        </main>
    );
}
`;

    fs.writeFileSync(path.join(destDir, `${componentName}.jsx`), jsxContent);
    console.log(`Generated ${componentName}.jsx`);
});
