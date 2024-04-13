import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-6 px-4 md:px-6 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center text-pink-500">
        <p className="text-xs text-pink-500 dark:text-pink-500">&copy; 2024 Swaraj Studio. All rights reserved.</p>
        <nav className="mt-4 md:mt-0 flex flex-wrap gap-4 md:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4" >Privacy Policy</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Terms & Conditions</a>
          <a href="tel:+1234567890" className="text-xs hover:underline underline-offset-4">+1 (234) 567-890</a>
          <a href="mailto:info@swarajstudio.com" className="text-xs hover:underline underline-offset-4">info@swarajstudio.com</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Facebook</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Twitter</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Instagram</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;














// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//       <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Swaraj Studio. All rights reserved.</p>
//       <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//         <a href="#" className="text-xs hover:underline underline-offset-4">Privacy Policy</a>
//         <a href="#" className="text-xs hover:underline underline-offset-4">Terms & Conditions</a>
//       </nav>
//     </footer>
//   );
// };

// export default Footer;
