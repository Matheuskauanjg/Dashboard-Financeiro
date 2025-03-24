import React, { useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { Typography, Box } from '@mui/material';

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884D8',
  '#82CA9D',
  '#FFC658'
];

function CategoryChart({ transactions }) {
  const chartData = useMemo(() => {
    const categoryData = {};
    
    transactions
      .filter(transaction => transaction.type === 'despesa')
      .forEach(transaction => {
        if (!categoryData[transaction.category]) {
          categoryData[transaction.category] = 0;
        }
        categoryData[transaction.category] += transaction.value;
      });
    
    return Object.entries(categoryData)
      .map(([category, value]) => ({
        name: category,
        value
      }))
      .sort((a, b) => b.value - a.value);
  }, [transactions]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Distribuição de Gastos por Categoria
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => 
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(value)
              }
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
}

export default CategoryChart; 