import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Panel.css';

// Registrar módulos necesarios para Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Panel() {
  // Datos de ejemplo
  const data = {
    labels: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'],
    datasets: [
      {
        label: 'Cantidad consumida',
        data: [120, 90, 150, 200, 170],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Productos más consumidos',
      },
    },
  };

  return (
    <div className="panel-container">
      <h1 className="panel-title">Panel de Control</h1>
      <p className="panel-description">Comida mas consumida por los clientes.</p>
      <div className="panel-chart">
        <Bar data={data} options={options} />
      </div>
      <Link to="/" className="back-button">
        <button className="panel-back-button">Regresar</button>
      </Link>
    </div>
  );
}

export default Panel;
