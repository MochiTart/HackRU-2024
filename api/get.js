export const apiGetter = () => {
    return fetch("http://localhost:5030/getInfo")
        .then((response) => {
            return response.json();
        });
};
