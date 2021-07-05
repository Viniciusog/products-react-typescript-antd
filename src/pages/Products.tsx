import React from 'react';
import { useContext } from "react"
import product from '../models/product';
import { Table, Popconfirm, TableColumnProps, Button } from "antd"
import { ProductContext } from "../store/products-context"
import { idText } from 'typescript';
import Product from '../models/product';

const Products: React.FC = () => {

    const productContext = useContext(ProductContext)

    /* event: React.MouseEvent<HTMLElement, MouseEvent> | undefined */
    const deleteProductHandler = (id: string) => {
        productContext.onRemove(id)
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
                    <Popconfirm
                        title="Are you sure you want to delete?"
                        onConfirm={() => deleteProductHandler(record.id)}
                    >
                        <Button type="text">Delete</Button>
                    </Popconfirm>
                )
            },
        }
    ]

    return (
        <Table columns={columns} dataSource={productContext.products}>

        </Table>
    )
}

export default Products