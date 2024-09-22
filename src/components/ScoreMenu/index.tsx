import React, { FC } from "react";
import { View } from "react-native";
import Score from "../Score";
import { useScore } from "../../store/ScoreStore";

const ScoreMenu: FC = () => {
  const countTotal = useScore((state) => state.countTotal);
  const countSuccess = useScore((state) => state.countSuccess);
  const countFailed = useScore((state) => state.countFailed);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Score title="Total" score={countTotal} />
      <Score title="Success" score={countSuccess} />
      <Score title="Failed" score={countFailed} />
    </View>
  );
};

export default ScoreMenu;
