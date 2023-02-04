import React, { useState } from "react";
import { useLocation } from "react-router";
import TeamProps from "../../interface/Team";

const Team: React.FC = () => {
  const location: any = useLocation();
  const [winner] = useState<TeamProps>(location.state);
  console.log("winner", winner);
  return <div>Team</div>;
};

export default Team;
