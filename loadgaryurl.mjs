import fetch from "node-fetch";

const loadgaryurl = async ({userName, password})=>{
    
    const options = {
    method: "GET",
    body: JSON.stringify({userName, password}),
    headers: {"Content-Type":"application/json"}
    };

    const apiResponse = await fetch("https://34.123.4.180", options);
    const testResponse = await apiResponse.text();
    return testResponse;
};

export default loadgaryurl;