
const authentication = require("../src/modules/authentication");

test("getKey", async () => {
    await expect(authentication.getKey()).resolves.toEqual(
        expect.objectContaining({
            status: expect.any(Boolean),
            publicKey: expect.any(String)
        })
    );
});

test("logOn", async () => {
    await expect(authentication.logon()).resolves.toBeDefined();
});
