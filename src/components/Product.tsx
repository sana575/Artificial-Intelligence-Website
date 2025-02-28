'use client';

import React from "react";

const products = [
  {
    id: 1,
    title: "web development",
    category: "fixing",
    price: "800.00",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5CrZGpF2c_f32_-BiyU9j2XH7IglEIaSBw&s",
    bgColor: "bg-amber-400",
  },
  {
    id: 2,
    title: "learning fundamentals",
    category: "fixing",
    price: "900.00",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5CrZGpF2c_f32_-BiyU9j2XH7IglEIaSBw&s",
    bgColor: "bg-teal-500",
  },
  {
    id: 3,
    title: "Digital marketing",
    category: "fixing",
    price: "1000.00",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5CrZGpF2c_f32_-BiyU9j2XH7IglEIaSBw&s",
    bgColor: "bg-amber-400",
  },
];

export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.4 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-8 px-8 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="relative w-50 mb-7 rounded-lg"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          <div className="right-4 relative text-black pb-6 mt-4 text-center">
            <span className="block opacity-75 mb-20">{product.category}</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
