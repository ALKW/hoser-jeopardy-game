import React, { Component } from 'react';

import Row from '../components/Row';


export default (props) => {
  const multiplier = props.currentVersion === 'jeopardy' ? 1 : 2;
  return(
    <tbody>
      <Row value={200 * multiplier} openQuestion={props.openQuestion} categories={props.categories} dailyDoubleCol={props.dailyDoubleCol} isDailyDoubleRow={0 === props.dailyDoubleRow}  />
      <Row value={400 * multiplier} openQuestion={props.openQuestion} categories={props.categories} dailyDoubleCol={props.dailyDoubleCol} isDailyDoubleRow={1 === props.dailyDoubleRow}  />
      <Row value={600 * multiplier} openQuestion={props.openQuestion} categories={props.categories} dailyDoubleCol={props.dailyDoubleCol} isDailyDoubleRow={2 === props.dailyDoubleRow} />
      <Row value={800 * multiplier} openQuestion={props.openQuestion} categories={props.categories} dailyDoubleCol={props.dailyDoubleCol} isDailyDoubleRow={3 === props.dailyDoubleRow} />
      <Row value={1000 * multiplier} openQuestion={props.openQuestion} categories={props.categories} dailyDoubleCol={props.dailyDoubleCol} isDailyDoubleRow={4 === props.dailyDoubleRow} />
    </tbody>
  )
};
