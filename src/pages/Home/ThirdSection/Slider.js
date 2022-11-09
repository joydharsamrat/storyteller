import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative h-[90vh] w-full ml-1">
                    <img src="https://img.freepik.com/free-photo/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony_8353-11057.jpg?w=740&t=st=1668025294~exp=1668025894~hmac=ee96c9efc218effa781a16881d6cdabc79bdd33a69e797007623470d3c4b5c6d" alt='' className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative h-[90vh] w-full ml-1">
                    <img src="https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?w=740&t=st=1668025337~exp=1668025937~hmac=f5f13b45d79bb98825c03f07700904ec7c96f4333793f02f29a0b8200935df9d" alt='' className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative h-[90vh] w-full ml-1">
                    <img src="https://img.freepik.com/free-photo/bride-groom-pose-large-circle-lilac-garden_8353-1246.jpg?w=740&t=st=1668026270~exp=1668026870~hmac=3f225156d05affed2af10033eb6a9413978d5071197ea56fb32fe2dbe6bec4a7" alt='' className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative h-[90vh] w-full ml-1">
                    <img src="https://img.freepik.com/free-photo/wedding_144627-35049.jpg?w=740&t=st=1668026305~exp=1668026905~hmac=609c12519ea8cf45ae50d4707febc79e4887b1ffc0b9d225db31eb8d9eebd6b9" alt='' className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;