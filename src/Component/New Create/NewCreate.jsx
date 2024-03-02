import React from "react";
import logo2 from "../images/logo2.png";
import NoPath from "../images/NoPath.png";
import arro from "../images/arro.png";
import "../css/style.css";
import { Link } from "react-router-dom";

function NewCreate() {
  return (
    <div className="mn_bdy">
      <div className="header_top">
        <div className="container-fluid">
          <div className="arro_mn">
            <Link to="/DMS_Survey/Pending_Survey">
              <img className="img-responsive" src={arro} alt="" />
            </Link>
          </div>
          <div className="header_pic">
            <img className="img-responsive" src={logo2} alt="" />
            <img className="img-responsive can_pc" src={NoPath} alt="" />
          </div>
        </div>
      </div>

      <div className="pending_survey_mn">
        <div className="container-fluid">
          <div className="survey_wd">
            <h2>Create New</h2>
            <hr className="line1" />
          </div>

          <div className="form_mn_wd">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="leber_tx">
                <span>Dealer</span>
                <div className="form-group fm_styl">
                  <input
                    type="text"
                    name="name"
                    className="form-control fm_sty2"
                    id="name"
                    placeholder="Dealer"
                    required="required"
                    fdprocessedid="4srabr"
                  />
                </div>
              </div>
              <div className="leber_tx">
                <span>Contact Person</span>
                <div className="form-group fm_styl">
                  <input
                    type="text"
                    name="name"
                    className="form-control fm_sty2"
                    id="name"
                    placeholder="Contact Person"
                    required="required"
                    fdprocessedid="4srabr"
                  />
                </div>
              </div>
              <div className="leber_tx">
                <span>Mobile</span>
                <div className="form-group fm_styl">
                  <input
                    type="text"
                    name="name"
                    className="form-control fm_sty2"
                    id="name"
                    placeholder="98XXXXXXXX"
                    required="required"
                    fdprocessedid="4srabr"
                  />
                </div>
              </div>
              <div className="leber_tx">
                <span>Province</span>
                <div className="form-group fm_styl">
                  <input
                    type="text"
                    name="name"
                    className="form-control fm_sty2"
                    id="name"
                    placeholder="Province"
                    required="required"
                    fdprocessedid="4srabr"
                  />
                </div>
              </div>
              <div className="leber_tx">
                <span>Comment</span>
                <div className="form-group fm_styl">
                  <textarea
                    rows="4"
                    name="message"
                    className="form-control fm_sty2_mes"
                    id="message"
                    placeholder="Comment"
                    required="required"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="leber_tx">
                <span>Contacted With</span>
                <div className="form-group fm_styl">
                  <input
                    type="text"
                    name="name"
                    className="form-control fm_sty2"
                    id="name"
                    placeholder="Owner"
                    required="required"
                    fdprocessedid="4srabr"
                  />
                </div>
              </div>
              <div className="leber_tx">
                <span>Designation</span>
                <div className="form-group fm_styl">
                  <input
                    type="text"
                    name="name"
                    className="form-control fm_sty2"
                    id="name"
                    placeholder="Designation"
                    required="required"
                    fdprocessedid="4srabr"
                  />
                </div>
              </div>
              <div className="leber_tx">
                <span>Email</span>
                <div className="form-group fm_styl">
                  <input
                    type="text"
                    name="name"
                    className="form-control fm_sty2"
                    id="name"
                    placeholder="@gmail.com"
                    required="required"
                    fdprocessedid="4srabr"
                  />
                </div>
              </div>
              <div className="leber_tx">
                <span>City</span>
                <div className="form-group fm_styl">
                  <input
                    type="text"
                    name="name"
                    className="form-control fm_sty2"
                    id="name"
                    placeholder="City"
                    required="required"
                    fdprocessedid="4srabr"
                  />
                </div>
              </div>
              <div className="aro_btn2">
                <a href="" className="button arrow">
                  Start
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCreate;
