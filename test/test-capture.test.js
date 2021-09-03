
const capture = require("../src/modules/capture");

test("capture", async () => {
    await expect(
        capture.capture(token, data)
    ).resolves.toEqual(expect.objectContaining({
        status: expect.any(Boolean),
        message: expect.any(String),
        tid: expect.any(String)
    }));
});


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNX0lEIjoiNjkxNTIyIiwiaWF0IjoxNjMwNjMyNTY4LCJleHAiOjE2MzA2MzQzNjh9.Wt8cSRbPSbLQs0KLWS66-XvVGDqwQhxu53UgW8ONrlo"

const data = {
    "status": true,
    "message": "Transação capturada",
    "tid": "15845592480307733"
}