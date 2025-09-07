import React from 'react';

const QnAItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="font-semibold text-xl text-blue-600 mb-3">{question}</h3>
    <p className="text-gray-700">{answer}</p>
  </div>
);

export default function QAPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Have questions? We have answers.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <QnAItem 
            question="What exactly is this service?"
            answer="Our service provides a sophisticated UI that mirrors the functionality of an AI trading bot. You can set parameters and see how it would operate, but please note it does not perform actual trades on your account. It is a UI demonstration."
          />
          <QnAItem 
            question="What is the difference between the two user options?"
            answer="The 'Profit Sharing' model is performance-based, where you share 30% of the profits with us. The 'VIP Subscription' is a fixed $1,000 monthly fee, which is only charged if your monthly profit exceeds 10%."
          />
          <QnAItem 
            question="How does the 'Post-Payment' for the VIP subscription work?"
            answer="We review the trading performance at the end of your monthly cycle. If the profit is 10% or less, you will not be charged the $1,000 fee for that month. It’s our performance guarantee."
          />
          <QnAItem 
            question="Is my MT4/5 account information secure?"
            answer="Yes. We require your account details to simulate the connection within the UI. All data is encrypted and handled with strict security protocols. Since we do not perform live trades, your capital is never at risk from our service."
          />
          <QnAItem 
            question="How do I get started?"
            answer="Simply register for an account, go to your dashboard to enter your MT4/5 details, choose your preferred user plan, and you can start using the interface immediately."
          />
        </div>
      </div>
    </div>
  );
}
