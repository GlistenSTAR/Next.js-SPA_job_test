import React from "react";

export default function Footer({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="text-left  bg-gray-50 grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-2 p-4">
            <span className="font-bold">About us</span>
            <p>
                We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that the love.
                All copyrights reserved @ 2020 - health Explore
            </p>
        </div>
        <div className="col-start-3 p-4">
            <span className="font-bold">Sitemap</span>
            <ul>
                <li>Nurses</li>
                <li>Employers</li>
                <li>Social networking</li>
                <li>Jobs</li>
            </ul>
        </div>
        <div className="col-start-4 p-4">
            <span className="font-bold">Privacy</span>
            <ul>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Cookie plicy</li>
            </ul>
        </div>
      </div>  
    </>
  );
}