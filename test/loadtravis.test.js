import loadsamurl from '..utils/loadsamurl.mjs';
import assert from 'assert';

it("Tests Travis URL endpoint",async ()=>{
    const urlResponse = await loadsamurl();
    console.log("URL Response: ") + urlResponse;
    assert.equal(urlResponse, "Hello Travis");
});
