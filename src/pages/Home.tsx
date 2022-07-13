import '../style/global.scss';
import '../style/app.scss';
import Banner from '../components/banner/banner';
import Title from '../components/title/title';
import CategoryJob from '../components/categoryJob/categoryJob';
import FeatureJobItem from '../components/featureJobItem/featureJobItem';
import MoreJobItem from '../components/featureJobItem/moreJobItem';
import Footer from '../components/footer/footer';

function Home() {
  return (
    <>
        <div>
            <Banner/>
            <div className="midContent">
                <h1>Join</h1>
                <span className='backspace'></span>
                <h1 className="highlight">1000+</h1>
                <span className='backspace'></span>
                <h1>Greate productive team</h1>
            </div>
             <div className="partner">
                <div className="partnerItem">
                    <img src="./images/image8.png" alt='partnerLogo' />
                </div>
                <div className="partnerItem">
                    <img src="./images/image10.png" alt='partnerLogo' />
                </div>
                <div className="partnerItem">
                    <img src="./images/image11.png" alt='partnerLogo' />
                </div>
                <div className="partnerItem">
                    <img src="./images/image12.png" alt='partnerLogo' />
                </div>
                <div className="partnerItem">
                    <img src="./images/image13.png" alt='partnerLogo' />
                </div>
            </div>
            <section className="containerJobCategory">
                <div>
                    <Title normal='Browse' highligh='Jobs' color='blue'/>
                    <div className="category">
                        <div>
                            <CategoryJob key={1} name='Create Design' numOfPosition={14}/>
                            <CategoryJob key={2} name='Admin' numOfPosition={4}/>
                            <CategoryJob key={3} name='Database Adminstration' numOfPosition={8}/>
                            <CategoryJob key={4} name='Graphic Design' numOfPosition={2}/>
                            <CategoryJob key={5} name='Marketing' numOfPosition={2}/>
                        </div>

                        <div>
                            <CategoryJob key={6} name='Business management' numOfPosition={1}/>
                            <CategoryJob key={7} name='Sofware & web development' numOfPosition={5}/>
                            <CategoryJob key={8} name='Advertising' numOfPosition={5}/>
                            <CategoryJob key={9} name='Electronic technican' numOfPosition={3}/>
                            <CategoryJob key={10} name='HR' numOfPosition={1}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="containerFeatureJob">
                <div className="innerContainer">
                    <Title normal='Feature' highligh='Jobs' color='yellow'/>
                    <div className="featureJob">
                        <div className="colFeatureJob">
                            <FeatureJobItem key={1} image='./images/image16.png' name='User Experience Design'
                              company='Lionflame - Vietname' typeJob='Full Time'/>
                            <FeatureJobItem key={2} image='./images/image23.png' name='UI/UX Design'
                              company='Lionflame - Vietname' typeJob='Full Time'/>
                            <FeatureJobItem key={3} image='./images/image26.png' name='Art Director'
                              company='BLOOM - Singapore' typeJob='Part Time'/>
                        </div>
                        <div className="colFeatureJob">
                            <FeatureJobItem key={4} image='./images/image21.png' name='Art Director'
                              company='BLOOM - Singapore' typeJob='Part Time'/>
                            <FeatureJobItem key={5} image='./images/image24.png' name='SEO expert'
                              company='Mia Studios - Singapore' typeJob='Freelance'/>
                            <FeatureJobItem key={6} image='./images/image27.png' name='Project Manager'
                              company='Lionflame - Vietname' typeJob='Full Time'/>
                        </div>
                        <div className="colFeatureJob">
                            <FeatureJobItem key={7} image='./images/image22.png' name='SEO Expert'
                              company='Mia studio - Singapore' typeJob='Freelance'/>
                            <FeatureJobItem key={8} image='./images/image25.png' name='Art Director'
                              company='BLOOM - Singapore' typeJob='Internship'/>
                            <MoreJobItem numsOfJob={156}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="containerSponsor">
                <div className="innerContainer">
                    <Title normal='Sponsor' highligh='Orgnazation' color='blue'/>
                    <div className="sponsors">
                        <div className='sponsorLogo'>
                          <img src="./images/image17.png" alt='sponsor'/>
                        </div>
                        <div className='sponsorLogo'>
                          <img src="./images/image18.png" alt='sponsor'/>
                        </div>
                        <div className='sponsorLogo'>
                          <img src="./images/image19.png" alt='sponsor'/>
                        </div>
                        <div className='sponsorLogo'>
                          <img src="./images/image20.png" alt='sponsor'/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </>
  );
}

export default Home;
