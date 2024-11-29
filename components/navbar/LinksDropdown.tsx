
import { LuAlignLeft } from 'react-icons/lu';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import Link from 'next/link';


type NavLink = {
    href: string;
    label: string
};

const links: NavLink[] = [
    {href: '/', label:'Home'},
    {href: '/about', label:'About'},
    {href: '/products', label:'Products'},
    {href: '/favorite', label:'Favorite'},
    {href: '/cart', label:'Cart'},
    {href: '/order', label:'Order'},
    {href: '/h', label:'Logout'},
]

const LinksDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex gap-4 max-w-[100px]'>
                    <LuAlignLeft></LuAlignLeft>
                </Button>
            </DropdownMenuTrigger>
            

            <DropdownMenuContent className='w-48' align='start' sideOffset={10}>
                {
                    links.map((link: string) => {
                        return <DropdownMenuItem key={link.href}>
                            <Link href={link.href} className='capitalize w-full'>{ link.label}</Link>
                        </DropdownMenuItem>
                    })    
                }
            </DropdownMenuContent>

        </DropdownMenu>
    );
};

export default LinksDropdown;