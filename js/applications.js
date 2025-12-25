document.addEventListener('DOMContentLoaded', function() {
    // Check if data is loaded rightfully
    if (typeof myApplications === 'undefined') {
        console.error("Data.js is not loading correctly!");
        return;
    }

    const tableBody = document.getElementById('appTableBody');

    function displayApps(data) {
        tableBody.innerHTML = '';
        data.forEach(app => {
            let badgeColor = "bg-secondary";
            if(app.status === "Interviewing") badgeColor = "bg-primary";
            if(app.status === "Offer Received") badgeColor = "bg-success text-dark";
            if(app.status === "Rejected") badgeColor = "bg-danger";

            const row = `
                <tr>
                    <td class="p-3 fw-bold">${app.company}</td>
                    <td class="p-3">${app.role}</td>
                    <td class="p-3 text-muted">${app.date}</td>
                    <td class="p-3 text-center">
                        <span class="badge ${badgeColor}">${app.status}</span>
                    </td>
                    <td class="p-3 text-end">
                        <button class="btn btn-sm btn-outline-warning"><i class="fas fa-edit"></i></button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    // Use 'myApplications' here to match data in data.js
    displayApps(myApplications); 

    // Search logic to use 'myApplications'
    document.getElementById('appSearch').addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        const filtered = myApplications.filter(app => 
            app.company.toLowerCase().includes(term) || 
            app.role.toLowerCase().includes(term)
        );
        displayApps(filtered);
    });

    // The Function to display data & badge color
    function displayApps(data) {
        tableBody.innerHTML = '';
        data.forEach(app => {
            let badgeColor = "bg-secondary";
            if(app.status === "Interviewing") badgeColor = "bg-primary";
            if(app.status === "Offer Received") badgeColor = "bg-success text-dark";
            if(app.status === "Rejected") badgeColor = "bg-danger";

            const row = `
                <tr>
                    <td class="p-3 fw-bold">${app.company}</td>
                    <td class="p-3">${app.role}</td>
                    <td class="p-3 text-muted">${app.date}</td>
                    <td class="p-3 text-center">
                        <span class="badge ${badgeColor}">${app.status}</span>
                    </td>
                    <td class="p-3 text-end">
                        <button class="btn btn-sm btn-outline-warning"><i class="fas fa-edit"></i></button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }
    displayApps(applications);
});