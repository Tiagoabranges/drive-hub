# 🚗 Controle de Utilização de Automóveis - Teste Técnico Prático 🚗

Este projeto é uma implementação prática de um sistema de controle de utilização de automóveis, desenvolvido como parte de um teste técnico. A aplicação foi construída utilizando as seguintes tecnologias: NestJS, Node.js, Express, Docker (Postgres), Prisma, TypeScript e Jest para testes unitários.

## Funcionalidades

### Cadastro de Automóvel

- **Cadastrar um novo automóvel**
  - Rota: POST /automobile
  - Body: { "plate": "ABC1234", "color": "blue", "brand": "Toyota" }

- **Atualizar um automóvel cadastrado**
  - Rota: PUT /automobile/:id
  - Body: { "color": "red" }

- **Excluir um automóvel cadastrado**
  - Rota: DELETE /automobile/:id

- **Recuperar um automóvel pelo identificador único**
  - Rota: GET /automobile/:id

- **Listar automóveis cadastrados**
  - Rota: GET /automobile

- **Filtrar listagem de automóveis por cor e marca**
  - Rota: GET /automobile?color=blue&brand=Toyota

### Cadastro de Motoristas

- **Cadastrar um novo motorista**
  - Rota: POST /driver
  - Body: { "name": "John Doe" }

- **Atualizar um motorista cadastrado**
  - Rota: PUT /driver/:id
  - Body: { "name": "Jane Doe" }

- **Excluir um motorista cadastrado**
  - Rota: DELETE /driver/:id

- **Recuperar um motorista pelo identificador único**
  - Rota: GET /driver/:id

- **Listar motoristas cadastrados**
  - Rota: GET /driver

- **Filtrar listagem de motoristas por nome**
  - Rota: GET /driver?name=John

### Utilização de Automóvel

- **Criar um registro de utilização de um automóvel por um motorista**
  - Rota: POST /automobile-usage
  - Body: { "driverId": 1, "automobileId": 2, "usageReason": "Viagem de negócios" }

- **Finalizar a utilização de um automóvel por um motorista**
  - Rota: PUT /automobile-usage/:id/finish

- **Listar os registros de utilização cadastrados no sistema**
  - Rota: GET /automobile-usage

## Regras de Negócio

- Um automóvel só pode ser utilizado por um motorista por vez.
- Um motorista que já esteja utilizando um automóvel não pode utilizar outro automóvel ao mesmo tempo.

## Execução do Projeto

- Clone este repositório.
- Instale as dependências utilizando `npm install`.
- Execute a aplicação utilizando `npm start`.
- Acesse a documentação da API em [http://localhost:3000/api](http://localhost:3000/api).

## Testes Unitários

- Execute os testes unitários utilizando `npm test`.

## Observações

- Este projeto utiliza o Docker para executar o banco de dados Postgres em um container. Certifique-se de ter o Docker instalado.
- A persistência em memória foi implementada utilizando o Prisma para simplificar o teste e execução do projeto.
- O prazo para resolução do teste é de 3 dias, mas a qualidade do código e a cobertura de funcionalidades serão avaliadas independentemente do tempo de entrega.
- Agradecemos pelo seu tempo, participação e boa sorte! Em caso de dúvidas ou sugestões, entre em contato conosco.
