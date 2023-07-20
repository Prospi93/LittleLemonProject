import logo2 from './assets/Little lemon2.png';

export default function Footer() {
    return (
    <footer>
      <div className="containerFooter">
        <img id="logo2" src={logo2} alt="Little lemon logo" />
        <div className="footerContent">
          <div>
            <h3>Doormat Navigation</h3>
            <p>Menu</p>
            <p>Order Online</p>
            <p>About</p>
            <p>Login</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Address</p>
            <p>Phone number</p>
            <p>Email</p>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
    );
}

