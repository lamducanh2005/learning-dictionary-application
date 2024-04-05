import { createBrowserRouter, RouteObject } from 'react-router-dom';
import DictionaryView from "Frontend/views/Dictionary/DictionaryView";



const router = createBrowserRouter([
    {path: '/lambda/dictionary', element: <DictionaryView />, handle: {title: 'Dictionary'}},
]);

export default router;
