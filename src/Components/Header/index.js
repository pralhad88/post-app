import "./index.css";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function Header() {
    return (
        <header className="post-header">
            <nav>
                <div className="row">
                    <div>

                    </div>
                    <ul className="main-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/favorite">Favorite</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
