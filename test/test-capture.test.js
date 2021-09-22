
const capture = require("../src/modules/capture");

test("capture", async () => {
    await expect(
        capture.capture(token)
    ).resolves.toEqual(expect.objectContaining({
        status: expect.any(Boolean),
        message: expect.any(String),
        tid: expect.any(String)
    }));
});


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNX0lEIjoiNjkxNTIyIiwiaWF0IjoxNjMwNjk5NzE4LCJleHAiOjE2MzA3MDE1MTh9.n2gtjQfm-hcgL0rQbi9bkkh84YgLKpgMiFziH-A98O8"

const data = {
    "status": true,
    "message": "Transação capturada",
    "tid": "16306998129908299"
}
