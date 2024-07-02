import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      to_name: "Recipient Name", // Change this to the actual recipient's name or keep it dynamic
      message: formData.message,
      subject: formData.subject,
    };

    emailjs
      .send(
        "service_5kfbpts", // Replace with your EmailJS service ID
        "template_tbyhmyc", // Replace with your EmailJS template ID
        formData,
        "hIqh2gUIMXLPl7d2v" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 border-t bg-gray-100 dark:bg-gray-800 mt-8"
      id="contact"
    >
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="space-y-2">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Contact Us
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Ready to elevate your space? Reach out to us to start the journey
              to exceptional design.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              className="border border-gray-300 rounded-md p-2"
              placeholder="Name"
              required
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 rounded-md p-2"
              placeholder="Email"
              required
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 rounded-md p-2"
              placeholder="Subject"
              required
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              className="border border-gray-300 rounded-md p-2"
              placeholder="Message"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
