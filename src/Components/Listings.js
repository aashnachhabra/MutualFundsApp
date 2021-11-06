import React from "react";
import { withRouter } from "react-router";
import { Button, Avatar } from "@material-ui/core";
import { useState } from "react";
const funds = [
  {
    fundName: "Axis Small Cap Fund Growth",
    url: "https://api.mfapi.in/mf/125354",
    fundHouse: "Axis Mutual Fund",
    icon: "/icons/axis_bank.png",
  },
  {
    fundName: "Kotak Equity Opportunities Direct Growth",
    url: "https://api.mfapi.in/mf/120158",
    fundHouse: "Kotak Mahindra Mutual Fund",
    icon: "/icons/kotak-logo-identity.jpg",
  },
  {
    fundName:
      " ICICI Prudential Global Advantage Fund (FOF) - Direct Plan - IDCW",
    url: "https://api.mfapi.in/mf/147645",
    fundHouse: "ICICI Prudential Mutual Fund",
    icon: "/icons/icici-bank.png",
  },
  {
    fundName: "SBI Focused Equity Fund Direct Plan Growth",
    url: "https://api.mfapi.in/mf/119727",
    fundHouse: "SBI Mutual Fund",
    icon: "/icons/sbi_bank.png",
  },
  {
    fundName: "Mirae Asset Tax Saver Fund-Direct Plan-Growth",
    url: "https://api.mfapi.in/mf/135781",
    fundHouse: "Mirae Asset Mutual Fund",
    icon: "/icons/mirae_asset_mutual_fund.png",
  },
];

function Listings(props) {
  const { history } = props;
  const [searchItem, setSearchItem] = useState("");
  const clickHandler = () => {
    history.push("/login");
  };
  return (
    <>
      <div
        style={{ border: "5px ridge #4CA3DD", margin: "15px", padding: "20px" }}
      >
        <nav
          className="navbar navbar-light py-3 justify-content-between"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <span
            className="navbar-brand"
            style={{ fontSize: "49px", fontFamily: "serif" }}
          >
            Mutual Funds
          </span>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
            />
            <Button variant="contained" color="primary" onClick={clickHandler}>
              Logout
            </Button>
          </form>
        </nav>

        <div className="list-group" style={{ backgroundColor: "#E4F0FC" }}>
          {funds
            .filter((val) => {
              if (searchItem === "") {
                return val;
              } else if (
                val.fundName.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return val;
              }
            })
            .map((fund, index) => {
              return (
                <div
                  key={index}
                  style={{ margin: "8px" }}
                  className="list-group-item list-group-item-action flex-column align-items-start "
                  onClick={() =>
                    history.push({
                      pathname: "/fundInfo",
                      state: { data: fund.url },
                    })
                  }
                >
                  <Avatar src={fund.icon}></Avatar>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{fund.fundName}</h5>
                  </div>
                  <p className="mb-1">
                    <b>Fund House :</b> {fund.fundHouse}
                  </p>
                  <small>| Equity |</small>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default withRouter(Listings);
