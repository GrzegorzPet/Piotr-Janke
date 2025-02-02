class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <div class="topbar">
            <div class="first-bar">
                <div class="title first-bar-item hide-on-mobile">
                    <div class="center">
                        <h1>Handwerker</h1>
                    </div>
                </div>
                <div class="logo first-bar-item">
                    <div class="logo-container  center">
                        <a href="./index.html">
                            <img src="img/logo.svg" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="top-navigation first-bar-item fixed-on-mobile">
                    <nav class="main-navigation">
                        <ul class="main-navigation-list center">
                            <li class="main-navigation-list-option hide-on-mobile">
                                <a href="./uber-uns.html">
                                    <p1>Über uns</p1>
                                </a>
                            </li>
                            <li class="main-navigation-list-option hide-on-mobile">
                                <a href="./realisierungen.html">
                                    <p1>Realisierungen</p1>
                                </a>
                            </li>
                            <li class="main-navigation-list-option hide-on-mobile">
                                <a href="./angebot.html">
                                    <p1>Angebot</p1>
                                </a>
                            </li>
                            <li class="main-navigation-list-option hide-on-mobile">
                                <a href="./kontakt.html">
                                    <p1>Kontakt</p1>
                                </a>
                            </li>
                            <li onclick = showSidebar() class="main-navigation-list-option hide-on-desktop">
                                <span><i class="fa-solid fa-bars"></i></span>
                            </li>
                        </ul>
                        <div class="hide-on-desktop">
                            <ul class="main-navigation-mobile-list center">
                                <li onclick = hideSidebar() class="main-navigation-list-option">
                                    <span><i class="fa-solid fa-x"></i></span>
                                </li>
                                <li class="main-navigation-list-option">
                                    <a href="./uber-uns.html">
                                        <span>Über uns</span>
                                    </a>
                                </li>
                                <li class="main-navigation-list-option">
                                    <a href="./realisierungen.html">
                                        <span>Realisierungen</span>
                                    </a>
                                </li>
                                <li class="main-navigation-list-option">
                                    <a href="./angebot.html">
                                        <span>Angebot</span>
                                    </a>
                                </li>
                                <li class="main-navigation-list-option">
                                    <a href="./kontakt.html">
                                        <span>Kontakt</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="second-bar">
                <div class="center">
                    <h4>Montage und Renovierung</h4>
                </div>
            </div>
        </div>
        `
    }
}

function showSidebar(){
    const sidebar = document.querySelector('.main-navigation-mobile-list');
    sidebar.classList.add("displayMobileNav");
    document.body.style.overflow= 'hidden';
}

function hideSidebar(){
    const sidebar = document.querySelector('.main-navigation-mobile-list');
    sidebar.classList.remove("displayMobileNav");
    document.body.style.overflow= 'visible';
}

class SpecialFooter extends HTMLElement {
    connectedCallback() { 
        this.innerHTML =`
        <div class="footer-part hide-on-mobile">
            <h2 class="center">
                <a href="./index.html">Piotr Janke</a>
            </h2>
        </div>
        <div class="footer-part">
            <div class="center">
                <div>
                    <a href="tel:+4915510836317">
                        <i class="fa-solid fa-phone"></i>
                        <p1>+4915510836317</p1> 
                    </a>
                </div>
                <div>
                    <a href="mailto:piotrjanke2009@googlemail.com">
                        <i class="fa-solid fa-envelope"></i>
                        <p1>piotrjanke2009@googlemail.com</p1>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-part">
            <div class="center">
                <a href="https://www.facebook.com/" class="facebook-link">
                    <i class="fa-brands fa-facebook"></i>
                    <p1>Piotr Janke</p1>
                </a>
            </div>
        </div>
        `
    }
}

customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)