
const capture = require("../src/modules/capture");

test("capture", async () => {
    await expect(
        capture.capture(tId, token)
    ).resolves.toBeDefined();
});


const tId = "16285616805054929"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNX0lEIjoiNjg1MTE4IiwiaWF0IjoxNjI4NjE5MTE4LCJleHAiOjE2Mjg2MjA5MTh9.I-LjCMm1WcWdMEvm9T-AiymEqr4MrNkCk2GjfirAy8w"
