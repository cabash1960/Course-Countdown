import { useEffect } from "react";

function WebinarButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://event.webinarjam.com/register/ykznk5ty/embed-bar?buttonText=Register&buttonBgColor=%23000000&buttonBgOpacity=0.5&barBgColor=%2329b6f6&barBgOpacity=0.95&formTemplate=2&formColor=1";
    script.async = true;
    document.getElementById("webinarjam-register")!.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div id="webinarjam-register" />;
}

export default WebinarButton;
