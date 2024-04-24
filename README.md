# [To Do List](https://to-do-list-react-two-delta.vercel.app)

## Entendendo a estrutura do projeto

## Setup inicial:

- [NodeJS](https://nodejs.org/en)

## Como rodar na minha máquina?

- Clone o projeto [https://github.com/MatheusAmon12/to-do-list.git](https://github.com/MatheusAmon12/to-do-list.git)
- Rode `npm install` ou `npm i`
- Rode `npm start`
- Finalizado!

## To Do List

### Estrutura do projeto

- `./src` contém todos os arquivos que compõe o projeto, desde componentes à funções
- `./src/components` são todas peças essenciais para interface
    - `<AddTask />` abstração responsável por gerenciar a entrada de dados e criação de novas tarefas
    - `<Button />` abstração que renderiza um botão, recebe como prop o children que se trata do conteúdo textual contido
    - `<Header />` abstração que renderiza um `<h1>` responsável pelo título
    - `<Task />` abstração responsável por montar a unidade de task, recebe como prop o array `task` vindo do componente `<Tasks />`
    - `<TaskDetails />` abstração que renderiza um conteúdo genérico para a aba info de cada task
    - `<Tasks />` abstração que captura as tasks armazenadas e renderiza cada uma em seu respectivo componente `<Task />` passando a prop `task`
- `./src/redux` contém o armazenamento do estado global e a fatia relacionada ao array de objetos `tasks`, lida também com o local storage
- `./src/styles` todos os estilos relacionados a cada componente
- `./src/utils` contém as funções utilitárias que gerenciam a atualização e captura de informações do local storage

### Como me localizar dentro do projeto?

- Trata-se de um projeto React SPA, então a o arquivo `./src/App.jsx` gerencia a página com as bibliotecas `react-router` e `react-router-dom`. Veja mais em [https://reactrouter.com/en/main/start/overview](https://reactrouter.com/en/main/start/overview)

### Como foi montado o roteamento?

- Toda estrutura foi inserida dentro do próprio `App`, por ser necessário simular apenas duas rotas. A rota principal que contém a lista de tarefas em si encontra-se no `path: "/"` e ela que renderiza os componentes `<AddTask />` e `<Tasks />`. O endpoint responsável por conter as informações de cada `task` se encontra no `path: "/:taskTitle"`. Veja abaixo:

```js
import React from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import "./styles/App.css"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import TaskDetails from "./components/TaskDetails"

const App = () => {
  return(
    <div className="container">
      <Header />
      <Router>
        <Routes>
          <Route path="/" 
            element={
              <>
                <AddTask />
                <Tasks />
              </>
            } 
          />
          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
```