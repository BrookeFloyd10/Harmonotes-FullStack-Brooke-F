
const apiBaseUrl = "http://localhost:8080/api";

export async function globalGet(endPoint) {
    const response = await fetch(`${apiBaseUrl}${endPoint}`)

    if(!response.ok) {
    throw new Error(`Error fetching data:${response.status}`);
    }
    return response.json();
}

export async function globalPost(endPoint, postBody) {
    const response = await fetch(`${apiBaseUrl}${endPoint}`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(postBody)
    });

    if(!response.ok) {
    throw new Error(`Error saving data:${response.status}`);
    }
    return response.json();
}

export async function globalPut(endPoint, postBody) {
    const response = await fetch(`${apiBaseUrl}${endPoint}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        }, 
        body: JSON.stringify(postBody)
    });

    if(!response.ok) {
    throw new Error(`Error updating data:${response.status}`);
    }
    return response.json();
}

export async function globalDelete(endPoint) {
    const response = await fetch(`${apiBaseUrl}${endPoint}`, {
        method: "DELETE"
    });

    if(!response.ok) {
    throw new Error(`Error deleting data:${response.status}`);
    }
    
}