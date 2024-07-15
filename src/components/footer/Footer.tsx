import { ReactNode } from "react";
import './Footer.css'

interface FooterProps {
    // children: ReactNode
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="footer-all">
            <div className="footer">
                <div className="sns-footer">
                    SNS
                    <li>Logo</li>
                    <li>Samurai Delivery</li>
                    <div className="sns-icon"></div>
                </div>
                <div className="company-footer">
                    Company
                    <li>About Us</li>
                    <li>Premium Tools</li>
                    <li>Blog</li>
                </div>
                <div className="help-footer">
                    Help & Support
                    <li>Contact Us</li>
                    <li>Knowledge Center</li>
                    <li>Custom</li>
                    <li>Sponsorships</li>
                </div>
                <div className="legal-footer">
                    Legal
                    <li>Terms&Conditions</li>
                    <li>Privacy Policy</li>
                    <li>License</li>
                </div>
            </div>
            <p>All rights reserved. Copyright © 2024 Samurai Delivery</p>
        </div>
    )
}

export default Footer;