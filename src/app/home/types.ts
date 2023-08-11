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

export type ICardProps = {
    cardTitle: string,
    cardDiscription: string,
    cardContent: string,
    cardFooter: string

}