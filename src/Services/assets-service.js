export const assetsService = {
    getAllVacancies,
    getAllNews
};

const _apiURL = "http://localhost:3000/api";

function getAllVacancies() {
    const requsetOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/vacan/vacancy`, requsetOptions)
        .then(handleResponse)
        .then(vacanciesList => {
            return JSON.parse(vacanciesList);
        });
}

function getAllNews() {
    const requsetOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/news/news`, requsetOptions)
        .then(handleResponse)
        .then(newsList => {
            return JSON.parse(newsList);
        });
}


function handleResponse(response) {
    return response.text()
        .then(data => {
            if ( !response.ok) {
                window.location.reload();
                const error = data.toString();

                return Promise.reject(error);
            }
            return data;
        })
}