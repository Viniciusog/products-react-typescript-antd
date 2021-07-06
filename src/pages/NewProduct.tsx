import React, { ChangeEvent, FormEvent, useContext } from "react";
import {
    Form,
    Input,
    Button, 
    DatePicker,
} from 'antd';

import { PagesContext } from "../store/pages-context";
//Meu hook customizado de produtos
import { useProduct } from "../hooks/handlers/useProduct";

const NewProduct: React.FC = (props) => {

    //Estamos pegando os valores automaticamente do nosso useProduct
    const {form, onFinish, onEdit, onDelete, products} = useProduct()

    //Quando nós acessamos a rota '/', o react irá renderizar o nosso componente Home. 
    //Feito isso, o código abaixo atualizará o headerTitle e headerSubtitle do nosso PagesContext
    //Quanto o contexto é atualizado, as páginas que possuem 'useContext(PagesContext)' serão recarregadas
    const pagesContext = useContext(PagesContext)
    pagesContext.changeHeaderTitle("New Product")
    pagesContext.changeHeaderSubtitle("Add a new product completing the form bellow")

    return (
        <Form
            title="Register new product"
            labelAlign="left"
            labelCol={{ span: 6 }}
            layout="horizontal"
            form={form}
            onFinish={onFinish}

            style={{ margin: "auto", marginTop: "20px", maxWidth: "min(600px, 90%)" }}
        >
            <Form.Item label="Name" name="name">
                <Input ></Input>
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input ></Input>
            </Form.Item>
            <Form.Item label="Expiration date" name="expirationdate">
                <DatePicker style={{ width: "100%" }} >

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

export default NewProduct