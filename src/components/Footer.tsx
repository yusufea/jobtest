import { Open_Sans } from "next/font/google";
import { VpnLockOutlined, AddHomeWorkOutlined, KeyboardReturnOutlined, LocalShippingOutlined, Instagram, Twitter, Facebook, YouTube, X } from '@mui/icons-material';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const openSans = Open_Sans({ subsets: ["latin"] });


export default function Footer() {
    return (
        <>
            <footer className={`flex justify-center p-12 max-xl:hidden ${openSans.className}`}>
                <div className='flex flex-col gap-7'>
                    <div>
                        <hr />
                        <div className='flex justify-center gap-10 p-10'>
                            <div className='flex items-center gap-2'>
                                <LocalShippingOutlined className='text-orange-500 border-4 border-orange-500 rounded-full p-4 w-20 h-20' />
                                <h4 className='text-xl font-bold w-32'>
                                    Aynı Gün Kargo
                                </h4>
                            </div>
                            <div className='flex items-center gap-2'>
                                <KeyboardReturnOutlined className='text-orange-500 border-4 border-orange-500 rounded-full p-2 w-20 h-20' />
                                <h4 className='text-xl font-bold w-44'>
                                    14 Gün Koşulsuz İade
                                </h4>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AddHomeWorkOutlined className='text-orange-500 border-4 border-orange-500 rounded-full p-2 w-20 h-20' />
                                <h4 className='text-xl font-bold w-44'>
                                    Kapıda Ödeme Kolaylığı
                                </h4>
                            </div>
                            <div className='flex items-center gap-2'>
                                <VpnLockOutlined className='text-orange-500 border-4 border-orange-500 rounded-full p-2 w-20 h-20' />
                                <h4 className='text-xl font-bold w-44'>
                                    %100 Güvenli Ödeme Sayfası
                                </h4>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className='flex gap-32'>
                        <div className='flex flex-col gap-2 text-xs'>
                            <h4 className='font-bold text-xl mb-2'>Kurumsal</h4>
                            <p>
                                Kurumsal
                            </p>
                            <p>
                                Misyon & Vizyon
                            </p>
                            <p>
                                Kariyer
                            </p>
                            <p>
                                İletişim
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 text-xs'>
                            <h4 className='font-bold text-xl mb-2'>Müşteriler</h4>
                            <p>
                                Üye Ol
                            </p>
                            <p>
                                Yeni Üye Rehberi
                            </p>
                            <p>
                                Yardım
                            </p>
                            <p>
                                Ödeme Seçenekleri
                            </p>
                            <p>
                                İptal, İade, Değişim
                            </p>
                            <p>
                                İşlem Rehberi
                            </p>
                            <p>
                                Kullanıcı Güvenliği
                            </p>
                            <p>
                                Site Haritası
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 text-xs'>
                            <h4 className='font-bold text-xl mb-2'>Popüler Sayfalar</h4>
                            <p>
                                Bayan Giyim
                            </p>
                            <p>
                                Yeni Gelenler
                            </p>
                            <p>
                                Bayan Çantaları
                            </p>
                            <p>
                                Tayt
                            </p>
                            <p>
                                Bayan Tişörtleri
                            </p>
                            <p>
                                Bayan Elbise
                            </p>
                            <p>
                                Etekler
                            </p>
                            <p>
                                Kot Pantolonlar
                            </p>
                            <p>
                                Pantolonlar
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 text-xs'>
                            <h4 className='font-bold text-xl mb-2'>Popüler Sayfalar</h4>
                            <p>
                                Bayan Giyim
                            </p>
                            <p>
                                Yeni Gelenler
                            </p>
                            <p>
                                Bayan Çantaları
                            </p>
                            <p>
                                Tayt
                            </p>
                            <p>
                                Bayan Tişörtleri
                            </p>
                            <p>
                                Bayan Elbise
                            </p>
                            <p>
                                Etekler
                            </p>
                            <p>
                                Kot Pantolonlar
                            </p>
                            <p>
                                Pantolonlar
                            </p>
                        </div>
                        <div className='flex flex-col gap-5 border-4 p-7 rounded-lg w-[20rem]'>
                            <h3 className='font-bold text-xl'>Toptan Giyim</h3>
                            <div>
                                <button type="button" className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-44 border">Toptan Satışa Giriş</button>
                                <button type="button" className="text-white bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-44">Ücretsiz Hesap Aç</button>
                            </div>
                            <p className='text-xs'>
                                Şimdi ücretsiz bayi hesabı oluşturup inidirmli fiyatlarla bayan giyim ürünlerini toptan satın alabilirsiniz...
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-12 items-end'>
                        <div>
                            <h4 className='text-xl font-bold w-[22rem]'>
                                Uygulamamızı ücretsiz indir mobile özel avantajlardan yararlan!
                            </h4>
                            <div className="flex gap-2 px-2">
                                <button type="button" className="flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl">
                                    <div className="mr-2">
                                        <svg viewBox="0 0 384 512" width="30">
                                            <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="-mt-1 font-sans text-xs font-semibold">
                                            App Store'dan
                                        </div>
                                        <div className="text-xs">
                                            indirin
                                        </div>
                                    </div>
                                </button>
                                <button type="button" className="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14">
                                    <div className="mr-2">
                                        <svg viewBox="30 336.7 120.9 129.2" width="30">
                                            <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                                            </path>
                                            <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                                            </path>
                                            <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                                            </path>
                                            <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="-mt-1 font-sans text-xs font-semibold">
                                            Google Play
                                        </div>
                                        <div className="text-xs">
                                            'den indirin
                                        </div>
                                    </div>
                                </button>
                                <button type="button" className="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14">
                                    <div className="mr-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png" className="h-10 w-10 mr-2" alt="" />
                                    </div>
                                    <div>
                                        <div className="-mt-1 font-sans text-xs font-semibold">
                                            AppGallery
                                        </div>
                                        <div className="text-xs">
                                            ile keşfedin
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-end '>
                            <h4 className='text-xl font-bold mb-6'>
                                Bizi Takip Et
                            </h4>
                            <div className='flex gap-4 justify-end'>
                                <Instagram className='w-8 h-8' />
                                <Twitter className='w-8 h-8' />
                                <Facebook className='w-8 h-8' />
                                <YouTube className='w-8 h-8' />
                                <X className='w-8 h-8' />
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <h4 className='text-xl font-bold mr-4'>
                                Bloga Göz At
                            </h4>
                            <img src="https://www.kirmizi.av.tr/wp-content/uploads/2021/09/etbsd-e1630936832972.jpg" className='w-24 h-24' alt="" />
                            <img src="https://www.paynet.com.tr/sites/default/files/styles/max_1300x1300/public/2023-10/tr-go-guven-damgasi-1_1.jpg.webp?itok=gPA60UGq" className='w-24 h-24' alt="" />
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='xl:hidden'>
                <div className="pt-12 mt-4 bg-gray-100">
                    <div className='flex gap-2 justify-center mb-4'>
                        <Instagram className='h-8 w-8' />
                        <Facebook className='h-8 w-8' />
                        <YouTube className='h-8 w-8' />
                    </div>
                    <p className='text-center text-xs pb-4'>
                        2023 Giyiyor.com Tüm Hakları Saklıdır.
                    </p>
                </div>
            </footer>
        </>
    )
}