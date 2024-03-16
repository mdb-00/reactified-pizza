import Order from "../order/Order";

function Footer() {
    const date = new Date().getHours();
    let footerInfo = date >= 10 && date <= 22 ? <Order /> : <p>We're closed, we welcome you to return between 10:00 AM and 10:00 PM</p>
    
    return(
        <footer className="footer">{footerInfo}</footer>
    )
}

export default Footer;