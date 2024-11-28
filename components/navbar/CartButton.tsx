import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';

const CartButton = () => {
    const cartNumber = 10;
    return (
        <Button asChild variant='outline' size='icon' className='flex justify-center items-center relative'>
            <Link href={'/cart'}>
                <LuShoppingCart className='text-4xl'></LuShoppingCart>
                <span className='absolute -top-3 -right-2 text-white bg-primary font-bold rounded-full h-6 w-6 flex items-center justify-center '>{ cartNumber}</span>
            </Link>
        </Button>
    );
};

export default CartButton;