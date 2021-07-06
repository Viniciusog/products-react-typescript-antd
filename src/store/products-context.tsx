import React, { useState } from "react";
import {Product} from "../models/product";

//Define o tipo das propriedades do nosso ProductContext
export type ProductContextObj = {
    products: Product[],
    onAdd: (product: Product) => void,
    onRemove: (id: string) => void,
    onEditProduct: (id: string, product: Product) => void,
    getProductById: (id: string) => Product | null
}

//Cria o nosso ProductContext e coloca um valor inicial para cada uma das propriedades
export const ProductContext = React.createContext<ProductContextObj>({
    products: [],
    onAdd: (product: Product) => { },
    onRemove: (id: string) => { },
    onEditProduct: (id: string, product: Product) => { },
    getProductById: (id: string) => null
})

//Componente que gerenciará o ProductContext através do state e funções.
const ProductContextProvider: React.FC = (props) => {

    const [products, setProducts] = useState<Product[]>([])

    const addProductHandler = (product: Product) => {
        setProducts((prevProducts) => {
            return [...prevProducts, product]
        })
    }

    const removeProductHandler = (id: string) => {
        setProducts((prevProducts) => {
            return prevProducts.filter(product => product.id !== id)
        })
    }

    const editProductHandler = (id: string, product: Product) => {
        //Pegamos o índice do produto
        const productIndex = products.findIndex(product => product.id === id)

        if (productIndex !== null) {
            //Pegamos o produto de acordo com o id
            let currentProduct = products[productIndex]
            //Atualizamos produto existente com os valores recebidos
            currentProduct = { ...product, id: currentProduct.id}

            let updatedProducts = products
            updatedProducts[productIndex] = currentProduct
            setProducts(updatedProducts)
        }
    }

    const getProductById = (id: string) => {
        //Estamos pegando o índice do produto
        const productIndex = products.findIndex(product => product.id === id)
        //Se tiver índice, então existe o produto, logo, retornaremos o produto
        if (productIndex != null && productIndex !== undefined) {
            return products[productIndex]
        }
        return null
    }

    const contextValue: ProductContextObj = {
        products: products,
        onAdd: addProductHandler,
        onRemove: removeProductHandler,
        onEditProduct: editProductHandler,
        getProductById: getProductById
    }

    //Todos os filhos que estiverem dentro dentro ProductContextProvider terão acesso ao ProductContext por
    //meio do useContext(ProductContext)
    return <ProductContext.Provider value={contextValue}>
        {props.children}
    </ProductContext.Provider>
}

export default ProductContextProvider;