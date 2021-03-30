describe('MyCodes', () => {
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

    it('should have "Mes codes" part', async () => {
        await expect(element(by.text('Mes codes'))).toBeVisible();
    });

    it('should be go in "Mes codes" part', async () => {
        await element(by.text('Mes codes')).tap();
    });

    it('should be selection "Test 19" in "Mes codes" part', async () => {
        await element(by.text('Mes codes')).tap();
        await element(by.text('Test 19')).tap();
    });
});
