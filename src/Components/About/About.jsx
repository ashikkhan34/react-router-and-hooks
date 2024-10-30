/* eslint-disable react/no-unknown-property */

const About = () => {
    return (
        <div style={{width:500, backgroundColor:"gray", padding:'20px'}}>
            <h1>this is about page</h1>

            <div>
                <h1 style={{color:"red"}}>about me</h1>
            </div>
            <marquee
                behavior="scroll"
                direction="up"
                onmouseover="this.stop()"
                onmouseuot="this.start()"
                style={{color:'red'}}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores possimus unde rerum, nihil eius corrupti, atque alias ut nisi praesentium quae eaque dolores aliquam sequi at eligendi, deserunt quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus dolore eveniet laudantium, assumenda nihil mollitia temporibus molestiae, sequi corporis deleniti reprehenderit quis culpa sed! Itaque fuga sequi voluptatum. Possimus fuga consequuntur itaque laborum vitae, mollitia voluptates repellendus. Enim sint minus ipsum possimus, rem tempore. Dicta asperiores animi fugiat cupiditate molestiae dolorum error esse consectetur quae itaque doloremque, rem dolores necessitatibus repudiandae quod in nesciunt ipsam eaque incidunt, doloribus, obcaecati ex! Facilis quas placeat quaerat, ut quisquam dolor eius ducimus. Mollitia, quas, impedit inventore rerum quisquam reiciendis, dolore suscipit voluptatem a nobis maiores commodi? Vitae architecto unde, exercitationem laboriosam deleniti voluptatum cupiditate repudiandae ad tenetur consequatur debitis laborum velit placeat saepe voluptate necessitatibus quis quae rem quaerat quibusdam, ducimus aliquam? Magni deleniti optio sapiente ipsum vitae fugiat incidunt eligendi eos, natus, quis minima officiis eum quidem sint labore nihil doloremque. Consectetur officiis aliquid dolore iusto repellat fugiat officia eos odit quia ab, ipsa nemo in, repellendus saepe optio nisi totam voluptates iure eaque ut voluptas quam. Id tempore delectus nostrum repudiandae temporibus amet deleniti magni ad, quas, magnam voluptate rerum vero quisquam necessitatibus quam voluptatum! Error ducimus repellat ipsam, dicta incidunt eaque tempora! Autem consequuntur quia perferendis quod cumque accusamus.
            </marquee>
        </div>
    );
};

export default About;