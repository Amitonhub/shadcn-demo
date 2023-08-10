import { DEFAULTAVATAR, OFFLINE, ONLINE } from "@/constants";
import { IAgent } from "../app/home/types";

export const globalAgentList: IAgent[] = [
  {
    id: "0",
    name: "Michael",
    status: ONLINE,
    avatarUrl: DEFAULTAVATAR,
  },
  {
    id: "1",
    name: "Ben",
    status: ONLINE,
    avatarUrl: DEFAULTAVATAR,
  },
  {
    id: "2",
    name: "Jack",
    status: OFFLINE,
    avatarUrl: DEFAULTAVATAR,
  },
  {
    id: "3",
    name: "Mark",
    status: OFFLINE,
    avatarUrl: DEFAULTAVATAR,
  },
];