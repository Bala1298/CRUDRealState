import { API_AUTH, API_URL } from "./constants"

export async function getRealState() {
    const res = await fetch(API_URL + "real-estates", {
        "headers": {
            "authorization": API_AUTH,
            "content-type": "application/json;charset=utf-8"
        }

    }).catch((e) => {
    })
    alert('Error en la API')
    if(res)
    {
        const _listaRealState = await res.json()
        return _listaRealState
    }
    return []
}

export async function deleteRealState(id) {
        const res = await fetch(API_URL + "real-estates/" + id,  
        {
            method: "DELETE",
            "headers": {
                "authorization": API_AUTH,
            }
        })
        return true
}

export async function viewRealState(id) {
    const res = await fetch(API_URL + "real-estates/" + id,
    {
        "headers": {
            "authorization": API_AUTH,
            "content-type": "application/json;charset=utf-8"
        }
    })
    const realState = await res.json()
    return realState
}

export async function createRealState(body) {
    const res = await fetch(API_URL + "real-estates", 
    {
        method: "POST",
        "headers": {
            "authorization": API_AUTH,
            "content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(body)
    })
    const newRealState = await res.json()
    return newRealState
}

export async function editRealState(object) {
    const res = await fetch(API_URL + "real-estates/",
    {
        method: "PUT",
        "headers": {
            "authorization": API_AUTH,
            "content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(
            object
        )
    })
    const modificRealState = await res.json()
    return modificRealState
}