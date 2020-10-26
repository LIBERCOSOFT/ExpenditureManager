import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Algorithm.css";

function Algorithm({ income, expenditure }) {
  const [reserve, setreserve] = useState(false);
  const [reserveAmount, setreserveAmount] = useState(0);
  const [expenditures, setexpenditures] = useState(expenditure);

  let incomeTotal = 0;
  let expenditureTotal = 0;
  // eslint-disable-next-line
  income.map((val) => {
    incomeTotal += val[1];
  });
  // eslint-disable-next-line
  expenditure.map((val) => {
    expenditureTotal += val[1];
  });

  if (incomeTotal > expenditureTotal) {
    return (
      <div className="container">
        <div className="centerElements">
          <h1>ALL DONATION(S) OR EXPENDITURE(S) ARE GOOD TO GO</h1>
        </div>

        <p>Below are the list of expenditure(s) or donation(s):</p>
        <ul>
          {expenditure.map((val, i) => (
            <li key={i}>
              <b>{val[0].toUpperCase()}</b> {">"} <i>${val[1]}</i> (
              {val[2].toLowerCase()})
            </li>
          ))}
        </ul>

        <div className="centerElements">
          <h2>
            TOTAL EXPENDITURE: <i>${expenditureTotal}</i>
          </h2>
          <h2>
            TOTAL INCOME: <i className="greenI">${incomeTotal}</i>
          </h2>
          <h2>
            INCOME BALANCE:
            <i className="greenI">${incomeTotal - expenditureTotal}</i>
          </h2>
          <Link to="/">
            <button>HOME</button>
          </Link>
        </div>
      </div>
    );
  }

  if (incomeTotal === expenditureTotal) {
    let reserveClick = () => {
      let newExpenditures = [...expenditures];
      let secExpenditures = [];
      if(secExpenditures.length === 0){
        alert("No Secondary Expenditure to Deduce From, Go Home To Edit Your Input.")
      }
      // eslint-disable-next-line
      newExpenditures.map((val) => {
        if (val[2] === "SECONDARY") {
          secExpenditures.push(val[1]);
        }
      });
      let reserveDivide = reserveAmount / secExpenditures.length;
      // eslint-disable-next-line
      newExpenditures.map((val) => {
        if (val[2] === "SECONDARY") {
          if (val[1] - reserveDivide >= 0) {
            val[1] -= reserveDivide;
          } else {
            val[1] = 0;
          }
        }
      });
      setexpenditures(newExpenditures);
    };

    let toggleReserve = () => {
      setreserve(true);
    };

    return (
      <div className="container">
        <h1>
          ALL DONATIONS AND INCOME ARE EQUAL, WOULD YOU LIKE TO RESERVE SOME
          CASH?
        </h1>
        <div className="equalContainer">
          {reserve ? (
            <>
              <input
                type="number"
                onChange={(e) => {
                  setreserveAmount(e.target.value);
                }}
              />{" "}
              <br />
              <button onClick={reserveClick}>RESERVE</button>
              <button
                onClick={() => {
                  setreserve(false);
                }}
              >
                NO
              </button>
            </>
          ) : (
            <>
              <button onClick={toggleReserve}>YES</button>
              <button
                onClick={() => {
                  setreserve(false);
                }}
              >
                NO
              </button>
            </>
          )}
        </div>

        <p>Below are the list of expenditure(s) or donation(s):</p>
        <ul>
          {expenditures.map((val, i) => (
            <li key={i}>
              <b>{val[0].toUpperCase()}</b> {">"} <i>${val[1]}</i> (
              {val[2].toLowerCase()})
            </li>
          ))}
        </ul>

        <div className="centerElements">
          <h2>
            TOTAL EXPENDITURE: <i>${expenditureTotal}</i>
          </h2>
          <h2>
            TOTAL INCOME: <i className="greenI">${incomeTotal}</i>
          </h2>
          <h2>
            INCOME BALANCE: <i>${incomeTotal - expenditureTotal}</i>
          </h2>
          <Link to="/">
            <button>HOME</button>
          </Link>
        </div>
      </div>
    );
  }

  if (incomeTotal < expenditureTotal) {
    return (
      <div className="container">
        <h1>
          YOUR INCOME IS LESSER THAN YOUR EXPENDITURE(S) OR DONATIONS(S),
          <br />
          PLEASE GO AND RE-ADJUST THE EXPENDITURE AMOUNT IN THE HOME PAGE.
          <br />
          <div className="centerElements">
            <Link to="/">
              <button>GO BACK</button>
            </Link>
            
          </div>
        </h1>
      </div>
    );
  }
}

export default Algorithm;
