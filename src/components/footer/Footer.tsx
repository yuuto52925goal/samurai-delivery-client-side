import { ReactNode } from "react";
import './Footer.css'

interface FooterProps {
    // children: ReactNode
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="footer-all">
            <div className="footer">
                <div>SNS</div>
                <div>Company</div>
                <div>Help & Support</div>
                <div>Legal</div>
            </div>
            <p>All rights reserved. Copyright © 2024 Samurai Delivery</p>
        </div>
    )
}

export default Footer;