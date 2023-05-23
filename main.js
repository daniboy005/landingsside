function endreTekstStorrelse(endring) {
    var tekstForstorElement = document.getElementById('tekstForstor');
    var currentFontSize = window.getComputedStyle(tekstForstorElement).getPropertyValue('font-size');
    var currentFontSizeNumeric = parseFloat(currentFontSize);
    var newFontSize = currentFontSizeNumeric + endring;
    tekstForstorElement.style.fontSize = newFontSize + 'px';
  }
  