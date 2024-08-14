import {useState} from 'react';
import {FaChevronDown} from 'react-icons/fa';

const faqs = [
    {
        question: "How do I know which product is right for me?",
        answer: "Choosing the right product depends on your specific health needs. At Green Rem" +
                "edies, we offer detailed descriptions and benefits of each product on our webs" +
                "ite. You can also use our search and filter options to narrow down products ba" +
                "sed on your condition or desired outcome. If you're unsure, we recommend consu" +
                "lting with a healthcare professional before making a decision."
    }, {
        question: "How do I place an order on Green Remedies?",
        answer: "Placing an order on Green Remedies is simple. First, browse our collection and" +
                " select the products you wish to purchase. Add them to your cart, and when you" +
                "'re ready, proceed to checkout. You'll need to provide your shipping informati" +
                "on and select a payment method to complete your order. Once your order is conf" +
                "irmed, you'll receive an email with the order details."
    }, {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for unused and unopened products. If you're no" +
                "t satisfied with your purchase, you can return it within 30 days of receiving " +
                "the order. Please ensure that the product is in its original packaging. Once w" +
                "e receive the returned item, we'll process your refund or exchange. Shipping c" +
                "osts for returns are the responsibility of the customer unless the product was" +
                " damaged or defective."
    }, {
        question: "How can I contact customer support?",
        answer: "Our customer support team is here to help with any questions or concerns you m" +
                "ay have. You can contact us via email at support@greenremedies.com. Additional" +
                "ly, you can reach out to us through the contact form on our website. We aim to" +
                " respond to all inquiries within 24 hours."
    }, {
        question: "How can I track my order?",
        answer: "After placing your order, you'll receive a confirmation email containing a tra" +
                "cking number and a link to track your shipment. You can use this link to monit" +
                "or the status of your order in real-time. If you have an account with us, you " +
                "can also log in to view your order history and track shipments directly from y" +
                "our account dashboard."
    }
];

const AboutFaqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(
            activeIndex === index
                ? null
                : index
        );
    };

    return (
        <div className="px-4 py-8 md:px-[10vw] md:py-[5vw]">
            {/* Header section */}
            <div className="flex flex-col justify-center items-center">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="font-Lora text-[5vw] xs:text-[4vw] sm:text-[3vw] md:text-[2.5vw] text-lightTextColor font-bold">
                    Frequently asked questions
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    className="text-center w-full xs:w-[80vw] sm:w-[60vw] md:w-[50vw] mt-[2vw] text-[3vw] xs:text-[2.5vw] sm:text-[2vw] md:text-[1.2vw] text-lightTextColor">
                    Stay up to date with our recent blog posts, featuring insightful articles on
                    health, wellness, and natural remedies for your daily life.
                </p>
            </div>

            {/* Body section */}

            <div
                className="space-y-4 mt-[5vw] w-[60vw] mx-auto"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400">
                {
                    faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md">
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer"
                                onClick={() => toggleFAQ(index)}>
                                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                                <div
                                    className='w-[2vw] h-[2.4vw] flex justify-center items-center border border-darkGreen'>
                                    <FaChevronDown
                                        className={`transform transition-transform duration-300 text-lg text-textColor ${
                                        activeIndex === index
                                            ? 'rotate-180'
                                            : ''}`}/>
                                </div>

                            </div>
                            {
                                activeIndex === index && (
                                    <div className="p-4 text-gray-600">
                                        {faq.answer}
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AboutFaqs