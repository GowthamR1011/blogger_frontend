import React from "react";

const AppFooter: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-50 flex w-full justify-center bg-white py-2 shadow-md">
      <span>
        &copy; {new Date().getFullYear()} Blogger. All rights reserved.
      </span>
    </footer>
  );
};

export default AppFooter;
