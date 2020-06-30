import React, { Component } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import image1 from '../../Images/image1.jpg'
import image2 from '../../Images/image2.jpg'
import image3 from '../../Images/image3.jpg'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import logo from "../../Images/pachalogo.jpg"
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        const images = [
            { url: image2 },
            { url: image1 },
            { url: image3 },
            // { url: "images/4.jpg" },
            // { url: "images/5.jpg" },
            // { url: "images/6.jpg" },
            // { url: "images/7.jpg" },
        ];

        return (
            <Layout>
                {window.screen.width <= 1022 ?
                    <Drawer id="fixedheader" title="Pachachaca" >
                        <Navigation >
                            <Link to="/" className="linkto">Home</Link>
                            <Link to="programm" className="linkto">Programm</Link>
                            <Link to="Who" className="linkto">Who</Link>
                            <Link to="mission" className="linkto">Mission and Vission</Link>
                            <Link to="photos" className="linkto">Photos</Link>
                            <Link to="newsletters" className="linkto">Newsletters </Link>
                            <Link to="donate" className="linkto">Donate </Link>
                        </Navigation>
                    </Drawer> :
                    <Header id="fixedheader" className="header-color" title={<div><img id="pachalogo" src={logo} alt="logo"/>  <img id="pachalogo" src={logo} alt="logo"/></div>}  scroll>
                        <Navigation id="nav">
                        <Link to="/" className="linkto">Home</Link>
                            <Link to="programm" className="linkto">Programm</Link>
                            <Link to="Who" className="linkto">Who</Link>
                            <Link to="mission" className="linkto">Mission and Vission</Link>
                            <Link to="photos" className="linkto">Photos</Link>
                            <Link to="newsletters" className="linkto">Newsletters </Link>
                            <Link to="donate" className="linkto">Donate </Link>
                        </Navigation>
  
                    </Header>}
                <SimpleImageSlider
                    width={`100%`}
                    height={`100%`}
                    images={images}
                />
                <Content>
                     <div className="page-content" />
                 </Content>
            </Layout>
        );
    }
}
export default Home;