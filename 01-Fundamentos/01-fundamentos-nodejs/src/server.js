import http from 'node:http'

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar uma informação do back-end
// POST => Criar uma informação no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

//Stateful (sendo guardada em memória) x Stateless (salva dispositivo externo)

const users = []

const server = http.createServer((req, resp) => {
    const {method, url} = req
    
    if(method === 'GET' && url === '/users'){
        return resp.end('Listagem de usuários')
    }
    
    if(method === 'POST' && url === '/users'){
        users.push(
            id: 1,
            name: 'John Doe'
            email: 'johndoe@xample.com'
        )
        return resp.end('Criação de usuários')
    }

    return resp.end('Hello Flávio')
})

server.listen(3333)
//localhost:3333