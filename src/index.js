import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RandomQuoteMachine from './Pages/RandomQuoteMachine';
import JavascriptCalculator from './Pages/JavascriptCalculator';
import DrumMachine from './Pages/DrumMachine';
import MarkdownPreviewer from './Pages/MarkdownPreviewer';
import TwoFiveClock from './Pages/TwoFiveClock';

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
    },
    {
        path : "/random-quote-machine",
        element : <RandomQuoteMachine/>
    },
    {
        path: "/javascript-calculator",
        element : <JavascriptCalculator/>
    },
    {
        path : "/drum-machine",
        element : <DrumMachine/>
    },
    {
        path : "/markdown-previwer",
        element : <MarkdownPreviewer/>
    },
    {
        path : "/two-five-clock",
        element : <TwoFiveClock/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
