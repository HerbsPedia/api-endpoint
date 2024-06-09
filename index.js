const express = require('express');
const app = express();
const plantsData = require('./plants.json');

// Endpoint untuk menampilkan semua data tanaman
app.get('/api/plants', (req, res) => {
    res.json(plantsData);
});

// Endpoint untuk menampilkan satu jenis tanaman berdasarkan ID
app.get('/api/plants/:id', (req, res) => {
    const plantId = req.params.id;
    const plant = plantsData.find(plant => plant.id === parseInt(plantId));
    if (!plant) {
        res.status(404).json({ error: 'Tanaman tidak ditemukan' });
    } else {
        res.json(plant);
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});
