import icon from "../images/icon-success.svg";

export default function Success({ setShowSuccess }) {
  function dismiss() {
    setShowSuccess(null);
  }

  return (
    <main className="grid gap-[1.4375rem] py-[9.25rem] px-6 text-[#242742 bg-white lg:h-[32.5rem] lg:w-[31.5rem] lg:rounded-[2.125rem] lg:px-16 lg:py-12 lg:gap-0">
      <img src={icon} alt="Success Icon" />
      <h1 className="font-bold text-4xl tracking-wider mt-[1.125rem] lg:text-[3.5rem] lg:tracking-normal lg:leading-[3.5rem] lg:mt-[0.75rem]">
        Thanks for <br /> subscribing!
      </h1>
      <p className="lg:translate-y-[-0.125rem]">
        A confirmation email has been sent to{" "}
        <span className="font-bold">ash@loremcompany.com</span>. Please open it
        and click the button inside to confirm your subscription.
      </p>
      <button
        className="bg-[#242742] text-white font-bold mt-60 pt-[1.0625rem] pb-4 rounded-lg hover:bg-[#ff6257] hover:shadow-lg lg:mt-0 lg:pt-0 lg:pb-0 lg:translate-y-3 lg:h-14"
        onClick={dismiss}
      >
        Dismiss message
      </button>
    </main>
  );
}