import React from 'react'

class Homepage extends React.Component {
    render(){
        return(
            <>
    
    <img src="./food/banner-845x321.jpg" alt="" className="homeimge"/>
    <div className="restaurant">
        <button className="login">login</button>
    <button className="creat">creat an account</button>
    </div>
    <div className="topsection">
        <div className="logo">e!</div>
        <div className="head">Find the best restaurants, cafes, and bars</div>

        <br/>
        <div className="search">
            <span>
                <select className="cites">
                    <option selected disabled>---- Select your city----</option>
                    <option>mumbai</option>
                    <option>chennai</option>
                    <option>hyderabad</option>
                    <option>bangalore</option>
                    <option>delhi</option>
                </select>
            </span>
            <span className="searchbox">
                <i className="bi bi-search searchicon"></i>
                <input  className="searchinput"type="text" placeholder="search for restaurants"/>
            </span>
        </div>
    </div>
   
    <div className="bottomsection">
        <h1 className="heading">Quick searches</h1>
        <h3 className="meal">Discover restaurants by type of meal</h3>
        <div className="qs-boxes-container">
            <div className="qs-box">
                <div className="qs-boxes-contents">
                    <img src="./food/2445f466153556458f11f88036408786.jpg" alt="" className="qs-imge" />
                    <h4 className="item-heading">Breakfast</h4>
                    <p className="item-descrption">start your day with exclusive breakfast options</p>
                </div>
            </div>
            <div className="qs-box">
                <div className="qs-boxes-contents">
                    <img src="./food/download.jpg" alt="" className="qs-imge" />
                    <h4 className="item-heading">Lunch</h4>
                    <p className="item-descrption">start your day with exclusive breakfast options</p>
                </div>
            </div>
            <div className="qs-box">
                <div className="qs-boxes-contents">
                    <img src="./food/Punjabi-Snack-recipes-1366x768.webp" alt="" className="qs-imge" />
                    <h4 className="item-heading">Snacks</h4>
                    <p className="item-descrption">start your day with exclusive breakfast options</p>
                </div>
            </div>
            <div className="qs-box">
                <div className="qs-boxes-contents">
                    <img src="./food/istockphoto-868408746-612x612.jpg" alt="" className="qs-imge" />
                    <h4 className="item-heading">Dinner</h4>
                    <p className="item-descrption">start your day with exclusive breakfast options</p>
                </div>
            </div>
            <div className="qs-box">
                <div className="qs-boxes-contents">
                    <img src="./food/images.jfif" alt="" className="qs-imge" />
                    <h4 className="item-heading">Drink</h4>
                    <p className="item-descrption">start your day with exclusive breakfast options</p>
                </div>
            </div>
            <div className="qs-box">
                <div className="qs-boxes-contents">
                    <img src="./food/Nightlife-in-Chennai-cover-image.webp" alt="" className="qs-imge" />
                    <h4 className="item-heading">Nightlife</h4>
                    <p className="item-descrption">start your day with exclusive breakfast options</p>
                </div>
            </div>
        </div>     
    </div> 

            </>
        )
    }
}
export default Homepage;