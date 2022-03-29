import fetch from "node-fetch";

const loadconnerurl = async ()=>{
    
    const options = {
    method: "GET",
    headers: {"Content-Type":"application/json"}
    };

    const apiResponse = await fetch("http://34.72.62.27/conner", options);
    // const apiResponse = await fetch("http://localhost:3000/conner", options);
    const testResponse = await apiResponse.text();
    return testResponse;
};

export default loadconnerurl;