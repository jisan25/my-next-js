import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            we'd love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.283753613432!2d90.42125349272015!3d23.83133057857439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6422bc83d21%3A0x3a1bc96ce9f8ad8b!2sKhilkhet%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1693906000121!5m2!1sen!2sbd"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrepolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default Contact;
