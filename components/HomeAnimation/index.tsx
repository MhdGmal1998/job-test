import React, { useState } from "react";
import { Footer } from "./template/Footer";
import { Refresh } from "./template/Refresh";
import App from "./App";
function AppWithUI() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Refresh onClick={() => setCount(count + 1)} />
            <App key={count} />
            <Footer
                title="Variants"
                url="https://www.framer.com/docs/animate-presence"
            />
        </div>

    );
}

export default AppWithUI