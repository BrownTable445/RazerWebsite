import './App.css'
import NavigationBar from './NavigationBar';
import Body from './Body';
import razer_blade_14 from './razer-blade-14-2023-homepage-desktop.webp'
import razer_xanthus_collection from './xanthus-homepage-desktop2x.webp'
import cobra_pro from './cobra-pro-homepage-desktop2x.webp'
import moray_hyperspeed from './moray-hyperspeed-b-950x580-desktop.webp'
import deathstalker_pro_tkl from './deathstalker-pro-tkl-950x580-desktop.webp'
import mercury_blade from './mercury-blade16-blade18-b-950x580-desktop.webp'
import razer_pubg from './razer-pubg-homepage-b-950x580-desktop.webp'
import exoprimal from './exoprimal-b-950x580-desktop.webp'
import razer_edge from './razer-edge-b-950x580-desktop.webp'
import LesserBody from './LesserBody';
import Bottom from './Bottom';

function App() {
  const products = [
    {title:"RAZER MORAY", description:"ALL DAY STREAMING. ALL DAY COMFORT", buy:true, img_src:moray_hyperspeed, padding:false, small: true},
    {title:"RAZER DEATHSTALKER V2 PRO TENKEYLESS", description:"LOW-PROFILE ERGONOMICS. HIGH-PERFORMANCE WIRELESS", buy:true, img_src:deathstalker_pro_tkl, padding:false, small: true},
    {title:"NEW RAZER BLADE 16 & 18 MERCURY", description:"PERFORMANCE REIMAGINED", buy:true, img_src:mercury_blade, padding:false, small: true},
    {title:"RAZER | PUBG: BATTLEGROUNDS", description:"SECURE YOUR SURVIVAL", buy:false, img_src:razer_pubg, padding:false, small: true},
    {title:"DECIMATE DINO HORDES IN EXOPRIMAL", description:"BE READY WITH OUR BEST GEAR", buy:false, img_src:exoprimal, padding:false, small: true},
    {title:"RAZER EDGE", description:"THE ULTIMATE ANDROID GAMING HANDHELD", buy:true, img_src:razer_edge, padding:false, small: true}
  ]
  return (
    <div className="App">
      <NavigationBar />
      <Body title="NEW RAZER BLADE 14" description="SMALL SIZE. BIG PERFORMANCE" buy={true} img_src={razer_blade_14} padding={true} small={false}/>
      <Body title="RAZER XANTHUS COLLECTION" description="THE FUSION OF UTILITY AND STYLE" buy={false} img_src={razer_xanthus_collection} padding={true} small={false}/>
      <Body title="RAZER COBRA PRO" description="PERFECTED FOR PLAY" buy={true} img_src={cobra_pro} padding={true} small={false}/>
      <LesserBody products={products} />
      <Bottom />
    </div>
  );
}

export default App;
