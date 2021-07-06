import React from 'react';
import { PagesContext } from '../store/pages-context';
import { useContext } from "react"

import {useHistory} from "react-router-dom"
import { Table, Popconfirm, TableColumnProps, Button } from "antd"
import {Product} from '../models/product';
import { Redirect, Route } from 'react-router-dom';
import ProductDetail from './ProductDetails';
import {useProduct} from "../hooks/handlers/useProduct"

const Products: React.FC = () => {
    //Modifica o título e subtítulo do header quando acessar a página de products
    const pagesContext = useContext(PagesContext);
    pagesContext.changeHeaderTitle("All products")
    pagesContext.changeHeaderSubtitle("")

    const {onDelete, products} = useProduct()

    const history = useHistory()

    const deleteProductHandler = (id: string) => {
        
    }

    console.log(products)

    const editProductHandler = (id: string) => {
        history.push(`/products/${id}`)
    }

    const columns /*: TableColumnProps<Product>[] */ = [
        {
            title: "Id",
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: "Name",
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: "Description",
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: "Expiration Date",
            //Esse dataIndex precisa ter o mesmo nome do atributo dos objetos do array de dados
            //para que assim, o valor seja atribuído automaticamente na coluna certa.
            dataIndex: 'expirationdate',
            key: 'expirationdate',
        },
        {
            title: "Actions",
            dataIndex: 'action',
            key: "action",
            /*  render: (_: string, record: Product): JSX.Element => {
                 <Popconfirm
                     title="Are you sure you want to delete?"
                     onConfirm={() => deleteProductHandler(record.id)}
                 >
                     <Button type="text">Delete</Button>
                 </Popconfirm>
             }, */
            render: (_: string, record: Product): JSX.Element => {
                return (
                    <React.Fragment>
                        <Popconfirm
                            title="Are you sure you want to delete?"
                            onConfirm={() => deleteProductHandler(record.id)}
                        >
                            <Button type="primary" style={{ background: "#c44242", border: "1px solid #c44d4d" }}>Delete</Button>
                        </Popconfirm>
                        <Button type="primary" style={{
                            background: "#d3b142",
                            border: "1px solid #d3b142",
                            marginLeft: "20px"
                        }}
                            onClick={() => editProductHandler(record.id)}
                        >
                            Edit
                        </Button>
                    </React.Fragment>
                )
            },
        }
    ]

    return (
        <React.Fragment>
            <Table columns={columns} dataSource={products} rowKey={"id"} style={{ margin: "20px" }}>

            </Table>
        </React.Fragment>
    )
}

export default Products