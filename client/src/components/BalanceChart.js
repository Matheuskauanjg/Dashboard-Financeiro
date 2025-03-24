import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Typography } from '@mui/material';

function BalanceChart({ transactions }) {
  const chartData = useMemo(() => {
    const monthlyData = {};
    
    transactions.forEach(transaction => {
      const date = new Date(transaction.date);
      const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
      
      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = {
          month: monthYear,
          receitas: 0,
          despesas: 0,
          saldo: 0
        };
      }
      
      if (transaction.type === 'receita') {
        monthlyData[monthYear].receitas += transaction.value;
      } else {
        monthlyData[monthYear].despesas += transaction.value;
      }
      
      monthlyData[monthYear].saldo = 
        monthlyData[monthYear].receitas - monthlyData[monthYear].despesas;
    });
    
    return Object.values(monthlyData).sort((a, b) => {
      const [monthA, yearA] = a.month.split('/');
      const [monthB, yearB] = b.month.split('/');
      return yearA - yearB || monthA - monthB;
    });
  }, [transactions]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Fluxo de Caixa Mensal
      </Typography>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip 
            formatter={(value) => 
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(value)
            }
          />
          <Legend />
          <Bar dataKey="receitas" fill="#4caf50" name="Receitas" />
          <Bar dataKey="despesas" fill="#f44336" name="Despesas" />
          <Bar dataKey="saldo" fill="#2196f3" name="Saldo" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default BalanceChart; 