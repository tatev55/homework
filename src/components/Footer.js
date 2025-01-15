import Navbar from "./Navbar.js"

function Footer(){
    return (
        <div className = "footer"> 
            <div className = "footer-container">
                <div className = "footer-social-links">
                    <SocialLinks/>
                </div>
                <Navbar/>
            </div>
        </div>
    )
}

function SocialLinks(){
    return (
        <div className = "footer-text">
            <p>About Us</p>
            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            <div>
                <a href = "https://www.facebook.com/" className = "social-link">Facebook</a>
                <a href = "https://www.instagram.com/" className = "social-link">Instagram</a>
            </div>
        </div>
    )
}

export default Footer