import loadsamurl from '../utils/loadsamurl.mjs';
import assert from 'assert';

it("Tests Sam URL endpoint",async ()=>{

    const urlResponse = await loadsamurl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Sam");

});
