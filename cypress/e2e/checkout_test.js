import LoginPage from './login/LoginPage';
import InventoryPage from './checkout/InventoryPage';
import CheckoutPage from './checkout/CheckoutPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const checkoutPage = new CheckoutPage();

describe('Sauce Labs Checkout Flow', () => {
    const inventoryPage = new InventoryPage();

/*    beforeEach(() => {
        // Clear cookies and local storage before each test
        cy.clearCookies();
        cy.clearLocalStorage();
        // Step 1: Visit the Sauce Labs Demo Website
        loginPage.visit();
        // Step 2: Log in using valid credentials
        cy.fixture('user').then((user) => {
            loginPage.fillUsername(user.username);
            loginPage.fillPassword(user.password);
            loginPage.submit();
        });
    });*/

    it('should log in and complete the checkout process with 3 random items', () => {
        // Step 1: Visit the Sauce Labs Demo Website
        loginPage.visit();
        // Step 2: Log in using valid credentials
        cy.fixture('user').then((user) => {
            loginPage.fillUsername(user.username);
            loginPage.fillPassword(user.password);
            loginPage.submit();
        });

        // Step 3: Add 3 random items to the cart
        inventoryPage.addRandomItemsToCart();

        // Step 4: Go to the shopping cart
        inventoryPage.goToCart();

        // Step 5: Validate items in the cart using selected items from InventoryPage
        const selectedItems = inventoryPage.getSelectedItems();
        cy.get('.cart_item').each(($cartItem, index) => {
            const cartItemName = $cartItem.find('.cart_item_label .inventory_item_name').text();
            const cartItemPrice = $cartItem.find('.cart_item_label .inventory_item_price').text();

            // Verify that the cart item matches the selected item
            expect(cartItemName).to.equal(selectedItems[index].name);
            expect(cartItemPrice).to.equal(selectedItems[index].price);
        });

        // Step 6: Fill in checkout details using fixture data
        checkoutPage.proceedToCheckout();
        cy.fixture('checkout_details').then((details) => {
            checkoutPage.fillCheckoutDetails(details.firstName, details.lastName, details.postalCode);
        });

        // Step 7: Finish the purchase
        checkoutPage.validateCheckoutOverView();
        checkoutPage.finishPurchase();

        // Step 8: Verify the order confirmation
        checkoutPage.verifyOrderConfirmation();
    });
});