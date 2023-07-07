import { useEffect, useState } from "react";

const TopToBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        onClick={scrollTop}
        style={{
          display: visible ? "block" : "none",
          position: "fixed",
          right: "20px",
          bottom: "20px",
          zIndex: "100",
        }}
      >
        Yuxari
      </button>
    </div>
  );
};

export default TopToBtn;
