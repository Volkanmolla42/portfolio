"use client";

import React from "react";

const DateComponent = () => {
  // Get the current date formatted in Turkish (tr-TR) locale
  const formattedDate = new Intl.DateTimeFormat("tr-TR").format(new Date());

  return (
    // Render the formatted date inside a div
    <div>{formattedDate}</div>
  );
};

export default DateComponent;
