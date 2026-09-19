
const apiBaseUrl = "http://localhost:8080/api";

export const globalGet = async (endPoint) => {
    const response = await fetch(`${apiBaseUrl}${endPoint}`)

    if(!response.ok) {
    throw new Error(`Error fetching data:${response.status}`);
    }
    return response.json();
}

export const globalPost = async (endPoint, postBody) => {
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

export const globalPut = async (endPoint, postBody) => {
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

export const globalDelete = async (endPoint)=>  {
    const response = await fetch(`${apiBaseUrl}${endPoint}`, {
        method: "DELETE"
    });

    if(!response.ok) {
    throw new Error(`Error deleting data:${response.status}`);
    }
    
}