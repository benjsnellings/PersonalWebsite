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
            <a className="collapsedPanelOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
               aria-expanded="true" aria-controls="collapseOne">B.S. in Computer Engineering
            </a>
          </h4>
        </div>
        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
             aria-labelledby="headingOne">
          <div className="panel-body">
            <p>Got the degree. But damn it sucked.</p>
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
               aria-expanded="false" aria-controls="collapseFive"> Hinman CEO: Technology Entrepreneurship
            </a>
          </h4>
        </div>
        <div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingFive">
          <div className="panel-body">
            <p>Got a bunch of training. Its not all that useful but it looks good.</p>
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
            <p>Got a bunch of training. Its not all that useful but it looks good.</p>
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
               aria-expanded="false" aria-controls="collapseThree">Eagle Scout
            </a>
          </h4>
        </div>
        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
             aria-labelledby="headingThree">
          <div className="panel-body">
            <p>Got to play with fire and knives. whats not to love</p>
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
            <p>Did some small hacking with IDA PRO =)</p>
          </div>
        </div>
      </div>
    )
  }
}

export {MarylandCeEducation, MarylandEntreEducation, AmazonTraining, EagleScoutTraining, ReverseEngineeringTraining};

