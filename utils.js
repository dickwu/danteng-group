
export async function Notice(token, message) {
    const response = await fetch('https://tg.danteng.live/?token=' + token, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ msg: message })
    });
    return await response.json();
}
