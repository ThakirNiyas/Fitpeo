import React, { ReactElement } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        // title: {
        //     display: true,
        //     text: 'Activity',
        // },
    },
};

const labels = ['1', '5', '9', '13', '17', '21', '25', '27', '29', '31', '33', '35', '37', '39', '41', '43', '45', '47', '49', '51', '25', '27', '29', '31', '33', '35', '37', '39', '41', '43'];

const data = {
    labels,
    datasets: [
        {
            data: [3000, 4000, 5000, 8000, 10000, 7000, 4000, 3000, 5000, 8000, 10000, 7000, 4000, 3000, 4000, 5000, 8000, 10000, 7000, 5000, 8000, 10000, 7000, 4000, 3000, 8000, 10000, 7000, 4000, 3000, 4000, 5000, 8000, 4000, 5000, 8000, 10000, 7000, 4000, 3000, 5000, 8000, 10000, 7000, 4000, 3000, 4000, 5000, 8000, 10000, 7000, 5000, 8000, 10000, 7000, 4000, 3000],
            backgroundColor: '#7289da',
            // borderRadius: '10px',
        },
    ],
};

function ColumnChart(): ReactElement {
    return <Bar options={options} data={data} />;
};

export default ColumnChart;