import React from "react";

import ServiceOffer from "../serviceOffers/serviceOffers";
import Common from "../../Container/Common";
import BlockchainBanner from "../../img/blockchainImg.jpg";

const cardContent = [
  {
    title: "Blockchain Solutions",
    description: `We offer blockchain solutions tailored for various industries, including Accounting and Finance, Healthcare, Retail, Logistics, Trading, and Information Technology, enhancing security, transparency, and efficiency.`,
  },
  {
    title: "Smart Contracts Development",
    description: `Our smart contract development services encompass architecture design, contract development, auditing, and optimization, ensuring secure, efficient, and reliable blockchain-based solutions.`,
  },
  {
    title: "NFT Marketplace Development",
    description: ` We provide comprehensive development services to build complete NFT platforms from scratch, incorporating essential functionalities and creating a visually appealing and user-friendly marketplace.`,
  },
  {
    title: "Blockchain As a Service",
    description: `Our Blockchain as a Service (BaaS) offers rapid technology assessment, quick prototyping, Design Thinking-led evaluations, and trend research, providing a flexible and efficient approach to blockchain integration.`,
  },
  {
    title: "ICO Launch",
    description: `Our ICO packages cover smart contract development, deployment, and maintenance, as well as KYC integration, live chat support, product videos, and additional services to ensure a successful launch.`,
  },
  {
    title: "Smart Contract Audit",
    description: `Our smart contract audit services involve performance validation, gas analysis, automated and manual code review, and vulnerability detection to ensure optimal functionality and security.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Blockchain Development </span> Service
  </div>
);
const text = `Whether you’re a start-up or a Fortune 500 company, our robust and
            safe custom blockchain development solutions have you covered.`;

const OurWorkBlockchain = () => {
  return (
    <>
      <div>
        <Common
          banner={BlockchainBanner}
          name={"Blockchain App Development"}
          description={
            "Tap into the world of blockchain technology with our top-of-the-line blockchain-based decentralized applications (Dapps) on Ethereum."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkBlockchain;
