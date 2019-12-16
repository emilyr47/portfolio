import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">


         <div className="row education">
         <h1><span>Resume</span></h1>
         <div className="downloads">
         <a href="images/Resume_EmilyRaper.pdf" target="_blank">Download PDF Version</a><br></br>
         <a href="images/plainresume.txt" target="_blank">View Plain Text Version</a>

         </div><br></br>
            <div className="three columns header-col">

               <h1><span>Education</span></h1>

            </div>
            

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}<span>&bull;</span>
                          {item.minor}
                          <span>&bull;</span> <em className="date">{item.GraduationMonth} {item.GraduationYear}</em></p>
                          <p>
                          {item.GPA}
                          </p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
                                        <a href="https://umn.credly.com/member-badges/19394878" target="_blank" rel="noopener noreferrer">View Credential</a><br></br>

            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work Experiences</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.Start} {item.End}<span>&bull;</span>{item.Location}</em></p>

                          <p>
                          {item.Achievements}
                          
                          </p>
                          
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills </span></h1><br></br>
               <h4>Top Web Skills</h4>
               <p>-HTML<br></br>-CSS<br></br>-JavaScript<br></br>-React.js<br></br>-Node.js<br></br>-XML &amp; DITA<br></br>-Scrum &amp; Agile</p>
            </div>
            <h1><span></span></h1><br></br><br></br>
              <div className="three columns header-col">
            <h4>Software Skills</h4>
               <p>-Adobe Creative Cloud Suite (most experienced in Photoshop, <br></br>InDesign, Framemaker, &amp; Illustrator)<br></br>-Drupal<br></br>-Trello, JIRA, &amp; Asana<br></br>-Google Analytics &amp; Google Data Studio<br></br>-ServiceNow &amp; Kace<br></br>-Wordpress, WIX, &amp; SquareSpace<br></br>-Microsoft Office Suite</p>
               
               </div> 
               <h4>Soft Skills</h4>
               <p>-Project &amp; goal oriented<br></br>-Self-motivated worker<br></br>-Organized leader<br></br>-Collaborator &amp; innovator<br></br>-Writer &amp; communicator<br></br>-Problem solver<br></br>-End user focused</p>
         </div>
         

      </section>
    );
  }
}