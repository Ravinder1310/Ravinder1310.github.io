

export const Skills = () => {
    const images = [
        "https://aakarshpatel84.github.io/static/media/html.2ba4fabc69a89a8f71e6.png",
        "https://aakarshpatel84.github.io/static/media/css.69a82c2d9e45c933a9cb.png",
        "https://aakarshpatel84.github.io/static/media/javascript.1ccd6ef9bb1f9c84ef00.png",
        "https://aakarshpatel84.github.io/static/media/react.0cf951a69d8e58f83f9d.png",
        "https://aakarshpatel84.github.io/static/media/node.952a9ea986dcfa5229ad.png",
        "https://aakarshpatel84.github.io/static/media/mongo.2a1528ddc31d4ce8518d.png",
        "https://aakarshpatel84.github.io/static/media/redux.010fcccb3cd77a85a1f7.png",
        "https://aakarshpatel84.github.io/static/media/github.3b9e32903aa89111875d.png",
        "https://aakarshpatel84.github.io/static/media/typescript.bb13ebd9561a6ee645c2.png"
    ];

    return (
        <div style={{marginTop:'100px'}}>
            <h1  style={{color:"white",borderBottom:'2px solid red',width:'100px',margin:'auto'}}>Skills</h1>
        <div style={{width:'60%',margin:'auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',justifyContent:'space-between'}}>
           {
            images.map((el)=>{
                return <img style={{width:'110px',height:'80px'}} src={el} alt="Error"/>
            })
           }
        </div>
        </div>
    )
}