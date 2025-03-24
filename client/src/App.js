import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  ThemeProvider, 
  createTheme,
  CssBaseline
} from '@mui/material';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import BalanceChart from './components/BalanceChart';
import CategoryChart from './components/CategoryChart';
import axios from 'axios';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/transactions');
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
      setLoading(false);
    }
  };

  const handleAddTransaction = async (transaction) => {
    try {
      const response = await axios.post('http://localhost:3001/api/transactions', transaction);
      setTransactions([response.data, ...transactions]);
    } catch (error) {
      console.error('Erro ao adicionar transação:', error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/transactions/${id}`);
      setTransactions(transactions.filter(t => t._id !== id));
    } catch (error) {
      console.error('Erro ao deletar transação:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard Financeiro
        </Typography>
        
        <Grid container spacing={3}>
          {/* Formulário de Transação */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <TransactionForm onSubmit={handleAddTransaction} />
            </Paper>
          </Grid>

          {/* Lista de Transações */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
              <TransactionList 
                transactions={transactions} 
                onDelete={handleDeleteTransaction}
                loading={loading}
              />
            </Paper>
          </Grid>

          {/* Gráfico de Saldo */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <BalanceChart transactions={transactions} />
            </Paper>
          </Grid>

          {/* Gráfico de Categorias */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <CategoryChart transactions={transactions} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
