const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware so frontend can talk to backend
app.use(cors()); 

// A simple test route
app.post('/api/test-click', (req, res) => {
  // This will print in your VS Code terminal when the button is clicked!
  console.log("✅ SUCCESS: Someone clicked the Inquire button on the frontend!");
  
  res.status(200).json({ message: "Click recorded successfully" });
});

app.listen(PORT, () => {
  console.log(`Test Backend running on http://localhost:${PORT}`);
});