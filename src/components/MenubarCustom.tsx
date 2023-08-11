import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

function MenubarCustom() {
  return <>
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Performance</MenubarTrigger>
        <MenubarContent className="mr-11">
          <MenubarItem>
            All Products <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Archived</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Preference</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Files and Assets</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print Report</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </>;
}

export default MenubarCustom;
