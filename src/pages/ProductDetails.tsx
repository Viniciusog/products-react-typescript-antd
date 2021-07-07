import { useContext} from "react"
import { useRouteMatch } from "react-router-dom"
import { PagesContext } from "../store/pages-context"
import { Form, DatePicker, Button, Input, Alert } from "antd"
import {useProduct} from "../hooks/handlers/useProduct"

import moment from "moment"

type ProductDetailParams = {
    productId: string
}

const ProductDetail: React.FC = () => {

    //decomposição
    const {form, onEdit, onGetProductById, onLoadForm} = useProduct()

    //Contexto das páginas
    const pagesContext = useContext(PagesContext)
    pagesContext.changeHeaderTitle("Product details")

    //Tem que ser productId, pois eu defini, na página Products, essa Route => /products/:productId
    const route = useRouteMatch<ProductDetailParams>()
    const productId = route.params.productId

    //Estamos pegando o produto de acordo com o id da url
    const product = onGetProductById(productId)

    //Estamos inserindo valores no form, de acordo com o produto com id correspondente
    onLoadForm(productId)

    if (product === null || product === undefined) {
        return <Alert message={`Product not found with id: ${productId}`} type="error"
            style={{
                textAlign: "center"
            }} />
    }

    return (
        <Form
            title="Register new product"
            labelAlign="left"
            labelCol={{ span: 6 }}
            layout="horizontal"
            form={form}
            onFinish={onEdit}

            style={{ margin: "auto", marginTop: "20px", maxWidth: "min(600px, 90%)" }}
        >
            <Form.Item label="Id" name="id">
                <Input disabled value={productId}></Input>
            </Form.Item>
            <Form.Item label="Name" name="name">
                <Input ></Input>
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input></Input>
            </Form.Item>
            <Form.Item label="Expiration date" name="expirationdate">
                <DatePicker style={{ width: "100%" }}>

                </DatePicker>
            </Form.Item>
            <Form.Item style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button htmlType="submit" type="primary" style={{ width: "100%" }}>
                    Save
                </Button>
            </Form.Item>
        </Form>
    )
}

export default ProductDetail