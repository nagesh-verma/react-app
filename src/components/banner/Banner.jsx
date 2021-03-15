import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';
import ListItem from './ListItem';
import ImageItem from './ImageItem';



export class Banner extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      error: null,
      isLoaded: false,
      banners: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/banners")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            banners: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  

  render() {
    const { error, isLoaded, banners } = this.state;
    if (error) {
      return <ErrorMessage message={error.message} />;
    } else if (!isLoaded) {
      return <Loader divClass = "alert alert-info" role = "alert" spanClass = "" />;
    }
    const listItem = banners.sort((a, b) => (a.order > b.order ? 1 : -1))
                            .filter((banner)=>banner.isActive === true)
                            .map((banner)=>(
                              banner.order === 1 ? (<ListItem key = {banner.order} target = "#carouselExampleIndicators" slideto={banner.order-1} className = "active"/>)
                              :(<ListItem key = {banner.order} target = "#carouselExampleIndicators" slide-to={banner.order-1}/>)
                            ));

    const imgItem = banners.sort((a,b)=>(a.order>b.order?1:-1))
                              .filter((banner)=>banner.isActive === true)
                              .map((banner)=>(
                                banner.order === 1 ? (<ImageItem key = {banner.order} className = "carousel-item active" url={banner.bannerImageUrl} alt={banner.bannerImageAlt}/>)
                                :(<ImageItem key = {banner.order} className = "carousel-item" url={banner.bannerImageUrl} alt={banner.bannerImageAlt}/>)
                              ));

    return (
      <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-ride="carousel" style = {{boxShadow:"0 10px 6px -6px #777"}}>
        <ol className="carousel-indicators">
          {listItem}
        </ol>
        <div className="carousel-inner">
          {imgItem}
        </div>
        <a style = {{filter:"invert(100%)"}} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a style = {{filter:"invert(100%)"}} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Banner



