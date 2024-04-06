import {createBrowserRouter} from 'react-router-dom';
import DictionaryView from "Frontend/views/Dictionary/DictionaryView";
import MixedView from "Frontend/views/MixedLearning/MixedView";
import MixedLearningContent from "Frontend/components/MixedLearning/MixedBody/MixedLearningContent";
import MixedStartContent from "Frontend/components/MixedLearning/MixedBody/MixedStartContent";




const router = createBrowserRouter([
    {
        path: '/lambda/dictionary',
        element: <DictionaryView/>,
        handle: {title: 'Lambda Dictionary'}
    },
    {
        path: 'lambda/mixed',
        element: <MixedView/>,
        handle: {title: 'Lambda Mixed Learning'},
        children: [
            {path: '', element: <MixedStartContent/>, handle: {title: 'Lambda Mixed Learning | Start'}},
            {path: 'learning', element: <MixedLearningContent/>, handle: {title: 'Lambda Mixed Learning | Learning'}}
        ]
    }
]);

export default router;
