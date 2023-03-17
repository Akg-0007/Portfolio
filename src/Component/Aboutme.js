import React from 'react'
import '../App.css'



function Aboutme() {
  return (
    <>
      <div className='title'>
        <div className='title-behind'>About Me</div>
        <div className='title-front'>KNOW ME MORE</div>
      </div>
      <div className='about'>
        <div className='about-left'>
          <div className='about-left-title'>I'm <span class="tp">Akash Gupta,</span> Full Stack Developer</div>
          <p className='about-left-content'>
            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className='about-right'>
          <ul className='about-right-ul'>
            <li className='about-right-li'><span className='about-li-span'>Name:</span>Akash Gupta</li>
            
            <li className='about-right-li'><span className='about-li-span'>Email:</span>
              <a href="mailto:chat@simone.com" className='tp'>Akash.gupta@vp.com</a></li>
            
            <li className='about-right-li'><span className='about-li-span'>Age:</span>22</li>
            
            <li className='about-right-li4'><span className='about-li-span'>From:</span>U.K ,india</li>


          </ul>
          <a href="/demo/react/simone/demo/static/media/resume.c84e759e31a37c0be66e.pdf" class="btn btn-pri dwn">Download CV</a>

        </div>
        </div>
        <div class="grid  ">
          <div class="row1">
            <div class="c6">
              <div class="featured">
                <h4 class="img-cent">
                  <span>10</span>+</h4>
                <p class="mb-0 ">Years Experiance</p>
              </div>
            </div>
            <div class="c6">
              <div class="featured">
                <h4 class="img-cent">
                  <span>250</span>+</h4>
                <p class="mb-0 ">Happy Clients</p>
              </div>
            </div>
            <div class="c6">
              <div class="featured">
                <h4 class="img-cent">
                  <span>650</span>+</h4>
                <p class="mb-0 ">Projects Done</p>
              </div>
            </div>
            <div class="c6">
              <div class="featured">
                <h4 class="img-cent">
                  <span>38</span></h4>
                <p class="mb-0 ">Get Awards</p>
              </div>
            </div>
          </div>
        </div>

      

    </>
  )
}

export default Aboutme