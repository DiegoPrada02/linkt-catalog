import { pageTitles } from "../data/dictionary";
import PageTitle from "./PageTitle";

function About(){
    return(
        <PageTitle
            title={pageTitles[1].title}
            subtitle={pageTitles[1].subtitle}
            extraContent = {
                <div>
                    {pageTitles[1].text}
                </div>
            }
        />
    )
}

export default About;
