export type ISidebarNavItem = {
    title: string,
    href: string
}

export type IAgent = {
    id: string,
    name: string,
    status: "Online" | "Offline",
    avatarUrl: string,
}