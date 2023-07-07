import { useEffect, useState } from "react";
import data from "../data/data";

const Home = () => {
  const menuCategories = ["all", ...new Set(data.map((item) => item.category))];

  console.log(menuCategories);

  const [menu, setMenu] = useState(data);
  console.log(menu);

  const filterCategory = (myCategory) => {
    localStorage.setItem("Category", myCategory);

    if (myCategory === "all") {
      setMenu(data);
      return;
    }

    const filterMenu = data.filter((item) => item.category === myCategory);
    setMenu(filterMenu);
  };

  useEffect(() => {
    const categoryValue = localStorage.getItem("Category") || "all";
    filterCategory(categoryValue);
  }, []);

  return (
    <div>
      {menuCategories.map((item, index) => {
        return (
          <button
            onClick={() => filterCategory(item)}
            className={
              localStorage.getItem("Category") === item
                ? "btn btn-success m-2"
                : "btn btn-primary"
            }
            key={index}
          >
            {item}
          </button>
        );
      })}

      <div className="container">
        <div className="row">
          {menu.map((item) => {
            return (
              <>
                <div className="col-lg-4 p-3">
                  <div
                    className="card"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "300px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.desc}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
