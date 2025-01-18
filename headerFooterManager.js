class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <div class="topbar">
            <div class="first-bar">
                <div class="title">
                    <div class="center">
                        <h1>Handwerker</h1>
                    </div>
                </div>
                <div class="logo">
                    <a href="./index.html">
                        <div class="logo-container center">
                            <img src="img/logo.svg" alt="logo">
                            <span>Piotr Janke</span>
                        </div>
                    </a>
                </div>
                <div class="top-navigation">
                    <nav class="main-navigation">
                        <ul class="main-navigation-list center">
                            <li class="main-navigation-list-option">
                                <a href="/uber-uns.html">
                                    <span>Über uns</span>
                                </a>
                            </li>
                            <li class="main-navigation-list-option">
                                <a href="/realisierungen.html">
                                    <span>Realisierungen</span>
                                </a>
                            </li>
                            <li class="main-navigation-list-option">
                                <a href="/angebot.html">
                                    <span>Angebot</span>
                                </a>
                            </li>
                            <li class="main-navigation-list-option">
                                <a href="/kontakt.html">
                                    <span>Kontakt</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="second-bar">
                <div class="center">
                    <span>Montage und Renovierung</span>
                </div>
            </div>
        </div>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() { 
        this.innerHTML =`
        <div class="footer-part">
            <h2 class="center">
                <a href="./index.html">Piotr Janke </a>
            </h2>
        </div>
        <div class="footer-part">
            <div class="center">
                <div>
                    <a href="tel:+4915510836317">
                        <i class="fa-solid fa-phone"></i>
                        <p>+4915510836317</p> 
                    </a>
                </div>
                <div>
                    <a href="mailto:piotrjanke2009@googlemail.com">
                        <i class="fa-solid fa-envelope"></i>
                        <p>piotrjanke2009@googlemail.com</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-part">
            <div class="center">
                <a href="https://www.facebook.com/" class="facebook-link">
                    <i class="fa-brands fa-facebook"></i>
                    <p>Piotr Janke</p>
                </a>
            </div>
        </div>
        `
    }
}

customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)