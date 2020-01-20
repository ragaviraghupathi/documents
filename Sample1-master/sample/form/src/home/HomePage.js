import React from 'react';
import { Link } from 'react-router';
import '../app.css';

class HomePage extends React.Component {
    render() {
        const strarray = ["Feel at Home.", "Place to sell, rent, share information.", "Get to know who lives nearby",
            "Get acquainted with the people", "Explore the desi events"];
        const string = strarray.map((arr, i) => {
            return (
                <div className="alert alert-info">{arr}</div>
            );
        });
        const listarray=["1","2","3","4"];
        const list=listarray.map((arr1,i)=>{
            return(
               
                  <li data-target="#myCarousel" data-slide-to={arr1}></li>
            );
        });

        return (
            <div className="container">
                <h2>Welcome to Toronto Indian Community</h2>
                {string}

                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                         <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                       {list}
                    </ol>


                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="http://indiantoursites.com/images/tour-guide/delhi.jpg" alt="Hindi" />
                        </div>

                        <div className="item">
                            <img src="https://hemawagh26.files.wordpress.com/2013/01/3300472832_9445d4e200.jpg" alt="Telugu" />
                        </div>

                        <div className="item">
                            <img src="http://www.happieworld.in/wp-content/uploads/2017/12/culture-of-tamil-nadu.jpg" alt="Tamil" />
                        </div>

                        <div className="item">
                            <img src="http://www.indianmirror.com/culture/states-culture/images/punjabculture.jpg" alt="Punjabi" />
                        </div>

                        <div className="item">
                            <img src="http://www.indianmirror.com/culture/states-culture/images/kerala.jpg" alt="Malayalam" />
                        </div>
                    </div>


                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default HomePage;