import Header from "./Header"

const Layout: React.FC = (props) => {
    return (
        <div>
            <Header/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout