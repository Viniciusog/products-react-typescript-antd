import {PageHeader} from "antd"
const Header: React.FC = (props) => {

    return (
        <PageHeader>
            <nav>
                <li>
                    <ul>Home</ul>
                    <ul>Produtos</ul>
                    <ul>Novo produto</ul>
                </li>
            </nav>
        </PageHeader>
    )
}

export default Header;