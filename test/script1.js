function searchWord() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var paragraphs = document.getElementsByTagName('p');
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    for (var i = 0; i < paragraphs.length; i++) {
      var paragraphText = paragraphs[i].textContent.toLowerCase();
      if (paragraphText.includes(searchInput)) {
        var resultItem = document.createElement('p');
        resultItem.textContent = 'Found in paragraph ' + (i + 1) + ': ' + paragraphs[i].textContent;
        searchResults.appendChild(resultItem);
      }
    }
  
    if (searchResults.innerHTML === '') {
      searchResults.textContent = 'No results found.';
    }
  }
  