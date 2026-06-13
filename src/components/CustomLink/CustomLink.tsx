import Link from "next/link";

const CustomLink = (
    {customLinkText,
        customLinkURL}
    : {customLinkText: string,
        customLinkURL:string}) => {
    return (
        <Link href={customLinkURL}> <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>{customLinkText}</h1> </Link>
    )
}
export default CustomLink;