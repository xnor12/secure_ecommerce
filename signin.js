document.getElementById('signin-form').addEventListener('submit', async (e) => {  
  e.preventDefault();  
  
  const email = document.getElementById('email').value;  
  const password = document.getElementById('password').value;  
  
  try {  
    const response = await fetch('http://localhost:3000/api/auth/signin', {  
      method: 'POST',  
      headers: {  
        'Content-Type': 'application/json',  
      },  
      body: JSON.stringify({ email, password }),  
    });  
  
    if (!response.ok) {  
      throw new Error(`API request failed with status: ${response.status}`);  
    }  
  
    const data = await response.json();  
    alert(data.message); // Tampilkan pesan sukses  
    window.location.href = '/member.html'; // Arahkan ke halaman member  
  } catch (err) {  
    alert(`Signin failed: ${err.message}`); // Tampilkan pesan kesalahan  
  }  
});  
