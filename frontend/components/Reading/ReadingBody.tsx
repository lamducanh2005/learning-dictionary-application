import 'Frontend/themes/Reading/ReadingBody.css';
import {createContext, useState} from "react";

export const ReadingBodyContext = createContext({
    selectedCategory: "",
    setSelectedCategory: (category: string) => {
    }
})

export default function ReadingBody() {

    const [selectedCategory, setSelectedCategory] = useState<string>("")

    return (
        <ReadingBodyContext.Provider value={{
            selectedCategory: selectedCategory,
            setSelectedCategory: setSelectedCategory
        }}>

            <div className={"reading-view-body"}>

            </div>

        </ReadingBodyContext.Provider>
    )
}