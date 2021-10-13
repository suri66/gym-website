import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Navigation from '../components/navigation';
import About from '../components/about';
import Gallery from '../components/gallery';
import Contact from '../components/contact';
import JsonData from '../data/data.json';
import Slider from '../components/slider';

export async function getStaticProps() {
  return {
    props: {
      landingPageData: JsonData,
    },
  };
}

export default function Home({ landingPageData }) {  
  useEffect(() => {    
    if (process.browser) {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            speed: 1000,
          });
        });
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Golden Fitness Health Club</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6372ff" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Golden Fitness Health Club" />
        <meta
          name="description"
          content="We are Golden Fitness Health Club aka Golden Gym in Ahmedabad, Gujarat. We are providing services for more than 10 years. We provide the best service to our customers. Our biggest aim is to provide satisfaction to our customers, we provide the best price and ensure best results, we include many types of equipment and facilities and many types of health plan and goals. We have more than 10000+ satisfied customers. Must visit our gym branch or book your place online and be part of our Golden Family."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://goldenfitnesshealthclub.vercel.app/"
        />
        <meta property="og:title" content="Golden Fitness Health Club" />
        <meta
          property="og:description"
          content="We are Golden Fitness Health Club aka Golden Gym in Ahmedabad, Gujarat. We are providing services for more than 10 years. We provide the best service to our customers. Our biggest aim is to provide satisfaction to our customers, we provide the best price and ensure best results, we include many types of equipment and facilities and many types of health plan and goals. We have more than 10000+ satisfied customers. Must visit our gym branch or book your place online and be part of our Golden Family."
        />
        <meta property="og:image" content="/img/intro-bg.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://goldenfitnesshealthclub.io/"
        />
        <meta property="twitter:title" content="Golden Fitness Health Club" />
        <meta
          property="twitter:description"
          content="We are Golden Fitness Health Club aka Golden Gym in Ahmedabad, Gujarat. We are providing services for more than 10 years. We provide the best service to our customers. Our biggest aim is to provide satisfaction to our customers, we provide the best price and ensure best results, we include many types of equipment and facilities and many types of health plan and goals. We have more than 10000+ satisfied customers. Must visit our gym branch or book your place online and be part of our Golden Family."
        />
        <meta property="twitter:image" content="/img/intro-bg.jpg" />
        <meta name="google-site-verification" content="y6LWhRvvj11vzwJ6VfgBq5dTisd3qq2DlUofro-nEGE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navigation />
        {/* <Slider /> */}
        {/* <Features data={landingPageData.Features} /> */}
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        {/* <Services data={landingPageData.Services} /> */}
        <Gallery data={landingPageData.Gallery} />
        {/* <Testimonials data={landingPageData.Testimonials} /> */}
        {/* <Team data={landingPageData.Team} /> */}
        <Contact data={landingPageData.Contact} />
      </div>
    </div>
  );
}
