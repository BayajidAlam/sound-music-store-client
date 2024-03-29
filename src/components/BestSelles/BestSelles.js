import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sound-music-server.onrender.com/category?name=Accessories")
      .then((res) => res.json())
      .then((data) => {
        setBestSellers(data);
        setLoading(false);
      });
  }, []);

    // skeleton for use while loading 
    const renderSkeleton = () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-52 w-80 relative mx-auto image-container">
            <div className="skeleton h-full w-full bg-gray-100" />
          </div>
        ))}
      </div>
    );

  return (
    <section className="pb-20">
      {loading ? (
        renderSkeleton()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6">
          {bestSellers.map((sell, i) => (
            <Link key={i} to={`/viewDetails/${sell._id}`}>
              <div>
                <img className="w-80 h-52 m-auto" src={sell.picture} alt="" />
                <div className="w-80 mx-auto">
                  <p className="font-bold">{sell.name}</p>
                  <div className="flex justify-between">
                    <div className="flex items-center w-20 justify-evenly text-yellow-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <p className="text-main font-bold">${sell.resalePrice}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default BestSellers;
