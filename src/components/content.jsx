import React, {Component} from 'react'

class PrimeAirTimeline extends Component {
  render() {
    return (
      <div>
        <div className="timeline-icon color-amazon">
          <i className="icon-plane"/>
        </div>
        <div className="timeline-label">
          <h2>Software Engineer, PrimeAir- Amazon<span>2019-Current</span></h2>
          <p>Just started working on the prime air team</p>
        </div>
      </div>
    )
  }
}

class AlexaTimeline extends Component {
  render() {
    return (
      <div>
        <div className="timeline-icon color-amazon">
          <i className="icon-speech-bubble"/>
        </div>
        <div className="timeline-label">
          <h2>Software Engineer, Alexa Communications - Amazon<span>2017-2019</span></h2>
          <p>Worked on alexa communications and made large system design devops etc </p>
        </div>
      </div>
    )
  }
}

class CyberpointTimeline extends Component {
  render() {
    return (
      <div>
        <div className="timeline-icon color-cyberpoint">
          <i className="icon-lock3"/>
        </div>
        <div className="timeline-label">
          <h2>Software Engineer - Cyberpoint<span>2016-2017</span></h2>
          <p>Did java complexity software hardening</p>
        </div>
      </div>
    )
  }
}

class CollegeTimeline extends Component {
  render() {
    return (
      <div>
        <div className="timeline-icon color-maryland">
          <i className="icon-pen2"/>
        </div>
        <div className="timeline-label">
          <h2>Computer Engineering Major <span>Graduated 2016</span></h2>
          <p>Took classes in CS, EE, and Technology Entrepreneurship</p>
        </div>
      </div>
    )
  }
}

export {PrimeAirTimeline, AlexaTimeline, CyberpointTimeline, CollegeTimeline};

class MarylandCeEducation extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingOne">
          <h4 className="panel-title">
            <a className="collapsedPanelOne collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
               aria-expanded="false" aria-controls="collapseOne">B.S. in Computer Engineering - University of Maryland, College Park
            </a>
          </h4>
        </div>
        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingOne">
          <div className="panel-body">
            <p>A degree in Computer Engineering from the University of Maryland is a dual degree.
            I learned both Computer Science and Electric Engineering. </p>
            <h3>These are a few classes that i took</h3>
            <ul>
              <li>Operating Systems</li>
              <li>Compilers</li>
              <li>Algorithms</li>
              <li>Autonomous Robotics</li>
              <li>Advanced Control Theory</li>
              <li>Embedded Electronics Design</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class MarylandEntreEducation extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingFive">
          <h4 className="panel-title">
            <a className="collapsedPanelFive collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive"
               aria-expanded="false" aria-controls="collapseFive"> Hinman CEO: Technology Entrepreneurship Minor - University of Maryland, College Park
            </a>
          </h4>
        </div>
        <div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingFive">
          <div className="panel-body">
            <p>As the nation’s first living-learning entrepreneurship program,
              Hinman CEOs is a groundbreaking initiative placing entrepreneurial
              students from all technical and non-technical academic disciplines in a unique community.
              Students live together, learn about entrepreneurship, and can launch new ventures.
              The mission of Hinman CEOs is to foster an entrepreneurial spirit, create a sense of community and cooperation,
              and develop ethical leaders.</p>
            <a href="http://www.hinmanceos.umd.edu/">About Hinman CEOs program</a>
          </div>
        </div>
      </div>
    )
  }
}


class AmazonTraining extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingTwo">
          <h4 className="panel-title">
            <a className="collapsedPanelTwo collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo"
               aria-expanded="false" aria-controls="collapseTwo">Amazon Training
            </a>
          </h4>
        </div>
        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingTwo">
          <div className="panel-body">
            <h3>I have completed a lot of trainings during my tenure at amazon.</h3>
            <ul>
              <li>Interview Training</li>
              <li>AWS Solutions Architect</li>
              <li>DevOps Training</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class EagleScoutTraining extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingThree">
          <h4 className="panel-title">
            <a className="collapsedPanelThree collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree"
               aria-expanded="false" aria-controls="collapseThree">Eagle Scout - Boy Scouts of America
            </a>
          </h4>
        </div>
        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingThree">
          <div className="panel-body">
            <p>
              Achieved the rank of Eagle Scout.  Only about 4% of young men who start actually reach the rank.
              To achieve it I had to complete numerous small, medium, and long range goals and marks.
              I worked on numerous community projects.  However, the capping project was my own Eagle Scout project
              which involved leading a number of people, seeking out materials andrefurbishing the interiour of the local youth clubhouse.
              Scouting was not only a good learning experience and a lot of work, but it was also a job worth doing.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

class ReverseEngineeringTraining extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingFour">
          <h4 className="panel-title">
            <a className="collapsedPanelFour collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFour"
               aria-expanded="false" aria-controls="collapseFour">Reverse Engineering
            </a>
          </h4>
        </div>
        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingFour">
          <div className="panel-body">
            <p>
              I have used IDA Pro to disassemble and analyze code used by various companies. The purpose of analyzing
              the code is to find vulnerabilities before bad actors have a chance to.
            </p>
            <p>
              IDA Pro is a feature rich, cross-platform, multi-processor disassembler and debugger developed by Hex-Rays,
              a private organization independent of governmental agencies and stock market pressure.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export {MarylandCeEducation, MarylandEntreEducation, AmazonTraining, EagleScoutTraining, ReverseEngineeringTraining};
