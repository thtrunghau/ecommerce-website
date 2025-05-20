import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg')" }}
    >
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-4xl font-bold">Contact Us</h1>
        <p className="mb-4 text-center text-gray-500">
          We would love to hear from you! Please fill out the form below and we
          will get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2 ring-blue-500 focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2 ring-blue-500 focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label
              htmlFor="Mesage"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2 ring-blue-500 focus:outline-none focus:ring-2"
            />
          </div>
          <button className="w-full rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold mb-3">Contact Information</h2>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-500" />
              <span className="text-gray-500">+83 3209 0313</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" />
              <span className="text-gray-500">eshop@gmail.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaMapMarkedAlt className="text-blue-500" />
              <span className="text-gray-500">21 Ngo To Thanh, Distric 1, HCM City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
