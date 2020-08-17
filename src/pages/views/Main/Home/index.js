import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
const Home = ({productsHome}) => {

    return (
        <main id="content" className="main-content-wrapper">
        {/* Start of Primary Slider Section */}
        <section className="primary-slider-section mb0 pos-r">
          <div className="container">
            <div className="row mt-5">
              <div className="col-12 col-sm-12 col-md-12">
              <div id="demo" className="carousel slide" data-ride="carousel">
                  {/* Indicators */}
                  <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                  </ul>
                  {/* The slideshow */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://thietkehaithanh.com/wp-content/uploads/2013/08/thietkehaithanh-banner1.jpg" alt="Los Angeles" width={1100} height={500} />
                    </div>
                    <div className="carousel-item">
                      <img src="https://lh3.googleusercontent.com/proxy/6xwc0f4vGojI_B0t9-2Mu_y5Gh_HuOXY7_tp3LlhI5DPs6zYttXcvX1HnJjVIK9IdKXR-wYObOVmzWnMAEyRtYRRUozVquVmOvP-Lryx1QlYxjN7ag" alt="Chicago" width={1100} height={500} />
                    </div>
                   
                  </div>
                  {/* Left and right controls */}
                  <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                  </a>
              </div>
              </div>
            </div> {/* end of row */}
          </div> {/* end of container */}
        </section>
        {/* End of Primary Slider Section */}
        {/* Start of Banner Section */}
        <div className="banner-section mt-30 mb-half">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="promo-banner hover-effect-1">
                  <a href="#">
                    <img src="../../images/banners/banner-9.jpg" alt="Promo Banner" />
                  </a>
                </div> {/* end of promo-banner */}
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="promo-banner hover-effect-1">
                  <a href="#">
                    <img src="../../images/banners/banner-10.jpg" alt="Promo Banner" />
                  </a>
                </div> {/* end of promo-banner */}
              </div>
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div>
        {/* End of Banner Section */}
        {/* Start of New Arrivals Section */}
        <section className="new-arrivals-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="section-title">
                  <h2>New Trending Products</h2>
                  <p className="subtitle">Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero est</p>
                </div>
              </div>
            </div> {/* end of row */}
            <div className="row product-row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="new-products pos-r">
                  <div className="element-carousel anime-element-multi" data-visible-slide={4} data-loop="false" data-space-between={0} data-speed={1000}>
                    {/* Slides */}
                    <div className="swiper-wrapper">
                      <div className="swiper-slide" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
                          {productsHome.map(pro =>(
                              <article className="product-layout">
                                    <div className="product-thumb">
                                <div className="product-inner">
                                  <div className="product-image">
                                    <div className="label-product label-sale">-20%</div>
                                    <div className="label-product label-new">New</div>
                                    <a href="#">
                                      <img src={pro.image} alt="Compete Track Tote" title="Compete Track Tote" />
                                    </a>
                                    <div className="action-links">
                                      <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                      <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                      <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                      <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                    </div>
                                  </div> {/* end of product-image */}
                                  <div className="product-caption">
                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                      <div className="product-manufacturer">
                                        <a href="#">Studio Design</a>
                                      </div>
                                      <div className="product-ratings">
                                        <div className="rating-box">
                                          <ul className="rating d-flex">
                                            <li><i className="ion ion-md-star-outline" /></li>
                                            <li><i className="ion ion-md-star-outline" /></li>
                                            <li><i className="ion ion-md-star-outline" /></li>
                                            <li><i className="ion ion-md-star-outline" /></li>
                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div> 
                                    <Link to={"/product-detail/" + pro.id}>
                                      <h4 className="product-name">{pro.name}</h4>
                                    </Link>
                                    <p className="product-price">
                                      {/* <span className="price-old">$54.65</span> */}
                                    <span className="price-new">{pro.price}</span>
                                    </p>
                                  </div>{/* end of product-caption */}
                                </div>{/* end of product-inner */}
                              </div>{/* end of product-thumb */}
                            </article> 
                          ))}
                      </div> {/* end of swiper-slide */}
                    </div> {/* end of swiper-wrapper */}
                    {/* Slider Navigation */}
                    <div className="swiper-arrow next"><i className="fa fa-angle-right" /></div>
                    <div className="swiper-arrow prev"><i className="fa fa-angle-left" /></div>
                  </div> {/* end of element-carousel */}
                </div> {/* end of new-products */}
              </div>
            </div> {/* end of row */}
          </div> {/* end of container */}
        </section>
        {/* End of New Arrivals Section */}
        {/* Start of Instagram Section */}
        <section className="instagram-section pt-full top-bordered mb-half">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="section-title type-2">
                  <h2>Follow us On Instagram</h2>
                  <p className="subtitle">Consequat magna, massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
                </div>
              </div>
            </div> {/* end of row */}
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="instagram-container">
                  {/* Slides */}
                  <div id="instagram_feed" className="swiper-wrapper image-popup">
                  </div> {/* end of swiper-wrapper */}
                </div> {/* end of instagram-carousel */}
                <div className="follow-link">
                  <a href="https://www.instagram.com/themeitems/" target="_blank">Follow us On Instagram</a>
                </div>
              </div>
            </div> {/* end of row */}
          </div> {/* end of container */}
        </section>
        {/* End of Instagram Section */}
      </main>
    )
}

Home.propTypes = {

}

export default Home
