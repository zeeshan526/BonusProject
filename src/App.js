import React from 'react';
import Home from './Component/Home/Home'
import Order from './Component/Order/Order'
import Serve from './Component/serve/serve.js'
import DownloadApp from './Component/Download-App/Download-app'
import OrderNow from './Component/OrderNow/OrderNow'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div>

        <Home/>
        <Order/>
        <Serve/>
        <DownloadApp/>
        <OrderNow/>
        <Footer/>
        
    </div>
  );
}

export default App;
