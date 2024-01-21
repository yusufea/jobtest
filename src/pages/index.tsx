import Image from "next/image";
import { Open_Sans } from "next/font/google";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { LoopOutlined, CreditCardOutlined, PaidOutlined } from '@mui/icons-material';
const openSans = Open_Sans({ subsets: ["latin"] });

const NavHeader = [{
  title: "Sende Al!",
  color: "yellow"
}, {
  title: "Sende Al!",
  color: "purple"
}, {
  title: "Sende Al!",
  color: "pink"
}, {
  title: "Sende Al!",
  color: "orange"
}, {
  title: "Sende Al!",
  color: "gray"
}]


export default function Home() {

  return (
    <div className={`${openSans.className} max-w-md mx-auto items-center`}>

      <div className="p-1 px-auto flex gap-4 justify-center ">
        <div className="items-center text-center">
          <div className={`w-[4rem] h-[3.8rem] max-[400px]:w-[3.5rem] max-[400px]:h-[3.4rem] rounded-full bg-yellow-500`} />
          <h4 className="text-xs">Sende Al!</h4>
        </div>
        <div className="items-center text-center">
          <div className={`w-[4rem] h-[3.8rem] max-[400px]:w-[3.5rem] max-[400px]:h-[3.4rem] rounded-full bg-purple-500`} />
          <h4 className="text-xs">Sende Al!</h4>
        </div>
        <div className="items-center text-center">
          <div className={`w-[4rem] h-[3.8rem] max-[400px]:w-[3.5rem] max-[400px]:h-[3.4rem] rounded-full bg-pink-500`} />
          <h4 className="text-xs">Sende Al!</h4>
        </div>
        <div className="items-center text-center">
          <div className={`w-[4rem] h-[3.8rem] max-[400px]:w-[3.5rem] max-[400px]:h-[3.4rem] rounded-full bg-orange-500`} />
          <h4 className="text-xs">Sende Al!</h4>
        </div>
        <div className="items-center text-center">
          <div className={`w-[4rem] h-[3.8rem] max-[400px]:w-[3.5rem] max-[400px]:h-[3.4rem] rounded-full bg-gray-500`} />
          <h4 className="text-xs">Sende Al!</h4>
        </div>
      </div>

      <div className="p-2">
        <img src="https://www.tekzen.com.tr/images/landing/kis-firsatlarini/winterlp-main-banner.jpg" alt="" />
      </div>
      <div className="grid grid-cols-2 bg-gray-50">
        <div className="flex flex-col">
          <div className="flex justify-between items-center border-r border-b p-2">
            <h6 className="text-[.9rem]">
              Yeni Sezon
            </h6>
            <KeyboardArrowRightOutlinedIcon className="text-gray-400"/>
          </div>
          <div className="flex justify-between items-center border-r border-b p-2">
            <h6 className="text-[.9rem]">
              Kombin
            </h6>
            <KeyboardArrowRightOutlinedIcon className="text-gray-400"/>
          </div>
          <div className="flex justify-between items-center border-r border-b p-2">
            <h6 className="text-[.9rem]">
              Dış Giyim
            </h6>
            <KeyboardArrowRightOutlinedIcon className="text-gray-400"/>
          </div>
          <div className="flex justify-between items-center border-r border-b p-2">
            <h6 className="text-[.9rem]">
              Ayakkabı
            </h6>
            <KeyboardArrowRightOutlinedIcon className="text-gray-400"/>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center border-b p-2">
            <h6 className="text-[.9rem]">
              Kış Fırsatları
            </h6>
            <KeyboardArrowRightOutlinedIcon className="text-gray-400"/>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <h6 className="text-[.9rem]">
              Abiye
            </h6>
            <KeyboardArrowRightOutlinedIcon className="text-gray-400"/>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <h6 className="text-[.9rem]">
              Üst Giyim
            </h6>
            <KeyboardArrowRightOutlinedIcon className="text-gray-400"/>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <h6 className="text-[.9rem]">
              Çanta
            </h6>
            <KeyboardArrowRightOutlinedIcon className="text-gray-400"/>
          </div>
        </div>
      </div>
      <div className="flex gap-2 pt-4 bg-gray-50">
        <div className="flex items-center gap-1">
          <LoopOutlined className="transform rotate-90 h-full w-8 items-end" />
          <div>
            <h4 className="font-bold text-xs">Koşulsuz İade</h4>
            <p className="text-[.5rem]">14 gün içinde siparişlerinizi koşulsuz iade edebilirsiniz</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <CreditCardOutlined className="h-full w-8" />
          <div>
            <h4 className="font-bold text-xs">Taksit İmkanı</h4>
            <p className="text-[.5rem]">CardFinans ile 5 takside kadar vade farksız ödeme</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <PaidOutlined className="h-full w-8" />
          <div>
            <h4 className="font-bold text-xs">Kapıda Nakit Ödeme</h4>
            <p className="text-[.5rem]">Tüm Siparişlerinizde geçerli kapıda nakit ödeme seçeneği</p>
          </div>
        </div>
      </div>

      <div>
        <img src="https://cdn.dsmcdn.com/ty1118/pimWidgetApi/mobile_20240102100811_2359296KadinMobile202312291801.jpg" className="mt-2" alt="" />
        <img src="https://cdn.dsmcdn.com/ty1139/pimWidgetApi/mobile_20240117154001_2469413KadinMobile2024011714011.jpg" className="mt-2" alt="" />
        <img src="https://cdn.dsmcdn.com/ty1045/pimWidgetApi/mobile_20231114144443_badgeliurunler.jpg" className="mt-2" alt="" />
        <img src="https://cdn.dsmcdn.com/ty1139/pimWidgetApi/mobile_20240118065127_2357442KadinMobile202401171802.jpg" className="mt-2" alt="" />
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
    </div>
  );
}
