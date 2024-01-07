import * as path from "path";
import { getCurrentTime } from "../utils/util-function";

export const loggerConfig = {
  file: {
    filename: path.join(
      __dirname,
      "../logs",
      `error-${new Date()
        .toISOString()
        .slice(0, 10)}-${getCurrentTime()}.log`
    ),
    level: "error",
  },
};
