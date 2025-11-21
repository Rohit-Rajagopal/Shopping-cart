import { Link } from "react-router"

function ErrorPage() {

    return (
        <>
            <h1>Error, Page does not exist</h1>
            <Link to="/">Return to Home</Link>
        </>
    )
}

export default ErrorPage;