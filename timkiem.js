const products = [
    { name: 'Bàn Phím',link: 'banphim.html' },
    { name: 'Bàn Phím AKKO Bilibili',link: 'bilibili.html' },
    { name: 'Chuột',link: 'chuot.html' },
    { name: 'Chuột logitech G102',link: 'logitech g102.html' },
    { name: 'Chuột Gatgu egronmic',link: 'dareu lm08b.html' },
    { name: 'Tai Nghe',link: 'tainghe.html' },
    { name: 'Tay Cầm',link: 'taycam.html' },
    {name: 'Tay cầm PS5',link: 'ps5.html'},
    {name: 'Chuột Dareu', link: ''}
];

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const productSuggestions = document.getElementById('productSuggestions');
    const productList = document.getElementById('productList');
    const productImagesContainer = document.getElementById('productImages');

    // Thêm sự kiện cho cả nút tìm kiếm
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', function (event) {
            event.preventDefault();
            performSearch();
        });
    }

    // Thêm sự kiện input cho ô tìm kiếm
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            performSearch();
        });
        document.addEventListener('DOMContentLoaded', function () {
  const productList = document.getElementById('productList');

 
});

    }
    // Hàm thực hiện tìm kiếm
    function performSearch() {
        const inputValue = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(inputValue));
        productSuggestions.innerHTML = '';

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const suggestionOption = document.createElement('option');
                suggestionOption.value = product.name;
                productSuggestions.appendChild(suggestionOption);
            });

            productList.innerHTML = '';
            productImagesContainer.innerHTML = '';

            filteredProducts.forEach(product => {
                const productDiv = document.createElement('div');

                const productName = document.createElement('h2');
                productName.textContent = product.name;

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.name;

                productDiv.appendChild(productName);
                productDiv.appendChild(productImage);

                productImagesContainer.appendChild(productDiv);
            });

            productList.style.display = 'block';
        } else {
            productList.style.display = 'none';
            productImagesContainer.innerHTML = '';
        }
    }
});
