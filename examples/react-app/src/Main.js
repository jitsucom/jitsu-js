import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { useJitsu } from "@jitsu/react";

const Main = () => {
  const { id, track, trackPageView } = useJitsu(); // import methods from useJitsu hook

  useEffect(() => {
    id({id: '123456', email: 'test@email.com'}); // identify current user for all track events
    track('custom_event', {test: true}); // send custom event with payload
  }, [id, trackPageView, track])

  const clickHandler = (btnName) => {
    track("my_button_click", {btn: btnName}); // send my_button_click event with button name payload on click
  }

  return (
    <div>
      <p>
        Main page. Go to <Link to="/page">/page</Link>
      </p>
      <button onClick={() => clickHandler("test")}>Test button</button>
    </div>
  );
}

export default Main;
