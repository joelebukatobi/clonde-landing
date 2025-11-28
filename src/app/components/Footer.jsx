// Next
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer__area">
      <div className="container">
        {/* <div className="footer__top">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="footer__content">
                <div className="footer__logo">
                  <Link href="/">
                    <img src="/assets/images/logo/logo.svg" alt="logo" />
                  </Link>
                </div>
                <span className="sub-title">Built on web3. Powered by You</span>
                <h2 className="title">
                  Join with our <span>future</span> of Webzo currency
                </h2>
                <div className="team__social-wrap">
                  <ul className="list-wrap">
                    <li>
                      <a href="#!">
                        <img src="assets/images/icon/facebook.svg" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src="/assets/images/icon/twitter.svg" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src="/assets/images/icon/telegram.svg" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src="/assets/images/icon/discord.svg" alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer__bottom">
          <div className="copyright-text">
            <p>
              Copyright & design by{' '}
              <a href="https://themeforest.net/user/themeadapt" target="_blank" rel="noreferrer">
                @ThemeAdapt
              </a>{' '}
              - 2025
            </p>
          </div>
        </div>
      </div>
      {/* <div className="footer__shape">
        <img src="/assets/images/pictures/footer_shape01.png" alt="shape" className="alltuchtopdown" />
        <img src="/assets/images/pictures/footer_shape02.png" alt="shape" className="alltuchtopdown" />
      </div> */}
    </footer>
  );
}
