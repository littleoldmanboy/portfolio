import { useState, useEffect } from "react";

export default function WorksContent() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const url = "https://wp.dennisrussell.dk/wp-json/wp/v2/posts?embed";
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);
        }
        getPosts();
    }, []);


    return (
        <div className='WorksContentWrapper'>
            <div className="SchoolProjects">
                <section className="SchoolProjectsHeading">
                    <h3>SCHOOL PROJECTS</h3>
                    <h6>Sorted by newest</h6>
                </section>
                <h5>Click projects to explore</h5>
                <div className="HorizontalSeperator"></div>
                {posts.map((post) => (
                    <section key={post.acf.title}>
                        <a className="Posts" href={post.acf.url} target="_blank">
                            <img src={post.acf.image}/>
                            <h4>{post.acf.title}</h4>
                            <summary>
                                <ul>
                                    <li>{post.acf.listOne}</li>
                                    <li>{post.acf.listTwo}</li>
                                    <li>{post.acf.listThree}</li>
                                </ul>
                            </summary>
                        </a>
                        <div className="HorizontalSeperator"></div>
                    </section>
                ) )}
            </div>
            <div className="JobsWrapper">
                <section className="JobsWrapperHeading">
                    <h3>JOBS</h3>
                </section>
                <main className="JobsContent">
                    <a className="Hoy" href="https://www.hoyscandinavian.dk/dk?force=1" target="_blank">
                        <h4>HOY SCANDINAVIAN</h4>
                        <ul>
                            <li>Maintainment of website</li>
                            <li>Creation of product brochure (in process)</li>
                        </ul>
                        <div className="HoyRectangle">
                            <img className="HoyImg" src="/hoy.png" alt="HOY Scandinavian" />
                        </div>
                        <h5>Click to visit website</h5>
                    </a>
                    <div className="VerticalSeperator"></div>
                    <div className="JobsHorizontalSeperator"></div>
                    <section className="Huntlovers">
                        <h4>KENNEL HUNTLOVERS</h4>
                        <ul>
                            <li>Development of new website from scratch - and a visual identity (all in process)</li>
                        </ul>
                        <div className="HuntloversRectangle">
                            <h5>IN PROCESS</h5>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}