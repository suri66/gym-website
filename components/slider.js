import NextImage from 'next/image';

const Slider = () => {
  return (
    <div id="slider">
      <figure>
        {/* <NextImage src="/img/slider/6.webp" alt="Golden Fitness Health Club" /> */}
        <NextImage src="/img/slider/1.jpg" alt="Golden Fitness Health Club" />
        <NextImage src="/img/slider/2.jpg" alt="Golden Fitness Health Club" />
        <NextImage src="/img/slider/4.jpeg" alt="Golden Fitness Health Club" />
        <NextImage src="/img/slider/5.jpg" alt="Golden Fitness Health Club" />
      </figure>
    </div>
  );
};

export default Slider;
