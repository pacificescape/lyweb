const getUserGroups = () => {
    // let url = process.env.REACT_APP_API_URL + "/api/getUserGroups";
    return fetch("/api/getUserGroups", {
        "method": "POST",
        credentials: 'include',
    })
        .then(response => response.json())
        .then((res) => {
            if (!res.ok) {
                let telegramButton = document.createElement('script');
                telegramButton.src = 'https://telegram.org/js/telegram-widget.js?6'
                telegramButton.setAttribute('data-telegram-login', 'LyAdminBot')
                telegramButton.setAttribute('data-size', 'large')
                telegramButton.setAttribute('data-radius', '20')
                telegramButton.setAttribute('data-auth-url', 'admin.lyo.su')
                document.getElementById('authButton').appendChild(telegramButton)

                return { isLoading: false }
            }
            console.log(res.result)
            return { isLoading: false, isAuth: true, data: res.result }
        })
        .catch(err => {
            console.log('getUserChats api error: ' + err);
        });
}

export default getUserGroups;
