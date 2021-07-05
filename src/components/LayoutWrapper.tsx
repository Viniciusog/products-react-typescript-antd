import { Layout, PageHeader, Button } from 'antd';
import { NavLink } from 'react-router-dom';

import { useContext } from "react"
import { PagesContext } from "../store/pages-context";

const { Header, Footer, Content } = Layout;

const LayoutWrapper: React.FC = (props) => {

    const pagesContext = useContext(PagesContext)

    const redirectPage = () => {
        console.log("products")
    }
    return (
        <Layout>
            <PageHeader
                className="site-page-header"
                ghost={false}
                style={{ width: "100%", height: "auto" }}
                title={pagesContext.headerTitle}
                subTitle={pagesContext.headerSubtitle}
                extra={[
                    <Button key="3" onClick={redirectPage}>
                        <NavLink to="/products">Products</NavLink>
                    </Button>,
                    <Button key="2">
                        <NavLink to="/new-product">Add new product</NavLink>
                    </Button>,
                    <Button key="1" type="primary">
                        <NavLink to="/">Home</NavLink>
                    </Button>,
                ]} />
            <Content
                style={{ width: "100%", height: "91vh"}}>
                {props.children}
            </Content>
        </Layout>
    )
}

export default LayoutWrapper