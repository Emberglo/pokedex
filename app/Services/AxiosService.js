// @ts-ignore
export const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    timeout: 15000
})


// @ts-ignore
// export const sandboxApi = axios.create({
//     baseURL: "//bcw-sandbox.herokuapp.com/api/ryan/pokemon/",
//     timeout: 15000
// }) 