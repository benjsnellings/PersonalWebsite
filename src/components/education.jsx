import React, {Component} from 'react'
import {MarylandEducation, AmazonEducation, EagleScoutTraining, ReverseEngineeringTraining} from './content'

export default class Education extends Component {
  render() {
    return (
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">


          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
                 data-animate-effect="fadeInLeft">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box fadeInUp animated">Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <MarylandEducation/>
                  <AmazonEducation/>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
                 data-animate-effect="fadeInLeft">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box fadeInUp animated">Training</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                  <EagleScoutTraining/>
                  <ReverseEngineeringTraining/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}
