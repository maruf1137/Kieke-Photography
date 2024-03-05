import React from "react";

const Contact = () => {
  return (
    <div className="contact relative">
      <div className="hero-wrapper max-w-7xl mx-auto px-2 sm:px-3 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
          <div className="form-wrapper lg:col-span-7">
            <h2 className="heading mb-6 text-center lg:text-left">
              What Our Clients Say
            </h2>
            <p className="text mb-6 text-center lg:text-left">
              This photography website is a true gem for anyone who appreciates
              artistry and storytelling through the lens. The images are
              awe-inspiring, and the website provides an engaging and immersive
              experience. With a few minor enhancements in user-friendliness and
              performance, it could become an even more exceptional platform for
              showcasing photography talent.
            </p>

            <form action="#" className="contact__form">
              <div className="input-box flex flex-col gap-3 mb-5">
                <label htmlFor="name" className="text-[#333]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=""
                  className="px-4 py-2 rounded-md border border-[#333] w-full text-[#333]"
                />
              </div>
              <div className="input-box flex flex-col gap-3 mb-5">
                <label htmlFor="email" className="text-[#333]">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder=""
                  className="px-4 py-2 rounded-md border border-[#333] w-full text-[#333]"
                />
              </div>
              <div className="input-box flex flex-col gap-3">
                <label htmlFor="message" className="text-[#333]">
                  Message
                </label>
                {/* <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder=""
                  className="px-4 py-2 rounded-md border border-[#333] w-full text-[#333]"
                /> */}
                <textarea
                  name="message"
                  id="message"
                  placeholder=""
                  className="px-4 py-2 rounded-md border border-[#333] w-full text-[#333] h-40"></textarea>
              </div>
            </form>
          </div>
          <div className="info-box py-10 px-7 lg:col-span-5 bg-[#8a47f62a] rounded-2xl">
            <p className="text-2xl lg:text-4xl !font-semibold mb-5">
              Get In Touch!
            </p>
            <p className="text mb-8">
              We love to hear from you.Our friendly Team is always here to chat.
            </p>

            <ul className="list flex flex-col gap-10">
              <li className="item flex items-center gap-3">
                <div className="icon-box h-[51px] w-[51px] rounded-full bg-[#8A47F6] flex items-center justify-center">
                  <svg className="icon !fill-white">
                    <use xlinkHref="/icons.svg#icon-map-pin"></use>
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-semibold">Location:</p>
                  <p className="text-base">199 Nueces ST,Austin,TX 78701</p>
                </div>
              </li>
              <li className="item">
                <a
                  href="tel:+1(456)666-4077"
                  className="flex items-center gap-3">
                  <div className="icon-box h-[51px] w-[51px] rounded-full bg-[#8A47F6] flex items-center justify-center">
                    <svg className="icon !fill-white">
                      <use xlinkHref="/icons.svg#icon-phone-call"></use>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Phone:</p>
                    <p className="text-base">+1(456)666-4077</p>
                  </div>
                </a>
              </li>
              <li className="item">
                <a
                  href="mailto:support@free.com"
                  className="flex items-center gap-3">
                  <div className="icon-box h-[51px] w-[51px] rounded-full bg-[#8A47F6] flex items-center justify-center">
                    <svg className="icon !fill-white">
                      <use xlinkHref="/icons.svg#icon-map-pin"></use>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Email:</p>
                    <p className="text-base">support@free.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src="/images/circle-2.png" alt="" className="circle circle-2" />
    </div>
  );
};

export default Contact;
