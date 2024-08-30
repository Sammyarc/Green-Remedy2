// eslint-disable-next-line no-unused-vars
import React from 'react'
import Package from '../../assets/Icons/package_2.svg';
import Currency from '../../assets/Icons/currency_exchange.svg';
import Support from '../../assets/Icons/support_agent.svg';
import Wallet from '../../assets/Icons/account_balance_wallet.svg';

const FeatureItems = [
    {
        id: 1,
        icon: Package,
        heading: "Free Shipping",
        paragraph: "Free shipping for order above ₦10,000",
    }, {
        id: 2,
        icon: Currency,
        heading: "Money Guarantee",
        paragraph: "Within 30 days for an exchange",
    }, {
        id: 3,
        icon: Support,
        heading: "Online Support",
        paragraph: "24 hours a day, 7 days a week",
    }, {
        id: 4,
        icon: Wallet,
        heading: "Flexible Payment",
        paragraph: "Pay with multiple credits",
    }
]

const Productsfeature = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 space-y-[2vw] gap-[2.5vw] md:space-x-[4vw] md:space-y-[0] bg-lightGreen p-[7vw] mt-[10vw]">
    {FeatureItems.map((feature) => (
      <div key={feature.id}>
        <img src={feature.icon} alt={feature.heading} className="w-[9vw] h-[9vw] md:w-[3vw] md:h-[3vw]" />
        <h3 className="mt-[2vw] font-PublicSans font-bold text-lightTextColor text-[4vw] md:text-[1.5vw]">{feature.heading}</h3>
        <p className="text-lightTextColor mt-[0.5vw] font-PublicSans text-[3vw] md:text-[1vw]">{feature.paragraph}</p>
      </div>
    ))}
  </div>
  )
}

export default Productsfeature