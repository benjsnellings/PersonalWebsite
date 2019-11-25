import React, {Component} from 'react'

class PrimeAirTimeline extends Component {
  render() {
    return (
      <div>
        <div className="timeline-icon color-4">
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
        <div className="timeline-icon color-3">
          <i className="icon-speech-bubble"/>
        </div>
        <div className="timeline-label">
          <h2>Software Engineer, Alexa - Amazon<span>2017-2019</span></h2>
          <p>Worked on alexa and made large system design devops etc </p>
        </div>
      </div>
    )
  }
}

class CyberpointTimeline extends Component {
  render() {
    return (
      <div>
        <div className="timeline-icon color-4">
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
        <div className="timeline-icon color-5">
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
