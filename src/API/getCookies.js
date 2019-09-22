import url from 'url'

export default async (href) => {

    let authData = url.parse(href, true).query
    delete authData.group_id

    const response = await fetch('/api/authUser', {
        method: `POST`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(authData)
    });
    return response.json();
}
