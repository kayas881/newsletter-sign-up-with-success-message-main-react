import { useState } from "react";

export default function MailForm({ setShowSuccess }) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  function submitForm(e) {
    e.preventDefault();

    const mailRegEx = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;

    setError(!mailRegEx.test(email));

    setShowSuccess(mailRegEx.test(email));
  }

  function handleOnChange(e) {
    setEmail(e.target.value);
  }

  return (
    <form
      onSubmit={submitForm}
      className="grid gap-2 mt-7 lg:translate-y-[-0.4375rem]"
      action="#"
      noValidate
    >
      <div className="flex justify-between">
        <label
          className="text-[0.6875rem] font-bold tracking-wider"
          htmlFor="mailForm"
        >
          Email address
        </label>
        {error && (
          <span className="text-[0.6875rem] font-bold tracking-wider text-[#ff6257] lg:translate-x-[-1.25rem]">
            Valid email required
          </span>
        )}
      </div>
      <input
        className={`border ${
          error ? "border-[#ff6257]" : "border-[#9294a0]"
        } rounded-lg py-[0.9375rem] pl-6 placeholder:text-[0.9375rem] placeholder:tracking-wide ${
          error && "bg-[#ff62572c] text-[#ff6257]"
        } translate-y-[-0.375rem] lg:w-[23.4375rem] lg:py-3`}
        type="email"
        name="mailForm"
        id="mailForm"
        placeholder="email@company.com"
        onChange={handleOnChange}
      />
      <input
        className="bg-[#242742] text-white font-bold mt-4 rounded-lg pt-[1.0625rem] pb-4 hover:bg-[#ff6257] hover:cursor-pointer translate-y-[-0.375rem] lg:w-[23.4375rem] lg:py-3"
        type="submit"
        value="Subscribe to monthly newsletter"
      />
    </form>
  );
}
