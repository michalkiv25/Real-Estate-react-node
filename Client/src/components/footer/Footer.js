import {BsFacebook} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
import {FaTwitterSquare} from "react-icons/fa"

function Footer() {
    return (
        <footer>
	        <div className="jumbotron jumbotron-fluid bg-secondary p-4 mt-5 mb-0">
		        <div className="container">
			        <div className="row">
				        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 cizgi">
				        	<div className="card bg-secondary border-0">
						        <div className="card-body text-light text-center">
							        <h5 className="card-title text-white display-4" id="titleFooter" >Michaela Noam</h5>
						            <p  id="noTitle" className="d-inline lead">Michaela Noam Rights reserved © 2021
						               <a  id="noTitle" href="#" className="text-light d-block lead">Blog</a>
					            	</p>
						        </div>
					        </div>
				        </div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cizgi">
					<div className="card bg-secondary border-0">
						<div className="card-body text-center">
							<h5 className="card-title text-white display-4" id="titleFooter" >Contact</h5>
							<a className="text-light d-block lead" id="styleA" href="tel:0542055284"><i className="fa fa-phone mr-2"></i>+972542055284</a>
							<a className="text-light d-block lead" href="mailto:michalkiv25@gmail.com" id="noTitle"><i className="fa fa-envelope mr-2"></i>michalkiv25@gmail.com</a>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
					<div className="card bg-secondary border-0">
						<div className="card-body text-center">
						    <h5 className="card-title text-white display-4"  id="titleFooter">Sosyal Medya</h5>
							<a className="text-light" href="https://www.facebook.com/" id="noTitle" ><i > <BsFacebook></BsFacebook> </i></a>
							<a className="text-light" href="#" id="noTitle" ><i > <FiInstagram></FiInstagram></i></a>
							<a className="text-light" href="#" id="noTitle"><i ></i> <FaTwitterSquare></FaTwitterSquare></a>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
</footer>

            
    )
}

export default Footer