document.getElementById("getSumBtn").addEventListener("click", function() {
    let prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    // Remove existing total row if already present
    let existingTotalRow = document.querySelector(".total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    let table = document.getElementById("groceryTable");

    let totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");

    let totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = "Total Price: " + total;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
});


