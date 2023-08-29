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
                                                    ten kierunek można też zmienić
                                                    (event capturing)
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
                                            głównie zawiera pliki <b>JS</b> i <b>CSS</b>, ale może zawierać inne pliki,
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
                                            warto w tym pliku zmienić język na <b>pl</b>, jeśli aplikacja jest po polsku
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
                                            <b>robots.txt</b> — informacja dla botów (pozwolenie na indeksowanie strony)
                                        </ListItem>
                                    </ListUnordered>
                                    <SmallestHeader>package.json</SmallestHeader>
                                    <ListUnordered>
                                        <ListItem>
                                            zawiera różne dane na temat projektu
                                        </ListItem>
                                        <ListItem>
                                            <b>dependencies</b> - zależności (biblioteki, paczki), których używa nasza
                                            aplikacja
                                        </ListItem>
                                        <ListItem>
                                            na podstawie tego, co jest wymienione w <b>dependencies</b>, generuje się
                                            cały folder <b>node_modules</b>
                                        </ListItem>
                                        <ListItem>
                                            <b>eslintConfig</b> - konfiguracja <b>ESLinta</b>
                                        </ListItem>
                                        <ListItem>
                                            <b>browserslist</b> - przeglądarki, jakie wspieramy (można to sprawdzić na
                                            stronie <a href="https://browserl.ist/" target="_blank">browserl.ist</a>)
                                        </ListItem>
                                        <ListItem>
                                            <b>scripts</b> - tu definiujemy tzw. <i>npm scripts</i>
                                        </ListItem>
                                    </ListUnordered>
                                    <SmallestHeader>package-lock.json</SmallestHeader>
                                    <ListUnordered>
                                        <ListItem>
                                            w tym pliku zapisane jest dokładnie, z jakich wersji bibliotek korzystamy w
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
                            </>
                            }
                        />
                        </Container>
                        <Footer title="2023 Katarzyna Żałoba"/>
                        </div>
                        );
                    }
                    export default App;
