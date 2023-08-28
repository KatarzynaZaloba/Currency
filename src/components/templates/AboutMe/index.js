import React from 'react';
import './style.css';
import Logo from "../../../images/kate.jpg";
import Section from "../../organisms/Section";

const AboutMe = () => {
    return (
        <Section
            title="O mnie"
            extraHeaderContent={
                <img className="article__image section__aboutMePortrait" src={Logo} alt="Katarzyna Żałoba"/>
            }
            body={
                <>
                    <p>
                        Hej, mam na imię Kasia i jestem tutaj, ponieważ zainteresowałam się programowaniem.
                        Bardzo miło mi będzie zaprosić cię do zgłębienia reszty strony. W wolnych chwilach
                        uwielbiam truchtać po lesie.
                    </p>
                    <p>
                        Zawodowo zajmowałam się ochroną danych osobowych, wszelkiego rodzaju wsparciem technicznym
                        (helpdesk), miniserwisem
                        sprzętów IT i układaniem procesów i instrukcji.</p>
                    <p>
                        Od dziecka marzyłam o programowaniu. Dopiero po swoich trzydziestych urodzinach
                        uświadomiłam
                        sobie, że nastał moment na powrócenie do marzenia z dzieciństwa.
                    </p>
                </>
            }
        />
    )
};

export default AboutMe;