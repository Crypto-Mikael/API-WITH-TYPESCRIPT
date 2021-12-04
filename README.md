# Boas vindas ao Repositorio do API com TypeScript!

Esse projeto é uma API basica baseada em uma API já existente chamada <a href="https://github.com/sidneyroberto/julius-api">julius-api</a>, ela tem como intuito guardar informações de gastos de um usuario no cotidiano.

# Sumário

- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Endpoints do projeto](#endpoints-do-projeto)
- [Agradecimentos](#agradecimentos)
- [Encontre-me](#encontre-me)


Esse projeto tem como intuito aprender novas tecnologias e reforçar as já aprendidas sendo elas:

- NodeJS
- TypeScript
- Postgres
- Design Pattern (DDD/Clean Architecture)
- Docker


## O que foi desenvolvido

Foi arquiteturado, uma API de CRUD de usuarios com laçamentos de gastos (com <a href="https://typeorm.io/#/">typeorm</a>). 
Para o Usuario foi desenvolvido alguns endpoints (seguindo o princípios do REST) que estarão conectados ao seu banco de dados local ou no docker.

## Endpoints do projeto

1 - Requisição ao endpoint POST `/usuario`

![GETUSER](https://user-images.githubusercontent.com/80548535/144721757-ad2c43a7-29d9-42b9-9f3d-d754b123772e.png)

#### Os seguintes pontos são avaliados:

- O campo `nome` deverá existir, não estar em branco e ser uma string com no mínimo de 8 caracteres;
- O campo `email` deverá existir, não estar em branco e ser um tipo email;
- Quando o campo `email` já existir o endpoint retornará o seguinte erro:

```json
{
  "message": "Email already exists"
}
```
- Caso contrário, retornará um json com o usuario criado

```json
{
  "nome": "MiguelCampos",
  "email": "MiguelCampos@email.com",
  "id": 1
}
```

2 - Requisição ao endpoint GET `/usuario`

![GETUSERS](https://user-images.githubusercontent.com/80548535/144721957-a6aa8c01-f4a0-490e-b2b7-9ec8788678e3.png)

- Quando algum usuario existir o endpoint retornará o seguinte:

```json
[
  {
    "nome": "MiguelCampos",
    "email": "MiguelCampos@email.com",
    "id": 1
  },
  {
    "nome": "GabrielRodrigues",
    "email": "GabrielRodrigues@email.com",
    "id": 2
  },
  {
    "nome": "RafaelSantos",
    "email": "RafaelSantos@email.com",
    "id": 3
  },
  {
    "nome": "PedroSouza",
    "email": "PedroSouza@email.com",
    "id": 4
  }
]
```

3 - Requisição ao endpoint POST `/lancamento`

![POSTLAUNCHS](https://user-images.githubusercontent.com/80548535/144722385-1f237539-ae80-4a91-9fee-4f8edf18d801.png)

#### Os seguintes pontos são avaliados:

- O campo `idUsuario` deverá existir, não estar em branco e ser um tipo number;
- O campo `valor` deverá existir, não estar em branco e ser um tipo number;
- O campo `descricao` deverá existir, não estar em branco e ser um tipo string;
- O campo `data` deverá existir, não estar em branco e ser um tipo string;
- Quando o campo `idUsuario` não existir o endpoint retornará o seguinte erro:

```json
{
  "message": "User not found"
}
```

4 - Requisição ao endpoint GET `/usuario/lancamentos/:ID`

![GETLAUNCHS](https://user-images.githubusercontent.com/80548535/144722434-a125be62-ff73-4562-a718-8fbc5f02adeb.png)

#### Os seguintes pontos são avaliados:

- Quando o parametro `ID` não existir o endpoint retornará o seguinte:

```json
{
  "message": "User not found"
}
```

- Caso contrário, retornará um json com o usuario com seus laçamentos

```json
{
  "nome": "MiguelCampos",
  "email": "MiguelCampos@email.com",
  "id": 1,
  "lancamento": [
    {
      "valor": 300.32,
      "descricao": "VENDER moto antiga",
      "data": "2020-08-25T03:00:00.000Z",
      "id": 1
    },
    {
      "valor": -150.9,
      "descricao": "COMPRAR passage de avião",
      "data": "2020-08-25T03:00:00.000Z",
      "id": 2
    },
    {
      "valor": -100.2,
      "descricao": "COMPRAR coisas no mercado",
      "data": "2020-08-25T03:00:00.000Z",
      "id": 3
    }
  ]
}
```

5 - Requisição ao endpoint DELETE `/usuario/:ID`

![DELETEUSER](https://user-images.githubusercontent.com/80548535/144722710-a9154b9a-d00b-4eb2-b170-c69d9ec6b9d4.png)

#### Os seguintes pontos são avaliados:

- Quando o parametro `ID` não existir o endpoint retornará o seguinte:

```json
{
  "message": "User not found"
}
```
- Caso contrário, retornará um json com o usuario com email do usuario deletado:

```json
{
  "message": "User with email: [MiguelCampos@email.com] deleted"
}
```

## Agradecimentos

Agredeço imensamente pela <a href="https://www.creativecode.art.br/">CreativeCode</a> pela iniciativa de começar esse projeto e pela toda equipe da <a href="https://www.betrybe.com/">Trybe</a> que vem me formando como um profissonal altamente competente.

## Encontre-me
[![Linkding](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/miguel-campos-6b7243203/)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:1hamander@gmail.com)
