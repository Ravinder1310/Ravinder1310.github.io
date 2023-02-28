import Ravinder_Kumar_Resume from "../Resume/fw19_0390_Ravinder_Kumar_Resume.pdf";

export const Resume2 = () => {
    const openResume = () => {
        window.open(
          "https://drive.google.com/file/d/1anRNS5KWvkYNbucHg2uGymuVlCb8GLlk/view?usp=sharing"
        );
      }

      return (
        <div>
           <a href={Ravinder_Kumar_Resume} download="fw19_0390-Ravinder-Kumar-Resume">
                    <button
                    onClick={openResume}
                    className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg">
                    Resume
                    </button>
                </a>
        </div>
      )
}



