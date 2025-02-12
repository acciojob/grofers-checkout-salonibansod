document.addEventListener("DOMContentLoaded", function () {
    function calculateTotal() {
        let prices = document.querySelectorAll(".prices"); // Select all elements with class 'prices'
        let total = 0;
        
        prices.forEach(price => {
            total += parseFloat(price.textContent) || 0; // Convert text to float and sum up
        });
        
        let table = document.querySelector("table"); // Select the table
        let totalRow = document.createElement("tr"); // Create a new row
        let totalCell = document.createElement("td"); // Create a single cell
        
        totalCell.setAttribute("colspan", "2"); // Span across both columns
        totalCell.textContent = "Total Price: " + total.toFixed(2); // Set total price text
        
        totalRow.appendChild(totalCell);
        table.appendChild(totalRow); // Append the total row to the table
    }
    
    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);

    const getSum = () => {
        calculateTotal();
    };

    getSumBtn.addEventListener("click", getSum);
});