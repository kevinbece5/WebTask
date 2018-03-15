import React, {Component} from 'react';


class Specs extends Component{
    constructor(){
        super();
        this.state = {
            cars:[]
        }
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
                {/* Call button will only be shown for smaller screens  */}
                <div className="alert text-center callUsBtn" role="alert">
                    <a href="tel:773-123-4567" className="text-white">CALL US</a>
                </div>
                {/* Specs and details about the car being called from the database */}
                {this.state.cars.map(car =>
                <div className='row specs'>
                    <div className="card col specsCard">
                        <div className="card-body">
                        <h5 className="card-title titleSpecs">Exterior</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Cylinders:       {car.cylinders}</h6>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">City MPG:        {car.cityMPG}</h6>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">Highway MPG:     {car.highwayMPG}</h6>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">Engine:          {car.engine}</h6>
                        </div>
                    </div>
                    <div className='w-100 breakSpecs'></div>
                    <div className="card col specsCard">
                        <div className="card-body">
                        <h5 className="card-title titleSpecs">Performance</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Cylinders:        {car.cylinders}</h6>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">City MPG:        {car.cityMPG}</h6>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">Highway MPG:     {car.highwayMPG}</h6>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">Engine:          {car.engine}</h6>
                        </div>
                    </div>
                </div>
                )}
                {/* Footer */}
                <div className="pt-3 mx-auto footer justify-content-center">
                        <ul className="nav">
                            <li className="nav-item pr-1">About /</li>
                            <li className="nav-item pr-1">Terms /</li>
                            <li className="nav-item icon">Privacy Policy</li>
                        </ul>                                
                </div>
                    <div className="w-100"></div>
                    <div className="pb-5 footer px-3 text-center">
                        <small>PLS is a registered service mark and other marks are service marks of PLS Financial Services, Inc &copy; 2018 </small>
                    </div>
            </div>
        )
    }
}

export default Specs;