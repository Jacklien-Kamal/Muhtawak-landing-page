
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { FaWhatsapp } from 'react-icons/fa6';
import { useI18n } from '../../hooks/i18nContext';
import { Tooltip } from 'antd';

function Layout() {
    const { isRTL } = useI18n();
    return (
        <div className="relative font-poppins text-bingle-gray">
            <Header />
            <main>
                <Outlet />
            </main>
                <Tooltip title={isRTL ? 'تواصل معنا عبر واتساب' : 'Contact us on WhatsApp'} placement="top">

            <a href="https://api.whatsapp.com/send/?phone=966551123179&text&type=phone_number&app_absent=0" target="_blank" 
     className={`fixed z-100 cursor-pointer w-10 h-10  md:w-12 md:h-12 flex justify-center items-center   text-6xl  bottom-10 ${isRTL ? 'right-4 md:right-16' : 'left-4 md:left-16'}  bg-gradient-to-r from-primary via-secondary to-third p-1 rounded-full`}>

                <span style={{ animationDuration: '2s' }}
                    className="absolute inset-0 rounded-full bg-gray-300 animate-ping opacity-50" />

                    <FaWhatsapp className="text-2xl md:text-3xl text-white " />
            </a>
            </Tooltip>
            <Footer />
        </div>
    );
}

export default Layout;