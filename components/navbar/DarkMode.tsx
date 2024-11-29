'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

const DarkMode = () => {

    const { setTheme } = useTheme();


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                    <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'></SunIcon>

                    <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'></MoonIcon>

                    <span className='sr-only'>Toggle Theme</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={()=> setTheme('light')}>
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme('system')}>
                    Sysytem
                </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>
    );
};

export default DarkMode;