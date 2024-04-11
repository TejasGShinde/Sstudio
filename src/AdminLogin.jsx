// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/login", {
//         username,
//         password,
//       });
//       console.log(response.data); // Handle token or response accordingly
//       // Redirect to another page if login successful
//       navigate('/contact');// Redirect to '/add-image' page
//     } catch (error) {
//       console.error("Error logging in:", error);
//       // Handle error, display message, etc.
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label htmlFor="username" className="block font-semibold mb-1">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="Enter your username"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block font-semibold mb-1">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication on the frontend
    if (username === "admin" && password === "admin") {
      // If authentication successful, set isAuthenticated to true
      setIsAuthenticated(true);
      // Navigate to AddProject page
      navigate('/addproject');
    } else {
      // If authentication fails, display error message or handle accordingly
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-semibold mb-1">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
