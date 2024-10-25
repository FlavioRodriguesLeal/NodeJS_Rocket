import http from 'node:http'
import { json } from '../../03-streams-no-nodejs/src/middlewares/jso.js'
import { routes } from './middlewares/routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

// Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios, sem dados sensivel.
// Route Parameters: Identificação de recursos, sem dados sensivel.
// Request Body: Envio de informações de um formulário (HTTPs)

// http://localhost:3333/users?userId=1&name=Diego

// GET http://localhost:3333/users/1
// DELETE http://localhost:3333/users/1

// POST http://localhost:3333/users

//Edição e remoção

const server = http.createServer(async (req, res) => {
    const {method, url} = req

    await json(req, res)

    const route  = routes.find(route => {
        return route.method == method && route.path.test(url) //route.path == url
    })
    
    //console.log(route)
    
    if(route){
        const routeParams = req.url.match(route.path)
        //console.log(routeParams)
        //console.log(extractQueryParams(routeParams.groups.query))
        const { query, ...params } = routeParams.groups
        req.params = params
        req.query = query ? extractQueryParams(query) : {}
        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333)
//localhost:3333