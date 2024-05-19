const getSuspender = (promise) => {
    let status = "pending";
    let response;

    const suspender = promise.then(
        (res) => {
            status = "success";
            response = res;
        },
        (err) => {
            status = "error";
            response = err;
        }
    );

    const readFromStatus = () => {
        switch (status) {
            case "pending":
                throw suspender;
            case "error":
                throw response;
            default:
                return response;
        }
    };

    return { readFromStatus };
};

export function fetchData(url, options) {
    const promise = fetch(url, options)
        .then((response) => response.json())
        .then((json) => json);

    return getSuspender(promise);
}