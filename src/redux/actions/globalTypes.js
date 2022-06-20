export const GLOBALTYPES = {
    LOADING: "LOADING",
    AUTH: "AUTH",
    USER: "USER",
    LOAD_CATEGORIES: "LOAD_CATEGORIES",
    GET_CATEGORIES: "GET_CATEGORIES",
    ADD_CATEGORY: "ADD_CATEGORY",
    DELETE_CATEGORY: "DELETE_CATEGORY",
    EDIT_CATEGORY: "EDIT_CATEGORY" , 
    GET_CONTACTS : "GET_CONTACTS",
    ADD_CONTACTS : "ADD_CONTACTS"
}


export const EditData = (data, id, post) => {
    const newData = data.map(item =>
        (item.id === id ? post : item)
    )
    return newData;
}

export const DeleteData = (data, id) => {
    const newData = data.filter(item => item.id !== id)
    return newData;
}