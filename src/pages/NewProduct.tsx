import React, { useContext } from "react";
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';

import {useState} from "react"

import { PagesContext } from "../store/pages-context";
import FormItem from "antd/lib/form/FormItem";

const NewProduct: React.FC = () => {

    //Quando nós acessamos a rota '/', o react irá renderizar o nosso componente Home. 
    //Feito isso, o código abaixo atualizará o headerTitle e headerSubtitle do nosso PagesContext
    //Quanto o contexto é atualizado, as páginas que possuem 'useContext(PagesContext)' serão recarregadas
    const pagesContext = useContext(PagesContext)
    pagesContext.changeHeaderTitle("New Product")
    pagesContext.changeHeaderSubtitle("Add a new product completing the form bellow")

    return (
        <Form
            title="Register new product"
            subTitle="add new"
            labelAlign="left"
            labelCol={{span: 6}}
            wrapperCol={{span: 12}}
            layout="horizontal"
           
            style={{margin: "auto", marginTop: "20px", maxWidth: "min(600px, 90%)"}}
        >
            <Form.Item label="Name">
                <Input></Input>
            </Form.Item>
            <Form.Item label="Description">
                <Input></Input>
            </Form.Item>
            <Form.Item label="Expiration date">
                <DatePicker style={{width:"100%"}}></DatePicker>
            </Form.Item>
            <Form.Item style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                <Button type="primary" style={{width:"50%"}}>
                    Save
                </Button>
            </Form.Item>
        </Form>
    )
}

export default NewProduct