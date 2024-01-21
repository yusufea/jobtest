import { Instagram, Facebook, YouTube } from '@mui/icons-material';
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });


export default function Footer() {
    return (
        <div className={`${openSans.className} pt-12 mt-4 bg-gray-100`}>
            <div className='flex gap-2 justify-center mb-4'>
                <Instagram className='h-8 w-8' />
                <Facebook className='h-8 w-8' />
                <YouTube className='h-8 w-8' />
            </div>
            <p className='text-center text-xs pb-4'>
                2023 Giyiyor.com Tüm Hakları Saklıdır.
            </p>
        </div>
    )
}