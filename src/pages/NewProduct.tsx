import React, { ChangeEvent, FormEvent, useContext } from "react";
import { ProductContext, ProductContextObj } from "../store/products-context"

import {
    Form,
    Input,
    Button,
    DatePicker,
} from 'antd';

import { useState} from "react"
import {useHistory} from "react-router-dom"

import { PagesContext } from "../store/pages-context";
import Product from "../models/product";
import moment from "moment";

const NewProduct: React.FC = (props) => {

    const productContext = useContext<ProductContextObj>(ProductContext)
    const history = useHistory()

    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [expirationDate, setExpirationDate] = useState<string>("2021-01-01")

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value
        setName(name)
    }

    const descriptionChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const description = event.target.value
        setDescription(description)
    }

    const dateChangeHandler = (date: moment.Moment | null, dateString: string) => {
        setExpirationDate(dateString)
    }

    const formSubmitHandler = (event: FormEvent) => {

        const enteredName = name;
        const enteredDescription = description
        const enteredExpirationDate = expirationDate

        if (enteredName.trim().length > 0
            && enteredDescription.trim().length > 0
            && enteredExpirationDate.trim().length > 0) {
            
                const product = new Product(
                Math.random().toString(),
                enteredName,
                enteredDescription,
                enteredExpirationDate,
                Math.random().toString()
            )

            productContext.onAdd(product)

            alert("Product saved!")

            setName("")
            setDescription("")
            setExpirationDate("2021-01-01")

            history.replace("/products")

        } else {
            alert("Values must not be empty!")
        }
    }


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
            onFinish={formSubmitHandler}

            style={{ margin: "auto", marginTop: "20px", maxWidth: "min(600px, 90%)" }}
        >
            <Form.Item label="Name">
                <Input onChange={nameChangeHandler} value={name}></Input>
            </Form.Item>
            <Form.Item label="Description">
                <Input onChange={descriptionChangeHandler} value={description}></Input>
            </Form.Item>
            <Form.Item label="Expiration date">
                <DatePicker style={{ width: "100%" }} onChange={dateChangeHandler} value={moment(expirationDate, "YYYY-MM-DD")}>

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