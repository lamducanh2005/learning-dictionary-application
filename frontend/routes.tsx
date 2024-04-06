import {createBrowserRouter} from 'react-router-dom';
import DictionaryView from "Frontend/views/Dictionary/DictionaryView";
import MixedView from "Frontend/views/MixedLearning/MixedView";
import MixedLearningBody from "Frontend/components/MixedLearning/MixedBody/MixedLearningBody";
import MixedStartBody from "Frontend/components/MixedLearning/MixedBody/MixedStartBody";




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
            {path: '', element: <MixedStartBody/>, handle: {title: 'Lambda Mixed Learning | Start'}},
            {path: 'learning', element: <MixedLearningBody/>, handle: {title: 'Lambda Mixed Learning | Learning'}}
        ]
    }
]);

export default router;
