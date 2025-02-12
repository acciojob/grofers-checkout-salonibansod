window.addEventListener('load', (event) => {
    document.getElementById("getSumBtn").addEventListener("click", function() {
        let prices = document.querySelectorAll(".prices");
        let total = 0;

        prices.forEach(price => {
            let priceValue = parseInt(price.textContent);
            if (!isNaN(priceValue)) {
                total += priceValue;
            }
        });

        let table = document.getElementById("groceryTable");

        // Check if total row already exists
        let totalRow = document.querySelector(".total-row");
        let totalCell;

        if (totalRow) {
            // If total row exists, select the cell and update the total price
            totalCell = totalRow.querySelector("td");
            totalCell.textContent = "Total Price: " + total;
        } else {
            // If total row does not exist, create it and add it to the table
            totalRow = document.createElement("tr");
            totalRow.classList.add("total-row");

            totalCell = document.createElement("td");
            totalCell.colSpan = 2;
            totalCell.textContent = "Total Price: " + total;

            totalRow.appendChild(totalCell);
            table.appendChild(totalRow);
        }
    });
});

