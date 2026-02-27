const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ status: 'healthy' }));
app.listen(3000, () => console.log('System initialized on port 3000'));
