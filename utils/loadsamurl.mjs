import fetch from 'node-fetch';

const loadsamurl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://35.223.172.119/sam',options);
    const loginResponse = await apiResponse.text();
    // console.log("LoginToken: ", loginResponse);
    return loginResponse;

}

export default loadsamurl;