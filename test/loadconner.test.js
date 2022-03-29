import assert from 'assert';
import loadconnerurl from "../utils/loadconnerurl.mjs";

it("Tests conner URL Endpoint", async () => {
    
    const urlResponse = await loadconnerurl();
    console.log("URL Response: ") + urlResponse
    assert.equal(urlResponse, "Hello conner");

});
