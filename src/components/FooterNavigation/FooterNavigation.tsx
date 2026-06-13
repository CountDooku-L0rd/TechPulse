import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "../ui/NavigationMenu";
import Link from "next/link";

const FooterNavigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/about">О нас</Link>} />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/contacts">Контакты</Link>} />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/privacy">Политика конфидециальности</Link>} />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default FooterNavigation;