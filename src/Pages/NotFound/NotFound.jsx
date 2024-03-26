import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="mockup-code w-96">
                <pre data-prefix="1"><code>npm i error!</code></pre>
                <pre data-prefix="2"><code>installing... 😧</code></pre>
                <pre data-prefix="3" className="bg-warning text-warning-content"><code>Error!</code></pre>
                <div className="py-4 flex text-center justify-center items-center">
                <Link to="/" className="btn btn-success text-white">Go Back Home 😐</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;