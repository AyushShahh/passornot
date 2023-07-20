function displayCSVData(data) {
    const tableBody = document.getElementById('csv-data');
    tableBody.innerHTML = '';
    data.forEach(row => {
      const tableRow = document.createElement('tr');
      Object.values(row).forEach(value => {
        const tableCell = document.createElement('td');
        tableCell.textContent = value;
        tableRow.appendChild(tableCell);
      });
      tableBody.appendChild(tableRow);
    });
  }
  
  fetch('/data/div.csv')
    .then(response => response.text())
    .then(csvData => {
      const parsedData = Papa.parse(csvData, { header: true }).data;
      displayCSVData(parsedData);
    });
  