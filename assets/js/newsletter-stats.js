import Chart from 'chart.js/auto';

document.addEventListener('DOMContentLoaded', function() {
    // Graphique circulaire pour le taux d'ouverture
    const openRateCtx = document.getElementById('openRateChart');
    if (openRateCtx) {
        const openRate = parseFloat(openRateCtx.dataset.openRate);
        new Chart(openRateCtx, {
            type: 'doughnut',
            data: {
                labels: ['Ouvert', 'Non ouvert'],
                datasets: [{
                    data: [openRate, 100 - openRate],
                    backgroundColor: ['#34D399', '#E5E7EB'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Graphique en barres pour les clics
    const clicksCtx = document.getElementById('clicksChart');
    if (clicksCtx) {
        const clicksData = JSON.parse(clicksCtx.dataset.clicks);
        new Chart(clicksCtx, {
            type: 'bar',
            data: {
                labels: clicksData.map(item => item.url),
                datasets: [{
                    label: 'Nombre de clics',
                    data: clicksData.map(item => item.count),
                    backgroundColor: '#818CF8',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }
});
