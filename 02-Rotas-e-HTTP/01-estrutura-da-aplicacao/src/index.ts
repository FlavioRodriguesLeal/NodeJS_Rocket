//type ou interface
interface User {
    birthYear: number
}

function calculateAgeOfUser(user: User) {
    return new Date().getFullYear() - user.birthYear
}

calculateAgeOfUser({
    birthYear: 1984
})

//calculateAgeOfUser('Diego')  erro aparece no TypeScript
//calculateAgeOfUser({})  erro aparece no TypeScript
//calculateAgeOfUser() erro aparece no TypeScript


//Sem typescript, JavaScript, TypeScript normal
//Runtime Type Checking
//File em *.js
//Erro só é identificado somente em Runtime.

//Com typescript 
//Static Type Checking
//File em *.ts
//Erro só é identificado pela IDE e ao compilar.

//Node não entende JavaScript direto, necessário instalar uma dependencia, diferente do Dino, Ban
// npm i -D typescript
//para Typescript funcionar é necessário  criar um arquivo de configuração, para automatizar esse trabalho:
//atraves do comando npx que executa nossos bínários da biblioteca que esta na pasta .bin
//npx tsc --init
//Mudar o target do arquivo tsconfig.json para es2020 não precisa mudar para es2026
//depois o comando para converter o arquivo de ts -> js
//npx tsc src/index.ts