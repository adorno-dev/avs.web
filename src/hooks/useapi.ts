const tokens = JSON.parse(localStorage.getItem("authentication") as string);

const headers = { "content-type": "application/json", "authorization": "bearer " + tokens.token };

export const signin = async (data: {[k: string]: FormDataEntryValue}) =>
{
    const response = await fetch("https://localhost:5000/api/sign-in",
    {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })

    return response;
}

export const signup = async (data: {[k: string]: FormDataEntryValue}) =>
{
    const response = await fetch("https://localhost:5000/api/sign-up",
    {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })
    return response;
}

export const contactList = async () =>
{
    const response = await fetch("https://localhost:5000/api/contacts",
    {
        method: "GET",
        headers: headers
    })

    return await response.json();
}

export const chatIndex = async () =>
{
    const response = await fetch("https://localhost:5000/api/chats",
    {
        method: "GET",
        headers: headers
    })

    return await response.json();
}