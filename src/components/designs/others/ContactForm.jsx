import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  };

  return (
    <>
      <form action="POST" onSubmit={handelSubmit}>
        <input
          className="w-full bg-slate-200 text-gray-900 placeholder:text-gray-400 mb-4 py-3 px-5 rounded-md focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          className="w-full bg-slate-200 text-gray-900 placeholder:text-gray-400 mb-4 py-3 px-5 rounded-md focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          className="w-full bg-slate-200 text-gray-900 placeholder:text-gray-400 mb-4 py-3 px-5 rounded-md focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Phone no"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />

        <textarea
          className="h-[130px] w-full bg-slate-200 text-gray-900 placeholder:text-gray-400 mb-4 py-3 px-5 rounded-md focus:outline-none focus:shadow-outline"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />

        <input
          type="submit"
          value="Send Message"
          className="cursor-pointer text-sm font-medium px-5 py-2 bg-green-500 hover:bg-green-800 text-white rounded-md "
        />
      </form>
    </>
  );
}

export default ContactForm;
