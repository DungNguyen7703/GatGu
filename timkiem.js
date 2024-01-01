const products = (
    {
        name: 'Bàn Phím',
        image: 'banphim.html'
    },
    {
        name: 'Bàn Phím AKKO Bilibili',
        image: 'bilibili.html'
    },
    {
        name: 'Chuột',
        image: 'chuot.html'
    },
    {
        name:'Chuột logitech G102',
        image: 'logitech g102.html'
    },
    {
        name:'CHuột Gatgu egronmic',
        image: 'dareu lm08b.html'
    },
    {
        name:'tai nghe',
        image: 'tainghe.html'
    },
    {
        name:'tay cầm',
        image: 'taycam.html'
    }
) 

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const productSuggestions = document.getElementById('productSuggestions');
    const productList = document.getElementById('productList');
    const productImagesContainer = document.getElementById('productImages'); // Thêm container để hiển thị ảnh sản phẩm

    if (searchInput) {
        // Thêm sự kiện input cho ô tìm kiếm
        searchInput.addEventListener('input', function () {
            const inputValue = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(inputValue));
            productSuggestions.innerHTML = '';

            if (filteredProducts.length > 0) {
                // Thêm các options mới vào datalist
                filteredProducts.forEach(product => {
                    const suggestionOption = document.createElement('option');
                    suggestionOption.value = product.name;
                    productSuggestions.appendChild(suggestionOption);
                });

                // Hiển thị danh sách gợi ý
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
        });
    }
});