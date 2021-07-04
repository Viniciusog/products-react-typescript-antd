import Header from "./Header"
import "./Layout.css"

const Layout: React.FC = (props) => {
    return (
        <div className="div-layout">
            <Header/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout