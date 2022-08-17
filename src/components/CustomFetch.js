
export const customFetch = (productoBaseDeDatos) =>{
    return new Promise((res, reje) => {
        setTimeout(()=>{
            res(productoBaseDeDatos)
        })
    })
}


