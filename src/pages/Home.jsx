import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-10 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          GlamHub – Salon Management Made Simple
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Manage bookings, staff schedules, and payments all from one
          easy-to-use platform – accessible on web and mobile.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#features"
            className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Explore Features
          </a>
          <a
            href="/login"
            className="px-6 py-3 bg-pink-700 text-white font-semibold rounded-lg shadow hover:bg-pink-800 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose GlamHub?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Online Slot Booking",
              desc: "Let customers book appointments anytime, anywhere – no phone calls needed.",
              icon: "💇‍♀️",
            },
            {
              title: "Live Notifications",
              desc: "Instant updates on new bookings, cancellations, and reminders via push notifications.",
              icon: "🔔",
            },
            {
              title: "Staff Management",
              desc: "Easily manage employee schedules, shifts, and availability in real-time.",
              icon: "👩‍💼",
            },
            {
              title: "Secure Payments",
              desc: "Accept card, UPI, and wallet payments directly from the app.",
              icon: "💳",
            },
            {
              title: "Customer History",
              desc: "Keep track of previous visits, preferences, and notes to offer better service.",
              icon: "📜",
            },
            {
              title: "Reports & Analytics",
              desc: "View detailed insights on revenue, bookings, and peak hours.",
              icon: "📊",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section
        id="demo"
        className="py-12 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Level Up Your Salon?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Join hundreds of salons who trust GlamHub to simplify their business
          and delight their customers.
        </p>
        <a
          href="#"
          className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Book a Free Demo
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} GlamHub. All rights reserved.
      </footer>
    </div>
  );
}
