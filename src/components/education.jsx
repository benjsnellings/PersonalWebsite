import React, {Component} from 'react'

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
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                           aria-controls="collapseOne">Master Degree Graphic Design
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
                         aria-labelledby="headingOne">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-6">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                              there live the blind texts. </p>
                          </div>
                          <div className="col-md-6">
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                              language ocean.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                           aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree of Computer Science
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="headingTwo">
                      <div className="panel-body">
                        <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and
                          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.</p>
                        <ul>
                          <li>Separated they live in Bookmarksgrove right</li>
                          <li>Separated they live in Bookmarksgrove right</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                           aria-expanded="false" aria-controls="collapseThree">Diploma in Information Technology
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="headingThree">
                      <div className="panel-body">
                        <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and
                          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
                           aria-expanded="false" aria-controls="collapseFour">Diploma in Information Technology
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="headingFour">
                      <div className="panel-body">
                        <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and
                          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive"
                           aria-expanded="false" aria-controls="collapseFive">High School Secondary Education
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="headingFive">
                      <div className="panel-body">
                        <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and
                          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
