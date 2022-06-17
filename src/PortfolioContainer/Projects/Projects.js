import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Projects.css'

export default function Projects(props) {

  
    return (
    
        <div className="projects-container screen-container" id={props.id || ""}>
       <div className='projects-parent'>
         <ScreenHeading title={'Projects'} subHeading={'My Work'}/>
         </div>
         <div className='row'>
       
           <div className='col-12 col-md-6 col-lg-4'>
                <div className='card'>
                   <img src='images/frie.png' alt="Project1" class="card-img-top"/>
                   <div className='card-body'>
                      <h5 className='card-title'>Housing Market Place App</h5>
                      <p className='card-text'>
                        Frameworks: React, FireBase/FireStore, NodeJs
                      </p>
                
                      <div className="d-flex flex-row justify-content-center">
                      <div className='inner-button'>
                      <a href="https://housemarketapp-htyz3bss3-uzoziealpha.vercel.app/">
                      <button className="btn highlighted-btn">Go to Webpage  <i class="fa fa-globe"></i></button>
                      </a>
                      <a href="https://github.com/uzoziealpha/housemarketapp">
                            <button className="btn highlighted-btn">Go to GitHub  <i class="fa fa-github"></i></button>
                      </a>
                      </div>
                     </div> 
                   </div>
                   </div>
                  </div>

                  
                  <div className='col-12 col-md-6 col-lg-4'>
                  <div className='card'>
                     <img src='images/ve.png' alt="Project2" class="card-img-top"/>
                     <div className='card-body'>
                        <h5 className='card-title'>Vegan Delivery App</h5>
                        <p className='card-text'>
                          Frameworks: .NET, AZURE, RAZORPAGES, MSSQL
                        </p>
                        <div className=" d-flex flex-row justify-content-center">
                         <div className='inner-button'>
                        <a href="https://veeggan2022.azurewebsites.net/Customer/Home">
                        <button className="btn highlighted-btn">Go to Webpage  <i class="fa fa-globe"></i></button>
                        </a>
                        <a href="https://github.com/uzoziealpha/VeeganSnacks">
                            <button className="btn highlighted-btn">Go to GitHub  <i class="fa fa-github"></i></button>
                        </a>
                        </div>
                       </div> 
                     </div>
                     </div>
                    </div>

                     
                  <div className='col-12 col-md-6 col-lg-4'>
                  <div className='card'>
                     <img src='images/ve.png' alt="Project2" class="card-img-top"/>
                     <div className='card-body'>
                        <h5 className='card-title'>React Portfolio</h5>
                        <p className='card-text'>
                          Frameworks: React, TailWind Css, Html
                        </p>
                        <div className=" d-flex flex-row justify-content-center">
                         <div className='inner-button'>
                        <a href="https://obiportfolio.netlify.app/">
                        <button className="btn highlighted-btn">Go to Webpage  <i class="fa fa-globe"></i></button>
                        </a>
                        <a href="https://github.com/uzoziealpha/tailwindcssportfolio">
                            <button className="btn highlighted-btn">Go to GitHub  <i class="fa fa-github"></i></button>
                        </a>
                        </div>
                       </div> 
                     </div>
                     </div>
                    </div>







                    <div className='col-12 col-md-6 col-lg-4'>
                    <div className='card'>
                       <img src='images/frieed.png' alt="Project3" class="card-img-top"/>
                       <div className='card-body'>
                          <h5 className='card-title'>Candle E-Commerce Store</h5>
                          <p className='card-text'>
                            Frameworks: WooCommerce ,Plugins,  Yoast SEO, & WordPress
                          </p>
                    
                          <div className="d-flex flex-row justify-content-center">
                          <div className='inner-button'>
                          <a href="https://calmcandlessentials.com/">
                          <button className="btn highlighted-btn">Go to Webpage  <i class="fa fa-globe"></i></button>
                          </a>
                          </div>
            
                         </div> 
                       </div>
                       </div>
                      </div>
           
         

                      <div className='col-12 sm-6 col-md-6 col-lg-4'>
                      <div className='card'>
                         <img src='images/ecomm.png' alt="Project1" class="card-img-top"/>
                         <div className='card-body'>
                            <h5 className='card-title'>E-Commerce Clothing Store</h5>
                            <p className='card-text'>
                              Frameworks: REACT, REDUX, FIREBASE/FIRESTORE , NODEJS
                            </p>
                      
                            <div className="d-flex flex-row justify-content-center">
                         
                            <div className='inner-button'>
                            <a href="http://obiecommportfolio.herokuapp.com/">
                            <button className="btn highlighted-btn">Go to Webpage  <i class="fa fa-globe"></i></button>
                            </a>
                         
                          
                            <a href="https://github.com/uzoziealpha">
                            <button className="btn highlighted-btn">Go to GitHub  <i class="fa fa-github"></i></button>
                            </a>
                            </div>
                           </div> 
                         </div>
                         </div>
                        </div>

        
      


           
         
         
         
         
         
         
           </div>
           </div>
         

          

     
       
   
  )
}
