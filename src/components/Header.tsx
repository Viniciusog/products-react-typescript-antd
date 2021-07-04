import { PageHeader, Button } from "antd"
import { useContext } from "react";
import {PagesContext} from "../store/pages-context"

const Header: React.FC = (props) => {

    const pagesContext = useContext(PagesContext)

    return (
            <PageHeader
                className="site-page-header"
                ghost={false}
                title={pagesContext.headerTitle}
                subTitle={pagesContext.headerSubtitle}
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                ]}/>
    )
}

export default Header;