import assert from 'assert';
import loadgaryurl from "../utils/loadgaryurl.mjs";

it("Tests Gary URL Endpoint", async ()=>{ 

    const urlResponse = await loadgaryurl();
    console.log("URL Response: ")+urlResponse
    assert.equal(urlResponse,"Hello Gary");

});
