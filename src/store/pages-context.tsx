import React, { useState } from "react";

type PagesContextObj = {
    headerTitle: string,
    headerSubtitle: string
    changeHeaderTitle: (newHeaderTitle: string) => void
    changeHeaderSubtitle: (newHeaderSubtitle: string) => void
}

export const PagesContext = React.createContext<PagesContextObj>({
    headerTitle: "",
    headerSubtitle: "",
    changeHeaderTitle: (newHeaderTitle: string) => {},
    changeHeaderSubtitle: (newHeaderSubtitle: string) => {},
})

const PagesContextProvider: React.FC = (props) => {
    
    const [headerTitle, setHeaderTitle] = useState("")
    const [headerSubtitle, setHeaderSubtitle] = useState("")

    const changeHeaderTitle = (newHeaderTitle: string) => {
        setHeaderTitle(newHeaderTitle)
    }

    const changeHeaderSubtitle = (newHeaderSubtitle: string) => {
        setHeaderSubtitle(newHeaderSubtitle)
    }

    const contextValue = {
        headerTitle: headerTitle,
        headerSubtitle: headerSubtitle,
        changeHeaderTitle: changeHeaderTitle,
        changeHeaderSubtitle: changeHeaderSubtitle
    }

    return (
        <PagesContext.Provider value={contextValue}>
            {props.children}
        </PagesContext.Provider>
    )
}

export default PagesContextProvider;