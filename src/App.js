import React from 'react';
import Menu from './componentes/Menu/index'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';


function App() {
  return (
    <div style={{ background: "#141414" }}>
    <Menu />

    <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Por diversas vezes fomos excluidos da sociedade e tivemos vergonha de mostrar nossas escolhas nerds mas isso acaba aqui, esse é um site no qual nós podemos nos sentir confotáveis do jeito que somos,sem sentir medo, pois todo gênio é diferente do restante da sociedade "}
    />

    <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
    />

    <Carousel
      category={dadosIniciais.categorias[1]}
    />

    <Carousel
      category={dadosIniciais.categorias[2]}
    />      

    <Carousel
      category={dadosIniciais.categorias[3]}
    />      

    <Carousel
      category={dadosIniciais.categorias[4]}
    />      

    <Carousel
      category={dadosIniciais.categorias[5]}
    />      

    <Footer />
  </div>
  );
}

export default App;
