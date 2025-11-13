const PricingTable = () => {
  const plans = [
    {
      name: "Basic",
      price: "₦5,000",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "10 GB Storage",
        "5 Users Included",
        "Basic Support",
        "Email Assistance",
        "Standard Features",
        "Monthly Reports"
      ],
      cta: "Get Started",
      popular: false,
      color: "green"
    },
    {
      name: "Pro",
      price: "₦15,000",
      period: "per month",
      description: "Our most popular plan for growing businesses",
      features: [
        "50 GB Storage",
        "15 Users Included",
        "Priority Support",
        "Phone & Email Support",
        "Advanced Features",
        "Weekly Reports",
        "API Access",
        "Custom Integrations"
      ],
      cta: "Try Free for 14 Days",
      popular: true,
      color: "emerald"
    },
    {
      name: "Enterprise",
      price: "₦50,000",
      period: "per month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited Storage",
        "Unlimited Users",
        "24/7 Premium Support",
        "Dedicated Account Manager",
        "All Advanced Features",
        "Real-time Analytics",
        "Custom Development",
        "SLA Guarantee",
        "Training Sessions"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            pricing table your business. 
            <span className="font-semibold"> Start with a 14-day free trial.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`w-full max-w-md flex-1 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'lg:scale-105 ring-4 ring-emerald-500 ring-opacity-50 relative' 
                  : 'hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4">
                  <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                     MOST POPULAR
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className={`p-8 text-center ${
                plan.popular 
                  ? 'bg-gradient-to-r from-emerald-600 to-green-700' 
                  : 'bg-gradient-to-r from-green-600 to-emerald-700'
              }`}>
                <h3 className={`text-2xl font-bold ${
                  plan.popular ? 'text-white' : 'text-green-50'
                }`}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className={`text-5xl font-extrabold ${
                    plan.popular ? 'text-white' : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 text-xl ${
                    plan.popular ? 'text-emerald-100' : 'text-green-100'
                  }`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-3 text-sm ${
                  plan.popular ? 'text-emerald-100' : 'text-green-100'
                }`}>
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg 
                        className={`h-6 w-6 flex-shrink-0 ${
                          plan.popular ? 'text-emerald-500' : 'text-green-500'
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-700 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                {/* Additional Info */}
                <p className="text-center text-gray-500 text-sm mt-4">
                  No credit card required • Cancel anytime
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              💫 All plans include:
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Secure SSL Certificate
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                99.9% Uptime Guarantee
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Daily Backups
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;