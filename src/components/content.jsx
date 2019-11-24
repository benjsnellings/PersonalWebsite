import React, {Component} from 'react'

class PrimeAirTimeline extends Component {
  render() {
    return (
      <div className="timeline-label">
        <h2>Software Engineer, PrimeAir- Amazon<span>2019-Current</span></h2>
        <p>Just started working on the prime air team</p>
      </div>
    )
  }
}

class AlexaTimeline extends Component {
  render() {
    return (
      <div className="timeline-label">
        <h2>Software Engineer, Alexa - Amazon<span>2017-2019</span></h2>
        <p>Worked on alexa and made large system design devops etc </p>
      </div>
    )
  }
}

class CyberpointTimeline extends Component {
  render() {
    return (
      <div className="timeline-label">
        <h2>Software Engineer - Cyberpoint<span>2016-2017</span></h2>
        <p>Did java complexity software hardening</p>
      </div>
    )
  }
}

class CollegeTimeline extends Component {
  render() {
    return (
      <div className="timeline-label">
        <h2>Computer Engineering Major <span>Graduated 2016</span></h2>
        <p>Took classes in CS, EE, and Technology Entrepreneurship</p>
      </div>
    )
  }
}

export { PrimeAirTimeline, AlexaTimeline, CyberpointTimeline, CollegeTimeline };
