import { LocalShippingOutlined, SearchOutlined, PersonOutlineOutlined, FavoriteBorderOutlined, ShoppingCartOutlined, MenuOpen, Close, KeyboardArrowRightOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className={`p-6 mx-20 max-lg:mx-0 bg-gray-100 sm:bg-white ${openSans.className}`}>
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
                        <div className="absolute inset-0 overflow-hidden">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    <div className="w-screen max-w-md">
                                        <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <img src='giyiyor.svg' />
                                                    <div className="ml-3 h-7 flex items-center">
                                                        <button
                                                            type="button"
                                                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <Close />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                                {/* Replace with your content */}
                                                <div className='flex flex-col'>
                                                    <div className='flex justify-between border-b p-2 py-4'>
                                                        <h5>Giyim</h5>
                                                        <KeyboardArrowRightOutlined />
                                                    </div>
                                                    <div className='flex justify-between border-b p-2 py-4'>
                                                        <h5>Aksesuar</h5>
                                                        <KeyboardArrowRightOutlined />
                                                    </div>
                                                    <div className='flex justify-between border-b p-2 py-4'>
                                                        <h5>Kozmetik & Kişisel Bakım</h5>
                                                        <KeyboardArrowRightOutlined />
                                                    </div>
                                                    <div className='flex justify-between border-b p-2 py-4'>
                                                        <h5>Çanta</h5>
                                                        <KeyboardArrowRightOutlined />
                                                    </div>
                                                    <div className='flex justify-between border-b p-2 py-4'>
                                                        <h5>Ayakkabı</h5>
                                                        <KeyboardArrowRightOutlined />
                                                    </div>
                                                    <div className='flex justify-between border-b p-2 py-4'>
                                                        <h5>İç Giyim</h5>
                                                        <KeyboardArrowRightOutlined />
                                                    </div>
                                                    <div className='flex justify-between border-b p-2 py-4'>
                                                        <h5>Spor</h5>
                                                        <KeyboardArrowRightOutlined />
                                                    </div>
                                                    <div className='flex justify-between border-b p-2 py-4'>
                                                        <h5>Outdoor</h5>
                                                        <KeyboardArrowRightOutlined />
                                                    </div>
                                                </div>
                                                <div className='flex items-center gap-3 py-6 justify-center'>
                                                    <button className="flex items-center gap-1 bg-orange-500 text-white font-bold py-2 px-4 rounded">
                                                        <AccountCircleOutlined />
                                                        <h6 className='text-[12px]'>GİRİŞ YAP / ÜYE OL</h6>
                                                    </button>
                                                    <button className="flex items-center  gap-1 bg-green-700 text-white font-bold py-2 px-4 rounded">
                                                        <LocalShippingOutlined />
                                                        <h6 className='text-[12px]'>SİPARİŞLERİM</h6>
                                                    </button>
                                                </div>

                                                {/* /End replace */}
                                            </div>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
                <div className='flex gap-10 justify-end pb-4 max-sm:hidden'>
                    <h5 className='text-gray-400'>İndirim Kuponlarım</h5>
                    <h5 className='text-gray-400'>Hakkımızda</h5>
                    <h5 className='text-gray-400'>Yardım & Destek</h5>
                </div>
                <div className="flex gap-5 w-full items-center justify-between">
                    <div className='flex items-center gap-2 sm:hidden'>
                        <button onClick={() => setOpen(true)}>
                            <MenuOpen className='w-7 h-7' />
                        </button>
                        <img src="giyiyor.svg" className='w-36' alt="" />
                    </div>
                    <img src="giyiyor.svg" className='w-56 max-sm:hidden' alt="" />
                    <div className="relative mt-1 w-1/2 max-lg:hidden">
                        <input type="text" id="password" className="w-full pl-3 pr-10 py-3 rounded-md hover:border-gray-300 focus:outline-none transition-colors bg-gray-100" placeholder="Aradığınız ürün, kategori veya marka yazınız" />
                        <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"><SearchOutlined className='text-orange-500' /></button>
                    </div>
                    <div className='flex gap-14 max-2xl:gap-6 max-sm:gap-3'>
                        <div className='flex gap-1 max-sm:hidden w-full items-center'>
                            <PersonOutlineOutlined />
                            <h5 className='w-[5rem]'>Giriş Yap</h5>
                        </div>
                        <div className='sm:hidden'>
                            <SearchOutlined />
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FavoriteBorderOutlined />
                            <h5 className='max-sm:hidden'>Favorilerim</h5>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <ShoppingCartOutlined />
                            <h5 className='max-sm:hidden'>Sepetim</h5>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}