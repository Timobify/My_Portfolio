import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import {createRoot} from "react-dom/client";

const Root: React.FC = () => {
    return <div>Your Root Component</div>;
};

const App: React.FC = () => {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Root />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
};

createRoot(document.getElementById('root')).render(<App />);
