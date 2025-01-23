const loadProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const products = await response.json();
  
      const productSelect = document.getElementById('product');
      products.forEach((product) => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} - $${product.price}`;
        productSelect.appendChild(option);
      });
    } catch (err) {
      console.error('Failed to load products', err);
    }
  };
  
  document.getElementById('purchase-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const productId = document.getElementById('product').value;
  
    try {
      const response = await fetch('http://localhost:3000/api/products/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
  
      if (!response.ok) throw new Error('Purchase failed');
      alert('Purchase successful!');
    } catch (err) {
      alert(err.message);
    }
  });
  
  loadProducts();