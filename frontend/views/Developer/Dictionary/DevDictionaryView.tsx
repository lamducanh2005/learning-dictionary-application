import 'Frontend/themes/Developer/DevDictionary/DevDictionaryView.css';
import DevDictionarySearch from "Frontend/views/Developer/Dictionary/DevDictionarySearch";
import DevDictionaryResults from "Frontend/views/Developer/Dictionary/DevDictionaryResults";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {Suspense} from "react";

export default function DevDictionaryView() {

    const {id} = useParams();

    const navigate = useNavigate();

    const goToResults = (id: any) => {
        navigate(`/developer/dictionary/${id}`);
    }

    return (
        <div className={"dev-dictionary-view"}>
            <DevDictionarySearch onNavigate={goToResults}/>
            <DevDictionaryResults id={id}/>
        </div>
    );
}