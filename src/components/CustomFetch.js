
export const customFetch = (productosBase) =>{
    return new Promise((res, reje) => {
        setTimeout(()=>{
            res(productosBase)
        })
    })
}


