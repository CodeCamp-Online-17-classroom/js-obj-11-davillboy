// write code here
        let product = {}; 
        let productName = prompt("Enter product name:");
        let quantity = +prompt("Enter quantity sold:");
        let pricePerUnit = +prompt("Enter price per unit:");
        let discountPercentage = +prompt("Enter discount percentage:"); 

        if (discountPercentage !== 0) {
            product.discount = discountPercentage;
          }
                        
        product.name = productName;
        product.quantity = quantity;
        product.price = pricePerUnit;   

        function calculateTotalPrice() {    
            let totalPrice = product.quantity * product.price;
            if (product.discount) {
              let discountAmount = (totalPrice * product.discount) / 100;
              totalPrice -= discountAmount;
            }
            return totalPrice;
          }

          console.log(product); 
          console.log("Total price after discount:", calculateTotalPrice());
