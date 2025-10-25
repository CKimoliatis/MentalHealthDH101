// Wait for the DOM to be fully loaded before running chart logic
document.addEventListener("DOMContentLoaded", () => {
    
    // Check if the stressLevelChart canvas exists on this page
    const stressChartCtx = document.getElementById('stressLevelChart');
    if (stressChartCtx) {
        new Chart(stressChartCtx, {
            type: 'bar',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Reported Stress Level (Avg)',
                    data: [5.4, 7.8, 7.5, 6.9, 6.1],
                    backgroundColor: 'rgba(59, 130, 246, 0.6)', // Blue
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#e5e7eb' // Light gray for legend text
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)' // Light grid lines
                        },
                        ticks: {
                            color: '#e5e7eb' // Light gray for y-axis labels
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#e5e7eb' // Light gray for x-axis labels
                        }
                    }
                }
            }
        });
    }

    // Check if the anxietyTrendChart canvas exists on this page
    const anxietyChartCtx = document.getElementById('anxietyTrendChart');
    if (anxietyChartCtx) {
        new Chart(anxietyChartCtx, {
            type: 'line',
            data: {
                labels: ['Pre-COVID', 'Mid-2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Diagnosed Anxiety Cases (in thousands)',
                    data: [120, 180, 210, 190, 175],
                    fill: true,
                    backgroundColor: 'rgba(239, 68, 68, 0.2)', // Reddish tint
                    borderColor: 'rgba(239, 68, 68, 1)', // Red
                    tension: 0.1,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(239, 68, 68, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#e5e7eb' // Light gray for legend text
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)' // Light grid lines
                        },
                        ticks: {
                            color: '#e5e7eb' // Light gray for y-axis labels
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#e5e7eb' // Light gray for x-axis labels
                        }
                    }
                }
            }
        });
    }

});

