"use client";
import React from "react";
const DateComponent = () => {
  const date = new Intl.DateTimeFormat("tr-TR").format(new Date());

  return <div>{date}</div>;
};

export default DateComponent;
