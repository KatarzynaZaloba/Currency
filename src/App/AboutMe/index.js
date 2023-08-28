import React from 'react';
import './style.css';
import Logo from "../../images/kate.jpg";
import Paragraph from "../Paragraph";
import Section from "../Section";

const AboutMe = () => {
    return (
        <Section
            title="O mnie"
            extraHeaderContent={
                <img className="article__image section__aboutMePortrait" src={Logo} alt="Katarzyna Żałoba"/>
            }
            body={
                <>
                    <Paragraph>
                        Hej, mam na imię Kasia i jestem tutaj, ponieważ zainteresowałam się programowaniem.
                        Bardzo
                        miło mi będzie zaprosić cię do zgłębienia reszty strony. W wolnych chwilach
                        uwielbiam truchtać po lesie. Zawodowo zajmowałam się ochroną danych
                        osobowych, wszelkiego rodzaju wsparciem technicznym (helpdesk), miniserwisem
                        sprzętów IT i
                        układaniem procesów i
                        instrukcji.
                        Od dziecka marzyłam o programowaniu. Dopiero po swoich trzydziestych urodzinach
                        uświadomiłam
                        sobie, że nastał moment na powrócenie do marzenia z dzieciństwa.
                    </Paragraph>
                </>
            }
        />
    )};

    export default AboutMe;