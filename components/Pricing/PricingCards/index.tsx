import React from 'react'
import PricingCard from './PricingCard'
const PricingCards = () => {
    const PricingPlans = [
        {
            heading: "Standard",
            price: "₹10000",
            features: [{
                desc: "1 Production Env (S2)"
            },
            {
                desc: "1 Staging Env(S0)",
            },
            {
                desc: "1 Dev Env(Shared)"
            },
            {
                desc: "Unlimited API calls",
            },
            {
                desc: "Upto 10 users"
            }
            ]
        },
        {
            heading: "Business Plus",
            price: "₹45000",
            color: "text-blue-300",
            features: [{
                desc: "1 Production Env(L1)"
            },
            {
                desc: "1 Staging Env(S0)"
            },
            {
                desc: "1 Dev Env(Shared)"
            },
            {
                desc: "Unlimited API calls",
            },
            {
                desc: "Upto 25 users"
            }
            ]
        },
        {
            heading: "Enterprise",
            price: "Contact sales for pricing",
            isMontly: true,
            features: [{
                desc: "1 Production(Custom)",
            },
            {
                desc: "1 Staging(Custom)"
            },
            {
                desc: "Custom Environments"
            },
            {
                desc: "Unlimited API calls"
            },
            {
                desc: "Unlimited Users"
            }]
        }]
    return (
        <>
            {PricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
            ))}
        </>
    )
}

export default PricingCards
