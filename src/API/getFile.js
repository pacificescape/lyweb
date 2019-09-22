
const getFile = async (id) => {
    return await fetch(`/file/${id}`, {
        "method": "GET",
        credentials: 'include',
    })
    .then((res) => res.json())
    .catch(err => console.log(err))
}

export default getFile;


// const getFile = (id) => {
//     return new Promise((resolve, reject) => {
//         fetch(`/file/${id}`, {
//             "method": "GET",
//             credentials: 'include',
//         })
//     })
// }
