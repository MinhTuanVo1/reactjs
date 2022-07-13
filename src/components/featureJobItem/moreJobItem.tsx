import './featureJobItem.scss';

function MoreJobItem({ numsOfJob } : { numsOfJob : string | number}) {
    return (
        <div className="featureItem moreJobs">
            <div className="textInfor">
                <p>Explore more</p>
                <div className="numsMoreJob">
                    <p className="highlight">{numsOfJob}+</p>
                    <span className='backspace'></span>
                    <p>job posted</p>
                </div>
            </div>
            <div className="detailArea">
                <img className="detailIcon" src="./icons/Arrow_2_Right.png" alt="detailIcon"/>
            </div>
        </div>
    )
}

export default MoreJobItem;