import './HeadTittle.css'

const HeadTittle = ({backgroundImage, titleText}) => {
    return(
        <>
            <style>
                {`
                    body {
                        background-image: url(${backgroundImage});

                    }
                `}
            </style>
            <article className="title">
                    <h1>
                        {titleText}
                    </h1>                
            </article>
        </>
    )
}

export default HeadTittle