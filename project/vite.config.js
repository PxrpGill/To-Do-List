import { createHtmlPlugin } from 'vite-plugin-html';

export default {
    base: '/To-Do-List/',
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    filename: 'Main page',
                    template: 'index.html',
                    scripts: [
                        { src: 'script.js', type: 'module' }
                    ]
                }
            ]
        })
    ]
}