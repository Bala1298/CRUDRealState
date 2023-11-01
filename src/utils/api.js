import {API_AUTH, API_URL} from "./constants"

export async function getRealState() { 
    const res = await fetch(API_URL + "real-estates", {
        "headers": {
            "authorization": API_AUTH,
            "content-type": "application/json;charset=utf-8"
        }
    }).catch((e) => {
        alert('Error en la API')
    })
    if (res && res.status === 200) {
        const _listaRealState = await res.json()
        return _listaRealState
    }
    if (res.status === 401) {
        alert('No estas autorizado')
    }
    return []
}

export async function deleteRealState(id) {
    const res = await fetch(API_URL + "real-estates/" + id, {
        method: "DELETE",
        "headers": {
            "authorization": API_AUTH
        }
    }).catch((e) => {
        alert('Error en la API')
    })
    if (res) {
        return true
    }
    return false
}

export async function viewRealState(id) {
    const res = await fetch(API_URL + "real-estates/" + id, {
        "headers": {
            "authorization": API_AUTH,
            "content-type": "application/json;charset=utf-8"
        }
    }).catch((e) => {
        alert('Error en la API')
    })
    if (res) {
        const realState = await res.json()
        return realState
    }
    return {id: -1}
}

export async function createRealState(body) {
    const res = await fetch(API_URL + "real-estates", {
        method: "POST",
        "headers": {
            "authorization": API_AUTH,
            "content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(body)
    }).catch((e) => {
        alert('Error en la API')
    })
    if (res) {
        const newRealState = await res.json()
    return newRealState
    }
    return {id: -1}
}

export async function editRealState(object) {
    const res = await fetch(API_URL + "real-estates/", {
        method: "PUT",
        "headers": {
            "authorization": API_AUTH,
            "content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(object)
    }).catch((e) => {
        alert('Error en la API')
    })
    if (res) {
        const modificRealState = await res.json()
    return modificRealState
    }
    return {id: -1}
}
