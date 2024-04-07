import {createBrowserRouter} from 'react-router-dom';
import DictionaryView from "Frontend/views/Dictionary/DictionaryView";
import MixedView from "Frontend/views/MixedLearning/MixedView";
import MixedLearningBody from "Frontend/components/MixedLearning/MixedBody/MixedLearningBody";
import MixedStartBody from "Frontend/components/MixedLearning/MixedBody/MixedStartBody";
import Test from "Frontend/components/Test/Test";
import DevDictionaryView from "Frontend/views/Developer/Dictionary/DevDictionaryView";
import DevDictionaryResults from "Frontend/views/Developer/Dictionary/DevDictionaryResults";




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
    },

    {
        path: '/developer/dictionary',
        element: <DevDictionaryView/>,
        handle: {title: 'Developer Dictionary'},
        children: [
            {path: ':id', element: <DevDictionaryResults/>}
        ]
    },
    {
        path: '/test',
        element: <Test/>,
    }
]);

export default router;
