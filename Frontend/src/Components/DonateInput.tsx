import { FaCreditCard, FaLock } from "react-icons/fa";
import Buttons from "./Button";
import { useState } from "react";
import api from "../lib/axios";

const amounts = [100, 250, 500, 1000, 2500, 5000];

function DonationInput() {
  const [amount, setAmount] = useState("");
  const [donation_purpose, setPurpose] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [donor_phone_number, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAmountClick = (choice) => {
    setAmount(choice);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post(
        "/donations/initialize-donation",
        {
          donor_name: `${firstName} ${lastName}`,
          donor_phone_number,
          amount,
          donation_purpose,
        },
        {
          withCredentials: true,
        },
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 mt-28">
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <FaCreditCard className="text-5xl text-blue-500" />
        </div>

        <h2 className="text-5xl font-cormorant font-bold">Make a Donation</h2>

        <p className="text-sm text-gray-500 mt-2 font-bold">
          Secured payment with Chapa
        </p>
      </div>

      {/* Donation Form */}
      <form></form>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Amount */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Select Amount</h3>

          <div className="grid grid-cols-3 gap-4">
            {amounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountClick(amount)}
                className="border border-gray-200 rounded-xl py-4 font-semibold
                hover:border-blue-500 hover:bg-blue-50 transition duration-300"
              >
                {amount.toLocaleString()} ETB
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Custom Amount</label>

          <input
            type="number"
            value={aamount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount in ETB"
            className="w-full border border-gray-200 rounded-xl px-4 py-3
            outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Donation Purpose */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Donation Purpose</label>

          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3
            outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select purpose</option>
            <option value="building">Church Building</option>
            <option value="ministry">Meblat Kechalku Mestet Echlalew</option>
            <option value="asrat">Asrat</option>
            <option value="general">General Donation</option>
          </select>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* First Name */}
          <div>
            <label className="block font-semibold mb-2">First Name</label>

            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3
              outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-semibold mb-2">Last Name</label>

            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3
              outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">Phone Number</label>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="+251912345678"
              className="w-full border border-gray-200 rounded-xl px-4 py-3
              outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Payment Button */}
        <div className="flex justify-center">
          <Buttons
            text="Proceed to Payment"
            icon={FaLock}
            className="px-8 py-4"
          />
        </div>

        <p className="text-center text-xs text-gray-400 mt-4 font-bold">
          You will be redirected to Chapa to complete your payment securely.
        </p>
      </div>
    </section>
  );
}

export default DonationInput;
