import './AboutUs.css';
import ImageAboutUs from '/images/image19.png';
import AdditionalImage1 from '/images/Image22.png';
import AdditionalImage2 from '/images/Image18.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const AboutUs = () => {
    // Hooks
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 901); 

    const navigateToAboutUsPage = () => {
        navigate('/about'); 
    };
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 901);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="aboutUsContainer">
            {isMobile ? (
                <>
                    <div className="leftColumn">
                        <h1>{t('AboutUs.heading')}</h1>
                        <p>{t('AboutUs.description')}</p>
                        <button className="yellowButton" onClick={navigateToAboutUsPage}>
                            {t('AboutUs.buttonText')}
                        </button>
                    </div>
                    <div className="rightColumn">
                        <img src={ImageAboutUs} alt="About Us" className="roundImage" />
                        <img src={AdditionalImage1} alt="Couple playing parkour" className="roundImage additionalImage" />
                        <img src={AdditionalImage2} alt="Family playing parkour" className="roundImage additionalImage" />
                    </div>
                </>
            ) : (
                <>
            <div className="leftColumn">
                <h1>{t('AboutUs.heading')}</h1>
                <p>{t('AboutUs.description')}</p>
                
            </div>
            <div className="rightColumn">
                <img src={ImageAboutUs} alt="About Us" className="roundImage" />
                 <img src={AdditionalImage1} alt="Couple playing parkour" className="roundImage additionalImage" />
                <img src={AdditionalImage2} alt="Family playing parkour" className="roundImage additionalImage" />
            </div>
            <button className="yellowButton" onClick={navigateToAboutUsPage}>
                {t('AboutUs.buttonText')}
            </button>
            </>
            )}
        </div>
    );
}


  