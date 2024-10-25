import http from 'node:http'
import { json } from '../../03-streams-no-nodejs/src/middlewares/jso.js'
import { routes } from '../../../05-serando-rotas-da-aplicacao/src/middlewares/routes.js'


const server = http.createServer(async (req, res) => {
    const {method, url} = req

    await json(req, res)
    
    const route = routes.find(route => {
        return route.method == method  && route.path == url
    })

    console.log(route)
    if(route) {
        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333)
//localhost:3333