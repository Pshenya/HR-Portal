export const assetsService = {
    getAllVacancies,
    getAllNews,
    getNewsById,
    getFeedbacks
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
    return fetch(`${_apiURL}/news/news/all`, requsetOptions)
        .then(handleResponse)
        .then(newsList => {
            return JSON.parse(newsList);
        });
}

function getNewsById(id) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/news/news?post=${id}`, requestOptions)
        .then(handleResponse)
        .then(postData => {
            console.log(JSON.parse(postData));
            return JSON.parse(postData);
        })
}

function getFeedbacks(id){
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/user/feedbacks?userId=${id}`, requestOptions)
        .then(handleResponse)
        .then(feedbacksList => {
            return JSON.parse(feedbacksList);
        })
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