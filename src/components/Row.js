import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionCell from "./QuestionCell";

export class Row extends Component {
  render() {
    const cells = [];
    for (let col = 0; col < 6; col++) {
      const category = this.props.categories[col][0].category;

      //Finding all Q's values that match the rows point value
      const isAnswered = (this.props.categories[col].find(q => {
        return q.value === this.props.value;
      }) || { isAnswered: true }).isAnswered /* Handle the Weekly Wager */;

      const isDailyDouble = this.props.dailyDoubleCol === col && this.props.isDailyDoubleRow;

      cells.push(
        <QuestionCell
          key={col}
          value={this.props.value}
          isAnswered={isAnswered}
          openQuestion={this.props.openQuestion}
          category={Object.keys(this.props.categories)[col]}
          isDailyDouble={isDailyDouble}
        />
      );
    }
    return <tr>{cells}</tr>;
  }
}

const mapStateToProps = state => {
  let currentVersion = state.appReducer.currentVersion;

  return {
    categories: state.appReducer.game[currentVersion].categories,
    currentVersion
  };
};

export default connect(mapStateToProps, {})(Row);
