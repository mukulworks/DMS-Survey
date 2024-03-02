import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../css/style.css";
import companyid_icon from "../images/companyid_icon.png";
import eye_icon from "../images/eye.png";
import logo from "../images/logo.png";
import user_icon_btn from "../images/user_icon_btn.png";
import admin_icon_btn from "../images/admin_icon_btn.png";
import password_icon from "../images/password_icon.png";

function LogInScreen({ loggedIn }) {
  const [company, setCompany] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("user");

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  // const navigate = useNavigate();

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const loginType = loggedIn ? " CDB_ADMIN " : "CDB_USER";

  //   const data = {
  //     loginCountryCode: "IN",
  //     deviceScreenSize: "4.59",
  //     appVersion: "V000",
  //     loginType: "CDB_USER",
  //     deviceOs: "Android",
  //     ipAddress: "",
  //     deviceOsVersion: "27",
  //     firebase: "",
  //     deviceId: "",
  //     versionCode: "zoomwheel",
  //     loginMacAddress: "7C:46:85:53:E2:33",
  //     loginBrandCode: "UC",
  //     loginPassword: password,
  //     loginUserId: username,
  //     deviceMobile: "",
  //     loginCompanyId: company,
  //     appReleasePhase: "DEMO",
  //   };

  //   fetch(
  //     "https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/Login/GetLoginInfoV2",
  //     {
  //       method: "POST",
  //       headers: {
  //         ApplicationMode: "ONLINE",
  //         EnvironmentType: "DEMO",
  //         BrandCode: "UC",
  //         CountryCode: "IN",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       toast.success(data.loginNotValidReason);
  //       localStorage.setItem("token", data.accessToken);
  //       // navigate("/admin");
  //       // Check if the login was successful
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div className="body2">
      <div className="pic">
        <div className="pic_tx_mn">
          <img className="img-responsive fm_icon" src={logo} alt="" />
          <div className="dms_tx">
            <p>CRM-DMS</p>
          </div>
        </div>
      </div>
      <div className="container">
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
          <img className="img-responsive fm_icon" src={companyid_icon} alt="" />
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
          <img className="img-responsive fm_icon" src={companyid_icon} alt="" />
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
          <img className="img-responsive fm_icon" src={password_icon} alt="" />
          <img className="img-responsive fm_icon2" src={eye_icon} alt="" />
        </div>
        <div className="ftr_md3">
          <button type="submit" className="log_btn2">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInScreen;
