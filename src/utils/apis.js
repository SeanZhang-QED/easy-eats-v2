import axios from "axios";

export const login = credential => {

    // 0. deconstruct the credentials
    // credential:{username: value,password: value }
    // 1. build url using the credential (data received from the frontend)
    // const loginUrl = `/login?username=${username}&password=${password}`;
    const loginUrl = `/login?username=${credential.get('username')}&password=${credential.get('password')}`;

    // 2.fetch: retrieve data form the backend
    const opt = {
        method: "POST",
        url: loginUrl,
        data: {
            username: credential.get('username'),
            password: credential.get('password')
        },
        headers: { "Content-Type": "application/json" }
    };
    return axios(opt)
        .then((res) =>
        {
            // case 1: login successfully
            // case 2: login failed
            if (res.status < 200 || res.status >= 300) {
                throw Error("Fail to log in");
            }
        });
};