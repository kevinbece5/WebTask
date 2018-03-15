import React, {Component} from 'react';
import image1 from '../Images/Picture1.jpg';
import image2 from '../Images/Picture2.jpg';
import image3 from '../Images/Picture3.jpg';
import image4 from '../Images/Picture4.jpg';
import image5 from '../Images/Picture5.jpg';
import image6 from '../Images/Picture6.jpg';

class Cars extends Component{
    constructor(props){
        super(props);
        this.state = {
            cars:[]
        }

        this.changeImg = this.changeImg.bind(this);
    }
    //Changes the largest image shown to the one the user clicks on
    changeImg(e){
            document.querySelector("#current").src = e.target.src;
    }

    //makes a call to the api to get the data
    componentWillMount(){
        fetch('/api/cars')
            .then(res => res.json())
            .then(cars => this.setState({cars}));
    }

    render(){
        return(
            <div>
            {/*Carousel*/}
            <div className='row infoBackground'>
            <div className="carousel slide mobileCarousel w-100" data-ride="carousel" data-interval="1500">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={image1} alt="Car angle"/>
                        </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image2} alt="Car angle"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image3} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image4} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image5} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image6} alt="Third slide" />
                    </div>
                </div>
            </div>


            {/* Car image gallery and Basic information on the car   */}
            <img src={image1} alt='car angle' className='img-fluid col imgCard' id='current' />
            <div className='w-100 break'></div>
            {this.state.cars.map(car =>
                <div className="card col infoCard pb-4">
                  <h5 className="card-title model">{car.model}</h5>
                  <p className="card-text info">Year</p>
                  <h6 className="card-subtitle mb-2 text-muted">{car.year}</h6>
                  <p className="card-text info">Price</p>
                  <p className="card-text">{car.price}</p>
                  <p className="card-text info">Mileage</p>
                  <p className="card-text">{car.mileage} miles</p>
                  <p className="card-text info">Item Number: {car.itemNumber}</p>
                  <p className="card-text info">VIN: {car.vinNumber}</p>
                  <p className="card-text">Share this car <a className="info" href="https://twitter.com/intent/tweet"><i className="fas fa-envelope ml-3"></i></a></p>
                  <div className="row share">
                    <p className="col info">Views</p>
                    <p className="col info">Saves</p>
                    <p className="col info">Shares</p>
                    <div className="w-100"></div>
                    <p className="col ml-2 shares">37</p>
                    <p className="col ml-2 shares">20</p>
                    <p className="col ml-2 shares">15</p>
                  </div>
              </div>
            )}
            </div>
            <div className='w-100'></div>
            <div className='row carPics mx-auto' >
                <img src={image1} onClick={this.changeImg} alt='car angle'className='d-inline mx-1 carViews'/>
                <img src={image2} onClick={this.changeImg} alt='car angle'className='d-inline mx-1 carViews'/>
                <img src={image3} onClick={this.changeImg} alt='car angle'className='d-inline mx-1 carViews'/>
                <img src={image4} onClick={this.changeImg} alt='car angle'className='d-inline mx-1 carViews'/>
                <img src={image5} onClick={this.changeImg} alt='car angle'className='d-inline mx-1 carViews'/>
                <img src={image6} onClick={this.changeImg}alt='car angle'className='d-inline ml-1 carViews'/>
            </div>
            </div>
        )
        

    }
}
export default Cars;