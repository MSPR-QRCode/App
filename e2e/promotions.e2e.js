describe('Promotions', () => {
    beforeAll(async () => {
        await device.launchApp({
            permissions:{
                camera: "YES"
            }
        });
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have "Promotions" part', async () => {
        await expect(element(by.text('Promotions'))).toBeVisible();
    });

    it('should be go in "Promotions" part', async () => {
        await element(by.text('Promotions')).tap();
        // await expect(element(by.id('headerTitle'))).toHaveText('Promotions');
    });

    it('should be selection "Promotion sur tshirts" in "Promotions" part', async () => {
        await element(by.text('Promotions')).tap();
        await element(by.text('Promotion sur tshirts')).tap();
        await waitFor(element(by.text('Date limite :'))).toBeVisible();
    });

    it('should be scroll down in selection until search "Promotion 50"', async () => {
        await element(by.text('Promotions')).tap();
        // await element(by.id('promotionView')).scroll(100, 'down');

        // await waitFor(element(by.text('Promotion 50'))).toBeVisible().whileElement(by.id('promotionView')).scroll(50, 'down');
    });

    // it('should be find a "Promotion 50" promotion from the search bar down', async () => {
    //     await element(by.text('headerTitle')).typeText('Promotion 50{enter}');
    // });


});
