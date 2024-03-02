import React from "react";
import "../css/style.css";
import logo2 from "../images/logo2.png"; // Import images
import NoPath from "../images/NoPath.png";
import { Link } from "react-router-dom";

function PendingSurvey() {
  return (
    <div className="mn_bdy">
      <div className="header_top">
        <div className="container-fluid">
          <div className="header_pic">
            <img className="img-responsive" src={logo2} alt="" />
            <img className="img-responsive can_pc" src={NoPath} alt="" />
          </div>
        </div>
      </div>

      <div className="pending_survey_mn">
        <div className="container-fluid">
          <div className="survey_wd1">
            <h2>Pending Survey</h2>
            <hr className="line1" />
          </div>
          <div className="survey_wd4">
            <div id="custom-search-input">
              <div className="input-group col-md-12">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="Search.."
                />
                <span className="input-group-btn">
                  <button className="btn btn-info btn-lg" type="button">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="survey_wd3">
            <div className="crt_wd">
              <Link to="/DMS_Survey/New_Survey">
                <button type="button" className="crt_btn2">
                  Create New
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="table_mn_bx">
        <div className="">
          <div className="table_hd">
            <div className="hd1">
              <p>Sr.</p>
            </div>
            <div className="hd2">
              <p>Dealer</p>
            </div>
            <div className="hd3">
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="table_hd2">
            <ul>
              <li>
                <div className="tex1">
                  <p>1.</p>
                </div>
                <div className="tex2">
                  <p>Addison Auto Exchange</p>
                </div>
                <div className="tex3">
                  <p>4164662004</p>
                </div>
                <div className="tex4">
                  <a href="">
                    <div className="font_con">
                      <i className="fa fa-fw" aria-hidden="true">
                        
                      </i>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingSurvey;
