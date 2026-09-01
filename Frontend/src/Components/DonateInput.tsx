import { FaCreditCard, FaLock } from "react-icons/fa";
import Buttons from "./Button";
import { useState, type FormEvent } from "react";
import api from "../lib/axios";
import { useNavigate } from "react-router-dom";

const amounts = [100, 250, 500, 1000, 2500, 5000];

function DonationInput() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState<string>("");
  const [donation_purpose, setPurpose] = useState("");
  const [donor_firstName, setFirstName] = useState("");
  const [donor_lastName, setLastName] = useState("");
  const [donor_phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAmountClick = (choice: number) => {
    setAmount(String(choice));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post(
        "/donations/initialize-donation",
        {
          donor_firstName,
          donor_lastName,
          donor_phone,
          amount,
          donation_purpose,
        },
        {
          withCredentials: true,
        },
      );
      alert("Redirecting to chapa...");
      const checkoutUrl = response.data.checkout_url;
      window.location.href = checkoutUrl;
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
      <form onSubmit={handleSubmit}>
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
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount in ETB"
              className="w-full border border-gray-200 rounded-xl px-4 py-3
            outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Donation Purpose */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Donation Purpose</label>

            <select
              value={donation_purpose}
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
                value={donor_firstName}
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
                value={donor_lastName}
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
                value={donor_phone}
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
            {/* <Buttons
              text={loading ? "Processing..." : "Proceed to Payment"}
              icon={FaLock}
              className="px-8 py-4"
              type="submit"
              disabled={loading}
            /> */}
            <button
              type="submit"
              className="bg-blue-500 px-6 py-3 rounded-full text-white font-[Manrope] font-semibold hover:bg-[#B58F4D] transition duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed "
            >
              Proceed to payment
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4 font-bold">
            You will be redirected to Chapa to complete your payment securely.
          </p>
        </div>
      </form>
    </section>
  );
}

export default DonationInput;
