import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import apiRequest from "../../../utils/apiRequest";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import LoaderStyleOne from "../Helpers/Loaders/LoaderStyleOne";
import languageModel from "../../../utils/languageModel";

export default function Contact({ datas }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  const sendHandler = () => {
    setLoading(true);
    apiRequest
      .contact({
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((res) => {
        setLoading(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        toast.success(res && res.data.notification);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="page-title">
        <PageTitle
          title={langCntnt && langCntnt.Contact}
          breadcrumb={[
            { name: langCntnt && langCntnt.home, path: "/" },
            { name: langCntnt && langCntnt.Contact, path: "/contact" },
          ]}
        />
      </div>
      <div className="contact-wrapper w-full bg-white py-10">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
            <div className="lg:w-1/2 w-full">
            We value your feedback, inquiries, and concerns at SpareBees.com. Our dedicated customer support team is here to assist you and provide the information you need. We encourage you to reach out to us through any of the following channels:
Customer Support:
Our customer support team is available to address your questions, concerns, and inquiries. You can contact us via email at support@sparebees.com or by using the contact form on our website. We strive to respond to all inquiries promptly and provide you with the assistance you require.
Live Chat:
For real-time support, we offer a live chat feature on our website. Our knowledgeable representatives will be available during business hours to help you with any queries you may have. Look for the live chat icon on our website to connect with a member of our team.
Frequently Asked Questions (FAQs):
We have compiled a comprehensive list of frequently asked questions on our website. Before reaching out to us, we recommend checking our FAQs section to see if your question has already been addressed. This resource may provide you with quick answers to common queries.
Social Media:
Connect with us on social media platforms such as Facebook, Twitter, and Instagram. Our social media channels are not only a great way to stay updated on the latest products and promotions but also provide you with an additional avenue to reach out to us. Feel free to send us a direct message, comment, or mention on any of our social media platforms.
Mailing Address:
If you prefer to reach us by mail, you can send correspondence to the following address: SpareBees.com
B- Pay E- Com Retailer pvt ltd
23 48, Canal Bank Rd, CIT Nagar West, CIT Nagar, Chennai, Tamil Nadu 600035
Please note that our mailing address is for correspondence purposes only, and we encourage you to contact us through other channels for a faster response.
We value your input and strive to provide excellent customer service. Your feedback is important to us and helps us improve our services. If you have any suggestions, comments, or concerns, please do not hesitate to contact us. We appreciate your support and look forward to assisting you with your automotive parts needs.
Thank you for choosing SpareBees.com.
Sincerely,
The SpareBees.com Team
              {datas.contact && (
                <div>
                  <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-1">
                    {datas.contact.title}
                  </h1>
                  <p className="text-[15px] text-qgraytwo leading-[30px] mb-5">
                    {datas.contact.description}
                  </p>

                  <div className="xl:flex xl:space-x-[30px] mb-[30px]">
                    <div className="xl:w-1/2 w-full rounded  h-[196px] flex flex-col item justify-center bg-white border border-qgreen p-5">
                      <div className="flex justify-center mb-3 ">
                       <span className="primary-text">
                         <svg className="fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                       </span>
                      </div>
                      <p className="text-[22px] text-black leading-[30px] text-center font-semibold capitalize">
                        {langCntnt && langCntnt.phone}
                      </p>
                      <p className="text-[15px] text-black leading-[30px] text-center">
                        {datas.contact.phone}
                      </p>
                    </div>
                    <div className="xl:w-1/2 w-full rounded h-[196px] flex flex-col item justify-center bg-white border border-qgreen p-5">
                      <div className="flex justify-center mb-3 ">
                       <span className="primary-text">
                         <svg className="fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg>
                       </span>
                      </div>
                      <p className="text-[22px] text-black leading-[30px] text-center font-semibold">
                        {langCntnt && langCntnt.Email}
                      </p>
                      <p className="text-[15px] text-black leading-[30px] text-center">
                        {datas.contact.email}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-between w-full rounded bg-qgray-border">
                    <div className="flex space-x-5">
                      <span className="primary-text">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"/>
</svg>

                      </span>
                      <div>
                        <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-2">
                          {langCntnt && langCntnt.Address}
                        </h1>
                        <p className="text-[15px] text-qblack leading-[30px]">
                          {datas.contact.address}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-[206px] mt-5">
                      <iframe
                        title="newWork"
                        src={`${datas.contact.map}`}
                        style={{ border: "0", width: "100%", height: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px" }}
              className="flex-1 bg-white rounded sm:p-10 p-3"
            >
              <div className="title flex flex-col items-center">
                <h1 className="text-[34px] font-bold text-qblack">
                  {langCntnt && langCntnt.Get_In_Touch}
                </h1>
                <span className="-mt-5 block">
                  <svg
                    width="354"
                    height="30"
                    viewBox="0 0 354 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                      stroke="#34A853"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="inputs mt-5">
                <div className="mb-4">
                  <InputCom
                    label={langCntnt && langCntnt.Name + "*"}
                    placeholder={langCntnt && langCntnt.Name}
                    name="name"
                    inputClasses="h-[50px]"
                    value={name}
                    inputHandler={(e) => setName(e.target.value)}
                    error={!!(errors && Object.hasOwn(errors, "name"))}
                  />
                  {errors && Object.hasOwn(errors, "name") ? (
                    <span className="text-sm mt-1 text-qred">
                      {errors.name[0]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-4">
                  <InputCom
                    label={langCntnt && langCntnt.Email_Address + "*"}
                    placeholder={langCntnt && langCntnt.Email}
                    name="email"
                    inputClasses="h-[50px]"
                    value={email}
                    error={!!(errors && Object.hasOwn(errors, "email"))}
                    inputHandler={(e) => setEmail(e.target.value)}
                  />
                  {errors && Object.hasOwn(errors, "email") ? (
                    <span className="text-sm mt-1 text-qred">
                      {errors.email[0]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-4">
                  <InputCom
                    label={langCntnt && langCntnt.Subject}
                    placeholder={langCntnt && langCntnt.Subject}
                    name="subject"
                    inputClasses="h-[50px]"
                    value={subject}
                    error={!!(errors && Object.hasOwn(errors, "subject"))}
                    inputHandler={(e) => setSubject(e.target.value)}
                  />
                  {errors && Object.hasOwn(errors, "subject") ? (
                    <span className="text-sm mt-1 text-qred">
                      {errors.subject[0]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-5">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    {langCntnt && langCntnt.Message}*
                  </h6>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={langCntnt && langCntnt.Message}
                    className={` w-full h-[105px] focus:ring-0 rounded focus:outline-none p-6 border placeholder:text-sm ${
                      !!(errors && Object.hasOwn(errors, "message"))
                        ? "border-qred"
                        : "border-[#CBECD9]"
                    }`}
                  ></textarea>
                  {errors && Object.hasOwn(errors, "message") ? (
                    <span className="text-sm mt-1 text-qred">
                      {errors.message[0]}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <button
                    disabled={
                      name && email && subject && message ? false : true
                    }
                    onClick={sendHandler}
                    type="button"
                    className="disabled:bg-gray-400 disabled:cursor-not-allowed bg-qblack text-white text-sm font-semibold w-full h-[50px] flex justify-center items-center rounded"
                  >
                    <span>{langCntnt && langCntnt.Send_Now}</span>
                    {loading && (
                      <span className="w-5" style={{ transform: "scale(0.3)" }}>
                        <LoaderStyleOne />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
