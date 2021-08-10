
const capture = require("../src/modules/capture");

test("capture", async () => {
    await expect(
        capture.capture(tId, token)
    ).resolves.toBeDefined();
});


const tId = "16285616805054929"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNX0lEIjoiNjg1MTE4IiwiaWF0IjoxNjI4NTYzMzk3LCJleHAiOjE2Mjg1NjUxOTd9.DAQrrDhLrF1aSaJBqzIcFdPa6q0YcnRaXOgZHpHF4VA"
