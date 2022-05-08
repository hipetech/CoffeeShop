import './Banner.css'

const Banner = () => {
    return(
        <section class="container">
            <div class="container-content">
                <h1 class="container-title">
                    Everything You Love About Coffee
                </h1>
                <img src="Beans-logo.svg" alt="logo" />
                <h2 class="container-sub-title">We makes every day full of energy and taste</h2>
                <h2 class="container-sub-title">Want to try our beans?</h2>
                <button class="more-btn btn-pos">More</button>
            </div>
        </section>
    )
}

export default Banner;