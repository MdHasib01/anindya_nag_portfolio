export default function ContactMe() {
  return (
    <section id="Contact" className=" px-4 mx-auto max-w-[1280px] pt-24 ">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center">
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            <span className="font-bold text-c">Mailing Address:</span>{" "}
            <a
              href="https://www.google.com/maps/search/+Damodar,+Damodor-9210,+Phultala,+Khulna/@22.9488199,89.4486627,14z?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
              className="bg-violet-200 hover:bg-violet-300"
            >
              Damodar, Damodor-9210, Phultala, Khulna, Bangladesh
            </a>
          </p>
          <p className="text-lg">
            <span className="font-bold">Gmail: </span>{" "}
            <a
              href="mailto:anindyanag58@gmail.com"
              className="bg-violet-200 hover:bg-violet-300"
            >
              anindyanag58@gmail.com
            </a>
          </p>
          <p className="text-lg">
            <span className="font-bold">Email: </span>{" "}
            <a
              href="mailto:anindyanag@ieee.org"
              className="bg-violet-200 hover:bg-violet-300"
            >
              anindyanag@ieee.org
            </a>
          </p>

          <p className="text-lg flex gap-1  justify-center">
            <span className="font-bold col-span-1">Phone: </span>{" "}
            <div className="flex flex-col">
              <span>
                <a
                  href="tel:+8801795617168"
                  className="bg-violet-200 hover:bg-violet-300"
                >
                  +8801795617168
                </a>
              </span>
              <span>
                <a
                  href="tel:+8801988965895"
                  className="bg-violet-200 hover:bg-violet-300"
                >
                  +8801988965895
                </a>
              </span>
            </div>
          </p>
        </div>
        <form className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
