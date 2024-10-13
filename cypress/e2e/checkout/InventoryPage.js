class InventoryPage {
    constructor() {
        this.selectedItems = []; // Array to hold selected items
    }

    addRandomItemsToCart() {
        // Check for the inventory items to be visible
        cy.get('.inventory_item').should('be.visible').and('have.length.greaterThan', 0);
        cy.get('.inventory_item').then((items) => {
            const randomIndexes = [];
            const itemCount = 3;

            while (randomIndexes.length < itemCount) {
                const randomIndex = Math.floor(Math.random() * items.length);
                if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex);
                    const itemName = items.eq(randomIndex).find('.inventory_item_name').text();
                    const itemPrice = items.eq(randomIndex).find('.inventory_item_price').text();
                    this.selectedItems.push({name: itemName, price: itemPrice}); // Track selected items
                }
            }

            // Add the selected items to the cart
            randomIndexes.forEach(index => {
                cy.wrap(items).eq(index).find('.btn_inventory').should('be.visible').click();
            });
        });
    }

    // Method to retrieve selected items for validation
    getSelectedItems() {
        return this.selectedItems;
    }


    goToCart() {
        cy.get('.shopping_cart_link').should('be.visible').click();
    }
}

export default InventoryPage;
