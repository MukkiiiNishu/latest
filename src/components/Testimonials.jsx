import React from "react";

const testimonials = [
  {
    name: "Sarika",
    image: "/1.jpg",
    message: "Prachi di and Mukesh jiju are the perfect match – their bond inspires all of us!",
  },
  {
    name: "Usham",
    image: "/2.jpg",
    message: "She found the one who makes her laugh the loudest and love the deepest!",
  },
  {
    name: "Niyati",
    image: "/3.jpg",
    message: "Jiju brings out the best version of di – what more could we ask for?",
  },
  {
    name: "Ruchika",
    image: "/4.jpg",
    message: "You both are proof that soulmates really do exist. Wishing you eternal love!",
  },
  {
    name: "Prachi",
    image: "/5.jpg",
    message: "Together, you shine brighter than stars. Di, you chose perfectly!",
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
    </div>
  );
}
