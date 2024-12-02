const express = require("express");
const path = require("path");
const InventoryService = require("./services/InventoryService");

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// index.html for the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

//  inventory data of API
app.get("/api/inventory", (req, res) => {
    const inventoryService = new InventoryService();
    const inventoryData = inventoryService.getInventory();
    res.json(inventoryData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
