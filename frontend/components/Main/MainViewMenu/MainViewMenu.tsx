import MainViewAssistantItem from "Frontend/components/Main/MainViewMenu/MainViewAssistantItem";
import MainViewReadingItem from "Frontend/components/Main/MainViewMenu/MainViewReadingItem";
import MainViewCollectionItem from "Frontend/components/Main/MainViewMenu/MainViewCollectionItem";
import MainViewDictionaryItem from "Frontend/components/Main/MainViewMenu/MainViewDictionaryItem";
import 'Frontend/themes/Main/MainViewMenu/MainViewMenu.css';

export default function MainViewMenu(props: any) {
    return (
        <div className={"main-view-menu"}>
            <MainViewDictionaryItem/>
            <MainViewCollectionItem/>
            <MainViewReadingItem/>
            <MainViewAssistantItem/>
        </div>
    )
}