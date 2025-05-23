import React, { useState } from 'react';
import './FAQPage.css';

const faqs = [
  {
    question: '🎨 What kind of art do you like to create?',
    answer: (
      <>
        I love drawing <strong>portraits</strong> and <strong>digital art</strong>! 
        Mostly, I use pencils for quick sketches ✏️ and apps like Procreate for colorful digital drawings 🎨.
      </>
    ),
  },
  {
    question: '🖌️ Can I ask you to make a special drawing just for me?',
    answer: (
      <>
        Yes, absolutely! 😊 Just tell me what you want — it could be a favorite character, pet, or anything — 
        and I’ll try my best to bring it to life for you.
      </>
    ),
  },
  {
    question: '📱 Where can I see your art online?',
    answer: (
      <>
        You can follow me on <a href="https://instagram.com/snap_to_sketch" target="_blank" rel="noreferrer" className="faq-link">Instagram @snap_to_sketch</a> 
        and <a href="https://www.youtube.com/@snaptosketch" target="_blank" rel="noreferrer" className="faq-link">YouTube @snaptosketch</a> 
        to see my latest art and tutorials.
      </>
    ),
  },
  {
    question: '🎥 Do you teach how to draw or make art?',
    answer: (
      <>
        Sometimes I share easy-to-follow <strong>drawing tutorials</strong> on YouTube 📺 and do live art sessions on Instagram. 
        It’s a fun way to learn and ask questions!
      </>
    ),
  },
  {
    question: '💰 How much do you charge for your drawings?',
    answer: (
      <>
        Prices depend on how big or detailed the drawing is. Simple sketches are cheaper, 
        while detailed digital paintings cost more. Contact me anytime for a <strong>free quote</strong>!
      </>
    ),
  },
  {
    question: '🧰 What tools do you use to make your art?',
    answer: (
      <>
        I use traditional pencils ✏️ for sketching and digital tools like <strong>Procreate</strong> and <strong>Adobe Photoshop</strong> 
        to create colorful artwork on my tablet.
      </>
    ),
  },
  {
    question: '⏳ How long does it take to finish a drawing?',
    answer: (
      <>
        Usually, it takes 1-2 weeks for simple sketches and up to 3-4 weeks for detailed digital art 🎨. 
        I’ll keep you updated every step of the way!
      </>
    ),
  },
  {
    question: '🔄 Can I ask you to change something in the drawing if I don’t like it?',
    answer: (
      <>
        Yes, you can! I offer <strong>two rounds of revisions</strong> to make sure you’re happy with the final piece. 
        More changes might have a small extra charge.
      </>
    ),
  },
  {
    question: '📦 How will I get the final drawing?',
    answer: (
      <>
        I will send you the artwork as a high-quality digital file via email or a download link. 
        If you want a printed copy, I can arrange that too!
      </>
    ),
  },
  {
    question: '🔒 Will my drawing stay private?',
    answer: (
      <>
        Absolutely! Your artwork is private and will not be shared publicly unless you say it’s okay 👍.
      </>
    ),
  },
  {
    question: '🎁 Can I buy a gift card for your drawings?',
    answer: (
      <>
        Yes! Gift cards are a great present 🎉. Just contact me to get one customized for your friend or family.
      </>
    ),
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">🎉 Frequently Asked Questions 🎉</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
            role="button"
            tabIndex={0}
            onKeyPress={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <p className="faq-footer">
        Still have questions?{' '}
        <a href="/contact" className="faq-contact-link">
          Contact me here →
        </a>
      </p>
    </div>
  );
};

export default FAQPage;
