import { FormInstance } from "antd"
import {Form, message} from "antd";

import{Product} from "../../models/product";
//Esse useProductContext serve apenas para termos acesso ao ProductContext
import {useProductContext} from "../context/useProductContext"

interface UseProduct {
    form: FormInstance
    onFinish(): void,
    onEdit(toEditProduct: Product): void,
    onDelete(id: string): void,
    products: Product[]
}

const useProduct = (): UseProduct => {

    //Instância do nosso form que será usado nas telas
    const [form] = Form.useForm<Product>();

    const productContext = useProductContext()

    const onFinish = () => {
        const product: Product = form.getFieldsValue()
        console.log(product) 

        productContext.onAdd({
            id: Math.random().toString(), 
            name: product.name, 
            description: product.description, 
            expirationdate: product.expirationdate
        })

        //console.log(product) 
        return message.success("Produto cadastrado com sucesso!")
    }

    //O antd passará o produto que deverá ser atualizado, automaticamente
    const onEdit = (toEditProduct: Product) => {
        productContext.onEditProduct(toEditProduct.id, toEditProduct)
        return message.success("Produto editado com sucesso!")
    }

    const onDelete = (id: string) => {
        productContext.onRemove(id)
        return message.success("Produto deletado com sucesso!")
    }

    return {
        form,
        onFinish,
        onEdit,
        onDelete,
        products: productContext.products
    }
}

export { useProduct }