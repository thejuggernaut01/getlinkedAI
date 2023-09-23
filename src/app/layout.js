"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "@/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  //redux store reducers
  const store = configureStore({
    reducer: {
      user: userSlice.reducer,
    },
  });

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
          {/* footer section */}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
