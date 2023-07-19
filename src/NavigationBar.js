import "./NavigationBar.css";
import logo from './razer-ths-logo.svg';

const NavigationBar = () => {
    return (
        <div>
            <ul className="nav">
                <li className="logo">
                    <a href="a">
                        <img src={logo} alt="" />
                    </a>
                </li>
                <li>
                    <a href="a">Store</a>
                </li>
                <li>
                    <a href="a">PC</a>
                </li>
                <li>
                    <a href="a">Console</a>
                </li>
                <li>
                    <a href="a">Mobile</a>
                </li>
                <li>
                    <a href="a">Lifestyle</a>
                </li>
                <li>
                    <a href="a">Services</a>
                </li>
                <li>
                    <a href="a">Community</a>
                </li>
                <li>
                    <a href="a">Support</a>
                </li>
            </ul>
        <p id="promotion">All orders over US$79 will enjoy free standard shipping to the United States</p>
        </div>
    );
}

export default NavigationBar;