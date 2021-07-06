import { FormInstance } from "antd"
import {Form, message} from "antd";
import moment from "moment";

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

    //Instância do nosso form que será usado nas telas.
    const [form] = Form.useForm<Product>();

    const productContext = useProductContext()

    //Quando apertar no botão do formulário da tela, será executada esta função abaixo. 
    //Como a página está usando o form que nós estamos retornando nesse hook, então podemos pegar os dados
    //do formulário através do form.getFieldsValue
    const onFinish = () => {
        const product: Product = form.getFieldsValue()

        productContext.onAdd({
            id: Math.random().toString(), 
            name: product.name, 
            description: product.description, 
            expirationdate: moment(product.expirationdate).format("YYYY-MM-DD")
        })

        form.resetFields()

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