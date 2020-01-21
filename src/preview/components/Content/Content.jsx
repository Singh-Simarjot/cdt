import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./content.scss"

class TextBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>

                <p>Carbon is IBM’s open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.</p>

                <ul className="page-navigation">
                    <li> <a href="#Intro"> Introduction </a> </li>
                    <li> <a href="#Guide"> Guiding principles </a> </li>
                    <li> <a href="#Governance"> Governance </a> </li>
                    <li> <a href="#"> Certificate of Originality </a> </li>
                </ul>

                <h2 id="Intro">Introduction</h2>
               
                <p>As IBM’s official design system, Carbon serves a wide range of designers and developers building digital products and experiences. It is maintained by a core team of designers, developers, and writers based in the Austin, Texas IBM Design Studio.</p>
                
                <p>The goals of the design system include improving UI consistency and quality, making the design and development process more efficient and focused, establishing a shared vocabulary between designer and developer, and providing clear, discoverable guidance around design and development best practices.</p>


                <h2 id="Guide">Guiding principles</h2>
                <p><strong>Carbon is open.</strong> The design system is a distributed effort, guided by the principles of the <Link to="#">open-source movement</Link>. Carbon’s users are also its makers, and everyone is encouraged to contribute.</p>

                <p><strong>Carbon is inclusive.</strong> It’s designed and built to be accessible to all, regardless of ability or situation.</p>

                <h2 id="Governance">Governance</h2>
                <p>The Carbon team encourages adoption through guidance and training, community development, maintenance, and support. The system is primarily maintained by a core team and governed by an executive board of design advisors.</p>

                <h3>Adoption</h3>
                <p> <strong>We conduct training classes and offer certifications.</strong> These cover introductions to Carbon and participating in this community. Each program is piloted internally and available upon release externally. We teach at conferences, bootcamp labs, and wherever else we’re needed.</p>

            </React.Fragment>
         );
    }
}
 
export default TextBlock;