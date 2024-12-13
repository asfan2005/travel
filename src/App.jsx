import React from "react";
import { Header, HomePage, Contact, Booking, Polise,FiveDaysTour,SixDaysTour,TenDaysTour, Footer, Footer2, BizHaqimizda, IndividualTurs, Sayohatlar } from "./components/index";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "55px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/polise" element={<Polise/>}/>
          <Route path="/5-days-tour" element={<FiveDaysTour/>}/>
          <Route path="/6-days-tour" element={<SixDaysTour/>}/>
          <Route path="/10-days-tour" element={<TenDaysTour/>}/>
          <Route path="/our-mission" element={<BizHaqimizda/>}/>
          <Route path="/individual-tours" element={<IndividualTurs/>}/>
          <Route path="/tours" element={<Sayohatlar/>}/>
        </Routes>
      </main>
      <Footer2/>
    </div>
  );
}

export default App;
