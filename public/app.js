// Fetch inventory data and render the table
fetch("/api/inventory")
  .then(response => response.json())
  .then(data => {
    const inventoryTable = document.getElementById("inventoryTable");
    const searchInput = document.getElementById("searchInput");

    //render the table rows using function
    const renderTable = (items) => {
      inventoryTable.innerHTML = ""; 
      items.forEach(item => {
        const row = `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
          </tr>`;
        inventoryTable.innerHTML += row;
      });
    };

    renderTable(data);

    // search functionality
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredData = data.filter(item =>
        item.id.toString().includes(searchTerm) ||item.name.toLowerCase().includes(searchTerm)  
    
      );
      renderTable(filteredData);
    });
  })
  .catch(err => console.error("Error fetching inventory data:", err));
