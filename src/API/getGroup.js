const getGroup = (id) => {
    let data =  {
        'group_id': id
    }
    return fetch(`/api/getGroup`, {
        "method": "POST",
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(err => {
        console.log('getUserChats api error: ' + err);
    });
}

export default getGroup
