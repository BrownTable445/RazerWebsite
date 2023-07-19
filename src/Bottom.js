import './Bottom.css'
import BottomComponent from './BottomComponent';

const Bottom = () => {
    let shop_links = ["Razer Stores", "Store Locator", "Purchase Programs", "Education", "Exclusives", "RazerStore Rewards", "Newsletter"];
    let explore_links = ["Technology", "Chroma RGB", "Concepts", "Esports", "Collabs"]
    let support_links = ["Get Help", "Registration & Warranty", "RazerStore Support", "RazerCare", "Manage Razer ID", "Support Videos", "Accessibility Statement"]
    let company_links = ["About Us", "Careers", "Press Room", "zVentures", "Contact Us"]
    return (
        <div id='bottom'>
            <BottomComponent title="Shop" links={shop_links}/>
            <BottomComponent title="Explore" links={explore_links}/>
            <BottomComponent title="Support" links={support_links}/>
            <BottomComponent title="Company" links={company_links}/>
            <div id="bottom_component">
                <ul className='list'>
                    <li id='top'>Follow Us</li>
                    <li><a href='/'><img className='icon' src='https://assets2.razerzone.com/images/phoenix/SM0001-facebook-grey.svg' alt=''></img></a></li>
                    <li><a href='/'><img className='icon' src='https://assets2.razerzone.com/images/phoenix/SM0003-instagram-grey.svg' alt=''></img></a></li>
                    <li><a href='/'><img className='icon' src='https://assets2.razerzone.com/images/phoenix/SM0005-twitter-grey.svg' alt=''></img></a></li>
                    <li><a href='/'><img className='icon' src='https://assets2.razerzone.com/images/phoenix/SM0008-youtube-grey.svg' alt=''></img></a></li>
                    <li><a href='/'><img className='icon' src='https://assets2.razerzone.com/images/phoenix/SM0014-tiktok-grey.svg' alt=''></img></a></li>
                    <li><a href='/'><img className='icon' src='https://assets2.razerzone.com/images/phoenix/SM0009-twitch-grey.svg' alt=''></img></a></li>
                    <li><a href='/'><img className='icon' src='https://assets2.razerzone.com/images/phoenix/SM0015-discord-grey.svg' alt=''></img></a></li>
                </ul>
            </div>
            <p id='trademark'>FOR GAMERS. BY GAMERS.&trade;</p>
        </div>
    );
}

export default Bottom;