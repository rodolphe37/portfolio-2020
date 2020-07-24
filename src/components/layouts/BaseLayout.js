import React from 'react';
import Header from '../shared/Header';
import Footer from '../footer'



const BaseLayout = (props) => {
  const { className, children } = props;

  return (
    <>
      <a name="top"></a>
      <Header />
      <div className="layout-container" id="home">
        <main className={`cover ${className}`}>
          <div className="wrapper">
            <div>
              {children}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default BaseLayout;
