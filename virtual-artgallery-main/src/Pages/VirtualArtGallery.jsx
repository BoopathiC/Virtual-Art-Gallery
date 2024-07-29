import React from 'react';
import './VirtualArtGallery.css';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useCart } from 'react-use-cart';
import Swiper from './Swiper';
import Footer from './Footer';


   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

   const artworks = [
    {
      id: 1,
      imageUrl: 'https://img1.etsystatic.com/000/0/5879670/il_fullxfull.342643861.jpg',
      artist: 'Aslin Betsy',
      title: 'Vintage Landscape Oil Painting',
      price: 50,
    },
    {
      id: 2,
      imageUrl: 'https://afremov.com/media/catalog/product/cache/029c9410eb6b6a309d2f6c6bdfc6e2f2/RAINY-WEDDING_2.jpg',
      artist: 'Leonid Afremov',
      title: 'Rainy Wedding',
      price: 178,
    },
    {
      id: 3,
      imageUrl: 'https://image.made-in-china.com/2f0j00CGqYEQpgWtro/Handmade-Reproduction-Leonid-Afremov-Oil-Paintings-on-Canvas.jpg',
      artist: 'Leonid Afremov',
      title: 'MISTY MOOD NIGHT',
      price: 150,
    },
    {
      id: 4,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.qmO7U-uACC5PbjyZUmHRSwHaE5&pid=Api&P=0&h=180',

      artist: 'Jane Smith',
      title: 'City Street',
      price: 150,
    },
    {
      id: 5,
      imageUrl: 'https://blog.breathingcolor.com/wp-content/uploads/2017/01/BC-digital-traditional-painting-COVER.jpg',
      artist: 'Jane Smith',
      title: 'Abstract Dreams',
      price: 150,
    },
    {
      id: 6,
      imageUrl: 'https://wallup.net/wp-content/uploads/2019/09/1021490-digital-art-fantasy-art-architecture-building-house-artwork-beauty-1.jpg',
      artist: 'Arun Raj',
      title: 'Fantasy Home',
      price: 150,
    },
    {
      id: 7,
      imageUrl:'https://wallpapercrafter.com/desktop/149546-digital-digital-art-artwork-drawing-digital-painting-nature-landscape-trees-wood-clouds-green-blue-white-rabbits-silhouette-water-sky-skyscape-river-rocks-pasture-envi.jpg',
      artist: 'Gill Torento',
      title: 'Natural Landscapes',
      price: 150,
    },
    {
      id: 8,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.rYtfdfhiHZjJ3vnFNUXUPAHaFZ&pid=Api&P=0&h=180',
      artist: 'Jane Smith',
      title: 'The Eye',
      price: 150,
    },
    {
      id: 9,
      imageUrl: 'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-doodle-art-doodling-2.jpg',
      artist: 'Rayan Smith',
      title: 'Doodle Design',
      price: 150,
    },
    {
      id: 10,
      imageUrl:'https://unblast.com/wp-content/uploads/2023/06/Baseball-Doodles.jpg',
      artist: 'Lily Sun',
      title: 'Be Awesome Today',
      price: 150,
    },
    {
      id: 11,
      imageUrl: 'https://i0.wp.com/www.footballparadise.com/wp-content/uploads/2022/12/Give-it-to-Messi-and-Pray-Netherlands-vs-Argentina-Op-1-copy-1-scaled.jpg?resize=600%2C460&ssl=1',
      artist: 'Boobalan Bill',
      title: 'Messi Doodle',
      price: 150,
    },
    {
      id: 12,
      imageUrl: 'https://wallpapercave.com/wp/wp4828649.jpg',
      artist: 'Mike Tyson',
      title: 'Abstract Dreams',
      price: 150,
    },
   {
      id: 13,
      imageUrl: 'https://i.etsystatic.com/5711041/r/il/6b2634/1739647487/il_fullxfull.1739647487_nvd7.jpg',
      artist: 'Hendel',
      title: 'Garden Painting',
      price: 50,
    },
    {
      id: 14,
      imageUrl: 'https://webneel.com/daily/sites/default/files/images/daily/07-2013/20-fruitst-still-life-painting-by-dmitriy-annenkov.jpg',
      artist: 'Philip Gerrard',
      title: 'Apples Scattered',
      price: 178,
    },
    {
      id: 15,
      imageUrl: 'https://img.xcitefun.net/users/2013/03/318560,xcitefun-oil-painting-5.jpg',
      artist: 'Akshay Kumar',
      title: 'Lovely Fairy',
      price: 150,
    },
    {
      id: 16,
      imageUrl: 'https://www.mydesignbeauty.com/wp-content/uploads/2016/10/beautiful-oil-paintings-art-collection-by-mydesignbeauty-36.jpg',
      artist: 'Jane Smith',
      title: 'Colourfull Nature',
      price: 150,
    },
    {
      id: 17,
      imageUrl: 'https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2019/10/16080303/Example-of-computer-illustration-digital-art-oct16.jpg',
      artist: 'Cameron Gill',
      title: 'Abstract Dreams',
      price: 150,
    },
    {
      id: 18,
      imageUrl: 'https://wallpapercave.com/wp/wp2659185.jpg',
      artist: 'Arun Raj',
      title: 'Deserted Landed',
      price: 150,
    },
    {
      id: 19,
      imageUrl: 'https://thinkml.ai/content/images/2021/01/creative-art.jpg',
      artist: 'Gill Torento',
      title: 'The Double Game',
      price: 150,
    },
    {
      id: 20,
      imageUrl: 'https://i.pinimg.com/originals/8d/a5/af/8da5afdf41290e391279a5759067260e.jpg',
      artist: 'Jane Smith',
      title: 'The Rising Sun',
      price: 150,
    },
    {
      id: 21,
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/155/039/original/colorful-abstract-doodle-vector.jpg',
      artist: 'Rayan Smith',
      title: 'Doodle Painting',
      price: 150,
    },
    {
      id: 22,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.QxzSHgjDHY95Q3BGsBh91QHaEw&pid=Api&P=0&h=180',
      artist: 'Lily Sun',
      title: 'The Wedding Party',
      price: 150,
    },
    {
      id: 23,
      imageUrl: 'http://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-strange-doodle-by-bon-arts.jpg',
      artist: 'Boobalan Bill',
      title: 'Strange Art of Doodle',
      price: 150,
    },
    {
      id: 24,
      imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/Google-Doodle-via-youthkiawaaz-com1.jpg',
      artist: 'Mike Tyson',
      title: 'Google Doodle',
      price: 150,
    },
    {
      id: 25,
      imageUrl: 'https://cdn.pixabay.com/photo/2019/09/24/06/10/insect-4500348_1280.jpg',
      artist: 'Hendel',
      title: 'Art in Insects',
      price: 50,
    },
    {
      id: 26,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXAWfN0JkSc_IxwhBl8eKrgWTORGa64mV-DDhWn1l1w&s',
      artist: 'Leonid Afremov',
      title: 'The Yellow Eye',
      price: 178,
    },
    {
      id: 27,
      imageUrl: 'https://cdn.artcenter.by/base/users/8137/works/JXY5Fcq461.jpeg',
      artist: 'Leonid Afremov',
      title: 'The SEER',
      price: 150,
    },
    {
      id: 28,
      imageUrl: 'https://artfilemagazine.com/wp-content/uploads/2023/04/Paint-vs-Drawing-Techniques.jpg',
      artist: 'Jane Smith',
      title: 'The Butterfly Art',
      price: 150,
    },
    {
      id: 29,
      imageUrl: 'https://trendyartideas.com/wp-content/uploads/2020/04/Portrait-Scribbling-1.jpg',
      artist: 'Jane Smith',
      title: 'Abstract Scribled Art',
      price: 150,
    },
    {
      id: 30,
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41bcc390-1996-4bfe-a0a5-9be292c62683/d9wwr2v-17bac44e-5c45-4a9b-920e-5a17775342c7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxYmNjMzkwLTE5OTYtNGJmZS1hMGE1LTliZTI5MmM2MjY4M1wvZDl3d3Iydi0xN2JhYzQ0ZS01YzQ1LTRhOWItOTIwZS01YTE3Nzc1MzQyYzcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3p1uUBfa4n6nsfZMS7U7vlclhqlG6-ZozUggyky9O00',
      artist: 'Arun Raj',
      title: 'The Face Of Earth',
      price: 150,
    },
    {
      id: 31,
      imageUrl:'https://media.gq.com/photos/646cfb226cbe43aa644cd717/16:9/w_2560%2Cc_limit/artbutmakeitsports.jpg',
      artist: 'Guru gram Artist',
      title: 'The Dream Game',
      price: 150,
    },
    {
      id: 8,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.rYtfdfhiHZjJ3vnFNUXUPAHaFZ&pid=Api&P=0&h=180',
      artist: 'Jane Smith',
      title: 'The Eye',
      price: 150,
    },
    {
      id: 9,
      imageUrl: 'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-doodle-art-doodling-2.jpg',
      artist: 'Rayan Smith',
      title: 'Doodle Design',
      price: 150,
    },
    {
      id: 10,
      imageUrl:'https://unblast.com/wp-content/uploads/2023/06/Baseball-Doodles.jpg',
      artist: 'Lily Sun',
      title: 'Be Awesome Today',
      price: 150,
    },
    {
      id: 11,
      imageUrl: 'https://i0.wp.com/www.footballparadise.com/wp-content/uploads/2022/12/Give-it-to-Messi-and-Pray-Netherlands-vs-Argentina-Op-1-copy-1-scaled.jpg?resize=600%2C460&ssl=1',
      artist: 'Boobalan Bill',
      title: 'Messi Doodle',
      price: 150,
    },
    {
      id: 12,
      imageUrl: 'https://wallpapercave.com/wp/wp4828649.jpg',
      artist: 'Mike Tyson',
      title: 'Abstract Dreams',
      price: 150,
    },
   {
      id: 13,
      imageUrl: 'https://i.etsystatic.com/5711041/r/il/6b2634/1739647487/il_fullxfull.1739647487_nvd7.jpg',
      artist: 'Hendel',
      title: 'Garden Painting',
      price: 50,
    },
    {
      id: 14,
      imageUrl: 'https://webneel.com/daily/sites/default/files/images/daily/07-2013/20-fruitst-still-life-painting-by-dmitriy-annenkov.jpg',
      artist: 'Philip Gerrard',
      title: 'Apples Scattered',
      price: 178,
    },
    {
      id: 15,
      imageUrl: 'https://img.xcitefun.net/users/2013/03/318560,xcitefun-oil-painting-5.jpg',
      artist: 'Akshay Kumar',
      title: 'Lovely Fairy',
      price: 150,
    },
    {
      id: 16,
      imageUrl: 'https://www.mydesignbeauty.com/wp-content/uploads/2016/10/beautiful-oil-paintings-art-collection-by-mydesignbeauty-36.jpg',
      artist: 'Jane Smith',
      title: 'Colourfull Nature',
      price: 150,
    },
    {
      id: 17,
      imageUrl: 'https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2019/10/16080303/Example-of-computer-illustration-digital-art-oct16.jpg',
      artist: 'Cameron Gill',
      title: 'Abstract Dreams',
      price: 150,
    },
    {
      id: 18,
      imageUrl: 'https://wallpapercave.com/wp/wp2659185.jpg',
      artist: 'Arun Raj',
      title: 'Deserted Landed',
      price: 150,
    },
    {
      id: 19,
      imageUrl: 'https://thinkml.ai/content/images/2021/01/creative-art.jpg',
      artist: 'Gill Torento',
      title: 'The Double Game',
      price: 150,
    },
    {
      id: 20,
      imageUrl: 'https://i.pinimg.com/originals/8d/a5/af/8da5afdf41290e391279a5759067260e.jpg',
      artist: 'Jane Smith',
      title: 'The Rising Sun',
      price: 150,
    },
    {
      id: 21,
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/155/039/original/colorful-abstract-doodle-vector.jpg',
      artist: 'Rayan Smith',
      title: 'Doodle Painting',
      price: 150,
    },
    {
      id: 22,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.QxzSHgjDHY95Q3BGsBh91QHaEw&pid=Api&P=0&h=180',
      artist: 'Lily Sun',
      title: 'The Wedding Party',
      price: 150,
    },
    {
      id: 23,
      imageUrl: 'http://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-strange-doodle-by-bon-arts.jpg',
      artist: 'Boobalan Bill',
      title: 'Strange Art of Doodle',
      price: 150,
    },
    {
      id: 24,
      imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/Google-Doodle-via-youthkiawaaz-com1.jpg',
      artist: 'Mike Tyson',
      title: 'Google Doodle',
      price: 150,
    },
   
    
  ];


  const VirtualArtGallery = () => {



  const { addItem ,totalItems} = useCart();

  return (
    <div>
    <div className='swipe'>
      <center><p className='maste'>Masterpieces</p></center>
      <Swiper/>
    </div>
    <div className="con">
      {artworks.map((artwork) => (
        <div className="card" key={artwork.id} item={artwork}>
          <img className="image" src={artwork.imageUrl} alt={`im${artwork.id}`} />
          <div className="details">
            <center>
            <p className="name">{artwork.artist}</p>
            <p className="title">
              {artwork.title}
              <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} className="favorite-button" />
            </p>
            <p className="price">${artwork.price}</p>
            <button onClick={() => addItem({ ...artwork, img: artwork.imageUrl })} className="buy-button">
              Add to Cart
            </button>
            </center>
          </div>
        </div>
      ))}
      
      <ScrollToTop smooth className="custom-scroll-to-top-button" />
      <Link to="/cart" className="cart-floating-button">
      <img src="https://cdn-icons-png.flaticon.com/128/11551/11551984.png" alt="Cart" className="cart-icon" />
      </Link>
      <div className='cart-count'>{totalItems}</div>
    </div>
    <hr></hr>
    <Footer />
    </div>
  );
};

export default VirtualArtGallery;