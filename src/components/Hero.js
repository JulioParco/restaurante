import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <h1>¡Bienvenidos al restaurante Flores!</h1>
      <p>Somos expertos en ofrecer los mejores productos y servicios. Conócenos.</p>
      
      {/* Carrusel de imágenes */}
      <Carousel interval={3000} pause="hover" className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-1.4-de-Pollo-a-la-Brasa.png"
            alt="Primera imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kpiopolleria.com/wp-content/uploads/2024/02/KPio_Polleria-Chifa-Arroz-chaufa-de-pollo.jpg"
            alt="Segunda imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kpiopolleria.com/wp-content/uploads/2024/02/KPio_Polleria-Chifa-Arroz-chaufa-de-pollo.jpg"
            alt="Tercera imagen"
          />
        </Carousel.Item>
      </Carousel>

      {/* Grilla de platos */}
      <div className="grid-container">
        <div className="grid-item">
          <img src="https://cdn0.recetasgratis.net/es/posts/8/7/2/ceviche_mixto_peruano_77278_orig.jpg" alt="Ceviche" />
          <p><strong>Ceviche</strong></p>
          <p>S/ 35.00</p>
        </div>
        <div className="grid-item">
          <img src="https://cdn0.recetasgratis.net/es/posts/0/1/7/pachamanca_a_la_olla_75710_600_square.jpg" alt="Lomo Saltado" />
          <p><strong>Pachamanca</strong></p>
          <p>S/ 50.00</p>
        </div>
        <div className="grid-item">
          <img src="https://imagenes.elpais.com/resizer/v2/4HWUG3I7PVA7VKAWLQVCBUL4E4.jpg?auth=114b5a92f5b098e2c67d9642883a4e7a3010b6020bac133f60f1c766f565b78f&width=1200" alt="Arroz con Pollo" />
          <p><strong>Pollo al Horno</strong></p>
          <p>S/ 40.00</p>
        </div>
        <div className="grid-item">
          <img src="https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_orig.jpg" alt="Ají de Gallina" />
          <p><strong>Ceviche Clásico</strong></p>
          <p>S/ 30.00</p>
        </div>
        <div className="grid-item">
          <img src="https://www.recetasnestle.cl/sites/default/files/styles/recipe_detail_mobile/public/srh_recipes/4d95ee421422145ef856c040751d4386.jpg?itok=dYcC9wxp" alt="Rocoto Relleno" />
          <p><strong>Pollo Asado</strong></p>
          <p>S/ 28.00</p>
        </div>
        <div className="grid-item">
          <img src="https://www.magacin247.com/wp-content/uploads/2021/05/caldo-de-gallina-1.jpg" alt="Tacu Tacu" />
          <p><strong>Caldo de Pollo</strong></p>
          <p>S/ 20.00</p>
        </div>
        <div className="grid-item">
          <img src="https://usil-blog.s3.amazonaws.com/PROD/blog/image/dia-pachamanca.jpg" alt="Pachamanca" />
          <p><strong>Pachamanca Andina</strong></p>
          <p>S/ 50.00</p>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2018/09/16/16/53/chicken-3687091_960_720.jpg" alt="Anticuchos" />
          <p><strong>Anticuchos de Corazón</strong></p>
          <p>S/ 25.00</p>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2016/11/18/22/35/chicken-1839597_960_720.jpg" alt="Papa a la Huancaína" />
          <p><strong>Papa a la Huancaína</strong></p>
          <p>S/ 15.00</p>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2018/09/16/16/53/chicken-3687091_960_720.jpg" alt="Arroz Chaufa" />
          <p><strong>Arroz Chaufa</strong></p>
          <p>S/ 30.00</p>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2018/09/16/16/53/chicken-3687091_960_720.jpg" alt="Arroz Chaufa" />
          <p><strong>Arroz Chaufa</strong></p>
          <p>S/ 30.00</p>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2018/09/16/16/53/chicken-3687091_960_720.jpg" alt="Arroz Chaufa" />
          <p><strong>Arroz Chaufa</strong></p>
          <p>S/ 30.00</p>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2018/09/16/16/53/chicken-3687091_960_720.jpg" alt="Arroz Chaufa" />
          <p><strong>Arroz Chaufa</strong></p>
          <p>S/ 30.00</p>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2018/09/16/16/53/chicken-3687091_960_720.jpg" alt="Arroz Chaufa" />
          <p><strong>Arroz Chaufa</strong></p>
          <p>S/ 30.00</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
