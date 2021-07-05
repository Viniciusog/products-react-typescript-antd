import { ChangeEvent, FormEvent, useContext, useEffect, useState} from "react"
import {useRouteMatch} from "react-router-dom"
import { useParams } from "react-router-dom"
import { ProductContext } from "../store/products-context"
import {PagesContext} from "../store/pages-context"
import {Form, DatePicker, Button, Input} from "antd"
import Product from "../models/product"
import moment from "moment"

type ProductDetailParams = {
    productId: string
}

const ProductDetail: React.FC = () => {

    //Tem que ser productId, pois eu defini, na página Products, essa Route => /products/:productId
    const route = useRouteMatch<ProductDetailParams>()
    const productId = route.params.productId

    //Contexto das páginas
    const pagesContext = useContext(PagesContext)
    pagesContext.changeHeaderTitle("Product details")

    //Contexto de produto
    const productContext = useContext(ProductContext)
    const product = productContext.getProductById(productId)

    //Estados
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [expirationDate, setExpirationDate] = useState<string>("")

    useEffect(() => {
        if (product) {
            setName(product.name)
            setDescription(product.description)
            setExpirationDate(product.expirationdate)
        }
    }, [product])
    

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const descriptionChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const expirationDateChangeHandler = (date: moment.Moment | null, dateString: string) => {
        setExpirationDate(dateString)
    }

    const formSubmitHandler = (event: FormEvent) => {
        if (product) {
            const enteredName = name
            const enteredDescription = description
            const enteredExpirationDate = expirationDate
    
    
            productContext.onEditProduct(productId, 
                new Product(
                    productId, 
                    enteredName, 
                    enteredDescription, 
                    enteredExpirationDate, 
                    product!.key))
        }
    }

/*     if (product === null || product === undefined)  {
        return <p>Product not found with id: {productId}</p>
    } */

    return (
        <Form
            title="Register new product"
            labelAlign="left"
            labelCol={{ span: 6 }}
            layout="horizontal"
            onFinish={formSubmitHandler}

            style={{ margin: "auto", marginTop: "20px", maxWidth: "min(600px, 90%)" }}
        >
            <Form.Item label="Id">
                <Input disabled value={productId}></Input>
            </Form.Item>
            <Form.Item label="Name">
                <Input onChange={nameChangeHandler} value={name}></Input>
            </Form.Item>
            <Form.Item label="Description">
                <Input onChange={descriptionChangeHandler} value={description}></Input>
            </Form.Item>
            <Form.Item label="Expiration date">
                <DatePicker style={{ width: "100%" }} onChange={expirationDateChangeHandler} value={moment(expirationDate, "YYYY-MM-DD")}>

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