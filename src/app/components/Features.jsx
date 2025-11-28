// Next

export default function Section() {
  return (
    <>
      {/* Features Area */}
      <section id="features" className="features__area section-pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section__title text-center mt-80 mb-80">
                <span className="sub-title">accessible for everyone</span>
                <h2 className="title">
                  Crypto <span>development</span> accessible
                </h2>
              </div>
            </div>
          </div>
          <div className="row gutter-y-40">
            {/* Feature 1 */}
            <div className="col-lg-6">
              <div className="features__item">
                <div className="features__icon">
                  <img src="/assets/images/icon/features_icon01.png" alt="icon" />
                </div>
                <div className="features__content">
                  <h4 className="title">
                    Crypto <span>management</span>
                  </h4>
                  <p>Automated identity verification and anti-money</p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-lg-6">
              <div className="features__item">
                <div className="features__icon">
                  <img src="/assets/images/icon/features_icon02.png" alt="icon" />
                </div>
                <div className="features__content">
                  <h4 className="title">
                    Crypto <span>exchange</span>
                  </h4>
                  <p>A built-in explorer to track transactions</p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-lg-4">
              <div className="features__item features__item-two">
                <div className="features__icon">
                  <img src="/assets/images/icon/features_icon03.png" alt="icon" />
                </div>
                <div className="features__content">
                  <h4 className="title">
                    Real-time <span>data</span>
                  </h4>
                  <p>Global reach with content available in multiple</p>
                </div>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="col-lg-4">
              <div className="features__item features__item-two">
                <div className="features__icon">
                  <img src="/assets/images/icon/features_icon04.png" alt="icon" />
                </div>
                <div className="features__content">
                  <h4 className="title">
                    Advanced <span>trading</span>
                  </h4>
                  <p>Visual dashboards for trade performance</p>
                </div>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="col-lg-4">
              <div className="features__item features__item-two">
                <div className="features__icon">
                  <img src="/assets/images/icon/features_icon05.png" alt="icon" />
                </div>
                <div className="features__content">
                  <h4 className="title">
                    Blockchain <span>compliance</span>
                  </h4>
                  <p>Exportable reports for tax and accounting purposes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features__shape">
          <img src="/assets/images/pictures/features_shape.png" alt="shape" />
        </div>
      </section>
    </>
  );
}
