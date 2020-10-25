import React, { Component } from "react";
import Algorithm from "../Algorithm/Algorithm";

import "./Manager.css";

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income: [],
      expenditure: [],
      incomeName: "",
      incomeAmount: "",
      expenditureName: "",
      expenditureAmount: "",
      expenditureCategory: "",
      toggleResult: false,
    };
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  incomeClick = (e) => {
    e.preventDefault();
    if (this.state.incomeName && this.state.incomeAmount) {
      let newEntry = [this.state.incomeName, Number(this.state.incomeAmount)];
      let tempState = [...this.state.income];
      tempState.push(newEntry);
      this.setState({
        income: tempState,
        incomeName: "",
        incomeAmount: "",
      });
    } else {
      alert("Form Not Fully Filled!");
    }
  };

  expenditureClick = (e) => {
    e.preventDefault();
    if (
      this.state.expenditureName &&
      this.state.expenditureAmount &&
      this.state.expenditureCategory
    ) {
      let newEntry = [
        this.state.expenditureName,
        Number(this.state.expenditureAmount),
        this.state.expenditureCategory,
      ];
      let tempState = [...this.state.expenditure];
      tempState.push(newEntry);
      this.setState({
        expenditure: tempState,
        expenditureName: "",
        expenditureAmount: "",
        expenditureCategory: "",
      });
    } else {
      alert("Form Not Fully Filled!");
    }
  };

  toggleResult = () => {
    this.setState({
      toggleResult: !this.state.toggleResult,
    });
  };

  render() {
    const {
      income,
      expenditure,
      incomeName,
      incomeAmount,
      expenditureName,
      expenditureAmount,
      expenditureCat,
    } = this.state;

    if (!this.state.toggleResult) {
      return (
        <div className="MainContainer">
          <div className="displayContainer">
            <div className="income-div">
              <h2>SOURCES OF INCOME OR MONEY AT HAND</h2>
              {income.map((val, i) => (
                <>
                  <h3 key={i}>
                    {val[0].toUpperCase()} > ${val[1]}
                  </h3>
                  <hr />
                </>
              ))}
            </div>

            <hr className="hr" />

            <div className="expenditure-div">
              <h2>EXPENDITURE(S) OR DONATIONS(S)</h2>
              {expenditure.map((val, i) => (
                <>
                  <h3 key={i}>
                    {val[0].toUpperCase()} > ${val[1]} ({val[2].toLowerCase()})
                  </h3>
                  <hr />
                </>
              ))}
            </div>
            <button className="manage-btn" onClick={this.toggleResult}>
              MANAGE
            </button>
          </div>

          <div className="inputContainer">
            <div className="income-input">
              <h2>ADD SOURCE(S) OF INCOME OR MONEY AT HAND</h2>
              <label htmlFor="incomeName">TITLE</label>
              <input
                type="text"
                placeholder="TITLE OF INCOME"
                name="incomeName"
                value={incomeName}
                onChange={this.inputHandler}
              />
              <br />
              <label htmlFor="incomeAmount">AMOUNT(ONLY)</label>
              <input
                type="number"
                placeholder="AMOUNT OF INCOME"
                name="incomeAmount"
                value={incomeAmount}
                onChange={this.inputHandler}
              />
              <br />
              <button onClick={this.incomeClick}>ADD INCOME</button>
            </div>

            <hr className="hr" />

            <div className="expenditure-input">
              <h2>ADD EXPENDITURE(S) OR DONATIONS</h2>
              <label htmlFor="expenditureName">TITLE</label>
              <input
                type="text"
                placeholder="TITLE OF EXPENDITURE"
                name="expenditureName"
                value={expenditureName}
                onChange={this.inputHandler}
              />
              <br />
              <label htmlFor="expenditureAmount">AMOUNT(ONLY)</label>
              <input
                type="number"
                placeholder="AMOUNT OF EXPENDITURE"
                name="expenditureAmount"
                value={expenditureAmount}
                onChange={this.inputHandler}
              />
              <br />
              <label>CATEGORY</label>
              <select
                name="expenditureCategory"
                value={expenditureCat}
                onChange={this.inputHandler}
              >
                <option hidden>CATEGORY</option>
                <option value="PRIMARY">PRIMARY</option>
                <option value="SECONDARY">SECONDARY</option>
              </select>
              <br />
              <button onClick={this.expenditureClick}>ADD EXPENDITURE</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Algorithm
            income={this.state.income}
            expenditure={this.state.expenditure}
            toggleResult={this.toggleResult}
          />
        </div>
      );
    }
  }
}

export default Manager;
