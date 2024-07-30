const Vue = require('vue')
const server = require('express')()
const app = new Vue({
    template: `<div>Hello</div>`
})

const renderer = require('vue-server-renderer').createRenderer()


server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>Hello {{url}}</div>`
    })
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
           <title>Vue SSR</title>
        </head>
        <body>
            ${html}
        </body>
        </html>
    `)
    })

    server.listen(8080,()=>{
        console.log('server started')
    })
})
