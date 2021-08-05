
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
    await expect(authentication.logon("200333", "3DE3B99D-08BB-41AB-A2A5-E1EE66222E2A")).resolves.toBeDefined();
});
