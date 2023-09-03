/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import "./privacy.css";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy-bg py-[60px] md:py-[120px] min-h-screen">
      <div className="mx-auto max-w-screen-xl ">
        <h1 className="section-title_gradient text-capitalize lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold leading-108% text-center mb-10 uppercase">
          Privacy and Policy
        </h1>
        <div className="py-10  leading-8 text-edge-cap font-thin">
          <h2 className=" text-[22px] md:text-[24px] text-white font-bold mb-3">
            Introduction
          </h2>
          <p className="text-lg md:text-[19px] text-white leading-8">
            This Privacy Policy outlines our protocols and processes concerning
            the collection, utilization, and disclosure of your information as
            you utilize our services. It also elucidates your privacy rights and
            the legal safeguards in place.
          </p>
          <div className="mt-5">
            <h2 className=" text-[22px] md:text-[24px] text-white font-bold mb-3">
              Acceptance of Terms
            </h2>
            <p className="text-lg md:text-[19px] text-white leading-8">
              By utilizing our services, you consent to the collection and
              utilization of your information in compliance with this Privacy
              Policy.
            </p>
          </div>
        </div>

        <h1 className=" text-2xl md:text-4xl mt-5 pb-5 font-bold text-white">
          Interpretation and Definitions
        </h1>

        <div className="my-5  leading-8 text-edge-cap font-thin">
          <h2 className=" text-[22px] md:text-[24px] text-white font-bold mb-3 pt-2">
            Interpretation
          </h2>
          <p className="text-lg md:text-[19px] text-white leading-8">
            Words with capitalized initial letters hold specific meanings as
            defined under the following provisions. These definitions remain
            consistent regardless of their appearance in singular or plural
            form.
          </p>
          <h2 className=" text-[22px] md:text-[24px] text-white font-bold mb-3 mt-5">
            Definition
          </h2>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Account : </span> Words with
            capitalized initial letters hold specific meanings as defined under
            the following provisions. These definitions remain consistent
            regardless of their appearance in singular or plural form.
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Country : </span> Pertaining to
            the United Kingdom and the United States.
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <strong className="font-extrabold ">Device : </strong> Any device
            capable of accessing our services, such as computers, mobile phones,
            or digital tablets.
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Personal Data : </span>{" "}
            Information pertaining to identified or identifiable individuals.
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Service : </span> Refers to our
            website.
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className=" font-extrabold ">Service Provider : </span>{" "}
            Individuals or entities, whether natural or legal, who handle data
            on behalf of our company. This could include third-party individuals
            or companies that assist with service provision, analysis, or
            related tasks.
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Usage Data : </span>
            Automatically collected data generated through service usage or
            derived from the service infrastructure itself.
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Website : </span>
            Pertaining to "Comingsite," accessible through{" "}
            <a href="https://Comingsite.com/">Comingsite.com</a>.
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">You : </span>
            Refers to individuals accessing or using the service, or the
            company/legal entity on whose behalf the individual is accessing or
            using the service.
          </p>
        </div>

        <div className="my-5 leading-8 text-edge-cap font-thin">
          <h1 className="mt-5 text-2xl md:text-4xl font-bold text-white pt-10">
            Collecting and Using Your Personal Data
          </h1>

          <h2 className=" text-[22px] md:text-[24px] text-white font-bold mb-1 mt-10 pb-5">
            Types of Data Collected
          </h2>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Personal Data : </span>
            While utilizing our service, you might be requested to provide
            personally identifiable information to facilitate communication or
            identification. This includes but is not limited to:{" "}
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Usage Data : </span>
            Automatically collected data while using the service.{" "}
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Usage Data : </span>
            This is collected automatically while using the service. It
            encompasses information like your Device's IP address, browser type,
            page visits, time and date of visits, duration of page visits, and
            unique device identifiers.
          </p>
        </div>

        <div className="my-5 pt-10 ">
          <h1 className="text-2xl md:text-[24px] font-bold text-white mb-8">
            Cookies and Tracking Technologies
          </h1>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            We use Cookies and similar tracking technologies to enhance our
            services. These include beacons, tags, and scripts for improved
            analysis and service enhancement. Cookies: Files placed on your
            device for tracking service activity. You can control Cookie
            acceptance through your browser settings, though this might impact
            certain service functionalities.
          </p>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            <span className="font-extrabold ">Web Beacons : </span>
            Electronic files within sections of the service, aiding in tracking
            users and other related statistics.
          </p>
        </div>

        <div className="my-5 pt-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Use of Your Personal Data
          </h1>
          <h2 className=" text-[22px] md:text-[24px] text-white font-bold mb-5">
            We may utilize your personal data for:
          </h2>
          <ul className="text-white list-disc ml-10">
            <li className="mb-1">Maintaining and improving our service.</li>
            <li className="mb-1">Managing your account.</li>
            <li className="mb-1">Fulfilling contractual obligations.</li>
            <li className="mb-1">
              Contacting you for updates or service-related matters.
            </li>
            <li className="mb-1">
              Providing news, offers, or information similar to your past
              interactions with us.
            </li>
            <li className="mb-1">Addressing your requests.</li>
            <li className="mb-1">Facilitating business transfers.</li>
            <li className="mb-1">
              Other purposes such as data analysis and improving our service.
            </li>
          </ul>
          <h2 className=" text-[22px] md:text-[24px] text-white font-bold mb-3 mt-10">
            Disclosure of Your Personal Data
          </h2>
          <p className="text-lg md:text-[19px] text-white mb-5 leading-8">
            We may share your information with service providers, business
            partners, affiliates, or other users as required for service
            provision, transfers, or legal obligations.
          </p>
          <h2 className="text-xl text-white font-bold mb-3">
            Retention and Transfer of Your Personal Data
          </h2>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            We will retain your personal data only as long as necessary and will
            take necessary steps to secure your data during transfer.
          </p>
          <h2 className="text-xl text-white font-bold mb-3 mt-5">
            Deletion of Personal Data
          </h2>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            You have the right to request the deletion of your personal data.
          </p>
          <h2 className="text-xl text-white font-bold mb-3 mt-5">
            Security of Your Personal Data
          </h2>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            While we employ security measures, no online method can guarantee
            absolute security.
          </p>
          <h2 className="text-xl text-white font-bold mb-3 mt-5">
            Children's Privacy
          </h2>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            Our service does not cater to users under 13, and we do not
            knowingly collect their information.
          </p>
          <h2 className="text-xl text-white font-bold mb-3 mt-5">
            Links to Other Websites
          </h2>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            We are not responsible for third-party sites linked from our
            service.
          </p>
          <h2 className="text-xl text-white font-bold mb-3 mt-5">
            Changes to this Privacy Policy
          </h2>
          <p className="text-lg md:text-[19px] text-white mb-3 leading-8">
            We may update this policy and will notify you of any changes. It is
            advised to review this periodically for any updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
