const express = require('express');
const bodyParser = require('body-parser');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/analytics', analyticsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});