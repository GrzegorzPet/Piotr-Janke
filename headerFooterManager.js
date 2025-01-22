class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <div class="topbar">
            <div class="first-bar">
                <div class="title hide-on-mobile">
                    <div class="center">
                        <h1>Handwerker</h1>
                    </div>
                </div>
                <div class="logo">
                    <a href="./index">
                        <div class="logo-container center">
                            <img src="img/logo.svg" alt="logo">
                        </div>
                    </a>
                </div>
                <div class="top-navigation fixed-on-mobile">
                    <nav class="main-navigation">
                        <ul class="main-navigation-list center">
                            <li class="main-navigation-list-option hide-on-mobile">
                                <a href="./uber-uns">
                                    <span>Über uns</span>
                                </a>
                            </li>
                            <li class="main-navigation-list-option hide-on-mobile">
                                <a href="./realisierungen">
                                    <span>Realisierungen</span>
                                </a>
                            </li>
                            <li class="main-navigation-list-option hide-on-mobile">
                                <a href="./angebot">
                                    <span>Angebot</span>
                                </a>
                            </li>
                            <li class="main-navigation-list-option hide-on-mobile">
                                <a href="./kontakt">
                                    <span>Kontakt</span>
                                </a>
                            </li>
                            <li onclick = showSidebar() class="main-navigation-list-option hide-on-desktop">
                                <span>=</span>
                            </li>
                        </ul>
                        <div class="hide-on-desktop">
                            <ul class="main-navigation-mobile-list center">
                                <li onclick = hideSidebar() class="main-navigation-list-option main-navigation-mobile-list-option">
                                    <span>X</span>
                                </li>
                                <li class="main-navigation-list-option main-navigation-mobile-list-option">
                                    <a href="./uber-uns">
                                        <span>Über uns</span>
                                    </a>
                                </li>
                                <li class="main-navigation-list-option main-navigation-mobile-list-option">
                                    <a href="./realisierungen">
                                        <span>Realisierungen</span>
                                    </a>
                                </li>
                                <li class="main-navigation-list-option main-navigation-mobile-list-option">
                                    <a href="./angebot">
                                        <span>Angebot</span>
                                    </a>
                                </li>
                                <li class="main-navigation-list-option main-navigation-mobile-list-option">
                                    <a href="./kontakt">
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
                    <span>Montage und Renovierung</span>
                </div>
            </div>
        </div>
        `
    }
}

function showSidebar(){
    const sidebar = document.querySelector('.main-navigation-mobile-list')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.main-navigation-mobile-list')
    sidebar.style.display = 'none'
}

class SpecialFooter extends HTMLElement {
    connectedCallback() { 
        this.innerHTML =`
        <div class="footer-part">
            <h2 class="center">
                <a href="./index.html">Piotr Janke</a>
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