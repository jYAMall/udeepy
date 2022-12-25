import React, { useState } from 'react';

function Works() {
  const [activeTab, setActiveTab] = useState(1);

  function handleTabClick(id) {
    setActiveTab(id);
  }
  return (
    
    <section id='works'>
        <div className='box bg3 w-full justify-center items-center px-8'>
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
              {activeTab === 1 && <div className='text-[#d2cfdd] py-2 px-2'>У нашій компанії ми спеціалізуємося на розробці інноваційних фінтех-блокчейн-рішень, які стимулюють зміни та стимулюють інновації у фінансовій галузі. Наша команда досвідчених розробників володіє великими знаннями та досвідом у сфері технології блокчейн, і ми прагнемо допомогти нашим клієнтам реалізувати весь потенціал цієї трансформаційної технології.

Наші послуги з розробки фінтех-блокчейн-рішень охоплюють широкий спектр сфер, включаючи створення децентралізованих фінансових платформ і продуктів, таких як біржі криптовалют, платформи кредитування та платіжні системи. Ми також пропонуємо послуги з розробки смарт-контрактів, які є самовиконуваними контрактами, які дозволяють автоматизувати виконання контрактів і безпечну та прозору передачу активів.

Окрім цих основних послуг, ми також пропонуємо низку додаткових послуг, щоб допомогти нашим клієнтам досягти їхніх цілей, включаючи консультації, управління проектами та підтримку. Ми тісно співпрацюємо з нашими клієнтами, щоб зрозуміти їхні потреби та цілі, і ми розробляємо індивідуальні рішення, які відповідають їхнім унікальним вимогам.

Загалом наша мета полягає в тому, щоб допомогти нашим клієнтам використати потужність технології блокчейн для стимулювання інновацій і досягнення їхніх найамбітніших мрій. Якщо ви зацікавлені в отриманні додаткової інформації про наші послуги з розробки фінтех блокчейну, будь ласка, не соромтеся зв’язатися з нами.





</div>}
              {activeTab === 2 && <div className='text-[#d2cfdd] py-2 px-2'>Our team of experienced developers has a track record of success in creating cutting-edge e-commerce and retail blockchain solutions that drive innovation and increase efficiency. Whether you are looking to create a decentralized marketplace, optimize your supply chain, or implement a secure payment system, we have the skills and expertise to help you achieve your goals.

In addition to our core development services, we also offer consulting and project management services to ensure that your project is a success. Our team will work closely with you to understand your needs and objectives, and we will develop a customized solution that meets your unique requirements.

Overall, our goal is to help you leverage the power of blockchain technology to drive innovation and growth in the e-commerce and retail sectors. If you are interested in learning more about our services, please don't hesitate to contact us. We would be happy to discuss your project in more detail and help you determine the best course of action.</div>}
              {activeTab === 3 && <div className='text-[#d2cfdd] py-2 px-2'>Наші послуги з розробки блокчейн-рішень для управління ланцюгами поставок охоплюють широкий спектр сфер, включаючи створення децентралізованих систем управління ланцюгами поставок, систем відстеження товарів і матеріалів і платіжних систем. Ми також пропонуємо послуги з розробки смарт-контрактів, які є самовиконуваними контрактами, які дозволяють автоматизувати виконання контрактів і безпечну та прозору передачу активів.</div>}
              {activeTab === 4 && <div className='text-[#d2cfdd] py-2 px-2'>Content for tab 4</div>}
              {activeTab === 5 && <div className='text-[#d2cfdd] py-2 px-2'>Content for tab 5</div>}
              </div>
            </div>
          </div>
    </div>
    </section>
  )
}

export default Works