#  Task Manager API

Projeto simples de gerenciamento de tarefas (CRUD) desenvolvido para simular um fluxo profissional de desenvolvimento utilizando Git Flow, versionamento semântico e boas práticas de organização de código.

---

## Objetivo

Este projeto tem como objetivo praticar:

* Controle de versão com Git
* Estrutura de branches (main, develop, feature, hotfix)
* Versionamento semântico
* Organização de projeto backend com Node.js

---

##  Funcionalidades

* Criar tarefas
* Listar tarefas
* Atualizar tarefas
* Remover tarefas

---

##  Tecnologias utilizadas

* Node.js
* Express
* Git

---

##  Estrutura do projeto

```
task-manager-api/
│
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── tasks.js
│   ├── controllers/
│   │   └── taskController.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

##  Estratégia de Branches (Git Flow)

O projeto segue a seguinte estrutura:

* `main` → versão de produção
* `develop` → integração de novas features
* `feature/*` → desenvolvimento de novas funcionalidades
* `hotfix/*` → correções urgentes em produção

---

##  Fluxo de desenvolvimento

1. Criar branch a partir de `develop`

   ```bash
   git checkout -b feature/nome-da-feature
   ```

2. Desenvolver funcionalidade

3. Commitar seguindo padrão:

   * feat: nova funcionalidade
   * fix: correção de bug
   * docs: documentação
   * chore: ajustes gerais

4. Fazer merge na branch `develop`

5. Quando estável, fazer merge para `main`

---

##  Padrão de commits

Exemplos:

* `feat: adiciona criação de tarefas`
* `feat: adiciona listagem de tarefas`
* `fix: corrige erro ao deletar tarefa`
* `chore: estrutura inicial do projeto`

---

##  Versionamento

Este projeto utiliza **Versionamento Semântico**:

* `v1.0.0` → versão inicial
* `v1.0.1` → correção de bug
* `v1.1.0` → novas funcionalidades

---

##  Como executar o projeto

```bash
npm install
node src/app.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

##  Exemplo de endpoints

* `POST /tasks` → cria tarefa
* `GET /tasks` → lista tarefas
* `PUT /tasks/:id` → atualiza tarefa
* `DELETE /tasks/:id` → remove tarefa

---

## 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos e prática de Git + Node.js.
