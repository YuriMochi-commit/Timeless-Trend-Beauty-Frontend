     
 const searchInput = document.getElementById('search-input');

        searchInput.addEventListener('input', async (e) => {
            const searchTerm = e.target.value.trim();
            if (searchTerm.length > 0) { // adjust the minimum search term length to your liking
                const results = await fetchSearchResults(searchTerm);
                displayAutocompleteResults(results);
            } else {
                hideAutocompleteResults();
            }
        });

        const fetchSearchResults = (searchTerm) => {

  const results = [
    { label: 'Wedding Guest Dresses', value: 'Wedding Guest Dresses', url:'WeddingGuestDresses.html' },
    { label: 'Party Outfits', value: 'Party Outfits', url: 'PartyOutfits.html' },
    { label: 'Beach Wear', value: 'Beach Wear', url: 'BeachWear.html' },
     { label: 'Work Outfits', value: 'Work Outfits', url: 'WorkOutfits.html' },
    { label: 'Street Wear', value: 'Street Wear', url: 'StreetWear.html' },
    { label: 'Luxury Fashion', value: 'Luxury Fashion', url: 'LuxryFashion.html' },
     { label: 'Face Shape For Men', value: 'Face Shape For Men', url: 'MenHairStyle.html' },
    { label: 'Face Shape For Women', value: 'Face Shape For Women', url: 'WomenHairStyle.html' },
    { label: 'SkinCare', value: 'SkinCare', url: 'SkinCare.html' },
     { label: 'MakeUp for boy', value: 'MakeUp for boy', url: 'MenMakeUp.html' },
    { label: 'MakeUp for girl', value: 'MakeUp for girl', url: 'WomenMakeUp.html' },
    { label: 'Bob Cut', value: 'Bob Cut', url: 'BobCut.html' },
     { label: 'Butterfly Cut', value: 'Butterfly Cut', url: 'ButterflyCut.html' },
    { label: 'Curls Cut', value: 'Curls Cut', url: 'CurlsCut.html' },
    { label: 'Fade Cut', value: 'Fade Cut', url: 'FadeCut.html' },
     { label: 'Fringe Cut', value: 'Fringe Cut', url: 'FringeCut.html' },
    { label: 'Hime Cut', value: 'Hime Cut', url: 'HimeCut.html' },
    { label: 'Layered Cut', value: 'Layered Cut', url: 'LayeredCut.html' },
     { label: 'Long Trim', value: 'Long Trim', url: 'LongTrim.html' },
    { label: 'Two Block Cut', value: 'Two Block Cut', url: 'TwoBlock.html' },
    { label: 'Under Cut', value: 'Under Cut', url: 'UnderCut.html' },
     { label: 'Wolf Cut', value: 'Wolf Cut', url: 'WolfCut.html' },
    { label: 'Body Calculation', value: 'Body Calculation', url: 'BMI.html' },
  
  ];

  return results.filter((result) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const lowerCaseLabel = result.label.toLowerCase();
    return lowerCaseLabel.includes(lowerCaseSearchTerm);
  });
};

        const displayAutocompleteResults = (results) => {
            const autocompleteList = document.getElementById('autocomplete-list');
            autocompleteList.innerHTML = '';
            results.forEach((result) => {
                const listItem = document.createElement('li');
                listItem.textContent = result.label;
                listItem.dataset.value = result.value;
                listItem.dataset.url = result.url;
                autocompleteList.appendChild(listItem);
            });
            autocompleteList.style.display = 'block';
        };

        const hideAutocompleteResults = () => {
            const autocompleteList = document.getElementById('autocomplete-list');
            autocompleteList.style.display = 'none';
        };

        // Add event listener to the autocomplete list
        document.getElementById('autocomplete-list').addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const selectedValue = e.target.dataset.value;
                const selectedUrl = e.target.dataset.url;
                searchInput.value = e.target.textContent;
                hideAutocompleteResults();
                window.location.href = selectedUrl; // redirect to the selected page
            }
        });
