document.addEventListener('DOMContentLoaded', function () {
    // Data Calculation for status in doughnut chart
    const total = myApplications.length;
    const appliedCount = myApplications.filter(a => a.status === "Applied").length;
    const interviewCount = myApplications.filter(a => a.status === "Interviewing").length;
    const offerCount = myApplications.filter(a => a.status === "Offer Received").length;
    const rejectionCount = myApplications.filter(a => a.status === "Rejected").length;

    // Data Calculation for types of industry in Bar Chart
    const techCount = myApplications.filter(a => a.industry === "Technology").length;
    const financeCount = myApplications.filter(a => a.industry === "Finance").length;
    const oilGasCount = myApplications.filter(a => a.industry === "Oil & Gas").length;
    const manufacturingCount = myApplications.filter(a => a.industry === "Manufacturing").length;

    // Update Summary Cards
    document.getElementById('total-apps').textContent = total;
    document.getElementById('interview-apps').textContent = interviewCount;
    document.getElementById('offer-apps').textContent = offerCount;
    document.getElementById('rejected-apps').textContent = rejectionCount;

    // Preference color
    const emerald = '#10b981';
    const gold = '#d4af37';
    const darkEmerald = '#064e3b';
    const mutedText = '#a0a0a0';

    // --- CHART 1: LINE CHART (Total Application)---
    const ctx1 = document.getElementById('internshipChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Total Application',
                data: [4, 10, 15, 20, 25, total], 
                borderColor: gold,
                backgroundColor: 'rgba(6, 78, 59, 0.4)',
                fill: true,
                tension: 0.4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, 
            plugins: { legend: { labels: { color: '#fff' } } },
            scales: { y: { ticks: { color: mutedText } }, x: { ticks: { color: mutedText } } }
        }
    });

    // --- CHART 2: DOUGHNUT CHART (Total Results of Applications)) ---
    const ctx2 = document.getElementById('statusDoughnutChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Applied', 'Interviewing', 'Offered', 'Rejected'],
            datasets: [{
                data: [appliedCount, interviewCount, offerCount, rejectionCount],
                backgroundColor: ['#a0a0a0', '#d4af37', '#064e3b', '#ef4444'],
                borderWidth: 0
            }]
        },
        options: { responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'right', labels: { color: '#fff' } } }
        }
    });

    // --- CHART 3: BAR CHART (Type of Industries Applied to) ---
    const ctx3 = document.getElementById('industryBarChart').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Tech', 'Finance', 'Oil & Gas', 'Manufacturing'],
            datasets: [{
                label: 'Applications',
                data: [techCount, financeCount, oilGasCount, manufacturingCount],
                backgroundColor: '#10b981',
                borderRadius: 5
            }]
        },
        options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { ticks: { color: mutedText } }, y: { ticks: { color: mutedText } } }
        }
    });
});