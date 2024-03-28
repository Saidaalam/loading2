const Form = () => {
  return (
    <div className="grid bg-base-200 mt-8 rounded-xl max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
        </div>
        <img src="images/doodle.png" alt="" className="mt-6 h-58" />
      </div>
      <form noValidate className="space-y-6 mt-14">
        <div>
          <label htmlFor="name" className="text-lg">Full name</label>
          <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
        </div>
        <div>
          <label htmlFor="email" className="text-lg">Email</label>
          <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
        </div>
        <div>
          <label htmlFor="message" className="text-lg">Message</label>
          <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#23BE0A] text-white">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
