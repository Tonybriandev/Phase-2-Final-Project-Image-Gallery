import React from 'react'

const services = () => {
  return (
    <div className="bg-white-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">  
            <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
            <p className="text-lg text-gray-800">
              Explore our extensive collection of high-quality images captured
              by talented photographers from around the world. From stunning
              landscapes to captivating portraits, our image gallery offers a
              wide range of subjects to inspire and delight.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Photography Workshops</h2>
            <p className="text-lg text-gray-800">
              Join our photography workshops and enhance your skills under the
              guidance of experienced instructors. Whether you're a beginner
              looking to master the basics or an advanced photographer seeking
              specialized techniques, our workshops cater to photographers of
              all levels.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Community Forums</h2>
            <p className="text-lg text-gray-800">
              Connect with fellow photographers in our community forums. Share
              tips and tricks, discuss photography trends, and seek advice from
              experts. Our forums are a valuable resource for networking,
              learning, and fostering meaningful connections with like-minded
              individuals.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Custom Prints</h2>
            <p className="text-lg text-gray-800">
              Turn your favorite images into works of art with our custom
              printing services. Choose from a variety of printing options,
              including canvas prints, framed prints, and photo books. Whether
              you're decorating your home or creating a personalized gift, our
              custom prints are sure to impress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services