import axios from "axios";
export const signup = (data) => {
    const signupUrl = "/signup";
    const opt ={
        method: "POST",
        url: signupUrl,
        headers: {
            "Content-Type": "application/json",
        },
        // in fetch() is body, in axios is data
        data: JSON.stringify(data),
    };

    console.log(opt.data);

    return axios(opt).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Fail to sign up");
        }
    });
};