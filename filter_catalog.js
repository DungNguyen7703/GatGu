// Lấy phần tử select và thêm sự kiện onchange để xử lý khi giá trị thay đổi
document.getElementById("select").onchange = function() {
    const selectValue = this.value;
    const list = document.querySelector('.list');
    const items = list.querySelectorAll('.item');
    const itemsArray = Array.from(items);

    if (selectValue === 'LowToHigh') {
        itemsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').innerText.replace(/\D/g, ''));
            const priceB = parseFloat(b.querySelector('.price').innerText.replace(/\D/g, ''));
            return priceA - priceB;
        });
    } else if (selectValue === 'HighToLow') {
        itemsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').innerText.replace(/\D/g, ''));
            const priceB = parseFloat(b.querySelector('.price').innerText.replace(/\D/g, ''));
            return priceB - priceA;
        });
    }

    // Xóa các phần tử hiện có trong list
    list.innerHTML = '';

    // Thêm lại các phần tử đã sắp xếp vào list
    itemsArray.forEach(item => {
        list.appendChild(item);
    });
};
