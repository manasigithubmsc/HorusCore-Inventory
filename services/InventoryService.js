// Mock data

class InventoryService {
    
    getInventory() {
        return [
            { id: 1001, name: "COG", description: "Convenience goods" },
            { id: 2001, name: "SHG", description: "Shopping goods" },
            { id: 2008, name: "SPG", description: "Specialty goods" },
            { id: 3001, name: "UNG", description: "Unsought goods" },
        ];
    }
}

module.exports = InventoryService;
