import sendRequest from './sendRequest';


const BASE_PATH = '/api/accreditor';

export const createAccreditorApiMethod = (
    companyName,
    departmentName,
    address,
    ipfsHash,
    password
) =>
    sendRequest(`${BASE_PATH}` + new URLSearchParams({password: password, ipfsHash: ipfsHash}),
        {
            body: JSON.stringify({
                companyName,
                departmentName,
                address
            }),
        });

export const getAccreditorApiMethod = (ipfsHash) =>
    sendRequest(`${BASE_PATH}/${ipfsHash}`, {
        method: 'GET',
    });

// export const deleteAccreditorApiMethod = ({name, price, githubRepo}) =>
//     sendRequest(`${BASE_PATH}`, {
//         method: 'DELETE',
//         body: JSON.stringify({name, price, githubRepo}),
//     });
//
// export const updateAccreditorApiMethod = ({id, name, price, githubRepo}) =>
//     sendRequest(`${BASE_PATH}/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             id,
//             name,
//             price,
//             githubRepo,
//         }),
//     });
//
// export const checkAccreditorApiMethod = ({id}) =>
//     sendRequest(`${BASE_PATH}/${id}`, {
//         method: 'GET',
//     });
//
// export const getEthAccreditorApiMethod = ({id}) =>
//     sendRequest(`${BASE_PATH}/${id}`, {
//         method: 'GET',
//     });