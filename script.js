document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const descriptionInput = document.getElementById("description");
    const priceInput = document.getElementById("price");
    const quantityInput = document.getElementById("quantity");
    const addProductsButton = document.getElementById("addProducts");
    const tableBody = document.getElementById("body");
    const totalAmountCell = document.getElementById("totalAmount");
  
    let totalAmount = 0;
  
    addProductsButton.addEventListener("click", function () {
      const name = nameInput.value;
      const description = descriptionInput.value;
      const price = parseFloat(priceInput.value);
      const quantity = parseInt(quantityInput.value);
  
      if (name && description && !isNaN(price) && !isNaN(quantity)) {
        const amount = price * quantity;
        totalAmount += amount;
  
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${name}</td>
          <td>${description}</td>
          <td>${price}</td>
          <td>${quantity}</td>
          <td>${amount}</td>
        `;
        tableBody.appendChild(newRow);
  
        totalAmountCell.textContent = totalAmount;
  
        nameInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";
        quantityInput.value = "";
      }else if(isNaN(price) && isNaN(quantity)){
        alert("ERROR!! please enter a valid input");
      } else {
        alert("ERROR!! please enter a valid input");
      }
    });
  });