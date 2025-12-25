document.addEventListener('DOMContentLoaded', () => {
    // The data for companies lists
    const companies = [
        { name: "Google", industry: "Technology", location: "Kuala Lumpur", status: "Hiring", website: "https://google.com", description: "Global leader in search, AI, and cloud computing." },
        { name: "Grab", industry: "Technology", location: "Selangor", status: "Hiring", website: "https://grab.careers", description: "Southeast Asia's leading super-app for ride-hailing and food delivery." },
        { name: "Petronas", industry: "Oil & Gas", location: "KLCC", status: "Hiring", website: "https://www.petronas.com", description: "Malaysian multinational energy group ranked among Fortune Global 500." },
        { name: "Maybank", industry: "Finance", location: "Kuala Lumpur", status: "Hiring", website: "https://www.maybank.com", description: "The largest financial services group in Malaysia and a top ASEAN bank." },
        { name: "Shopee", industry: "Technology", location: "Bangsar South", status: "Closed", website: "https://careers.shopee.com", description: "Leading e-commerce platform in Southeast Asia and Taiwan." },
        { name: "Deloitte", industry: "Finance", location: "Kuala Lumpur", status: "Hiring", website: "https://www.deloitte.com", description: "One of the 'Big Four' global accounting and consulting firms." },
        { name: "Intel", industry: "Manufacturing", location: "Penang", status: "Hiring", website: "https://www.intel.com", description: "A global leader in semiconductor design and manufacturing." },
        { name: "Dyson", industry: "Manufacturing", location: "Johor", status: "Hiring", website: "https://careers.dyson.com", description: "Global technology company known for vacuum cleaners and hair care." },
        { name: "Maxis", industry: "Technology", location: "Kuala Lumpur", status: "Hiring", website: "https://www.maxis.com.my", description: "Malaysia's leading integrated telecommunications solutions provider." },
        { name: "PwC", industry: "Finance", location: "Kuala Lumpur", status: "Hiring", website: "https://www.pwc.com", description: "Multinational professional services network focusing on audit and tax." },
        { name: "Shell", industry: "Oil & Gas", location: "Cyberjaya", status: "Hiring", website: "https://www.shell.com.my", description: "A global group of energy and petrochemical companies." },
        { name: "AirAsia", industry: "Technology", location: "Sepang", status: "Closed", website: "https://newsroom.airasia.com", description: "World's best low-cost airline expanding into a digital travel platform." },
        { name: "CIMB", industry: "Finance", location: "Kuala Lumpur", status: "Hiring", website: "https://www.cimb.com", description: "A leading focused ASEAN universal bank." },
        { name: "TM (Telekom)", industry: "Technology", location: "Kuala Lumpur", status: "Hiring", website: "https://www.tm.com.my", description: "The national telecommunications provider for Malaysia." },
        { name: "Nestle", industry: "Manufacturing", location: "Selangor", status: "Hiring", website: "https://www.nestle.com.my", description: "The world's largest food and beverage company." },
        { name: "Khazanah", industry: "Finance", location: "Kuala Lumpur", status: "Hiring", website: "https://www.khazanah.com.my", description: "The sovereign wealth fund of the Government of Malaysia." },
        { name: "MDEC", industry: "Government", location: "Cyberjaya", status: "Hiring", website: "https://mdec.my", description: "Leading the digital economy transformation in Malaysia." }
    ];

    const companyGrid = document.getElementById('companyGrid');
    const companySearch = document.getElementById('companySearch');
    const industryFilter = document.getElementById('industryFilter');

    // Display Company funtions
    function displayCompanies(data) {
        companyGrid.innerHTML = ''; 
        if (data.length === 0) {
            companyGrid.innerHTML = '<h5 class="text-center text-muted w-100 mt-5">No companies found.</h5>';
            return;
        }
        
        data.forEach(company => {
            const badgeColor = company.status === "Hiring" ? "bg-success" : "bg-secondary";
            companyGrid.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 bg-dark text-white border-secondary shadow-sm">
                        <div class="card-body d-flex flex-column">
                            <span class="badge ${badgeColor} mb-2 w-25">${company.status}</span>
                            <h5 class="fw-bold" style="color: var(--gold);">${company.name}</h5>
                            <p class="small text-muted mb-1">${company.industry} | ${company.location}</p>
                            <p class="card-text text-muted small mb-4">${company.description}</p>
                            <a href="${company.website}" target="_blank" class="btn btn-custom-company btn-sm mt-auto">Visit Website</a>
                        </div>
                    </div>
                </div>`;
        });
    }

    // Filtering in search and select
    function runFilters() {
        const searchTerm = companySearch ? companySearch.value.toLowerCase() : "";
        const selectedInd = industryFilter.value;

        const filtered = companies.filter(c => {
            const nameMatch = c.name.toLowerCase().includes(searchTerm);
            const industryMatch = (selectedInd === "all") || (c.industry === selectedInd);
            
            return nameMatch && industryMatch;
        });

        displayCompanies(filtered);
    }

    if (industryFilter) {
        industryFilter.addEventListener('change', runFilters);
    }
    if (companySearch) {
        companySearch.addEventListener('input', runFilters);
    }

    displayCompanies(companies);
});