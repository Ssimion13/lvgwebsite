import React, {Component} from "react";
// import {Link} from "react-router-dom";
// import Testimonials from "./Testimonials.js";
// import WhyChooseLVEThumbnail from "./WhyChooseLVEThumbnail.js"
import WhyChooseLVECarousel from "./WhyChooseLVECarousel";
// import drfajardo from "../../Images/drfajardo.png";
// import FeeSectionThumbnail from "./FeeSection/FeeSectionThumbnail";
// import FrontPageButtonContainer from "./FrontPageButtonContainer";
// import { Button } from 'reactstrap';
// import lvecommercial from "../../Videos/lvecommercial.mp4";
// import VideoModal from "./VideoModal.js";
import FrontPageService from "./FrontPageService/"
import ORRoom from "../../Images/operatingroom.JPG";
import nursestation from "../../Images/nursestation.JPG";
//react reveal
import Fade from "react-reveal/Fade";
import FeeSection from "./FeeSection";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






class FrontPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    


    render(){
        
        //this variable determines the size of icons based on window size.
        const icons = window.innerWidth > 800 ? "5x" : "2x";
        return(
            <div className="frontPage">
                {/* <div className="frontPageVideo">
                    <video className="background-video" muted loop autoPlay >
                        <source src={lvecommercial} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="videoButtonDiv">
                        <Button className="videoButton"> 
                            <Link to="/Location" className="videoButtonText" > Location </Link>
                        </Button>
                        <VideoModal />
                    </div>
                </div> */}
                <div className="frontPageVideo">
                    <iframe title="LVE Capsule Endoscopy" width="560" height="315" className="sidePageVideo" src="https://www.youtube.com/embed/R6Icr1I7KvI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="frontPageIntroDiv">
                    <div className="centerAlignerText">
                        <h1 className='centeredIntroTitle'>  Welcome to Las Vegas Endoscopy! </h1>

                        <h4 className="frontPageHeadingText">
                            Here at Las Vegas Endoscopy, we take pride in our work and our commitment to the community. We use state-of-the-art GI techniques, the newest technology, and top-tier staff to ensure the best experience possible for our patients.
                        </h4>
                    </div>
                </div>


                <div className="blockBar">
                    <h1 className="blockHeader"> Our Services </h1>
                </div>
                <div className="frontPageServicesMain">
                <div className="frontPageServicesDiv">
                    <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService 
                                media={ORRoom} 
                                linkTarget={"/ColonoscopyCancerScreening"} 
                                heading={"Colonoscopy Screenings"} 
                                margin="40px"
                                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                                />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService 
                                media={nursestation} 
                                linkTarget={"/UpperEndoscopy"} 
                                heading={"Upper Endoscopies (EGD)"} 
                                margin="40px"
                                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                />
                        </div>
                    </Fade>
                    {/* <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService media={sunrise} heading={"GI Clinic"} linkTarget={"/GIMotilityClinic"} />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService media={trollpicture} heading={"Hepatitis Clinic"} linkTarget={"/ViralHepatitisClinic"} />
                        </div>
                    </Fade> */}
                </div>
                </div>
                {/* <FrontPageButtonContainer /> */}
                {/* <Testimonials /> */}
                {/* I'm not sure whether I need this part or not. */}
                {/* {window.innerWidth > 500 ? */}

                 {/* : null } */}
                {/* {window.innerWidth < 500 ? */}
                <div className="whyChooseLVECarousel">
                    <WhyChooseLVECarousel />
                </div>
                <div className="blockBar">
                    <h1 className="blockHeader"> Why Las Vegas Endoscopy? </h1>
                </div>

                <FeeSection />
                
                <div className="socialMedia">
                    <div className="socialMediaDiv">
                        <h2 className="socialMediaTitle"> Find us on Social Media! </h2>
                        <div className="linkThumbnailHolder">
                            <a href="https://www.facebook.com/lvgastro/" className="linkThumbnailDiv facebook">
                                <FontAwesomeIcon icon={['fab', 'facebook']} size={icons} className="linkThumbnail"/>
                            </a>
                            <a href="https://twitter.com/lvgastro?lang=en" className="linkThumbnailDiv twitter">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size={icons} />
                            </a>
                            <a href="https://www.instagram.com/lvgastro/?hl=en" className="linkThumbnailDiv instagram">
                                <FontAwesomeIcon icon={['fab', 'instagram']} size={icons} />
                            </a>
                            <a href="https://www.youtube.com/channel/UC8UcyfVXDiZLm4NjXP3IRTg" className="linkThumbnailDiv youtube">
                                <FontAwesomeIcon icon={['fab', 'youtube']} size={icons} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* : null } */}
                
            </div>
        )
    }
}

export default FrontPage;