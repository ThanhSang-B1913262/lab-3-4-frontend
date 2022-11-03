// import axios from 'axios';

// function createApiClient(baseURL) {
//     return axios.create({
//         baseURL,
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//         },
//     });
// }

// export default createApiClient;
import axios from "axios";
const commonConfig = {
headers: {
"Content-Type": "application/json",
Accept: "application/json",
},
};
export default (baseURL) => {
return axios.create({
baseURL,
...commonConfig,
});
};