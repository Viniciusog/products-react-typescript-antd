import { useContext } from "react"
import { ProductContext } from "../../store/products-context"

const useProductContext = () => {
    const productContext = useContext(ProductContext)

    if (productContext === undefined) {
        console.log("PRODUCT CONTEXT UNDEFINED: REQUIRES PRODUCT CONTEXT PROVIDER")
    }
    return productContext
}

export { useProductContext }