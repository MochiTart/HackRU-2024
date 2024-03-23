export const apiPoster = (data_object) =>{
    return fetch("http://localhost:5030/postInfo", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_object),
    }).then((response)=>{
        return response.json();
    })
};
