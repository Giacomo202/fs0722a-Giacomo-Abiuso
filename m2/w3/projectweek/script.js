async function getUsers() {
    let url = 'users.json';
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let codice = `<div class="user">
                            <img src="${user.profileURL}" >
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <div><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += codice;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();