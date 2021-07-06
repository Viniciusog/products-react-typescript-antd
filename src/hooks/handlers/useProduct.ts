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
    onGetProductById(id: string): Product | null,
    onLoadForm(id: string): void,
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
            //passando de moment para string
            expirationdate: moment(product.expirationdate).format("YYYY-MM-DD")
        })

        form.resetFields()

        //console.log(product) 
        return message.success("Produto cadastrado com sucesso!")
    }

    //O antd passará o produto que deverá ser atualizado, automaticamente
    //toEditProduct possui os todos os dados, porém o 'expirationdate' é um objeto moment. Por isso, precisamos
    //passar esse tipo moment para string
    const onEdit = (toEditProduct: Product) => {
        productContext.onEditProduct(toEditProduct.id, 
            {
                //Pega todos os dados atualizados do produto
                ...toEditProduct, 
                //porém, passaremos o 'expirationdate' de moment para string
                expirationdate: moment(toEditProduct.expirationdate).format("YYYY-MM-DD")
            }
        )

        form.resetFields()

        return message.success("Produto editado com sucesso!")
    }

    const onDelete = (id: string) => {
        productContext.onRemove(id)
        return message.success("Produto deletado com sucesso!")
    }

    //É usado na página de editar produto (details page)
    //Apenas usamos isso para verificar se temos um produto com id igual ao recebido pela url
    const onGetProductById = (id: string): Product | null => {
        return productContext.getProductById(id)
    }

    //Carrega os dados de produto no formulário quando acessamos a página de editar produto
    const onLoadForm = (id: string): void => {
        const product = productContext.getProductById(id)
        
        if (product !== null || product !== undefined) {
            //coloquei o '!' pois tenho certeza que nesse momento o product não será null ou undefined
            //coloquei object pois o tipo Product não aceita expirationdate sendo 'moment', apenas string.
            const productWithCorrectExpirationDate: object = {
                ...product, 
                //estamos passando de string para moment. O DatePicker aceita apenas moment.
                expirationdate: moment(product?.expirationdate, "YYYY-MM-DD")
            }

            form.setFieldsValue(productWithCorrectExpirationDate!)
        }   
    }

    return {
        form,
        onFinish,
        onEdit,
        onDelete,
        onGetProductById,
        onLoadForm,
        products: productContext.products
    }
}

export { useProduct }