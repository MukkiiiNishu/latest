import React from "react";

const testimonials = [
  {
    name: "Sarika",
    image: "/sarika.jpg",
    message: "Prachi di and Mukesh jiju are the perfect match – made for each other!",
  },
  {
    name: "Usham",
    image: "/2.jpg",
    message: "",
  },
  {
    name: "Niyati",
    image: "/niyati.jpg",
    message: "Prachi Didi bahut caring, protective h ! jijaji hamare bhot kind, jolly nature ke hai ",
  },
  {
    name: "Ruchika",
    image: "/4.jpg",
    message: "Together, you shine brighter than stars. Di, you chose perfectly!",
  },
  {
    name: "Meri Prachi",
    image: "/5.jpg",
    message: "I found the one who makes me laugh the loudest and love the deepest! Love you meri googlii ",
  },
];

export default function Testimonials() {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-rose-100 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={t.image}
              alt={t.name}
              onError={(e) => (e.target.style.display = "none")}
              className="w-28 h-28 rounded-full border-4 border-pink-300 shadow-md mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-3">"{t.message}"</p>
            <h4 className="text-rose-600 font-semibold text-xs mt-auto">{t.name}</h4>
          </div>
        ))}
    </div>
  );
}
