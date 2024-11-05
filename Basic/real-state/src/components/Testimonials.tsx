import React from 'react';

export const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">People say about us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            content="It proved to be exactly the kind of home we were looking for."
            author="Sarah Johnson"
            role="Home Buyer"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <TestimonialCard
            content="The best decision we made was working with this real estate company."
            author="Michael Chen"
            role="Property Investor"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <TestimonialCard
            content="They helped us find our dream home in less than a month!"
            author="Emily Davis"
            role="First-time Buyer"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ content, author, role, image }: { content: string; author: string; role: string; image: string }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};