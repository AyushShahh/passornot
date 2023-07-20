// Parse the CSV file
Papa.parse('/data/final.csv', {
    download: true,
    complete: function (results) {
      var csvData = results.data.slice(1); // Exclude the header row
  
      var searchInput = document.getElementById('search-input');
      var autocompleteResults = document.getElementById('autocomplete-results');
  
      searchInput.addEventListener('input', function () {
        var query = this.value.toLowerCase();
        var filteredData = csvData.filter(function (row) {
          return row[0].toLowerCase().includes(query);
        });
  
        displayAutocompleteSuggestions(filteredData);
      });
  
      // Function to display autocomplete suggestions
      function displayAutocompleteSuggestions(data) {
        autocompleteResults.innerHTML = '';
  
        if (data.length > 0) {
          autocompleteResults.style.display = 'block'; // Show the autocomplete box
          data.slice(0, 5).forEach(function (row) {
            var suggestion = document.createElement('li');
            suggestion.textContent = row[0];
            suggestion.addEventListener('click', function () {
              searchInput.value = row[0]; // Set the search input value
              autocompleteResults.style.display = 'none'; // Hide the autocomplete box
              displayData(row);
            });
            autocompleteResults.appendChild(suggestion);
          });
        } else {
          autocompleteResults.style.display = 'none'; // Hide the autocomplete box
        }
      }
  
      // Function to display data
      function displayData(data) {
        var dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = '';
  
        let spi = data[1];
        let mat = data[2];
        let bee = data[3];
        let egd = data[4];
        let pps = data[5];
        let eng = data[6];
        let mat_i = data[7];
        let bee_i = data[8];
        let egd_i = data[9];
        let pps_i = data[10];
        let eng_i = data[11];
        let bonus = data[12];

        let html = `
        <table class="styled-table">
          <thead>
            <tr>
              <td></td>
              <th>Maths</th>
              <th>BEE</th>
              <th>EGD/BME</th>
              <th>PPS</th>
              <th>Eng</th>
          </thead>
          <tbody>
            <tr>
              <th class="b-r">Marks</th>
              <td>${mat}</td>
              <td>${bee}</td>
              <td>${egd}</td>
              <td>${pps}</td>
              <td class="b-r">${eng}</td>
            </tr>
            <tr>
              <th class="b-r">Internals</th>
              <td>${mat_i}</td>
              <td>${bee_i}</td>
              <td>${egd_i}</td>
              <td>${pps_i}</td>
              <td class="b-r">${eng_i}</td>
            </tr>
            <tr>
              <th class="b-r">Grade</th>
              <td class="b-b">${grade(mat, mat_i)}</td>
              <td class="b-b">${grade(bee, bee_i)}</td>
              <td class="b-b">${grade(egd, egd_i)}</td>
              <td class="b-b">${grade(pps, pps_i)}</td>
              <td class="b-r b-b">${grade(eng, eng_i)}</td>
            </tr>
            <tr>
              <th>SPI:</th>
              <td>${spi}</td>
            </tr>
            <tr>
              <th>Bonus:</th>
              <td>${bonus}</td>
            </tr>
          </tbody>
        </table>
        `
        dataContainer.innerHTML = html;
      }
  
      // Hide autocomplete box when clicked outside
      document.addEventListener('click', function (event) {
        if (!autocompleteResults.contains(event.target) && event.target !== searchInput) {
          autocompleteResults.style.display = 'none';
        }
      });
    }
  });


  function grade(m, i) {
    const marks = parseInt(m);
    const internals = parseInt(i);
    const total = marks + internals;

    if (total >= 85)
    {
      return "AA";
    }
    else if (total >= 75)
    {
      return "AB";
    }
    else if (total >= 65)
    {
      return "BB";
    }
    else if (total >= 55)
    {
      return "BC";
    }
    else if (total >= 45)
    {
      return "CC";
    }
    else if (total >= 40)
    {
      return "CD";
    }
    else if (total >= 35)
    {
      return "DD";
    }
    else
    {
      return "FF";
    }
  }