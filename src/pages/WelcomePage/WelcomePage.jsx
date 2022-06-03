import { Link } from "react-router-dom"
export default function WelcomePage() {
    return (
        <>
            <h1>Top 5</h1>
            <Link to="/auth">LogIn or Sign Up here</Link>
           
        </>
    );
}