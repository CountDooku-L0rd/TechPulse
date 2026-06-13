import Copyright from "@/src/components/Copyright/Copyright";
import FooterNavigation from "@/src/components/FooterNavigation/FooterNavigation";

const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full">
            <div className='flex items-center w-full justify-between px-6 py-3' >
                <FooterNavigation/>
                <Copyright/>
            </div>
        </footer>
    )
}

export default Footer;