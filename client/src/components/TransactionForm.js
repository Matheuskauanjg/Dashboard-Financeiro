import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography
} from '@mui/material';

const categories = [
  'Alimentação',
  'Transporte',
  'Moradia',
  'Lazer',
  'Saúde',
  'Educação',
  'Outros'
];

function TransactionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    category: '',
    value: '',
    type: 'despesa',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      value: parseFloat(formData.value)
    });
    setFormData({
      date: new Date().toISOString().split('T')[0],
      category: '',
      value: '',
      type: 'despesa',
      description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Nova Transação
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="date"
            name="date"
            label="Data"
            value={formData.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Tipo</InputLabel>
            <Select
              name="type"
              value={formData.type}
              onChange={handleChange}
              label="Tipo"
            >
              <MenuItem value="receita">Receita</MenuItem>
              <MenuItem value="despesa">Despesa</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              label="Categoria"
              required
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            type="number"
            name="value"
            label="Valor"
            value={formData.value}
            onChange={handleChange}
            required
            inputProps={{ min: "0", step: "0.01" }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="description"
            label="Descrição"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={2}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Adicionar Transação
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TransactionForm; 