# 🚗 DriveHub 🚗

O DriveHub é um sistema robusto de controle de utilização de automóveis, desenvolvido para otimizar e simplificar a gestão de frotas e motoristas.

## Funcionalidades Principais 🚀

- **Cadastro de Automóveis**: Registre novos automóveis com informações detalhadas, como placa, cor e marca.

- **Cadastro de Motoristas**: Adicione motoristas à base de dados, incluindo seus nomes.

- **Utilização de Automóvel**: Crie registros de utilização, indicando qual motorista está utilizando qual automóvel e a razão dessa utilização.

- **Atualização e Exclusão**: Atualize informações de automóveis e motoristas, além de excluir registros obsoletos.

- **Filtragem e Listagem**: Utilize filtros para buscar e visualizar dados específicos, proporcionando uma visão clara da frota e dos motoristas.

 - pode ver mais sobre como funciona nos links a seguir
## Documentação Adicional 📚

Para mais informações e uma visão mais detalhada do projeto, consulte a <a href="https://www.notion.so/Drive-hub-53ab02842f0d4574b3f3f0f69caf386c?pvs=4" target="_blank">Documentação no Notion</a>


## Execução do Projeto
# 🚀 Como executar o projeto

```bash
 - Primeiro clone o repositório:
    - ``` git@github.com:Tiagoabranges/drive-hub.git ```
 - Entre no repositório: 
   - ``` cd drive-hub ```
````

### Utilizando o docker 🐳
[Instale o Docker:]( https://docs.docker.com/get-docker/)
```bash
Baixe a imagem do postgres:
 `$ docker pull postgres`

Execute o contêiner do postgres:
  `$ docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`

````
### Aplicar Migrações
```bash
- `$ npx prisma migrate dev`

```
### Rodadndo o projeto 🖥️
```bash

Altere os dados do banco postgres no arquivo `.env` e remova a extensao example: 'postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public'

  1. `$ npm install`
  2. `$ npm run start:dev`

```

- Acesse a API em [http://localhost:3000/api](http://localhost:3000/api).

## Testes Unitários

- Execute os testes unitários utilizando `npm test`.

# :books: Tecnologias Utilizadas
 
- `NestJS` Framework para construção de aplicativos server-side eficientes e escaláveis em Node.js.
- `Node.js` Ambiente de execução JavaScript server-side.
- `Express` Framework web para Node.js.
- `Docker` Plataforma para desenvolvimento, envio e execução de aplicativos em containers.
- `Postgres` Banco de dados relacional utilizado para armazenar dados do projeto.
- `Prisma` ORM (Object-Relational Mapping) para Node.js e TypeScript.
- `TypeScript` Superset para JavaScript que adiciona tipagem estática opcional.
- `Jest` Framework de teste JavaScript com foco na simplicidade.
- `ESLint` Ferramenta para padronizar o estilo de código JavaScript/TypeScript.
- `Git` Sistema de controle de versão para rastreamento de alterações de código.
- `Prettier` Ferramenta para manter um estilo de código consistente e bem formatado.
- `Insomnia` Ferramenta de cliente REST API que serve para testar, depurar e documentar APIs.

  
#  :thumbsup: Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para criar issues, pull requests ou sugerir melhorias para este projeto.

# 🐛 Encontrou um problema?
Se você encontrar algum problema, por favor me avise [aqui](https://www.linkedin.com/in/tiagoabranges/).


# 📝 Licença
Desenvolvido por [Tiago Abranges](https://www.linkedin.com/in/tiagoabranges/).

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para criar um fork do projeto e enviar pull requests

