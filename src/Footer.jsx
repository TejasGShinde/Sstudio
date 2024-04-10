import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center py-6 px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Swaraj Studio. All rights reserved.</p>
      <nav className="mt-4 sm:mt-0 flex gap-4 sm:gap-6">
        <a href="#" className="text-xs hover:underline underline-offset-4">Privacy Policy</a>
        <a href="#" className="text-xs hover:underline underline-offset-4">Terms & Conditions</a>
      </nav>
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
