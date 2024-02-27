const searchBar = () => {
  const searchInput = document.getElementById('mySearch').value.toLowerCase();
  const items = document.querySelectorAll('.dropdown-content .model-label');

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const dropdown = item.closest('.dropdown-content');

    if (text.includes(searchInput)) {
      item.style.display = 'block';
      dropdown.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};



  export default searchBar;