const fetchOptions = (x) => {return{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(x)}
}


export const getAllProducts = () => {
    return fetch("http://localhost:8088/products?_expand=productType")
        .then(res => res.json())
}

export const productPurchasePost = (data) => {
    return fetch("http://localhost:8088/purchases", fetchOptions(data))
}

export const getCustomers = () => {
    return fetch ("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getLocations = () => {
    return fetch(`http://localhost:8088/locations`)
        .then(res=>res.json())
}

export const hireNewEmployee = (data) => {
    return fetch(`http://localhost:8088/employees`, fetchOptions(data))
}

export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees?_expand=location`)
        .then(res=>res.json())
}

export const fireEmployee = (id) => {
    return fetch(`http://localhost:8088/employees/${id}`, {
        method: "DELETE"
    })
}

export const purchaseFetch = (id) => {
    return fetch(`http://localhost:8088/customers/${id}?_embed=purchases`)
        .then(res => res.json())
}