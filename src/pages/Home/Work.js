import React from 'react';
import { Row, Col } from 'antd';

const work = [
    {
        id: 1,
        "name": "Nasa",
        "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.jpg"
    },
    {
        id: 2,
        "name": "Microsoft",
        "image": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2r0Th?ver=5b7d"
    },
    {
        id: 3,
        "name": "Phillips",
        "image": "https://logos-download.com/wp-content/uploads/2016/03/Philips_logo_logotype_emblem.png"
    },
    {
        id: 4,
        "name": "Fox",
        "image": "https://cdn.dribbble.com/users/1543347/screenshots/6292805/dribbble.png"
    },
    {
        id: 5,
        "name": "Sony",
        "image": "https://1000logos.net/wp-content/uploads/2019/08/Sony-Logo-1961%E2%80%931962.jpg"
    },
    {
        id: 6,
        "name": "IBM",
        "image": "https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif"
    }
]

const Work = () => {
    return (
        <div className="work">
            <h2 className="title_work">Work</h2>
            <div className="imgcontainer">
            {
                work.map((work_grid) => {
                    return (
                        <div className="img-cont" key={work_grid.id}>
                            <h4>{work_grid.name}</h4>
                            <img src={work_grid.image} />
                        </div>

                    )
                })

            }
            </div>


        </div>
    )
}

export default Work;

