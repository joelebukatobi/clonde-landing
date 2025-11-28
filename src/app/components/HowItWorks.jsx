// Next
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <>
      {/* <main className="main-area fix"> */}
      {/* Work Areas */}
      <section id="work" className="work__area section-py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section__title text-center mt-80 mb-80">
                <span className="sub-title">how it works?</span>
                <h2 className="title">
                  Core asset of the <span>crypto</span> marketplace
                </h2>
              </div>
            </div>
          </div>
          <div className="work__item-wrap">
            <div className="work__img">
              <img src="assets/images/pictures/work_img.png" alt="img" className="alltuchtopdown" />
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay="0">
                <div className="work__item">
                  <h1 className="number">01</h1>
                  <h4 className="title">
                    Currency <span>conversion</span>
                  </h4>
                  <p>Exportable reports for tax and accounting purposes.</p>
                </div>
                <div className="work__item mb-0">
                  <h1 className="number">02</h1>
                  <h4 className="title">
                    Data <span>encryption</span>
                  </h4>
                  <p>Visual dashboards for trade performance.</p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="0">
                <div className="work__item work__item-right">
                  <h1 className="number">03</h1>
                  <h4 className="title">
                    Cold wallet <span>storage</span>
                  </h4>
                  <p>Regular updates on crypto trends and platform features.</p>
                </div>
                <div className="work__item work__item-right mb-0">
                  <h1 className="number">04</h1>
                  <h4 className="title">
                    Transfer crypto <span>& data</span>
                  </h4>
                  <p>Guides for beginners on crypto basics and trading.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work__shape">
          <img src="assets/images/pictures/features_shape.png" alt="shape" />
        </div>
      </section>

      {/* Exchange Area */}
      <section className="exchange__area section-pb-120" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="exchange__inner-wrap">
            <div className="exchange__content">
              <div className="icon">
                <img src="assets/images/pictures/exchange_img.png" alt="img" />
              </div>
              <div className="content">
                <h4 className="title">
                  Exchange <span>availability</span>
                </h4>
                <p>AI-powered tools to detect and prevent fraudulent activities.</p>
              </div>
            </div>
            <div className="exchange__icons">
              <ul className="list-wrap">
                <li>
                  <img src="assets/images/icon/exchange_icon01.svg" alt="icon" />
                </li>
                <li>
                  <img src="assets/images/icon/exchange_icon02.svg" alt="icon" />
                </li>
                <li>
                  <img src="assets/images/icon/exchange_icon03.svg" alt="icon" />
                </li>
                <li>
                  <img src="assets/images/icon/exchange_icon04.svg" alt="icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Area */}
      <section className="crypto__area section-py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section__title text-center mb-80">
                <span className="sub-title">crypto direction</span>
                <h2 className="title">
                  Goods & assets <span>according</span> <br />
                  to users interests.
                </h2>
              </div>
            </div>
          </div>
          <div className="row gutter-y-30 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="crypto__item">
                <div className="crypto__icon">
                  <img src="assets/images/icon/crypto_icon01.svg" alt="icon" />
                </div>
                <div className="crypto__content">
                  <h2 className="title">
                    Read our <span>white paper</span>
                  </h2>
                  <a href="#!" className="tg-btn tg-btn-two">
                    open whitepaper
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="crypto__item">
                <div className="crypto__icon">
                  <img src="assets/images/icon/crypto_icon02.svg" alt="icon" />
                </div>
                <div className="crypto__content">
                  <h2 className="title">
                    1 CRN token price <span>0.00014 BTC</span>
                  </h2>
                  <a href="#!" className="tg-btn tg-btn-two">
                    Buy tokens <span>(-25%)</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="crypto__item">
                <div className="crypto__icon">
                  <img src="assets/images/icon/crypto_icon03.svg" alt="icon" />
                </div>
                <div className="crypto__content">
                  <h2 className="title">
                    ICO Participants <span>370,000+</span>
                  </h2>
                  <a href="#!" className="tg-btn tg-btn-two">
                    join our telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="crypto__shape">
          <img src="assets/images/pictures/features_shape.png" alt="shape" />
        </div>
      </section>

      {/* FAQ Area */}
      <section className="faq__area section-py-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq__img" data-aos="fade-right" data-aos-delay="0">
                <img src="assets/images/pictures/faq_img.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq__content" data-aos="fade-left" data-aos-delay="0">
                <div className="section__title mb-60">
                  <span className="sub-title">faq & ans</span>
                  <h2 className="title">
                    Get every <span>single</span> <br />
                    answer
                  </h2>
                </div>
                <div className="faq__wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Main purpose of a cryptocurrency
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The private key, stored securely in the wallet, allows you to sign transactions and prove
                            ownership of the funds cryptocurrency wallet.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How can I make refund?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>
                            The private key, stored securely in the wallet, allows you to sign transactions and prove
                            ownership of the funds cryptocurrency wallet.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How do they operate on blockchain?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The private key, stored securely in the wallet, allows you to sign transactions and prove
                            ownership of the funds cryptocurrency wallet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </main> */}
    </>
  );
}
