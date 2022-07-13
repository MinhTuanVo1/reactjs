import './featureJobItem.scss';

function FeatureJobItem({ image, name, company, typeJob } : { image : string, name : string, company : string, typeJob : string}) {
    return (
        <div className="featureItem">
            <img className="companyLogo" src={image} alt='imageFeatureJob'/>
            <div className="information">
                <p className="featureTitle">{name}</p>
                <p className="companyName">{company}</p>
                <div className="typeJobArea">
                    <button className="typeJob fullTime">{typeJob}</button>
                </div>
            </div>
            <div className="detailArea">
                <img className="detailIcon" src="./icons/Arrow_2_Right.png" alt='detailIcon'/>
            </div>
        </div>
    )
}

export default FeatureJobItem;