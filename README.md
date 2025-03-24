# Dashboard Financeiro

Um dashboard financeiro construído com React.js, Node.js/Express e MongoDB.

## Funcionalidades

- Gerenciamento de transações (receitas e despesas)
- Gráficos de fluxo de caixa
- Categorização de transações
- Interface responsiva e moderna

## Tecnologias Utilizadas

- Frontend: React.js
- Backend: Node.js/Express
- Banco de Dados: MongoDB Atlas
- Bibliotecas: Material-UI, Chart.js, Axios

## Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB Atlas (conta gratuita)
- NPM ou Yarn

## Configuração do Projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/dashboard-financeiro.git
cd dashboard-financeiro
```

2. Instale as dependências do backend:
```bash
npm install
```

3. Instale as dependências do frontend:
```bash
cd client
npm install
```

4. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env`
   - Preencha as variáveis com suas credenciais do MongoDB Atlas:
     - MONGODB_URI: URL de conexão do seu cluster MongoDB
     - MONGODB_API_KEY: Chave de API do MongoDB Atlas
     - PORT: Porta do servidor (padrão: 5006)

## Executando o Projeto

1. Inicie o servidor backend:
```bash
npm start
```

2. Em outro terminal, inicie o frontend:
```bash
cd client
npm start
```

3. Acesse a aplicação em `http://localhost:3000`

## Estrutura do Projeto

```
dashboard-financeiro/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── App.js        # Componente principal
│   │   └── index.js      # Ponto de entrada
├── server.js              # Servidor Express
├── .env                   # Variáveis de ambiente (não versionado)
├── .env.example          # Exemplo de variáveis de ambiente
└── package.json          # Dependências e scripts
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Seu Nome - [@seu_twitter](https://twitter.com/seu_twitter) - email@exemplo.com

Link do Projeto: [https://github.com/seu-usuario/dashboard-financeiro](https://github.com/seu-usuario/dashboard-financeiro) 