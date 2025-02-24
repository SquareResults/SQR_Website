import React from 'react';

const CoreValues: React.FC = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity in all of our actions.',
      imageUrl: '/images/integrity.png',
    },
    {
      title: 'Customer Commitment',
      description: 'We develop relationships that make a positive difference in our customers\' lives.',
      imageUrl: '/images/customer_commitment.png',
    },
    {
      title: 'Quality',
      description: 'We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.',
      imageUrl: '/images/quality.png',
    },
    // Add more values as needed
  ];

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-16">Our Core Values</h1>
      <div className="flex flex-wrap justify-center">
        {values.map((value, index) => (
          <div key={index} className="m-4 p-6 border border-gray-300 rounded-lg shadow-lg w-80">
            <img src={value.imageUrl} alt={value.title} className="w-36 h-36 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{value.title}</h2>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;