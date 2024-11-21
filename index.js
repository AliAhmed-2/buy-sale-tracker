document.addEventListener('DOMContentLoaded', () => {
    const itemNameInput = document.getElementById('itemName');
    const itemPriceInput = document.getElementById('itemPrice');
    const buyBtn = document.getElementById('buyBtn');
    const saleBtn = document.getElementById('saleBtn');
    const output = document.getElementById('output');
    const totalBtn = document.getElementById('totalBtn');
    const totalDisplay = document.getElementById('totalDisplay');

    let transactions = [];

    const addTransaction = (type) => {
        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);

        if (itemName && !isNaN(itemPrice)) {
            const transaction = { type, name: itemName, price: itemPrice };
            transactions.push(transaction);

            const div = document.createElement('div');
            div.classList.add('output-item', type);
            div.textContent = `${type === 'buy' ? '-' : '+'} ${itemName}: $${itemPrice}`;
            output.appendChild(div);

            itemNameInput.value = '';
            itemPriceInput.value = '';
        } else {
            alert('Please enter valid item name and price!');
        }
    };

    buyBtn.addEventListener('click', () => addTransaction('buy'));
    saleBtn.addEventListener('click', () => addTransaction('sale'));

    totalBtn.addEventListener('click', () => {
        let total = 0;

        transactions.forEach((transaction) => {
            total += transaction.type === 'buy' ? -transaction.price : transaction.price;
        });

        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    });
});
