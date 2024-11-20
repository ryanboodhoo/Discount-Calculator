document.getElementById("calculateBtn").addEventListener("click", function () {
    const price = parseFloat(document.getElementById("price").value);
    const discount = parseFloat(document.getElementById("discount").value);
  
    if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0 || discount > 100) {
      document.getElementById("result").innerText = "Please enter valid inputs.";
      return;
    }
  
    const finalPrice = price - (price * (discount / 100));
    document.getElementById("result").innerText = `Final Price: $${finalPrice.toFixed(2)}`;
  });
  