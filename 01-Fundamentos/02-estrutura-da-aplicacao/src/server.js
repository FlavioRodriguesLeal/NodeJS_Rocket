import http from 'node:http'

// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
// - Métodos HTTP
// - URL

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
        return resp
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    
    if(method === 'POST' && url === '/users'){
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@xample.com',
        })
        return resp.end('Criação de usuários')
    }

    return resp.writeHead(404).end()
})

server.listen(3333)
//localhost:3333