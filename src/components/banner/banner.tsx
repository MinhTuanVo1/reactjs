import './banner.scss';

function Banner() {
    return (
        <section className="containerSearchBox">
            <img src="./images/image7.png" alt='banner' />
            <div className="centered">
                <div className="titleBanner">
                    <h1>One million success stories.</h1>
                    <h1>Start your today.</h1>
                </div>
                <div>
                    <p>Keyword/Job Title</p>
                    <div className="searchBox">
                        <input placeholder="Enter Skills or job title" />
                        <button>Search Job</button>
                        <div className="searchIcon">
                            <img src="./icons/search.png" alt='searchIcon'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;