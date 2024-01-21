import { MenuOpen, Search, FavoriteBorder, ShoppingCartOutlined } from '@mui/icons-material';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Close, KeyboardArrowRightOutlined, AccountCircleOutlined, LocalShippingOutlined } from '@mui/icons-material';
export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <div>
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

                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
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
            <div className='bg-gray-100 p-1'>
                <div className='flex items-center justify-between m-2.5'>
                    <div className='flex items-center gap-5'>
                        <button onClick={() => setOpen(true)}>
                            <MenuOpen className='w-7 h-7' />
                        </button>
                        <img src='giyiyor.svg' className='w-full h-7'></img>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Search className='w-7 h-7' />
                        <FavoriteBorder className='w-7 h-7' />
                        <ShoppingCartOutlined className='w-7 h-7' />
                    </div>
                </div>
            </div>
        </div>
    )
}