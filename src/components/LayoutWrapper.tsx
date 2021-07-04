import { Layout, PageHeader, Button } from 'antd';

import { useContext } from "react"
import { PagesContext } from "../store/pages-context";

const { Header, Footer, Content } = Layout;

const LayoutWrapper: React.FC = (props) => {

    const pagesContext = useContext(PagesContext)

    return (
        <Layout>
            <PageHeader
                className="site-page-header"
                ghost={false}
                style={{ width: "100%", height: "auto" }}
                title={pagesContext.headerTitle}
                subTitle={pagesContext.headerSubtitle}
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                ]} />
            <Content
                style={{ width: "100%", height: "91vh" }}>
                {props.children}
            </Content>
        </Layout>
    )
}

export default LayoutWrapper