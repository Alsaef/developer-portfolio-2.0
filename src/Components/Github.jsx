import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-3xl font-bold text-center text-[var(--color-primary)] pb-5">
        Days I <span className="text-[var(--color-primary)]">Code</span>
      </h1>
      <GitHubCalendar
        username="Alsaef"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;