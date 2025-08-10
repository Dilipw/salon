import { useState } from "react";
import { Bell, Calendar, Clock, MapPin, CreditCard, Phone, Wallet, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function CustomerDashboard() {
  const navigate = useNavigate(); // Initialize the navigate hook

  const salons = [
    {
      id: 1,
      name: "Glamour Cuts",
      location: "Main Street",
      rating: 4.5,
      owner: "Sarah Johnson",
      phone: "+1 555-123-4567",
      image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b6?w=800&q=80",
      price: 50,
    },
    {
      id: 2,
      name: "Style Studio",
      location: "City Center",
      rating: 4.8,
      owner: "Michael Lee",
      phone: "+1 555-987-6543",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
      price: 65,
    },
    {
      id: 3,
      name: "Urban Hair",
      location: "Downtown",
      rating: 4.6,
      owner: "Emily Davis",
      phone: "+1 555-222-3344",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
      price: 45,
    },
  ];

  const slots = [
    { time: "10:00 AM", status: "available" },
    { time: "11:00 AM", status: "full" },
    { time: "12:00 PM", status: "available" },
    { time: "01:00 PM", status: "empty" },
    { time: "02:00 PM", status: "available" },
  ];

  const [selectedSalon, setSelectedSalon] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [notifications] = useState([
    "Your appointment at Glamour Cuts is confirmed!",
    "Urban Hair has a new offer - 20% off today!"
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleProceedToPayment = () => {
    if (selectedSalon && selectedSlot && selectedDate) {
      setShowPayment(true);
    }
  };

  const handlePay = () => {
    setPaymentProcessing(true);
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  const resetState = () => {
    setSelectedSalon(null);
    setSelectedSlot(null);
    setSelectedDate("");
    setShowPayment(false);
    setPaymentSuccess(false);
  };

  const handleLogout = () => {
    // Here you would clear user session data, e.g., from local storage
    localStorage.removeItem("userToken"); 
    // Redirect to the login page. You would need a route configured for this.
    navigate("/login"); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold">Customer Dashboard</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-700 hover:text-red-500"
          >
            <LogOut className="w-6 h-6" />
            <span className="hidden md:inline">Logout</span>
          </button>
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <Bell className="w-6 h-6 text-gray-700" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {notifications.length}
                </span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-2">
                {notifications.map((note, index) => (
                  <div
                    key={index}
                    className="p-2 text-sm border-b last:border-none"
                  >
                    {note}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Salon List */}
      {!selectedSalon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6 grid md:grid-cols-3 gap-4"
        >
          {salons.map((salon) => (
            <div
              key={salon.id}
              onClick={() => setSelectedSalon(salon)}
              className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden cursor-pointer transition"
            >
              <img
                src={salon.image}
                alt={salon.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{salon.name}</h2>
                <p className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" /> {salon.location}
                </p>
                <p className="text-yellow-500">⭐ {salon.rating}</p>
                <p className="text-sm mt-2">Owner: {salon.owner}</p>
                <p className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-1" /> {salon.phone}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Slot Selection */}
      {selectedSalon && !showPayment && (
        <AnimatePresence>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="p-6"
          >
            <button
              onClick={() => {
                setSelectedSalon(null);
                setSelectedSlot(null);
                setSelectedDate("");
              }}
              className="mb-4 text-blue-500 underline"
            >
              ← Back to Salons
            </button>
            <h2 className="text-xl font-bold mb-4">
              {selectedSalon.name} - Select Date & Slot
            </h2>

            {/* Date Picker */}
            <div className="mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border rounded p-2"
              />
            </div>

            {/* Slot Table */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {slots.map((slot, index) => (
                <div
                  key={index}
                  onClick={() =>
                    slot.status === "available" && setSelectedSlot(slot)
                  }
                  className={`p-4 rounded-lg text-center cursor-pointer border-2 ${
                    selectedSlot?.time === slot.time
                      ? "border-blue-500 bg-blue-100"
                      : slot.status === "available"
                      ? "border-green-500 hover:bg-green-100"
                      : slot.status === "full"
                      ? "border-red-500 bg-red-100 cursor-not-allowed"
                      : "border-gray-400 bg-gray-100 cursor-not-allowed"
                  }`}
                >
                  <Clock className="w-5 h-5 mx-auto mb-1" />
                  <p>{slot.time}</p>
                  <p className="text-xs capitalize">{slot.status}</p>
                </div>
              ))}
            </div>

            {/* Payment Button */}
            {selectedSlot && selectedDate && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mt-6 text-center"
              >
                <button
                  onClick={handleProceedToPayment}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto"
                >
                  <CreditCard className="w-5 h-5" /> Proceed to Payment
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Payment Interface */}
      <AnimatePresence>
        {showPayment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-20"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
            >
              <button
                onClick={() => setShowPayment(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
              
              {!paymentSuccess ? (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-center">Payment Details</h2>
                  
                  {/* Animated Credit Card */}
                  <div className="relative h-40 mb-6 perspective-[1000px]">
                    <motion.div
                      className="absolute w-full h-full rounded-xl shadow-lg bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-6"
                      initial={{ rotateY: 0 }}
                      animate={{ rotateY: paymentProcessing ? 360 : 0 }}
                      transition={{ duration: 1.5, loop: paymentProcessing }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <CreditCard className="w-8 h-8" />
                        <span className="font-mono text-xs opacity-75">VALID THRU 12/28</span>
                      </div>
                      <div className="text-2xl font-mono tracking-widest mb-4">**** **** **** 1234</div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">{selectedSalon.owner}</span>
                        <Wallet className="w-6 h-6" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Payment Info */}
                  <div className="mb-6 space-y-2">
                    <p className="flex justify-between">
                      <span className="font-semibold">Salon:</span>
                      <span>{selectedSalon.name}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold">Date:</span>
                      <span>{selectedDate}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold">Time Slot:</span>
                      <span>{selectedSlot.time}</span>
                    </p>
                    <p className="flex justify-between text-xl font-bold mt-4 pt-2 border-t">
                      <span>Total:</span>
                      <span>${selectedSalon.price}</span>
                    </p>
                  </div>

                  <button
                    onClick={handlePay}
                    disabled={paymentProcessing}
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition hover:bg-green-700 disabled:bg-gray-400"
                  >
                    {paymentProcessing ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5" /> Pay ${selectedSalon.price}
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mx-auto w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4"
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </motion.svg>
                  </motion.div>
                  <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
                  <p className="mt-2 text-gray-600">Your appointment is confirmed.</p>
                  <button
                    onClick={resetState}
                    className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
                  >
                    Go back to Dashboard
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}