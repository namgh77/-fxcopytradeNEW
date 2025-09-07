import React from 'react';
import Link from 'next/link';

const QnAItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="mb-4">
    <h4 className="font-semibold text-lg text-blue-600">Q: {question}</h4>
    <p className="text-gray-600">A: {answer}</p>
  </div>
);

export default function AffiliatePage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Partner with Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Join our affiliate program and earn competitive commissions by referring users to our platform. We succeed when you succeed.</p>
        </div>

        {/* Commission Models Section */}
        <section id="commission-models" className="my-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Commission Models</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Model 1: Profit Sharing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Profit Sharing Commission</h3>
              <p className="text-gray-600 mb-4">Earn a percentage of the fees we collect. Ideal for continuous, performance-based income.</p>
              <div className="text-4xl font-bold my-6 text-gray-800">50% <span className="text-lg font-normal text-gray-600">of Company Fees</span></div>
              <p className="text-sm text-gray-500">Example: A user you refer makes $1,000 profit. Our fee (30%) is $300. Your commission is 50% of that, which is $150.</p>
            </div>

            {/* Model 2: VIP Subscription */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">VIP Subscription Commission</h3>
              <p className="text-gray-600 mb-4">Get a fixed, recurring commission for every user who subscribes to our VIP plan.</p>
              <div className="text-4xl font-bold my-6 text-gray-800">$500 <span className="text-lg font-normal text-gray-600">per month/user</span></div>
              <p className="text-sm text-gray-500">As long as your referred user remains a VIP subscriber, you receive $500 every month.</p>
            </div>
          </div>
        </section>

        {/* Partner Q&A Section */}
        <section id="partner-qa" className="my-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Partner Q&A</h2>
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-inner border border-gray-200">
            <QnAItem 
              question="How are commissions paid out?"
              answer="Commissions are calculated at the end of each month and paid out via USDT within the first 5 business days of the following month."
            />
            <QnAItem 
              question="Where can I track my referrals and earnings?"
              answer="You will have access to a dedicated affiliate section in your user dashboard to monitor all your stats in real-time."
            />
            <QnAItem 
              question="Is there a minimum payout threshold?"
              answer="Yes, the minimum payout threshold is $100. If your commission for a month is below this, it will be rolled over to the next month."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section id="join" className="text-center my-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">Become a partner today and start earning.</p>
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Join Now
          </Link>
        </section>

      </div>
    </div>
  );
}
