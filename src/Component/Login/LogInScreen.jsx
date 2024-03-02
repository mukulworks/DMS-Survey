import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../css/style.css";
import companyid_icon from "../images/companyid_icon.png";
import eye_icon from "../images/eye.png";
import logo from "../images/logo.png";
import user_icon_btn from "../images/user_icon_btn.png";
import admin_icon_btn from "../images/admin_icon_btn.png";
import password_icon from "../images/password_icon.png";
import { submitCredential, LOGIN_HEADER } from "../utiles/api_constant";

function LogInScreen() {
  const [company, setCompany] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("user");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };
  const url = submitCredential;
  const headers = LOGIN_HEADER;

  // const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    let param = {
      loginType: selectedRole === "user" ? "CDB_USER" : "CDB_ADMIN",
      companyId: company.toUpperCase(),
      password: password,
      userId: username.toUpperCase(),
      appVersion: "2",
      versionCode: "SERVICE_RECEPTION",
      macAddress: "90:e7:c4:04:cb:39",
    };

    console.log("param -", param);
    console.log("url -", url);

    let body = JSON.stringify(param);
    console.log("body -", body);

    console.log("headers -", headers);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(param),
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          toast.success("Login successful!");
          localStorage.setItem("token", data.accessToken);
          setLoggedIn(true);
        } else {
          toast.error(data.loginNotValidReason || "Login failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred while logging in");
      });
  };

  return (
    <div className="body2">
      <div className="mobile_logo">

      <img className="img-responsive" src={logo} alt="" />
</div>
      <div className="pic">
        <div className="pic_tx_mn">
          <img className="img-responsive fm_icon" src={logo} alt="" />
          <div className="dms_tx">
            <p>CRM-DMS</p>
          </div>
        </div>
      </div>
      <div className="container logn_bg2_mn">
        <div className="pic2"></div>
        
        <div className="log_tx_mn">
          <h2>Login to Continue</h2>
        </div>
        <div className="ftr_md3">
          <button
            type="button"
            className={selectedRole === "user" ? "use_btn" : "admin_btn"}
            onClick={() => handleRoleSelect("user")}
          >
            <img className="img-responsive" src={user_icon_btn} alt="" /> User
          </button>
          <button
            type="button"
            className={selectedRole === "admin" ? "use_btn" : "admin_btn"}
            onClick={() => handleRoleSelect("admin")}
          >
            <img className="img-responsive" src={admin_icon_btn} alt="" /> Admin
          </button>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group fom_wd">
            <input
              type="text"
              name="companyID"
              className="control_n1"
              placeholder="Company ID"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <img
              className="img-responsive fm_icon"
              src={companyid_icon}
              alt=""
            />
            <img className="img-responsive fm_icon2" src={eye_icon} alt="" />
          </div>
          <div className="form-group fom_wd">
            <input
              type="text"
              name="userID"
              className="control_n1"
              placeholder="User ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <img
              className="img-responsive fm_icon"
              src={companyid_icon}
              alt=""
            />
          </div>
          <div className="form-group fom_wd">
            <input
              type="password"
              name="password"
              className="control_n1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              className="img-responsive fm_icon"
              src={password_icon}
              alt=""
            />
            <img className="img-responsive fm_icon2" src={eye_icon} alt="" />
          </div>
          <div className="ftr_md3">
            <button type="submit" className="log_btn2">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogInScreen;
