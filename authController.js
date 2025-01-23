const bcrypt = require('bcrypt');
const db = require('../database/db');

exports.signUp = async (req, res) => {
  const { email, password, name, phone, website, birth_place, birth_date, no_kk, no_ktp } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.run(
      `INSERT INTO users (email, password, name, phone, website, birth_place, birth_date, no_kk, no_ktp)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [email, hashedPassword, name, phone, website, birth_place, birth_date, no_kk, no_ktp]
    );
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.signIn = async (req, res) => {  
  const { email, password } = req.body;  
  
  try {  
    console.log('Received signin request:', email); // Debug log  
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);  
    console.log('User found:', user); // Debug log  
  
    // Periksa apakah user ditemukan  
    if (!user) {  
      console.error('User not found');  
      return res.status(404).json({ error: 'User not found' });  
    }  
  
    // Bandingkan password yang dimasukkan dengan password yang di-hash  
    const isPasswordValid = await bcrypt.compare(password, user.password);  
    if (!isPasswordValid) {  
      console.error('Invalid credentials');  
      return res.status(401).json({ error: 'Invalid credentials' });  
    }  
  
    console.log('Signin successful');  
    res.status(200).json({ message: 'Signin successful' });  
  } catch (error) {  
    console.error('Error during signin:', error.message);  
    res.status(500).json({ error: 'Internal server error' });  
  }  
};