"use client";

import { useState, useEffect } from "react";

const DateComponent = () => {
  const [formattedDate, setFormattedDate] = useState("");

  // Client-side only date formatting to prevent hydration mismatch
  useEffect(() => {
    setFormattedDate(new Intl.DateTimeFormat("tr-TR").format(new Date()));
  }, []);

  // Show empty during SSR, date after hydration
  if (!formattedDate) return null;

  return <div>{formattedDate}</div>;
};

export default DateComponent;
