import Auth from '../utils/Auth';

const baseUrl = 'http://localhost:8000';

const getOptions = () => {
    return {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
};

const handleJsonResponse = (response) => response.json();

const applyAuthorizationHeader = (options, authenticated) => {
    if (authenticated) {
        options.headers.Authorization = `Bearer ${Auth.getToken()}`;
    }
};

class Service {
    static put(url, data, authenticated) {
        let options = getOptions();
        options.method = 'PUT';
        options.body = JSON.stringify(data);

        applyAuthorizationHeader(options, authenticated);

        return fetch(`${baseUrl}${url}`, options)
            .then(handleJsonResponse);
    }

    static delete(url, data, authenticated) {
        let options = getOptions();
        options.method = 'DELETE';

        applyAuthorizationHeader(options, authenticated);

        return fetch(`${baseUrl}${url}`, options)
            .then(handleJsonResponse);
    }

    static post(url, data, authenticated) {
        let options = getOptions();
        options.method = 'POST';
        options.body = JSON.stringify(data);

        applyAuthorizationHeader(options, authenticated);

        return fetch(`${baseUrl}${url}`, options)
            .then(handleJsonResponse);
    }

    static get(url, authenticated) {
        let options = getOptions();
        options.method = 'GET';

        applyAuthorizationHeader(options, authenticated);

        return fetch(`${baseUrl}${url}`, options)
            .then(handleJsonResponse);
    }
}

export default Service;
