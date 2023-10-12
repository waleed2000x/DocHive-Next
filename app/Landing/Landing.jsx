import TitleLottie from "./TitleLottie";
import TypeWriter from "./Typewriter/Typewriter";
import JoinButton from "./JoinButton";
import DoctorMobiles from "./DoctorMobiles";
import DoctorConversationAnimation from "./DoctorConversationAnimation";
import Heartbeat from "./Heartbeat";
import DoctorAsssistantAnimation from "./DoctorAssistantAnimation";
import StethoscopeAnimation from "./StethoscopeAnimation";

export default function Landing() {
  return (
    <div className="landing-parent">
      <div className="doctor-title">
        <div className="doctor-assist">
          <TitleLottie />
        </div>
        <div className="title-intro">
          <div className="title-intro-center">
            <div className="stethoscope">
              <StethoscopeAnimation />
            </div>
            <TypeWriter
              title={{ h1: "Doc", span: "Hive" }}
              style={{ stylingClass: "typewriter-title" }}
              words={[
                "Connect with Colleagues",
                "A Medical Community Hub",
                "Empowering Doctors Together.",
              ]}
            />
            <div className="join-button">
              <JoinButton />
            </div>
          </div>
        </div>
      </div>
      <div className="doctor-connect">
        <div className="connect-intro">
          <div className="connect-intro-center">
            <div className="doctor-conversation-animation">
              <DoctorConversationAnimation />
            </div>
            <h2>
              Doc<span>Hive</span>
            </h2>
            <TypeWriter
              words={["Enclaves of specialization"]}
              title={{}}
              style={{ stylingClass: "connect-intro-centerH5" }}
            />
            <p style={{ marginTop: "60px" }}>
              Create Circles of <b>Excellence</b>.
            </p>
            <p>
              Exclusive cliques of doctors in <b>various specialties</b>.
            </p>
            <p>
              Groups related to <b>healthcare</b> fields.
            </p>
          </div>
        </div>
        <div className="doctor-mobile">
          <div className="lottie-adjust">
            <DoctorMobiles />
          </div>
        </div>
      </div>
      <div className="doctor-communicate">
        <div className="doctor-communicate-lottie">
          <DoctorAsssistantAnimation />
        </div>
        <div className="connect-with-people">
          <div className="connect-with-people-center">
            <Heartbeat />
            <h2>
              Doc<span>Hive</span>
            </h2>
            <TypeWriter
              words={[
                "Patient Interaction Care Hub",
                "Colleague Consultation Corner",
              ]}
              title={{}}
              style={{ stylingClass: "connect-with-peopleH5" }}
            />
            <p style={{ marginTop: "60px" }}>
              Connect with peers for <b>valuable insights</b>.
            </p>
            <p>
              Collaborate on <b>critical</b> decision-making.
            </p>
            <p>
              Seek <b>expert advice and share knowledge</b>.
            </p>
            <p>
              <b>Streamline your patient care</b> experience with ease.
            </p>
            <p>
              Effortlessly <b>manage patient records</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
