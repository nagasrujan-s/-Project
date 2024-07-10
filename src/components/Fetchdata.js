let Fetchdata = {
    fetchalldata: async () => {
        let response = await fetch("https://fakestoreapi.com/products")
        let result = await response.json()
        return result
    },
    
    fetchsingledata: async (productid) => {
        let response = await fetch(`https://fakestoreapi.com/products/${productid}`)
        let result = await response.json()
        return result
    }
}
export default Fetchdata