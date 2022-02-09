import React from 'react';

// Import Swiper React components, styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { EffectCards, Pagination, Navigation } from 'swiper';

// styling
import './MovieList.css';

// my components
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <React.Fragment>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCards, Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((movie) => {
          return (
            <div>
              <SwiperSlide key={movie.id}>
                <div className="card">
                  <MovieCard movie={movie} />
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default MovieList;
