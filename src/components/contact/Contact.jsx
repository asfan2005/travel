import React, { useEffect } from "react";
import { Contact1, Contact2, Contact3, Footer, Footer2 } from "../index";

function Contact() {
  useEffect(() => {
    // Sahifa har safar yuklanganda yuqoriga qaytish
    window.scrollTo(0, 0);
  }, []); // Bo'sh array - faqat bir marta, komponent yuklanganda ishlaydi

  return (
    <div style={{ marginTop: "100px" }}>
      <Contact1 />
      <Contact2 />
      <Contact3 />
      <Footer2 />
    </div>
  );
}

export default Contact;
