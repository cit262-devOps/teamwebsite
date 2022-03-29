import loadconnerurl from "../utils/loadconnerurl.mjs";
import assert from 'assert';

it("Tests conner URL Endpoint", async () => {
    
    const urlResponse = await loadconnerurl();
    console.log("URL Response: ") + urlResponse
    assert.equal(urlResponse, "Hello conner");

});
