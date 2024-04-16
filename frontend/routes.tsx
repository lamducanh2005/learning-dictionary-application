import {createBrowserRouter} from 'react-router-dom';
import DictionaryView from "Frontend/views/Dictionary/DictionaryView";
import MixedView from "Frontend/views/MixedLearning/MixedView";
import MixedLearningBody from "Frontend/components/MixedLearning/MixedBody/MixedLearningBody";
import MixedStartBody from "Frontend/components/MixedLearning/MixedBody/MixedStartBody";
import Test from "Frontend/components/Test/Test";
import DevDictionaryView from "Frontend/views/Developer/Dictionary/DevDictionaryView";
import DevDictionaryResults from "Frontend/views/Developer/Dictionary/DevDictionaryResults";
import StartView from "Frontend/views/Start/StartView";
import MainView from "Frontend/views/Main/MainView";
import DeveloperView from "Frontend/views/Developer/DeveloperView";
import CollectionView from "Frontend/views/Collection/CollectionView";
import AssistantView from "Frontend/views/Assistant/AssistantView";

const router = createBrowserRouter([
    {
        path: '',
        element: <StartView/>,
        handle: {title: 'Đăng nhập hồ sơ của bạn'}
    },
    {
        path: '/lambda',
        element: <MainView/>,
        handle: {title: 'Ứng dụng học tiếng Anh Lambda'}
    },
    {
        path: '/lambda/dictionary',
        element: <DictionaryView/>,
        handle: {title: 'Lambda Dictionary'}
    },
    {
        path: '/lambda/collection',
        element: <CollectionView/>,
        handle: {title: 'Lambda Collection'}
    },
    {
        path: '/lambda/assistant',
        element: <AssistantView/>,
        handle: {title: 'Lambda Assistant'}
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
        handle: {title: 'Test'}
    }
]);

export default router;