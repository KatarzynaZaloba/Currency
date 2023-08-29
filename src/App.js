import React from 'react';
import './App.css';
import './index.css';
import Footer from "./components/molecules/Footer";
import AboutMe from "./components/templates/AboutMe";
import Section from "./components/organisms/Section";
import Article from "./components/molecules/Article";
import Container from "./components/atoms/Container";
import Main from "./components/atoms/Main";
import Blockquote from "./components/atoms/Blockquote";
import SmallestHeader from "./components/atoms/SmallestHeader";
import ListUnordered from "./components/molecules/ListUnordered";
import ListItem from "./components/atoms/ListItem";
import ListOrdered from "./components/molecules/ListOrdered";
import Table from "./components/molecules/Table";
import Caption from "./components/atoms/Caption";
import Thead from "./components/atoms/Thead";
import Tr from "./components/atoms/Tr";
import Th from "./components/atoms/Th";
import TableContainer from "./components/atoms/TableContainer";

function App() {
    return (
        <div>
            <Container>
                <Main>
                    <AboutMe/>
                </Main>
                <Section
                    title="Blog"
                    subtitle=""
                    body={
                        <>
                            <Article
                                date="28 sierpnia 2023 roku"
                                title="Przenosiny"
                                body={
                                    <>
                                        <p>Zdecydowałam się w końcu na przeniesienie bloga na Reacta. Wracam
                                            niebawem!</p>
                                        <p>Stara wersja bloga <a
                                            href="https://katarzynazaloba.github.io/blog-old/">TUTAJ</a></p>
                                    </>
                                }
                            />
                            <Article
                                date="18 sierpnia 2023 roku"
                                title="React - formularze"
                                body={<>
                                    <SmallestHeader>Elementy formularza naturalnie mają
                                        swój wewnętrzny
                                        stan
                                    </SmallestHeader>
                                    <ListUnordered>
                                        <ListItem>
                                            nam nie jest to na rękę
                                        </ListItem>
                                        <ListItem>
                                            my chcemy być <b>single source of truth</b>
                                        </ListItem>
                                        <ListItem>
                                            dlatego potrzebujemy <b>controlled components</b>
                                        </ListItem>
                                    </ListUnordered>
                                    <SmallestHeader>Przykład</SmallestHeader>
                                    <Blockquote>
                                        <b>const</b> App() &#123;<br/>
                                        &nbsp;&nbsp; <b>const</b> [name, setName] = useState("");<br/><br/>
                                        &nbsp;&nbsp;<b>const</b> onInputChange = (&#123;target&#125;) =>
                                        setName(target.value);<br/><br/>
                                        &nbsp;&nbsp;<b>const</b> onFormSubmit = (event) => &#123;
                                        &nbsp;&nbsp;&nbsp;&nbsp;event.preventDefault();<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;console.log(`Wysłano imię: $&#123;name&#125;`);<br/>
                                        &nbsp;&nbsp;&#125;;<br/><br/>
                                        &nbsp;&nbsp;<b>return</b> (<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;form onSubmit=&#123;onFormSubmit&#125;><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input
                                        value=&#123;name&#125; onChange=&#123;onInputChange&#125; /><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button>Wyślij!&lt;/button><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form><br/>
                                        &nbsp;&nbsp;);<br/>
                                        &#125;
                                    </Blockquote>
                                    <SmallestHeader className="article__subsubsubheader">Controlled
                                        components</SmallestHeader>
                                    <ListUnordered>
                                        <ListItem>
                                            tak nazywamy komponenty, których wartość jest kontrolowana
                                            przez <b>React</b>
                                        </ListItem>
                                        <ListItem>
                                            Przekazując <b>value</b>, sprawiamy, że <b>input</b> jest takim
                                            komponentem
                                        </ListItem>
                                        <ListItem>
                                            Dzięki temu w zmiennych stanowych mamy <b>single source of truth</b>
                                        </ListItem>
                                        <ListItem>
                                            Zawsze w tej sytuacji potrzebny jest <b>onChange</b>
                                        </ListItem>
                                    </ListUnordered>
                                    <SmallestHeader className="article__subsubsubheader">textarea</SmallestHeader>
                                    <Blockquote>
                                        <b>return</b> (<br/>
                                        &nbsp;&nbsp;&lt;textarea
                                        value=&#123;content&#125; onChange=&#123;onContentChange /><br/>
                                        );
                                    </Blockquote>
                                    <SmallestHeader className="article__subsubsubheader">Select</SmallestHeader>
                                    <Blockquote>
                                        <b>function</b> App() &#123;<br/>
                                        &nbsp;&nbsp;<b>const</b> [age, setAge] = useState("");<br/><br/>
                                        &nbsp;&nbsp;<b>const</b> onSelectChange = (&#123;target&#125;) =>
                                        setAge(target.value);<br/><br/>
                                        &nbsp;&nbsp;<b>const</b> onFormSubmit = (event) => &#123;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;event.preventDefault();<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;console.log(`Wysłano wiek: $&#123;age&#125;`);<br/>
                                        &nbsp;&nbsp;&#125;;<br/><br/>
                                        &nbsp;&nbsp;<b>return</b> (<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;form onSubmit=&#123;onFormSubmit&#125;><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;select
                                        value=&#123;age&#125; onChange=&#123;onSelectChange&#125;><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option /><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option>1 -
                                        49&lt;option><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option>50+&lt;/option><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/select><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button>Wyślij!&lt;/button><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form><br/>
                                        &nbsp;&nbsp;&#125;;<br/>
                                        &#125;
                                    </Blockquote>
                                    <SmallestHeader className="article__subsubsubheader">checkbox,
                                        radio</SmallestHeader>
                                    <Blockquote>
                                        <b>function</b> App() &#123;<br/>
                                        &nbsp;&nbsp;<b>const</b> [adult, setAdult] = useState(false);<br/><br/>
                                        &nbsp;&nbsp;<b>const</b> onAdultChange = (&#123;target&#125;) => &#123;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;setAdult(target.checked);<br/>
                                        &nbsp;&nbsp;&#125;<br/><br/>
                                        &nbsp;&nbsp;<b>return</b> (<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;label><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jestem pełnoletni<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="checkbox"
                                        checked=&#123;adult&#125; onChange=&#123;onAdultChange&#125; /><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label><br/>
                                        &nbsp;&nbsp;);<br/>
                                        &#125;
                                    </Blockquote>
                                </>
                                }
                            />
                            <Article
                                date="18 sierpnia 2023"
                                title="React - useState"
                                body={<>
                                    <SmallestHeader className="article__subsubsubheader">Licznik</SmallestHeader>
                                    <Blockquote>
                                        <b>import</b> React, &#123;useState&#125; from "react";<br/><br/>
                                        <b>function </b> App() &#123;<br/>
                                        &nbsp;&nbsp;<b>const</b> [counter, setCounter] = useState(0);<br/><br/>
                                        &nbsp;&nbsp;<b>return</b> (<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p>Liczba
                                        kliknięć: &#123;counter&#125;&lt;/p><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                                        onClick=&#123;() => setCounter(counter => counter +
                                        1)&#125;><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+1<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/><br/>
                                        &nbsp;&nbsp;);<br/>
                                        &#125;
                                    </Blockquote>
                                    <SmallestHeader className="article__subsubsubheader">useState</SmallestHeader>
                                    <ListUnordered>
                                        <ListItem>
                                            jest to tzw. <b>Hook</b>
                                        </ListItem>
                                        <ListItem>
                                            wywołujemy tę funkcję wewnątrz komponentu, by zadeklarować <i>zmienne
                                            stanowe</i>
                                        </ListItem>
                                        <ListItem>
                                            zwraca aktualną wartość i funkcję, która ją aktualizuje
                                        </ListItem>
                                        <ListItem>
                                            jedyny argument, który przekazujemy, to początkowa wartość
                                        </ListItem>
                                        <ListItem>
                                            aktualizacja <i>zmiennej
                                            stanowej</i> powoduje <i>rerender</i> komponentu,
                                            pod warunkiem, że jest to inna wartość
                                        </ListItem>
                                    </ListUnordered>
                                    <SmallestHeader className="article__subsubsubheader">useState możemy wywołać
                                        wielokrotnie</SmallestHeader>
                                    <Blockquote>
                                        <b>const</b> [counter, setCounter] = useState(0);<br/>
                                        <b>const</b> [products, setProducts] = useState([&#123;id: 1, name:
                                        "Huel"&#125;]);<br/>
                                        <b>const</b> [task, setTask] = useState(&#123;name: "obejrzeć
                                        serial"&#125;);
                                    </Blockquote>
                                    <SmallestHeader className="article__subsubsubheader">Hooki
                                        wywołujemy:</SmallestHeader>
                                    <ListUnordered>
                                        <ListItem>
                                            tylko wewnątrz komponentów
                                        </ListItem>
                                        <ListItem>
                                            zawsze na <i>najwyższym poziomie</i>
                                        </ListItem>
                                        <ListItem>
                                            zawsze w tej samej kolejności
                                        </ListItem>
                                    </ListUnordered>
                                </>
                                }
                            />
                            <Article
                                date="17 sierpnia 2023"
                                title="Eventy w React"
                                body={
                                    <>
                                        <SmallestHeader className="article__subsubsubheader">Składnia</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> Button = () => (<br/>
                                            &nbsp;&nbsp;&lt;button onClick=&#123;() => console.log("Cześć!")&#125;><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;Hej!<br/>
                                            &nbsp;&nbsp;&lt;/button><br/>
                                            );
                                        </Blockquote>
                                        <ListUnordered>
                                            <ListItem>
                                                nazwy atrybutów <b>camelCase</b>
                                            </ListItem>
                                            <ListItem>
                                                przekazujemy funkcję, a nie string
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader className="article__subsubsubheader">Argumenty w event
                                            handler-ach</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> products = [<br/>
                                            &nbsp;&nbsp;&#123;id: 1, name: "Huel"&#125;,<br/>
                                            &nbsp;&nbsp;&#123;id: 2, name: "Kinder Czekolada"&#125;,<br/>
                                            ];<br/><br/>
                                            <b>return (</b><br/>
                                            &nbsp;&nbsp;&lt;ul><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&#123;products.map((&#123;name, id&#125;) => (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li key=&#123;id&#125;><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;name&#125;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                                            onClick=&#123;() => removeProduct(id)&#125;>usuń&lt;/button><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;))&#125;<br/>
                                            &nbsp;&nbsp;&lt;/ul><br/>
                                            );
                                        </Blockquote>
                                    </>
                                }
                            />
                            <Article
                                date="16 sierpnia 2023 roku"
                                title="Więcej o zdarzeniach w DOM-u"
                                body={
                                    <>
                                        <SmallestHeader>
                                            Przykłady zdarzeń
                                        </SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                najechanie lub zjechanie myszką
                                            </ListItem>
                                            <ListItem>
                                                kliknięcie
                                            </ListItem>
                                            <ListItem>
                                                podwójne kliknięcie
                                            </ListItem>
                                            <ListItem>
                                                wciśnięcie klawisza na klawiaturze
                                            </ListItem>
                                            <ListItem>
                                                puszczenie klawisza
                                            </ListItem>
                                            <ListItem>
                                                zmiana rozmiaru okna
                                            </ListItem>
                                            <ListItem>
                                                załadowanie strony
                                            </ListItem>
                                            <ListItem>
                                                błąd
                                            </ListItem>
                                            <ListItem>
                                                spauzowanie wideo
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>Eventy są częścią DOM, czyli API przeglądarki</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                nie są wbudowane w JavaScript
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>Sposoby obsługi zdarzenia</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                Atrybuty (niezalecane)
                                                <Blockquote>
                                                    &lt;script><br/>
                                                    &nbsp;&nbsp;<b>const</b> hello = () => &#123;<br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("Cześć!");<br/>
                                                    &nbsp;&nbsp;&#125;;<br/>
                                                    &lt;/script><br/>
                                                    <br/>
                                                    &lt;button onclick="hello()">Przywitaj się!&lt;/button>
                                                </Blockquote>
                                                <ListItem>
                                                    <ListItem>
                                                        Właściwości elementu (trochę lepiej)
                                                        <Blockquote>
                                                            <b>const</b> hello = () => &#123;<br/>
                                                            &nbsp;&nbsp;console.log("Cześć!");<br/>
                                                            &#125;;<br/><br/>
                                                            button = document.querySelector(".button");<br/>
                                                            button.onClick = hello;
                                                        </Blockquote>
                                                    </ListItem>
                                                    <ListItem>
                                                        addEventListener (rekomendowana)
                                                        <Blockquote>
                                                            <b>const</b> hello = () => &#123;<br/>
                                                            & nbsp;&nbsp;console.log("Cześć!");<br/>
                                                            &#125;;<br/><br/>
                                                            button.addEventListener("click", hello);
                                                        </Blockquote>
                                                    </ListItem>
                                                    <ListItem>
                                                        Czasem warto odpiąć eventListener-a
                                                        <Blockquote>
                                                            <b>const</b> hello = () => &#123;<br/>
                                                            &nbsp;&nbsp;console.log("Cześć!");<br/>
                                                            &#125;;<br/><br/>
                                                            button.addEventListener("click", hello);<br/><br/>
                                                            &#47;&#47;później, kiedy to już nie jest
                                                            potrzebne<br/>
                                                            button.removeEventListener("click", hello);
                                                        </Blockquote>
                                                    </ListItem>
                                                </ListItem>
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>Funkcję, która obsługuje dany event, nazywamy często event
                                            handlerem</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                listener nasłuchuje na event
                                            </ListItem>
                                            <ListItem>
                                                i wywołuje event handler, kiedy ten
                                                event wystąpi
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>event.target</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> hello = (event) => &#123;<br/>
                                            &nbsp;&nbsp;console.log("Kliknięty
                                            element", event.target);<br/>
                                            &#125;;<br/><br/>
                                            button.addEventListener("click", hello);
                                        </Blockquote>
                                        <SmallestHeader>Event bubbling / delegation</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                po kolei zostaną wywołane event handlery elementów coraz wyżej w drzewie
                                                DOM
                                                <ListUnordered>
                                                    <ListItem>
                                                        można temu zapobiec za pomocą <b>event.stopPropagation();</b>
                                                    </ListItem>
                                                </ListUnordered>
                                                <ListItem>
                                                    ten kierunek można też zmienić (event capturing)
                                                </ListItem>
                                            </ListItem>
                                        </ListUnordered>
                                    </>
                                }
                            />
                            <Article
                                date="11 sierpnia 2023 roku"
                                title="JavaScript modules"
                                body={
                                    <>
                                        <SmallestHeader>>Named exports</SmallestHeader>
                                        <Blockquote>
                                            &#47;&#47; module.js<br/>
                                            <b>const</b> myFunction = () => &#123;<br/>
                                            &nbsp;&nbsp;console.log('hello');<br/>
                                            &#125;;<br/><br/>
                                            <b>export</b> &#123;myFunction&#125;;<br/>
                                            <b>export const</b> text = 'hello world';<br/><br/>
                                            <b>export default</b> &#123;<br/>
                                            &nbsp;&nbsp;some: "Object",<br/>
                                            &#125;;<br/><br/>
                                            &#47;&#47;index.js<br/>
                                            <b>import</b> module, &#123;myFunction, text &#125; <b>from</b> "./module";
                                        </Blockquote>
                                        <SmallestHeader>Zmienianie nazwy importów i exportów</SmallestHeader>
                                        <Blockquote>
                                            &#47;&#47; zmiana nazwy eksportu<br/>
                                            <b>export</b> &#123;myFunction <b> as < /b> anotherFunctionName &#125;;<br/><br/>
                                            &#47;&#47; zmiana nazwy importu<br/>
                                            <b>import</b> &#123;text <b>as</b> anotherName &#125;
                                            <b>from</b> "./module";
                                        </Blockquote>
                                        <SmallestHeader>Import wszystkiego</SmallestHeader>
                                        <Blockquote>
                                            <b>import</b> * <b>as</b> module <b>from</b> "./module";
                                        </Blockquote>
                                        <SmallestHeader>Kod modułu jest wykonywany raz</SmallestHeader>
                                        <p>Nawet jeśli jest importowany wielokrotnie.</p>
                                    </>
                                }
                            />
                            <Article
                                date="11 sierpnia 2023"
                                title="Jeszcze raz o create-react-app"
                                body={
                                    <>
                                        <SmallestHeader>Stworzenie nowego projektu</SmallestHeader>
                                        <Blockquote>
                                            npx create-react-app my-app<br/>
                                            cd my-app<br/>
                                            npm start
                                        </Blockquote>
                                        <SmallestHeader>npm run build</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>po w pisaniu tej komendy <b>Webpack</b> stworzy wersję naszej
                                                aplikacji przeznaczoną do deploymentu — tzw. <b>build</b>
                                            </ListItem>
                                            <ListItem>w tej wersji wszystkie pliki <b>JS</b> i <b>CSS</b> są połączone w
                                                zaledwie kilka zminifikowanych plików, dzięki czemu aplikacja <i><q>na
                                                    produkcji</q></i> ładuje
                                                się i działa szybciej
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>Struktura plików</SmallestHeader>
                                        <SmallestHeader>node_modules</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>folder, w którym są źródła bibliotek (zależności), których
                                                używa <b>create-react-app</b>
                                                <ListUnordered>
                                                    <ListItem>
                                                        w szczególności jest
                                                        tam <b>React</b>, <b>ReactDOM</b>, <b>Webpack</b>, <b>Babel</b>,
                                                        <b>ESLint</b>, <b>Jest</b>, <b>PostCSS</b> itd.
                                                    </ListItem>
                                                </ListUnordered>
                                            </ListItem>
                                            <ListItem>
                                                jest on generowany automatycznie podczas instalacji
                                            </ListItem>
                                            <ListItem>
                                                może być ogromny, zwykle zawiera tysiące plików
                                            </ListItem>
                                            <ListItem>
                                                nie modyfikujemy tego folderu ani go nie commitujemy
                                            </ListItem>
                                            <ListItem>
                                                ten folder w każdej chwili można wygenerować, wpisując komendę <b>npm
                                                install</b>
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>src</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                folder ze źródłami naszej aplikacji
                                            </ListItem>
                                            <ListItem>
                                                <b>Webpack</b> przy budowaniu aplikacji bierze pod uwagę tylko pliki
                                                umieszczone w tym folderze
                                            </ListItem>
                                            <ListItem>
                                                <b>Webpack</b> pte pliki łączy i z nich powstają wynikowe pliki w
                                                folderze <b>build</b>
                                            </ListItem>
                                            <ListItem>
                                                głównie zawiera pliki <b>JS</b> i <b>CSS</b>, ale może zawierać inne
                                                pliki,
                                                np. obrazki
                                            </ListItem>
                                            <ListItem>
                                                to tutaj zamieszczamy wszystkie nasze komponenty i prawie wyłącznie
                                                modyfikujemy właśnie ten
                                                folder
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>src/index.js</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                tzw. <i>JS entry point</i>
                                            </ListItem>
                                            <ListItem>
                                                główny plik <b>JS</b>, od którego <b>Webpack</b> zaczyna
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>Pozostałe pliki w folderze src</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                <b>serviceWorker.js</b> - potrzebne, kiedy tworzymy PWA
                                            </ListItem>
                                            <ListItem>
                                                <b>setupTests.js</b> - dodaje asercje, dzięki którym wygodniej pisze się
                                                testy kodu
                                            </ListItem>
                                            <ListItem>
                                                <b>index.css</b> - główne globalne style
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>public/index.html</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                szablon strony, do której <b>Webpack</b> doda wygenerowane
                                                pliki <b>JS</b> i <b>CSS</b>
                                            </ListItem>
                                            <ListItem>
                                                warto w tym pliku zmienić język na <b>pl</b>, jeśli aplikacja jest po
                                                polsku
                                            </ListItem>
                                            <ListItem>
                                                warto podmienić ikonkę strony
                                            </ListItem>
                                            <ListItem>
                                                <b>%PUBLIC_URL%</b> zostanie zamienione na adres URL naszej aplikacji
                                            </ListItem>
                                            <ListItem>
                                                warto dodać <b>og:image</b>
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>pozostałe pliki w folderze public</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                <b>favicon.ico, logo192.png, logo512png</b> - ikonka strony
                                            </ListItem>
                                            <ListItem>
                                                <b>manifest.json</b> - potrzebne, kiedy tworzymy PWA
                                            </ListItem>
                                            <ListItem>
                                                <b>robots.txt</b> — informacja dla botów (pozwolenie na indeksowanie
                                                strony)
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>package.json</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                zawiera różne dane na temat projektu
                                            </ListItem>
                                            <ListItem>
                                                <b>dependencies</b> - zależności (biblioteki, paczki), których używa
                                                nasza
                                                aplikacja
                                            </ListItem>
                                            <ListItem>
                                                na podstawie tego, co jest wymienione w <b>dependencies</b>, generuje
                                                się
                                                cały folder <b>node_modules</b>
                                            </ListItem>
                                            <ListItem>
                                                <b>eslintConfig</b> - konfiguracja <b>ESLinta</b>
                                            </ListItem>
                                            <ListItem>
                                                <b>browserslist</b> - przeglądarki, jakie wspieramy (można to sprawdzić
                                                na
                                                stronie <a href="https://browserl.ist/" target="_blank">browserl.ist</a>)
                                            </ListItem>
                                            <ListItem>
                                                <b>scripts</b> - tu definiujemy tzw. <i>npm scripts</i>
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>package-lock.json</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                w tym pliku zapisane jest dokładnie, z jakich wersji bibliotek
                                                korzystamy w
                                                projekcie
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>README.md</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>
                                                warto wprowadzić zmiany pod naszą aplikację
                                            </ListItem>
                                            <ListItem>
                                                warto zostawić informację o dostępnych skryptach
                                            </ListItem>
                                            <ListItem>
                                                warto usunąć sekcję dot. dokumentacji <b>create-react-app</b>
                                            </ListItem>
                                        </ListUnordered>
                                    </>
                                }
                            />
                            <Article
                                date="10 sierpnia 2023 roku"
                                title="Zmiany"
                                body={
                                    <>
                                        <p>Dziś będzie bez notatek z teorii. Nadal się uczę oczywiście, ale ja dzisiaj
                                            nie o
                                            tym.</p>
                                        <p>Strasznie się dużo pozmieniało w moim życiu i zastanawiam się, kiedy tak
                                            naprawdę
                                            był ten punkt
                                            zwrotny, gdy szykowałam grunt pod to, co jest dzisiaj. Gdy tak siedzę i
                                            rozmyślam, nasuwa mi się
                                            jeden dzień, a właśnie okres mojego życia, gdy pierwszy raz pomyślałam, czy
                                            by
                                            czegoś w tym życiu
                                            nie zmienić.</p>
                                        <p>To była wiosna 2020 roku, kiedy zostaliśmy zesłani na przymusowe zdalne z
                                            powodu
                                            covida. Trzy razy w
                                            tygodniu dzień rozpoczynałam od porannych 8-kilometrowych przebieżek po
                                            lesie. W
                                            tamtym momencie
                                            marzyłam o przebiegnięciu GSB tak jak np. Rafał Kot — mój ówczesny idol
                                            ultramaratonu. Po
                                            przebieżkach był szybki prysznic i start pracy ze świeżym umysłem. Wtedy
                                            poczułam, że ten tryb pracy
                                            jest dla mnie idealny.</p>
                                        <p>Aktualnie po ok. 3,5 roku, pracuję zdalnie jako <i>Junior Frontend
                                            Developer</i> przy jednym z super
                                            projektów budowania portalu dla pacjentów onkologicznych. Biegam dwa razy w
                                            tygodniu przed pracą ok.
                                            3-kilometrowe przebieżki, w sobotę trochę dłuższe. Poznaję fantastycznych
                                            ludzi
                                            o niesamowitych
                                            osobowościach. To uczucie — gdy poznajesz nową osobę i nie macie przed sobą
                                            sztucznego dystansu, a
                                            rozmowa po prostu płynie — jest niesamowite. Powstaje, wtedy gdy pasjonat
                                            spotyka się z pasjonatem.
                                            Uczę się nowych technologii, codziennie powtarzam materiał z kursu. Patrzę
                                            na
                                            pracę doświadczonych
                                            programistów i z zapałem ich doganiam.</p>
                                        <p>A pomyśleć, że mogło mnie to wszystko ominąć.</p>
                                        <p>I jasne, w tym moim punkcie życia, gdy jestem zainteresowana
                                            web-developmentem,
                                            mam takie <i>coś</i>
                                            w mojej głowie, które <em>mówi</em> mi <q>Dlaczego nie poszłam na studia
                                                informatyczne, gdy miałam
                                                19 lat?</q> Czy żałuję? I tak i nie. Jestem po logistyce i po
                                            administracji.
                                            Pracowałam jako
                                            specjalista ds. importu, specjalista ds. administracyjnych, koordynator
                                            jakości
                                            i procesów IT,
                                            inspektor ochrony danych osobowych. Takie jest moje doświadczenie i gdyby
                                            nie
                                            ono nie byłabym teraz
                                            tym, kim jestem dziś. Poza tym kwestia studiów to nie jest tematem
                                            zamkniętym.
                                            Aktualnie studiuję
                                            podyplomowo <i>Frontend Development</i>.</p>
                                        <p>Każda zmiana rodzi na początku uczucie strachu, ale po pewnym czasie ten
                                            strach
                                            zamienia się w
                                            ogromną satysfakcję z podjętych decyzji.</p>
                                        <q className="article__quote">Dreams without goals are just dreams and
                                            ultimately
                                            they fuel disappointment.
                                            On the road to achieving your dreams, you must apply discipline but more
                                            importantly constistency
                                            because without commitment you never will start and without constistency you
                                            will never finish</q>
                                        <p>- Denzel Washington</p>
                                    </>
                                }
                            />
                            <Article
                                date="8 sierpnia 2023 roku"
                                title="create-react-app"
                                body={
                                    <>
                                        <p>Aby skorzystać z tego polecenia, uruchamiamy <i>Git Bash-a</i> i wpisujemy w
                                            okno
                                            konsoli:</p>
                                        <ListUnordered>
                                            <ListItem>odniesienie do ścieżki, w której chcemy
                                                utworzyć projekt
                                                <Blockquote>
                                                    cd c:\dev
                                                </Blockquote>
                                                <ListUnordered>
                                                    <ListItem>następnie polecenie stworzenia
                                                        aplikacji reactowej
                                                        <Blockquote>
                                                            npx create-react-app nazwa_aplikacji
                                                        </Blockquote>
                                                    </ListItem>
                                                </ListUnordered>
                                            </ListItem>
                                        </ListUnordered>
                                        <p>Powiem szczerze, że miałam problem z ponownym użyciem tej komendy. Więc
                                            wrzucam
                                            tutaj rozwiązanie,
                                            jeżeli ta komenda nie działa:</p>
                                        <ListOrdered>
                                            <ListItem><b>Sprawdź wersję Node.je i npm:</b> Upewnij
                                                się, że masz
                                                zainstalowaną wersję Node.js i npm. Możesz to zrobić, wpisując
                                                następujące
                                                komendy w terminalu:
                                                <Blockquote>
                                                    node -v<br/>
                                                    npm -v
                                                </Blockquote>
                                                Upewnij się, że otrzymujesz poprawne numery wersji dla obu tych
                                                narzędzi.
                                            </ListItem>
                                            <ListItem><b>Aktualizacja npm:</b> Jeśli npm jest
                                                przestarzały, warto go
                                                zaktualizować. Możesz to zrobić za pomocą komendy:
                                                <Blockquote>
                                                    npm install -g npm@latest
                                                </Blockquote>
                                                Ta komenda zainstaluje najnowszą wersję npm.
                                            </ListItem>
                                            <ListItem><b>Wyczyść cache npm:</b> Czasami problemy
                                                mogą być spowodowane
                                                uszkodzonym cache npm. Możesz go wyczyścić, wpisując:
                                                <Blockquote>
                                                    npm cache clean --force
                                                </Blockquote>
                                            </ListItem>
                                            <ListItem><b>Utwórz nowy projekt w innej
                                                lokalizacji:</b> Jeśli problem nadal
                                                występuje, spróbuj utworzyć nowy projekt w zupełnie innej lokalizacji na
                                                dysku, np. na pulpicie
                                                lub w innym katalogu. To pomoże ustalić, czy problem jest związany z
                                                daną
                                                ścieżką.
                                            </ListItem>
                                            <ListItem><b>Reinstalacja Node.js:</b> Jeśli żaden z
                                                powyższych kroków nie
                                                pomaga, możesz spróbować przeinstalować <i>Node.js</i> w celu
                                                naprawienia
                                                ewentualnych uszkodzeń
                                                instalacji.
                                            </ListItem>
                                        </ListOrdered>
                                        <p>Trochę poćwiczę. Zastanawiam się, czy nie przenieść całego bloga na Reacta.
                                            Bo w
                                            sumie dlaczego nie? </p>
                                    </>
                                }
                            />
                            <Article
                                date="7 sierpnia 2023 roku"
                                title="React - c.d."
                                body={
                                    <>
                                        <SmallestHeader>JSX automatycznie escape-uje HTML-a</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> message = "&lt;strong>coś tam"<br/>
                                            <b>const</b> element = &lt;div&gt;&#123;message&#125;&lt;/div&gt;
                                        </Blockquote>
                                        <SmallestHeader>React aktualizuje tylko to, co trzeba</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> element1 = &lt;div className="klasa1">Treść&lt;/div>;<br/>
                                            ReactDOM.render(element1, document.getElementById('root'));<br/><br/>
                                            <b>const</b> element2 = &lt;div className="klasa2">Treść&lt;/div>;<br/>
                                            ReactDOM.render(element2, document.getElementById('root'));
                                        </Blockquote>
                                        <SmallestHeader>Komponenty</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> Hello = (props) => (<br/>
                                            &lt;h1>Cześć &#123;props.name&#125;!&lt;/h1><br/>
                                            );<br/><br/>
                                            <b>const</b> element =
                                            &lt;Hello name="Krzychu"/>
                                            ;<br/>
                                        </Blockquote>
                                        <ListUnordered>
                                            <ListItem>są funkcjami JavaScript (lub klasami)</ListItem>
                                            <ListItem>otrzymują <b>props</b> i zwracają element
                                                React
                                            </ListItem>
                                            <ListItem>atrybuty stają się właściwościami
                                                obiektu <b>props</b></ListItem>
                                            <ListItem>pozwalają podzielić aplikację na odrębne
                                                niezależne części (trochę tak
                                                jak w BEM)
                                            </ListItem>
                                            <ListItem>nazwy komponentów zaczynamy wielką literą</ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>Komponent nie zmienia przekazanych mu props</SmallestHeader>
                                        <ListUnordered>
                                            <ListItem>komponenty na tych samych <b>props</b> powinny
                                                zwracać zawsze to samo
                                            </ListItem>
                                        </ListUnordered>
                                        <SmallestHeader>Jak renderować warunkowo? if/else</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> Hello = (props) => &#123;<br/>
                                            &nbsp;&nbsp;<b>if</b> (!props.name) &#123;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<b>return</b> (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1>Cześć nieznajomy!&lt;/h1>;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                                            &nbsp;&nbsp;&#125;<br/><br/>
                                            &nbsp;&nbsp;<b>return (</b><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1>Cześć &#123;props.name&#125;!&lt;/h1><br/>
                                            &nbsp;&nbsp;);<br/>
                                            &#125;;<br/><br/>
                                            <b>const</b> element = (<br/>
                                            &nbsp;&nbsp;&lt;div><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Hello name="Krzychu"/&gt;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Hello/&gt;<br/>
                                            &nbsp;&nbsp;&lt;/div><br/>
                                            );<br/>
                                        </Blockquote>
                                        <SmallestHeader>Potrójny operator ? :</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> Hello = (props) => (<br/>
                                            &nbsp;&nbsp;<b>return</b> (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1>Cześć &#123;props.name ? props.name :
                                            'nieznajomy'&#125;!&lt;/h1>;<br/>
                                            &nbsp;&nbsp;);<br/>
                                            );<br/><br/>
                                        </Blockquote>
                                        <SmallestHeader>Operator OR ||</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> Hello = (props) => (<br/>
                                            &nbsp;&nbsp;<b>return</b> (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1>Cześć &#123;props.name ||
                                            'nieznajomy'&#125;!&lt;/h1>;<br/>
                                            &nbsp;&nbsp;);<br/>
                                            );<br/><br/>
                                        </Blockquote>
                                        <SmallestHeader>Operator AND &&</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> Hello = (props) => (<br/>
                                            &nbsp;&nbsp;<b>return</b> (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;!!props.name && (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1>Cześć &#123;props.name&#125;!&lt;/h1><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;)<br/><br/>
                                            &nbsp;&nbsp;);<br/>
                                            );<br/><br/>
                                        </Blockquote>
                                        <p>Operator !! pozwoli przekonwertować wartość na <i>boolean-a</i> bez
                                            możliwości użycia <i>undefined</i>.</p>
                                        <SmallestHeader>Komponent może zwrócić null</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> Hello = (props) => (<br/>
                                            &nbsp;&nbsp;<b>return</b> (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<b>if</b> (!props.name) &#123;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>return null</b>;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<b>return</b> (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1>Cześć &#123;props.name&#125;!&lt;/h1><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                                            &nbsp;&nbsp;&#125;<br/>
                                        </Blockquote>
                                        <SmallestHeader>Tablice w React.js</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> ProductList = props => (<br/>
                                            &nbsp;&nbsp;&lt;ul><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;li><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.products.map(product =>
                                            (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li>&#123;product&#125;&lt;/li>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul><br/>
                                            &nbsp;&nbsp;);<br/><br/>
                                            <b>const</b> element = (<br/>
                                            &nbsp;&nbsp;&lt;ProductList
                                            products=&#123;["papier", "mleko", "jajka"]&#125; /><br/>
                                        </Blockquote>
                                        <SmallestHeader>Key</SmallestHeader>
                                        <Blockquote>
                                            <b>const</b> ProductList = props => (<br/>
                                            &nbsp;&nbsp;&lt;ul><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;li><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.products.map(product => (
                                            <br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li
                                            key=&#123;product.id&#125;>&#123;product.name&#125;&lt;/li><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul><br/>
                                            &nbsp;&nbsp;);<br/><br/>
                                            <b>const</b> products = [<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&#123;id: 1, name: "papier"&#125;,<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&#123;id: 2, name: "mleko"&#125;,<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&#123;id: 3, name: "jajka"&#125;<br/>
                                            ];<br/><br/>
                                            <b>const</b> element = (<br/>
                                            &lt;ProductList products=&#123;products&#125; /><br/>
                                            );
                                        </Blockquote>
                                        <SmallestHeader>Fragments</SmallestHeader>
                                        <Blockquote>
                                            <b>return</b> (<br/>
                                            &nbsp;&nbsp;&lt;React.Fragment><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1>Witaj świecie!&lt;/h1><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2>Co tam słychać!?&lt;/h2><br/>
                                            &nbsp;&nbsp;&lt;React.Fragment><br/>
                                            );
                                        </Blockquote>
                                    </>
                                }
                            />
                            <Article
                                date="3 sierpnia 2023"
                                title="Podsumowanie"
                                body={
                                    <>
                                        <p>Nadszedł czas podsumowania, gdzie po raz kolejny pod lupę wezmę swoją naukę
                                            oraz aktywności fizyczne. Jeśli mogę zacząć najpierw od aktywności — udało
                                            mi się
                                            utrzymać bieganie trzy
                                            razy w tygodniu!
                                            Niestety zapomniałam, że filtr aktywności w Garmin-ie nie pozwala mi na
                                            zastosowanie własnych dat,
                                            żeby wyciągnąć analogiczne dane z poprzedniego okresu a gapa ze mnie, że nie
                                            spojrzałam kilka dni
                                            wcześniej.</p>
                                        <p>To może podsumujemy przetruchtane kilometry?</p>
                                        <TableContainer>
                                            <Table>
                                                <Caption>porównanie liczby przebiegniętych (no, przetruchtanych)
                                                    kilometrów w pełnych miesiącach
                                                </Caption>
                                                <Thead>
                                                    <Tr>
                                                        <Th>
                                                            liczba przebiegniętych (no, przetruchtanych) kilometrów
                                                            czerwiec
                                                            2023
                                                        </Th>
                                                        <Th>
                                                            liczba przebiegniętych (no, przetruchtanych) kilometrów
                                                            lipiec
                                                            2023
                                                        </Th>
                                                        <Th>różnica</Th>
                                                    </Tr>
                                                </Thead>
                                                <tbody>
                                                <Tr>
                                                    <td>0</td>
                                                    <td>16,4km</td>
                                                    <td>16,4km</td>
                                                </Tr>
                                                </tbody>
                                                <tfoot>
                                                </tfoot>
                                            </Table>
                                        </TableContainer>
                                        <p>Mój wykładowca Statystyki na moich studiach licencjackich, kiedyś powiedział,
                                            że statystyka to przekłamanie, ponieważ umożliwia manipulowanie danymi w
                                            taki
                                            sposób, aby
                                            pokazać tylko to, co chcemy pokazać. Aby uniknąć przekłamania, będę
                                            porównywała teraz kilometraże
                                            miesięcznie. I jak na razie jest spoko. Z każdym treningiem w każdym
                                            tygodniu ten kilometraż się
                                            minimalnie zwiększa. I tak trzymać!</p>
                                        <p>A co z powtarzaniem materiału z kursu programowania?</p>
                                        <p>A bardzo dobrze, jestem już w połowie, na ósmym module i powtarzam React-a.
                                            Założenie jest takie, aby
                                            skończyć powtarzać materiał do października. Czas okaże, czy mi się uda.</p>
                                        <p>I kolejna dobra wiadomość — z dnia na dzień coraz pewniej pracuję z kodem. I
                                            bardzo się z tego
                                            cieszę! </p>
                                    </>
                                }
                            />
                        </>
                    }
                />
            </Container>
            <Footer title="2023 Katarzyna Żałoba"/>
        </div>
    );
}

export default App;
