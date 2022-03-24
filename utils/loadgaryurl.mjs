import fetch from "node-fetch";

const loadgaryurl = async ()=>{
    
    const options = {
    method: "GET",
    headers: {"Content-Type":"application/json"}
    };

    const apiResponse = await fetch("https://34.123.4.180/gary", options);
    const testResponse = await apiResponse.text();
    return testResponse;
};

export default loadgaryurl;