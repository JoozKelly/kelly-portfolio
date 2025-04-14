import { Link } from 'react-router-dom'
import { projects } from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Legal = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                <span className="blue-gradient_text font-semibold
        drop-shadow">Credits</span>
            </h1>

            <div className="text-2xl font-poppins my-10 gap-16">
                <p > Thanks to all Sketchfab users who provided their 3D assets and made this project possible, any many
                    thanks to Thaddeus Trystan for editing each assets:</p>
            </div>

            <h4 className="text-2xl font-poppins my-10 gap-16">
                iangchang - Robo Bomb <br />
                Denys Almaral - Idle 2 Male <br />
                Romain Perrone - Taipei 101 <br />
                Ivan Norman - Low-Poly University <br />
                itslerm - Low Poly Book Pile (2) <br />
                generalista3D - Capsule Corporation Spaceship - Low Poly - Free <br />
                Business boy - Cactuar <br />
                Shayan4321 - BASKET BALL COURT <br />
                Alex Martire - Data Center (low-poly) <br />
                Rylae Shylna - Blue mailbox on a wooden stand <br />
                A Certain Duck - Sydney Emerald-Class Low Poly <br />
                Michael Hooper - Low Poly Rocks <br />
                NEEEU Spaces GmbH - Jo on Bike – Rigged & Animated <br />
            </h4>


            <h1 className="head-text">
                <span className="blue-gradient_text font-semibold
        drop-shadow">Disclaimer</span>
            </h1>

            <div className="text-2xl font-poppins my-10 gap-16">
                <p > If you require any more information or have any questions about my 
                    site's disclaimer, please feel free to contact me by email at joozkelly12@gmail.com.
                    <br /> <br />
                    All the information on this website - kellygluecktayong.com - is published in good faith and 
                    for general information purpose only. kellygluecktayong.com does not make any warranties about 
                    the completeness, reliability and accuracy of this information. Any action you take upon the information 
                    you find on this website (kellygluecktayong.com), is strictly at your own risk. kellygluecktayong.com will not be 
                    liable for any losses and/or damages in connection with the use of my website.
                    <br /> <br />
                    From my website, you can visit other websites by following hyperlinks to such external sites. 
                    While I strive to provide only quality links to useful and ethical websites, I have no control 
                    over the content and nature of these sites. These links to other websites do not imply a recommendation 
                    for all the content found on these sites. Site owners and content may change without notice and may occur 
                    before I have the opportunity to remove a link which may have gone 'bad'.
                    <br /><br />
                    Please be also aware that when you leave my website, other sites may have different privacy policies and 
                    terms which are beyond my control. Please be sure to check the Privacy Policies of these sites as well as their 
                    "Terms of Service" before engaging in any business or uploading any information.
                    </p>
            </div>

            <h1 className="head-text">
                <span className="blue-gradient_text font-semibold
        drop-shadow">Consent</span>
            </h1>

            <div className="text-2xl font-poppins my-10 gap-16">
                <p > By using my website, you hereby consent to my disclaimer and agree to its terms.
                    </p>
            </div>

            <h1 className="head-text">
                <span className="blue-gradient_text font-semibold
        drop-shadow">Update</span>
            </h1>

            <div className="text-2xl font-poppins my-10 gap-16">
                <p > Should I update, amend or make any changes to this document, those changes will be prominently posted here.
                    </p>
            </div>
        </section>
    )
}

export default Legal