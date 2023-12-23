/* eslint-disable import/default */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "src/components/Home/Slider";
import ProductShow from '../components/ProductView/index'
import RatingsandReviews from '../components/RatingPage/index'
import Enquiry from '../components/enquiry/index'

export default function Home(): JSX.Element {
  return (
    <>
      <Slider />
      <ProductShow />
      <Enquiry />
      <RatingsandReviews />
      {/* <Progress value={50} animate /> */}
    </>
  );
}
