import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { useJitsu } from "@jitsu/react";

const Main = () => {
  const { id, track, trackPageView } = useJitsu();

  useEffect(() => {
    id({id: '123456', email: 'test@email.com'})
    trackPageView()
    track('custom_event', {test: true});
  }, [id, trackPageView, track])

  const clickHandler = () => {
    track("my_button_click")
  }

  return (
    <div>
      <p>
        Main page. Go to <Link to="/page">/page</Link>
      </p>
      <button onClick={clickHandler}>Test button</button>
    </div>
  );
}

export default Main;
