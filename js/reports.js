document.addEventListener('DOMContentLoaded', function() {
    const reports = [
        { week: 1, title: "Onboarding & Setup", date: "May 1 - May 5", content: "Met the team, set up the development environment, and attended the first project briefing.", status: "Approved" },
        { week: 2, title: "UI Components Design", date: "May 8 - May 12", content: "Worked on creating reusable buttons and navigation bars using Bootstrap and CSS.", status: "Approved" },
        { week: 3, title: "Frontend Logic", date: "May 15 - May 19", content: "Implemented JavaScript validation for the authentication login system and data filtering.", status: "Pending" },
        { week: 4, title: "Progress Review", date: "May 22 - May 26", content: "Presented the first prototype to the supervisor. Received feedback on the Emerald theme.", status: "Draft" }
    ];

    const reportList = document.getElementById('reportList');
    const searchInput = document.getElementById('reportSearch');

    function displayReports(data) {
        reportList.innerHTML = '';
        data.forEach(rep => {
            let statusClass = "text-warning";
            if(rep.status === "Approved") statusClass = "text-emerald";
            if(rep.status === "Draft") statusClass = "text-muted";

            const item = `
                <div class="chart-box mb-3 border-start border-4" style="border-left-color: var(--emerald-bright) !important;">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-1 fw-bold text-gold">Week ${rep.week}: ${rep.title}</h5>
                        <small class="text-muted">${rep.date}</small>
                    </div>
                    <p class="mt-2 text-light small">${rep.content}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="small fw-bold ${statusClass}">Status: ${rep.status}</span>
                        <button class="btn btn-sm btn-link text-emerald p-0">View Details</button>
                    </div>
                </div>
            `;
            reportList.innerHTML += item;
        });
    }

    displayReports(reports);

    // Search report logic
    searchInput.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        const filtered = reports.filter(r => 
            r.title.toLowerCase().includes(term) || 
            r.content.toLowerCase().includes(term)
        );
        displayReports(filtered);
    });
});