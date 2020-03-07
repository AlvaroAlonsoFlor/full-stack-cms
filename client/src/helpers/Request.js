class Request {

    get(url) {
        return fetch(url)
            .then((res) => res.json());
    }

    post(url, payload) {
        return fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .catch(err => console.log(err))
    }

    delete(url) {
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        })
    }

    patch(url, payload) {
        return fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    }

}

export default Request;