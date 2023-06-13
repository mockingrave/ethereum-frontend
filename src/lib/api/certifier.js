import sendRequest from './sendRequest';


const BASE_PATH = '/api/certifier';

export const createCertificateApiMethod = (
    ownerName,
    contacts,
    note,
    qualifications,
    ipfsHash,
    password
) => {

    const extractedSkills = extractWordsFromText(qualifications);
    const mapperQualifications = extractedSkills.map((word) => {
        return { skill: word, level: "ADVANCED" };
    });

    sendRequest(`${BASE_PATH}` + new URLSearchParams({password: password, ipfsHash: ipfsHash,}),
        {
            body: JSON.stringify({
                ownerName,
                contacts,
                note,
                mapperQualifications
            }),
        });
}
export const getCertificateApiMethod = (ipfsHash) =>
    sendRequest(`${BASE_PATH}/${ipfsHash}`, {
        method: 'GET',
    });

// // export const deleteAccreditorApiMethod = ({name, price, githubRepo}) =>
// //     sendRequest(`${BASE_PATH}`, {
// //         method: 'DELETE',
// //         body: JSON.stringify({name, price, githubRepo}),
// //     });
// //
// // export const updateAccreditorApiMethod = ({id, name, price, githubRepo}) =>
// //     sendRequest(`${BASE_PATH}/${id}`, {
// //         method: 'PUT',
// //         body: JSON.stringify({
// //             id,
// //             name,
// //             price,
// //             githubRepo,
// //         }),
// //     });
// //
// // export const checkAccreditorApiMethod = ({id}) =>
// //     sendRequest(`${BASE_PATH}/${id}`, {
// //         method: 'GET',
// //     });
// //
// // export const getEthAccreditorApiMethod = ({id}) =>
// //     sendRequest(`${BASE_PATH}/${id}`, {
// //         method: 'GET',
// //     });

function extractWordsFromText(text) {
    // Удаление знаков препинания и лишних пробелов
    const cleanText = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

    // Разделение текста на слова
    return cleanText.split(" ");
}