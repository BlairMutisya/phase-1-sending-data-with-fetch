function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
        name: name,
        email: email
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch(url, options)
        .then(response => {

        })
        .then(data => {
            const newId = data.id;
            document.body.innerHTML += `<p>New user ID: ${newId}</p>`;
            return newId;
        });
    }

