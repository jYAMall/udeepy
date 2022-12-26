import React, { useState } from 'react';

function Works() {
  const [activeTab, setActiveTab] = useState(1);

  function handleTabClick(id) {
    setActiveTab(id);
  }
  return (
    
    <section id='works'>
        <div className='box bg3 flex md:flex w-full justify-center items-center px-8 '>
          <div className="flex md:flex">
            <div className="tabs basis-1/3 ">
            <h1 className="text-[#d2cfdd] w-full font-Bellefair pb-2 text-2xl p-4 mb-5">"As believers in the power of blockchain technology to transform industries and drive innovation, we are committed to helping our clients turn their boldest vision into a reality through the use of this revolutionary technology."</h1>
              <div className='px-2 blue-glassmorphism py-2'>
              <div
                className={`tab ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Financial Services | Fintech
              </div>
              <div
                className={`tab ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
              >
                E-commerce | Retail
              </div>
              <div
                className={`tab ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => handleTabClick(3)}
              >
                Supply Сhain Management
              </div>
              <div
                className={`tab ${activeTab === 4 ? 'active' : ''}`}
                onClick={() => handleTabClick(4)}
              >
                Online Identity | Secure agreements
              </div>
              <div
                className={`tab ${activeTab === 5 ? 'active' : ''}`}
                onClick={() => handleTabClick(5)}
              >
                Government
              </div>
              </div>
            </div>
            <div className="tab-content basis-2/3 ">
              <div className='px-2 blue-glassmorphism py-2'>
              {activeTab === 1 && <div className='text-[#d2cfdd] py-5 px-5 text-justify'>At our company, we specialize in developing innovative fintech blockchain solutions that drive change and drive innovation in the financial industry. Our team of experienced developers has extensive knowledge and expertise in blockchain technology, and we are committed to helping our clients realize the full potential of this transformative technology.<br/><br/>

Our development services for fintech blockchain solutions cover a wide range of areas, including the creation of decentralized financial platforms and products, such as cryptocurrency exchanges, lending platforms, and payment systems. We also offer services for the development of smart contracts, which are self-executing contracts that enable the automation of contract execution and the secure and transparent transfer of assets.<br/><br/>

In addition to these core services, we also offer a range of additional services to help our clients achieve their goals, including consulting, project management, and support. We work closely with our clients to understand their needs and objectives, and we develop customized solutions that meet their unique requirements.<br/><br/>

Overall, our goal is to help our clients leverage the power of blockchain technology to drive innovation and achieve their most ambitious dreams. If you are interested in learning more about our fintech blockchain development services, please don't hesitate to contact us.</div>}
              {activeTab === 2 && <div className='text-[#d2cfdd] py-5 px-5 text-justify'>Our team of experienced developers has a track record of success in creating cutting-edge e-commerce and retail blockchain solutions that drive innovation and increase efficiency. Whether you are looking to create a decentralized marketplace, optimize your supply chain, or implement a secure payment system, we have the skills and expertise to help you achieve your goals.<br/><br/>

In addition to our core development services, we also offer consulting and project management services to ensure that your project is a success. Our team will work closely with you to understand your needs and objectives, and we will develop a customized solution that meets your unique requirements.<br/><br/>

Overall, our goal is to help you leverage the power of blockchain technology to drive innovation and growth in the e-commerce and retail sectors. If you are interested in learning more about our services, please don't hesitate to contact us. We would be happy to discuss your project in more detail and help you determine the best course of action.</div>}
              {activeTab === 3 && <div className='text-[#d2cfdd] py-5 px-5 text-justify'>At our company, we specialize in helping clients leverage the power of blockchain technology to optimize and streamline their supply chains. Our team of experienced developers has a track record of success in creating innovative solutions that drive efficiency and transparency.<br/><br/>

Our development services for supply chain management blockchain solutions include the creation of decentralized systems for tracking and traceability, enabling real-time visibility and monitoring of goods and materials as they move through the supply chain. We also offer services for the development of smart contracts, which can automate the process of contract execution and facilitate the secure and transparent transfer of assets.<br/><br/>

In addition to these core services, we also offer consulting and project management support to ensure that your project is a success. We will work closely with you to understand your specific needs and objectives, and we will develop a customized solution that meets your unique requirements.<br/><br/>

Overall, our goal is to help you leverage the power of blockchain technology to optimize and streamline your supply chain, driving efficiency and increasing the competitiveness of your business. If you are interested in learning more about our supply chain management blockchain development services, please don't hesitate to contact us. We would be happy to discuss your project in more detail and help you determine the best course of action.</div>}
              {activeTab === 4 && <div className='text-[#d2cfdd] py-5 px-5 text-justify'>At our company, we specialize in helping clients leverage the power of blockchain technology to enable secure and verifiable online identities, as well as automate the execution of secure agreements. Our team of experienced developers has a track record of success in creating innovative solutions that drive efficiency and security.<br/><br/>

Our development services for online identity and secure agreements blockchain solutions include the creation of decentralized systems for verifying and validating identities, enabling secure and verifiable online interactions. We also offer services for the development of smart contracts, which can automate the process of contract execution and facilitate the secure and transparent transfer of assets.<br/><br/>

In addition to these core services, we also offer consulting and project management support to ensure that your project is a success. We will work closely with you to understand your specific needs and objectives, and we will develop a customized solution that meets your unique requirements.<br/><br/>

Overall, our goal is to help you leverage the power of blockchain technology to enable secure and verifiable online identities and automate the execution of secure agreements, driving efficiency and increasing the security of your business. If you are interested in learning more about our online identity and secure agreements blockchain development services, please don't hesitate to contact us. We would be happy to discuss your project in more detail and help you determine the best course of action.</div>}
              {activeTab === 5 && <div className='text-[#d2cfdd] py-5 px-5 text-justify'>At our company, we specialize in helping government clients leverage the power of blockchain technology to optimize and streamline their operations. Our team of experienced developers has a track record of success in creating innovative solutions that drive efficiency, transparency, and security.<br/><br/>

Our development services for government blockchain solutions include the creation of decentralized systems for voting and public record-keeping, enabling secure and transparent processes. We also offer services for the development of smart contracts, which can automate the execution of government processes and services, improving efficiency and reducing the risk of errors.<br/><br/>

In addition to these core services, we also offer consulting and project management support to ensure that your project is a success. We will work closely with you to understand your specific needs and objectives, and we will develop a customized solution that meets your unique requirements.<br/><br/>

Overall, our goal is to help you leverage the power of blockchain technology to optimize and streamline your government operations, driving efficiency, transparency, and security. If you are interested in learning more about our government blockchain development services, please don't hesitate to contact us. We would be happy to discuss your project in more detail and help you determine the best course of action.</div>}
              </div>
            </div>
          </div>
    </div>
    </section>
  )
}

export default Works