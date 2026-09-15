
const apiBaseUrl = "http://localhost:8080/api";

export async function globalGet(endPoint) {
    const response = await fetch(`${apiBaseUrl}${endPoint}`)

    if(!response.ok) {
    throw new Error(`Error fetching data:${response.status}`);
    }
    return response.json()
}