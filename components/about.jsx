const services = [
    {
        title:`Machine Learning`,
        desc:`I can help you develop and deploy machine learning models to solve real-world problems.`
    },
    {
        title:`Data Engineering`,
        desc:`I help you in designing, building, and maintaining the architecture, databases and large-scale processing systems.`
    },
    {
        title:`DevOps`,
        desc:`I can help you automate your software development and deployment process, making it more efficient and reliable.`
    },
    {
        title:`Cloud`,
        desc:`I can help you design and implement a cloud-based infrastructure that is scalable, secure, and cost-effective.`
    },
    {
        title:`IT services delivery`,
        desc:`The most modern and high-quality design made at a professional level.`
    },
    {
        title:`Web Development`,
        desc:`High-quality development of sites at the professional level.`
    },
    {
        title:`Mobile Development`,
        desc:`Professional development of applications for iOS and Android.`
    }
]

const servicesInDiv = services.map((current,index) => {
    return  <li key={index}>
                <div>
                    <img src="../components/img/devicon.png" alt="devicon" className="devicon"/>
                </div>
                <div>
                    <h4>{current.title}</h4>
                    <p>{current.desc}</p>
                </div>
            </li>
})

export default function Aboutme(){
    return(
    <>

        <h2>About Me</h2>

        <div>

            <img src="../components/img/foto.png" alt="" style={{width:'200px'}}/>
            <h5>Cyber Security IT</h5>
            
        </div>

        <section>
            <p>
            At Raytheon, I’ve developed a strong foundation in cybersecurity, focusing on
            penetration testing, firewall configuration, and IDS setup.
            I was responsible for implementing security policies and responding swiftly to data security crises,
            ensuring the protection of corporate infrastructure.

            In addition to cybersecurity, I managed virtual machines, user accounts, and network equipment,
            while configuring server hardware and maintaining VMWare infrastructure.
            My work involved optimizing system performance and ensuring high availability across IT systems.

            I am proficient in Java, Python, and C++, with experience in scripting. During my internship at Harvard,
            I applied these programming skills to Quantum Computing projects, solving algorithms and research problems.
            Through my master’s coursework, I’ve also led large-scale IT projects,
            including application deployment and building cybersecurity programs,
            with a focus on cloud computing and project planning.
            </p>
        </section>
        
        {
            /* Add bellow the serivce and what you can provide */
        }
        
        <section>
            <h3>what I'm Doing</h3>
            <ul>
                {servicesInDiv}
            </ul>
        </section>

    </>
    )
}