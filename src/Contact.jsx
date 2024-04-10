import React from "react";

const Contact = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-gray-100 dark:bg-gray-800" id="contact">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Ready to elevate your space? Reach out to us to start the journey to exceptional design.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="grid gap-4">
            <input className="border border-gray-300 rounded-md p-2" placeholder="Name" required type="text" />
            <input className="border border-gray-300 rounded-md p-2" placeholder="Email" required type="email" />
            <input className="border border-gray-300 rounded-md p-2" placeholder="Subject" required type="text" />
            <textarea className="border border-gray-300 rounded-md p-2" placeholder="Message" required />
            <button type="submit" className="bg-pink-500 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
