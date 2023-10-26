import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Header = () => {
    return (
        <div className="container">
            <div className="logo_container">
                <div>
                    <h1>Reeco</h1>
                </div>
                <div>
                    <ul>
                        <li>Store</li>
                        <li>Orders</li>
                        <li>Analytics</li>
                    </ul>
                </div>
            </div>
            <div className="icons">
                <ShoppingCartIcon />
                <p>Hello James</p>
            </div>
        </div>
    )
}

export default Header