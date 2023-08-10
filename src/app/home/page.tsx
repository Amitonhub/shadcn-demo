'use client'
import { useLayoutEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { globalAgentList } from "../../utils/GlobalAgentsList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DEFAULTAVATAR, EDIT } from "@/constants";
import AgentForm from "@/components/AgentForm";
import { IAgent } from "./types";


function HomePage() {
  const { username, isLogin, setIsLogin, setUsername } = useGlobalContext()
  const [agentList, setAgentList] = useState(globalAgentList);
  const router = useRouter()
  useLayoutEffect(() => {
    if (!isLogin) {
      router.push('/')
    }
  }, [isLogin, router])

  function create(data: IAgent) {
    const id = crypto.randomUUID();
    const avatarUrl = DEFAULTAVATAR;
    const agent = { ...data, id, avatarUrl };
    setAgentList([...agentList, agent]);
  }

  function edit(data: IAgent) {
    const index = agentList.findIndex((agent) => agent.id === data.id);
    agentList[index] = { ...agentList[index], ...data };
    setAgentList([...agentList]);
  }

  function agentHandler(data: any) {
    const isEdit = data.id !== undefined;
    if (isEdit) {
      edit(data);
    } else {
      create(data);
    }
  }

    return <>
      <div className="w-full">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Avatar</TableHead>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="flex justify-end items-center">Modify</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agentList.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={agent.avatarUrl} />
                    <AvatarFallback>{agent.name}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{agent.id}</TableCell>
                <TableCell>{agent.name}</TableCell>
                <TableCell>{agent.status}</TableCell>
                <TableCell className="text-right">
                  <AgentForm
                    buttonText={EDIT}
                    isEdit={true}
                    agent={agent}
                    onAgentHandler={agentHandler}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>;
  }
export default HomePage;
