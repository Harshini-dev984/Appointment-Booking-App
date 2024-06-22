import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../routers/Routers';
const Layout = () => {
  return (
   <>
   <Header />
   <main>
    <Routers />
   </main>
   <Footer />
   </>
  );
}

export default Layout
