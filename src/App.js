import React, { useState, Suspense } from 'react';

const DynamicComponent = React.lazy(() => import('./pages/DynamicCompoent'));

function App() {
    const [showComponent, setShowComponent] = useState(false);

    return (
        <div>
            <h1>Dynamic Import Example</h1>
            <button onClick={() => setShowComponent(true)}>Load Component</button>
            {showComponent && (
                <Suspense fallback={<div>Loading...</div>}>
                    <DynamicComponent />
                </Suspense>
            )}
        </div>
    );
}

export default App;
