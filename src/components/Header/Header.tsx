import HeaderNavigation from "@/src/components/HeaderNavigation/HeaderNavigation";
import CustomLink from "@/src/components/CustomLink/CustomLink";
import SearchField from "@/src/components/SearchField/SearchField";
import {Button} from "@/src/components/ui/Button";


const Header = () => {
    return (
        <header className="flex items-center justify-center w-full">
            <div className="flex items-center w-full justify-between px-6 py-3">
                <CustomLink customLinkText={'TechPulse'} customLinkURL={'/'}/>
                <HeaderNavigation/>
                <div>
                    <SearchField/>
                </div>
                <Button className='bg-black text-white'>Добавить статью +</Button>
            </div>
        </header>
    )
}

export default Header;