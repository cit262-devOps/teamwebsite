import loadtravisurl from '../utils/loadtravisurl.mjs';
import assert from 'assert';

it("Tests Travis URL endpoint",async ()=>{
    const urlResponse = await loadtravisurl();
    console.log("URL Response: ") + urlResponse;
    assert.equal(urlResponse, "Hello Travis");
});
