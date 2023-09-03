/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "./Terms.css";
const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="terms-bg py-[60px] md:py-[120px] min-h-screen">
      <div className="mx-auto max-w-screen-xl">
        <div className="">
          <h1 className="section-title_gradient text-capitalize lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold leading-108% text-center mb-20 uppercase">
            Terms and Conditions
          </h1>
        </div>
        <div>
          <div className="my-7">
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Definitions
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              Throughout these Terms and Conditions, as well as in the Privacy
              Statement and Disclaimer Notice, the terms "Client," "You," and
              "Your" pertain to the individual accessing the website, adhering
              to the Company's terms and conditions. References to "The
              Company," "Ourselves," "We," "Our," and "Us" indicate our Company.
              "Party," "Parties," or "Us" denotes both the Client and ourselves
            </p>
          </div>
          <div className="my-7">
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Offer and Acceptance
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              All references to offer, acceptance, and consideration of payment
              for the purpose of assisting the Client are contingent upon the
              Client's explicit needs and adherence to the prevailing laws of
              the Netherlands.
            </p>
          </div>
          <div className="my-7">
            {" "}
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Cookies Usage
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              By accessing Comingsite, you agree to the use of cookies in
              alignment with Comingsite's Privacy Policy. Cookies are utilized
              on most interactive websites to enhance user experience by
              facilitating the retrieval of user details for each visit.
            </p>
          </div>
          <div className="my-7">
            {" "}
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Intellectual Property License
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              Comingsite and/or its licensors retain the intellectual property
              rights for all material found on Comingsite. This includes all
              reserved intellectual property rights. While you may access
              content on Comingsite for personal use, certain restrictions
              outlined in these terms and conditions must be adhered to.
            </p>
          </div>
          <div className="my-7">
            {" "}
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Linking to Our Content
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              External organizations may link to our home page, publications, or
              other website information as long as the link is not deceptive,
              does not falsely imply sponsorship, and fits within the context of
              the linking party's site.
            </p>
          </div>
          <div className="my-7">
            {" "}
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Hyperlink Approvals
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              Link requests may be considered from various types of
              organizations, including established consumer or business
              information sources, community sites, associations, and others,
              provided they conform to certain standards.
            </p>
          </div>
          <div className="my-7">
            {" "}
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Use of Our Logo and Artwork
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              Using Comingsite's logo or artwork for linking purposes requires a
              trademark license agreement.
            </p>
          </div>
          <div className="my-7">
            {" "}
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Frames Around Webpages
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              Creating frames around our web pages that alter our website's
              visual presentation necessitates prior written permission.
            </p>
          </div>
          <div className="my-7">
            {" "}
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Content Liability
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              We are not liable for content on your website. You agree to
              protect and defend us against claims related to content on your
              site.
            </p>
          </div>
          <div className="my-7">
            {" "}
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Reservation of Rights
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              We retain the right to request removal of any links to our website
              and to amend these terms and conditions and our linking policy.
            </p>
          </div>
          <div className="my-7">
            {" "}
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Removal of Links
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              While we may consider requests to remove offensive links, we are
              not obligated to respond or comply directly.
            </p>
          </div>

          <div className="my-7">
            <h1 className="text-[22px] md:text-[24px] font-bold text-white mb-3">
              Website Information and Disclaimer
            </h1>
            <p className="text-lg md:text-[19px] mb-7  leading-8 text-white">
              We do not ensure the accuracy or completeness of information on
              our website. We are not liable for any loss or damage arising from
              your use of our website.
            </p>
            <h2 className="text-[22px] md:text-[24px] mb-3 text-white font-bold">
              Disclaimer
            </h2>
            <p className="text-lg md:text-[19px] mb-3  leading-8 text-white ">
              To the extent allowed by applicable law, we exclude all
              representations, warranties, and conditions related to our website
              and its usage. This disclaimer does not limit or exclude
              liabilities for fraud, liability not allowed under law, or
              liabilities arising from contracts, torts, or breach of statutory
              duty. As long as the website and its content are offered free of
              charge, we are not liable for any loss or damage incurred during
              usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
