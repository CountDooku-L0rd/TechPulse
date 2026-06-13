import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/src/components/ui/NavigationMenu";
import Link from "next/link";

const HeaderNavigation = () => {
    return(
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/category/development">Разработка</Link>} />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/category/infrastructure">Инфраструктура</Link>} />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/category/management">Управление</Link>} />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default HeaderNavigation;