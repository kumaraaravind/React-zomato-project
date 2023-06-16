import React from "react";
import '../style/color.css';
class Mainpage extends React.Component {
    render() {
        return (
            <div>

                <div className="top">
                    <div className="logo">e!</div>
                    <div className="restaurant">
                        <button className="login">login</button>
                        <button className="creat">creat an account</button>
                    </div>
                </div>

                <div className="head-container">
                    <div className="heading">
                        Breakfast Places in Mumbai
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 col-sm-12 col-md-4 col-lg-3">
                        <div className="filterpanel">
                            <div className="filterpanelheading">Filters</div>
                            <div className="filterpanelsubheading">Selectlocation</div>
                            <select className="location">
                                <option disabled>---Select City-----</option>
                                <option>Mumbai</option>
                                <option>Hyderabad</option>
                                <option>Chennai</option>
                                <option>Pune</option>
                                <option>Bangalore</option>
                            </select>
                            <div className="filterpanelsubheading">Cuisine</div>
                            <input type="checkbox" className="cuisineoption" ></input>
                                <label >North indian</label>
                            <br />
                            <input type="checkbox"  className="cuisineoption"></input>
                            <label >South indian</label>
                            <br />
                            <input type="checkbox"   className="cuisineoption"></input>
                                <label >Chineses</label>
                            <br />
                            <input type="checkbox" className="cuisineoption" ></input>
                            <label >Fast food</label>
                            <br />
                            <input type="checkbox" className="cuisineoption"></input>
                            <label >Street food</label>
                            <br />
                            <div className="filterpanelsubheading">Cost For Two</div>
                            <input type="radio" name="cost" className="cuisineoption"></input>
                            <label >less than  &#8377;500</label>
                            <br />
                            <input type="radio" name="cost" className="cuisineoption"></input>
                            <label >&#8377;500 to &#8377;1000</label>
                            <br />
                            <input type="radio" name="cost" className="cuisineoption"></input>
                            <label >&#8377;1000 to &#8377;1500</label>
                            <br />
                            <input type="radio" name="cost" className="cuisineoption"></input>
                                <label >&#8377;1500 to &#8377;2000</label>
                            <br />
                            <input type="radio" name="cost" className="cuisineoption"></input>
                             <label >&#8377;2000+</label>
                            <br />
                            <div className="filterpanelsubheading">Sort</div>
                            <input type="radio" name="price" className="cuisineoption"></input>
                                <label >Price low to high</label>
                            <br />
                           
                            <input type="radio" name="price" className="cuisineoption"></input>
                            <label >Price high to low</label>
                        </div>
                    </div>
                    <div className="col-9 col-sm-12 col-md-8 col-lg-9">
                        <div className="resultspanel">
                            <div className="row uppersection">
                                <div className="col-2">
                                    <img src="./food/spicy-red-chicken-curry-kerala-260nw-2065710230.webp" alt="" className="resultimage" />
                                </div>
                                <div className="col-10">
                                    <div className="resultheading">The Big Chill cakery</div>
                                    <div className="resultsubheading">Fort</div>
                                    <div className="resultaddress">shop 1,Plot D, Samruddhi Complex, Chincholi ....</div>
                                </div>
                            </div>
                            <hr />
                            <div className="row lowersection">
                                <div className="col-2">
                                    <div className="resultaddress">CUTSINES:</div>
                                    <div className="resultaddress">COST FOR TWO:</div>
                                </div>
                                <div className="col-10">
                                    <div className="resultsubheading">Bakery</div>
                                    <div className="resultsubheading"> &#8377;700</div>
                                </div>
                            </div>

                        </div>

                        <div className="resultspanel">

                            <div className="row uppersection">
                                <div className="col-2">
                                    <img src="./food/images.jpg" alt="" className="resultimage" />
                                </div>
                                <div className="col-10">
                                    <div className="resultheading">The Big Chill cakery</div>
                                    <div className="resultsubheading">Fort</div>
                                    <div className="resultaddress">shop 1,Plot D, Samruddhi Complex, Chincholi ....</div>
                                </div>
                            </div>
                            <hr />
                            <div className="row lowersection">
                                <div className="col-2">
                                    <div className="resultaddress">CUTSINES:</div>
                                    <div className="resultaddress">COST FOR TWO:</div>
                                </div>
                                <div className="col-10">
                                    <div className="resultsubheading">Bakery</div>
                                    <div className="resultsubheading"> &#8377;700</div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="pagination">
                            <div className="paginationbutton">&laquo;</div>
                            <div className="paginationbutton">1</div>
                            <div className="paginationbutton">2</div>
                            <div className="paginationbutton">3</div>
                            <div className="paginationbutton">4</div>
                            <div className="paginationbutton">5</div>
                            <div className="paginationbutton">&raquo;</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Mainpage;