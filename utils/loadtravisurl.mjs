import fetch from 'node-fetch';

const loadtravisurl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://34.134.73.5/travis',options);
    // const apiResponse = await fetch('https://localhost:3000/travis',options);
    const loginResponse = await apiResponse.text();
    // console.log("LoginToken: ", loginResponse);
    return loginResponse;

}

export default loadtravisurl;