import fetch from "node-fetch";

const loadgaryurl = async ()=>{
    
    const options = {
    method: "GET",
    headers: {"Content-Type":"application/json"}
    };

    const apiResponse = await fetch("localhost:3000", options);
    const testResponse = await apiResponse.text();
    return testResponse;
};

export default loadgaryurl;