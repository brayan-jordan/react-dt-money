# React Dt Money
Um projeto simples para controle de entradas e saídas de dinheiro.
## Iniciar projeto
Para iniciar o projeto, basta clonar o repositório e executar os seguintes comandos:
```bash
# Instalar as dependências
$ npm install

# Iniciar o back-end (json-server)
$ npm run dev:server

# Iniciar o front-end na porta 5173
$ npm run dev
```
## Principais conceitos aprendidos
1. Criação de um [hook customizado](https://github.com/brayan-jordan/react-dt-money/blob/master/src/hooks/useSummary.ts) para melhorar a semântica do código.
2. Utilização da biblioteca [use-context-selector](https://www.npmjs.com/package/use-context-selector) para lidar com contextos de forma mais eficiente e evitar renderizações desnecesárias.
3. Utilização do hook [useMemo](https://react.dev/reference/react) para armazenar valores que não precisam ser recalculados a cada renderização.
4. Utilização da biblioteca [radix-ui](https://www.radix-ui.com/) para facilitar a implementação de componentes como modais, popover, dropdown (visando a facilidade de implementação de componentes acessíveis).
5. Utilização da biblioteca [axios](https://www.npmjs.com/package/axios) para realizar requisições HTTP.
   
## Imagens do projeto
![Imagem da home](https://github.com/brayan-jordan/react-dt-money/blob/master/docs/home.png)
![Imagem do modal de criação de nova transação](https://github.com/brayan-jordan/react-dt-money/blob/master/docs/new-transaction.png)