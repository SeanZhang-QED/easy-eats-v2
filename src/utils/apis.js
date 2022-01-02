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

// getRestaurants API
export const getRestaurants = () => {
    return axios.get(`/restaurants`, { responseType: 'json' }).then(response => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Failed.");
        }
        // console.log("get the rests data successfully.")
        // console.log( response.data );
        return response.data;
    });
};

// getMenus API
export const getMenus = (restId) => {
    return axios.get(`/restaurant/${restId}/menu`).then(res=>{
        if (res.status < 200 || res.status >= 300) {
            throw Error("Fail to get menus");
        }
        // console.log(res.data);
        return res.data;
    })
};
