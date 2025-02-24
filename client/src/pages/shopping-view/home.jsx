

// import { useState, useEffect } from 'react';
// import bannerOne from '../../assets/hotgown.jpg';
// import bannerTwo from '../../assets/redhotsari.jpg';
// import bannerThree from '../../assets/panjabi.jpg';

// function ShoppingHome() {
//   const slides = [bannerOne, bannerTwo, bannerThree];
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="relative w-full h-[600px] overflow-hidden">
//         {slides.map((slide, index) => (
//           <img
//             src={slide}
//             key={index}
//             className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ShoppingHome;












import { useState, useEffect } from 'react';
import bannerOne from '../../assets/hotgown.jpg';
import bannerTwo from '../../assets/redhotsari.jpg';
import bannerThree from '../../assets/panjabi.jpg';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

function ShoppingHome() {
  const slides = [bannerOne, bannerTwo, bannerThree];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="flex min-h-screen">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start w-1/2 p-8 bg-gray-100">
        <h1 className="text-4xl font-bold">Discover Chic & Luxury</h1>
        <p className="mt-4 text-lg">Find the latest trends and timeless fashion pieces.</p>
      </div>

      {/* Image Section */}
      <div className="relative w-1/2 h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Navigation Buttons */}
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80" 
          onClick={handlePrevSlide}
        >
          <ChevronLeftIcon className='w-6 h-6' />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80" 
          onClick={handleNextSlide}
        >
          <ChevronRightIcon className='w-6 h-6' />
        </Button>
      </div>
    </div>
  );
}

export default ShoppingHome;
