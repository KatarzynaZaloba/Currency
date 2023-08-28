import './App.css';
import './index.css';
import Footer from "./App/Footer";

function App() {
    return (
        <div>
            <div>
                <main className="main">
                    <section className="section aboutMe">
                        <h2 className="section__subheader">O mnie</h2>
                        <img className="article__image section__aboutMePortrait" src="/src/images/kate.jpg"
                             alt="Katarzyna Żałoba"/>
                        <p>Hej, mam na imię Kasia i jestem tutaj, ponieważ zainteresowałam się programowaniem. Bardzo
                            miło mi będzie zaprosić cię do zgłębienia reszty strony.</p>
                        <p>W wolnych chwilach uwielbiam truchtać po lesie. Zawodowo zajmowałam się ochroną danych
                            osobowych, wszelkiego rodzaju wsparciem technicznym (helpdesk), miniserwisem sprzętów IT i
                            układaniem procesów i
                            instrukcji. </p>
                        <p>Od dziecka marzyłam o programowaniu. Dopiero po swoich trzydziestych urodzinach uświadomiłam
                            sobie, że nastał moment na powrócenie do marzenia z dzieciństwa. </p>
                    </section>
                </main>

            </div>
            <Footer title="2023 Katarzyna Żałoba"/>
        </div>
    );
}

export default App;
