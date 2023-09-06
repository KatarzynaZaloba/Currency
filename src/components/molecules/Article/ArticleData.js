import React from "react";
import Kate from "../../../images/scarpa.jpg";
import Schema from "../../../images/schemat.png";
import Null from "../../../images/nullUndefined.jpg";
import Blockquote from "../../atoms/Blockquote";
import SmallestHeader from "../../atoms/SmallestHeader";
import ListUnordered from "../../molecules/ListUnordered";
import ListItem from "../../atoms/ListItem";
import ListOrdered from "../../molecules/ListOrdered";
import Table from "../../molecules/Table";
import Caption from "../../atoms/Caption";
import Thead from "../../atoms/Thead";
import Tr from "../../atoms/Tr";
import Th from "../../atoms/Th";
import TableContainer from "../../atoms/TableContainer";
import Q from "../../atoms/Q";
import Figure from "../../atoms/Figure";

export const articlesLink = [
    {
        id: 86,
        date: "06 września 2023 roku",
        title: "Podsumowanie kolejnego miesiąca",
        body: (
            <>
                <p>Jeżeli miałabym podsumować moją dotychczasową naukę (powtórkę materiału z kursu) to muszę rzec wszem
                    i wobec, że załapałam bakcyla! Przed pracą stosuję czas kilku godzin na praktykę i powtórkę teorii
                    na swoich projektach, by po tym czasie przejść do praktycznego zastosowania tego, co powtórzyłam w
                    projekcie komercyjnym. Czyli lekko podsumowując - jest progres!</p>
                <p>Druga kwestia, to bieganie. Rodzice dzieci szkolnych zróbcie hałas! Cieszę się również, że moja
                    latorośl poszła do szkoły, więc będę mogła z rana uskuteczniać poranne przebieżki po lesie.</p>
                <p>W liczbach wygląda to tak:</p>
                <TableContainer>
                    <Table>
                        <Caption>porównanie liczby przebiegniętych (no, przetruchtanych)
                            kilometrów w pełnych miesiącach
                        </Caption>
                        <Thead>
                            <Tr>
                                <Th>
                                    czerwiec
                                    2023
                                </Th>
                                <Th>
                                    lipiec
                                    2023
                                </Th>
                                <Th>
                                    sierpień
                                    2023
                                </Th>
                                <Th>różnica</Th>
                            </Tr>
                        </Thead>
                        <tbody>
                        <Tr>
                            <td>0</td>
                            <td>16,4km</td>
                            <td>32,5km</td>
                            <td className="tableText__positive">16,1km</td>
                        </Tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </Table>
                </TableContainer>
                <p>Jak widać, jest progres, co prawda liczba kilometrów nadal nie odpowiada tej, do której byłam
                    przyzwyczajona kilka lat temu, ale na wszystko przyjdzie czas.</p>
                <p>Jeśli chodzi o bloga, to pozostało mi przerobić znaczniki HTML w niektórych miejscach na komponenty
                    React-owe. Gdy się już tym zajmę, popracuję nad szatą graficzną, wyszukiwarką i dostosowaniem kart
                    artykułów do przyjemniejszej formy niż aktualnej formy scrollowania.</p>
                <p>Także czas zakasania rękawów i powrót do pracy! Trzymajcie się ciepło!</p>
            </>
        )
    },
    {
        id: 85,
        date: "05 września 2023 roku",
        title: "Zrobiłam to!",
        body: (
            <>
                <p>Przeniosłam bloga na Reacta, a artykuły renderuję z zewnętrznego komponentu.</p>
                <p>Mam w planach wprowadzenie kilku wersji bloga przy pomocy <i>GitHub Pages</i>.
                    Będą mi one szczególnie pomocne przy nauce innych frameworków CSS
                    jak <i>Bulma</i>, <i>Tailwind</i> czy <i>Skeleton</i>.
                    To, że mam artykuły z zewnętrznego źródła, pozwala mi na jeszcze lepsze rozplanowanie swojej pracy i
                    manipulowanie stylami bez problemów.</p>
            </>
        )
    },
    {
        id: 84,
        date: "28 sierpnia 2023 roku",
        title: "Przenosiny",
        body: (
            <>
                <p>Zdecydowałam się w końcu na przeniesienie bloga na Reacta. Wracam niebawem!</p>
                <p>Stara wersja bloga <a href="https://katarzynazaloba.github.io/blog-old/">TUTAJ</a></p>
            </>
        )
    },
    {
        id: 83,
        date: "18 sierpnia 2023 roku",
        title: "React - formularze",
        body: (
            <>
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
        )
    },
    {
        id: 82,
        date: "18 sierpnia 2023",
        title: "React - useState",
        body: (
            <>
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
        )
    },
    {
        id: 81,
        date: "17 sierpnia 2023 roku",
        title: "Eventy w React",
        body: (
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
        )
    },
    {
        id: 80,
        date: "16 sierpnia 2023 roku",
        title: "Więcej o zdarzeniach w DOM-u",
        body: (
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
        )
    },
    {
        id: 79,
        date: "11 sierpnia 2023 roku",
        title: "JavaScript modules",
        body: (
            <>
                <SmallestHeader>Named exports</SmallestHeader>
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
        )
    },
    {
        id: 78,
        date: "11 sierpnia 2023 roku",
        title: "Jeszcze raz o create-react-app",
        body: (
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
                        zaledwie kilka zminifikowanych plików, dzięki czemu aplikacja <i><Q>na
                            produkcji</Q></i> ładuje
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
        )

    },
    {
        id: 77,
        date: "10 sierpnia 2023 roku",
        title: "Zmiany",
        body: (
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
                    w mojej głowie, które <em>mówi</em> mi <Q>Dlaczego nie poszłam na studia
                        informatyczne, gdy miałam
                        19 lat?</Q> Czy żałuję? I tak i nie. Jestem po logistyce i po
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
                <Q>Dreams without goals are just dreams and
                    ultimately
                    they fuel disappointment.
                    On the road to achieving your dreams, you must apply discipline but more
                    importantly constistency
                    because without commitment you never will start and without constistency you
                    will never finish</Q>
                <p>- Denzel Washington</p>
            </>
        )
    },
    {
        id: 76,
        date: "8 sierpnia 2023 roku",
        title: "create-react-app",
        body: (
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
        )
    },
    {
        id: 75,
        date: "7 sierpnia 2023 roku",
        title: "React - c.d.",
        body: (
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
        )
    },
    {
        id: 74,
        date: "3 sierpnia 2023 roku",
        title: "Podsumowanie",
        body: (
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
        )
    },
    {
        id: 73,
        date: "2 sierpnia 2023 roku",
        title: "React c.d.",
        body: (
            <>
                <SmallestHeader>Atrybuty w JSX</SmallestHeader>
                <Blockquote>
                    <b>const</b> element = (<br/>
                    &nbsp;&nbsp;&lt;div className="container"><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button disabled=&#123;true&#125;>Wyłączony
                    przycisk&lt;/button><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button disabled>Wyłączony
                    przycisk&lt;/button><br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    );
                </Blockquote>
                <p>Do określenia klasy nie używamy atrybutu <i>class</i> tylko className.
                    W <i>JSX</i> możemy przekazywać różne typy , nawet <i>boolean-a</i> i tak
                    jak w załączonym przykładzie wyżej - dodać
                    wartość <i>true</i> w <i>curly braces</i> do atrybutu <i>disabled</i>.
                    Oczywiście podkreślić trzeba, że obowiązuje tutaj konwencja <i>camelCase</i>.
                </p>
                <SmallestHeader>Atrybuty spread</SmallestHeader>
                <Blockquote>
                    <b>const</b> attributes = (<br/>
                    &nbsp;&nbsp;className: "button",<br/>
                    &nbsp;&nbsp;disabled: <b>true</b>,<br/>
                    );<br/><br/>
                    <b>const</b> element = (<br/>
                    &nbsp;&nbsp;&lt;button &#123;...attributes&#125;><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Wyłączony przycisk<br/>
                    &nbsp;&nbsp;&lt;/button><br/>
                    );
                </Blockquote>
            </>
        )
    },
    {
        id: 72,
        date: "1 sierpnia 2023 roku",
        title: "React",
        body: (
            <>
                <p>React jest odpowiedzialny za to, żeby łatwo podzielić na komponenty aplikację
                    i
                    renderować dynamicznie HTML-a</p>
                <SmallestHeader>React</SmallestHeader>
                <ListUnordered>
                    <ListItem>React.js jest biblioteką JavaScript</ListItem>
                    <ListItem>bardzo ułatwia tworzenie interaktywnych
                        interfejsów użytkownika (coś
                        dynamicznie się zmienia na stronie po akcji użytkownika bez potrzeby
                        przeładowywania całej
                        strony)
                    </ListItem>
                    <ListItem>pozwala na efektywne renderowanie
                        <ListUnordered>
                            <ListItem>aktualizuje tylko to, co trzeba w
                                drzewie DOM
                            </ListItem>
                        </ListUnordered>
                    </ListItem>
                    <ListItem>bazuje na komponentach
                    </ListItem>
                </ListUnordered>
                <SmallestHeader>Dodanie Reacta i Babela do strony</SmallestHeader>
                <Blockquote>
                    &lt;script defer src="https://unpkg.com/react@18/umd/react.development.js"
                    crossorigin>&lt;/script><br/>
                    &lt;script defer
                    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
                    crossorigin>&lt;/script><br/>
                    &lt;script defer
                    src="https://unpkg.com/babel-standalone@6/babel.min.js">&lt;/script><br/>
                </Blockquote>
                <SmallestHeader>Pierwszy element React i render</SmallestHeader>
                <Blockquote>
                    &lt;div id="root">&lt;/div><br/>
                    &lt;script type="text/babel"><br/>
                    &nbsp;&nbsp;const element = &lt;h1>Hello, world!&lt;/h1>;<br/>
                    &nbsp;&nbsp;ReactDOM.render(element, document.getElementById('root'));<br/>
                    &lt;/script>
                </Blockquote>
                <SmallestHeader>JSX</SmallestHeader>
                <Blockquote>
                    const element = <h3>Hello world!</h3>;
                </Blockquote>
                <ListUnordered>
                    <ListItem>to nie jest łańcuch znaków, to nie jest <b>HTML</b>, to
                        jest <b>JSX</b>
                        <ListUnordered>
                            <ListItem>czyli rozszerzenie składni <b>JS</b>
                            </ListItem>
                        </ListUnordered>
                    </ListItem>
                </ListUnordered>
                <SmallestHeader>Wyrażenia wewnątrz JSX</SmallestHeader>
                <Blockquote>
                    const name = "Kasia";<br/>
                    const element = &lt;h1>Cześć &#123;name&#125;!&lt;/h1>;
                </Blockquote>
            </>
        )
    },
    {
        id: 71,
        date: "31 lipca 2023 roku",
        title: "Immutability - c.d.",
        body: (
            <>
                <>
                    <SmallestHeader>Edycja elementu tablicy</SmallestHeader>
                    <Blockquote>
                        <b>const</b> tasks = [<br/>
                        &nbsp;&nbsp;&#123title: "ugotować obiad", done: false&#125;,<br/>
                        &nbsp;&nbsp;&#123title: "zrobić pranie", done: true&#125;,<br/>
                        &nbsp;&nbsp;&#123title: "zrobić zakupy", done: false&#125;,<br/>
                        ];<br/><br/>
                        <b>const</b> editIndex = 1;<br/><br/>
                        <b>const</b> tasksWithUpdatedItem = [<br/>
                        &nbsp;&nbsp;...tasks.slice(0, editIndex),<br/>
                        &nbsp;&nbsp;&#123...tasks[editIndex], done: false&#125;,<br/>
                        &nbsp;&nbsp;...tasks.slice(editIndex + 1),<br/>
                        ];
                    </Blockquote>
                </>
            </>
        )
    },
    {
        id: 70,
        date: "28 lipca 2023 roku",
        title: "Immutability",
        body: (
            <>
                <SmallestHeader>Wartości prymitywne są niemutowalne</SmallestHeader>
                <Blockquote>
                    <b>const</b> string = "tekst<br/>
                    <b>const</b> stringUpperCased = string.toUpperCase();<br/><br/>
                    <b>const</b> number = 5;<br/>
                    <b>cont</b> numberFormatted = number.toFixed(2);
                </Blockquote>
                <SmallestHeader>Obiekty i tablice możemy mutować</SmallestHeader>
                <Blockquote>
                    <b>const</b> person = &#123;name: "Krzysiek"&#125;;<br/>
                    person.name = "Kosmo";<br/><br/>
                    <b>const </b> cars = ["beemka"];<br/>
                    cars.push("merc");
                </Blockquote>
                <SmallestHeader>Dlaczego to <em>nie jest</em> fajne</SmallestHeader>
                <ListUnordered>
                    <ListItem>kod jest mało przewidywalny i mało czytelny
                    </ListItem>
                    <ListItem>mogą pojawiać się błędy trudne do wykrycia
                    </ListItem>
                    <ListItem>trudno wykrywać zmiany</ListItem>
                </ListUnordered>
                <SmallestHeader>Praca z obiektami i tablicami bez
                    mutowania</SmallestHeader>
                <SmallestHeader>Edycja właściwości obiektu</SmallestHeader>
                <Blockquote>
                    <b>const</b> person = &#123;<br/>
                    &nbsp;&nbsp;name: "Kasia"<br/>
                    &nbsp;&nbsp;surname: "Pelasia"<br/>
                    &#125;;<br/><br/>
                    <b>const</b> updatedPerson = &#123;<br/>
                    &nbsp;&nbsp;...person,<br/>
                    &nbsp;&nbsp;name: "Erwina",<br/>
                    &#125;;
                </Blockquote>
                <SmallestHeader>Dodawanie właściwości do obiektu</SmallestHeader>
                <Blockquote>
                    <b>const</b> person = &#123;<br/>
                    &nbsp;&nbsp;name: "Kasia"<br/>
                    &nbsp;&nbsp;surname: "Pelasia"<br/>
                    &#125;;<br/><br/>
                    <b>const</b> personWithAge = &#123;<br/>
                    &nbsp;&nbsp;...person,<br/>
                    &nbsp;&nbsp;age: 39,<br/>
                    &#125;;
                </Blockquote>
                <SmallestHeader>Usunięcie właściwości obiektu</SmallestHeader>
                <Blockquote>
                    <b>const</b> person = &#123;<br/>
                    &nbsp;&nbsp;name: "Kasia"<br/>
                    &nbsp;&nbsp;surname: "Pelasia"<br/>
                    &nbsp;&nbsp;age: 39,<br/>
                    &#125;;<br/><br/>
                    <b>const</b> &#123;<br/>
                    &nbsp;&nbsp;age,<br/>
                    &nbsp;&nbsp;...personWithAge,<br/>
                    &#125; = person;
                </Blockquote>
                <SmallestHeader>Dodanie elementu do
                    tablicy</SmallestHeader>
                <Blockquote>
                    <b>const</b> tasks = [<br/>
                    &nbsp;&nbsp;&#123;title: "ugotować obiad", done: false&#125;,<br/>
                    &nbsp;&nbsp;&#123;title: "posprzątać garaż", done: true&#125;,<br/>
                    ];<br/><br/>
                    <b>const</b> tasksWithNewElement = [<br/>
                    &nbsp;&nbsp;...tasks,<br/>
                    &nbsp;&nbsp;&#123;title: "zrobić pranie", done: false&#125;,<br/>
                    ];
                </Blockquote>
                <SmallestHeader>Usunięcie elementu z
                    tablicy</SmallestHeader>
                <Blockquote>
                    <b>const</b> tasks = [<br/>
                    &nbsp;&nbsp;&#123;title: "ugotować obiad", done: false&#125;,<br/>
                    &nbsp;&nbsp;&#123;title: "posprzątać garaż", done: true&#125;,<br/>
                    &nbsp;&nbsp;&#123;title: "zrobić pranie", done: false&#125;,<br/>
                    ];<br/><br/>
                    <b>const</b> removedIndex = 1;<br/><br/>
                    <b>const</b> tasksWithoutSecondElement = [<br/>
                    &nbsp;&nbsp;...tasks.slice(0, removedIndex),<br/>
                    &nbsp;&nbsp;...tasks.slice(removedIndex + 1),<br/>
                    ];
                </Blockquote>
            </>
        )
    },
    {
        id: 69,
        date: "28 lipca 2023 roku",
        title: "JavaScript - ćwiczenia z tablicami",
        body: (
            <>
                <SmallestHeader>Wyciąganie fragmentu tablicy</SmallestHeader>
                <Blockquote>>
                    <b>const</b> seasons = ["wiosna", "lato", "jesień", "zima"];<br/><br/>
                    <b>const</b> last2seasons = seasons.slice(2); &nbsp;&nbsp;// ["jesień", "zima"]<br/><br/>
                    <b>const</b> middle2seasons = seasons.slice(1, 3); &nbsp;&nbsp;// ["lato", "jesień"]<br/><br/>
                    <b>const</b> last3seasons = seasons.slice(-3); &nbsp;&nbsp;// ["lato", "jesień", "zima"]<br/><br/>
                    <b>const</b> allButLast = seasons.slice(0, -1); &nbsp;&nbsp;// ["wiosna", "lato", "jesień"]
                </Blockquote>
                <ListUnordered>
                    <ListItem>tworzy nową tablicę</ListItem>
                </ListUnordered>
                <SmallestHeader>indexOf, lastIndexOf</SmallestHeader>
                <Blockquote>
                    <b>const</b> numbers = [20, 10, 45, 10];<br/><br/>

                    console.log(numbers.indexOf(10)); &nbsp;&nbsp;// 1<br/>
                    console.log(numbers.lastIndexOf(10)); &nbsp;&nbsp;// 3<br/>
                    console.log(numbers.indexOf(5)); &nbsp;&nbsp;// -1<br/>
                    console.log(numbers.lastIndexOf(5)); &nbsp;&nbsp;// -1<br/>
                </Blockquote>
                <ListUnordered>
                    <ListOrdered>jeżeli index nie został znaleziony, to zwraca -1</ListOrdered>
                </ListUnordered>
                <SmallestHeader>find</SmallestHeader>
                <Blockquote>
                    <b>const</b> numbers = [-7, 0, 10, -6, 45];<br/><br/>
                    <b>const</b> firstPositive = numbers.find(number > number > 0); &nbsp;&nbsp;// 10<br/>
                    <b>const</b> first100 = numbers.find(number === 100); &nbsp;&nbsp;// undefined<br/><br/>
                    <b>const</b> persons = [<br/>
                    &nbsp;&nbsp;&#123;name: "Kasia"&#125;,<br/>
                    &nbsp;&nbsp;&#123;name: "Marta"&#125;,<br/>
                    ];<br/><br/>
                    <b>const</b> chris = persons.find((&#123; name &#153;) => name === "Marta");
                </Blockquote>
                <ListUnordered>
                    <ListItem>zwraca pierwszy element, który spełnia funkcję sprawdzającą</ListItem>
                </ListUnordered>
                <SmallestHeader>findIndex</SmallestHeader>
                <Blockquote>
                    <b>const</b> numbers = [-7, 0, 10, -6, 45];<br/><br/>
                    <b>const</b> firstPositiveIndex = numbers.findIndex(number > number > 0); &nbsp;&nbsp;// 2<br/>
                    <b>const</b> first100Index = numbers.findIndex(number === 100); &nbsp;&nbsp;// -1<br/><br/>
                    <b>const</b> persons = [<br/>
                    &nbsp;&nbsp;&#123;name: "Kasia"&#125;,<br/>
                    &nbsp;&nbsp;&#123;name: "Marta"&#125;,<br/>
                    ];<br/><br/>
                    <b>const</b> kasiaIndex = persons.findIndex((&#123; name &#125;) => name === "Kasia");&nbsp;&nbsp;//
                    0
                </Blockquote>
                <SmallestHeader>includes</SmallestHeader>
                <Blockquote>
                    <b>const</b> quests = ["Włodek", "Irmina", "Melodia"];<br/><br/>
                    console.log(guests.includes("Włodek")); &nbsp;&nbsp;// true<br/>
                    console.log(guests.includes("Zenek")); &nbsp;&nbsp;// false
                </Blockquote>
                <SmallestHeader>some</SmallestHeader>
                <Blockquote>
                    <b>const</b> tasks = [<br/>
                    &nbsp;&nbsp;&#123; content: "Przeczytać książkę", done: false &#125;,<br/>
                    &nbsp;&nbsp;&#123; content: "Zrobić zakupy", done: true &#125;,<br/>
                    ];<br/><br/>
                    <b>const</b> isAnyTaskDone = tasks.some((&#123; done &#125;) => done); &nbsp;&nbsp;// true<br/><br/>
                    <b>const</b> numbers = [1, 3, 5, 7];<br/><br/>
                    <b>const</b> isAnyNumberEven = numbers.some(number => number % 2 === 0); &nbsp;&nbsp;// false
                </Blockquote>
                <ListUnordered>
                    <ListItem>sprawdza, czy przynajmniej jeden element spełnia funkcję
                        sprawdzającą
                    </ListItem>
                </ListUnordered>
                <SmallestHeader>every</SmallestHeader>
                <Blockquote>
                    <b>const</b> tasks = [<br/>
                    &nbsp;&nbsp;&#123; content: "Przeczytać książkę", done: false &#125;,<br/>
                    &nbsp;&nbsp;&#123; content: "Zrobić zakupy", done: true &#125;,<br/>
                    ];<br/><br/>
                    <b>const</b> isEveryTaskDone = task.every((&#123;done&#125;) => done); &nbsp;&nbsp;//
                    false<br/><br/>
                    <b>const</b> numbers = [1, 3, 5, 7];<br/><br/>
                    <b>const</b> isEveryNumberEven = numbers.every(number => number % 2 === 0); &nbsp;&nbsp;// false
                </Blockquote>
                <ListUnordered>
                    <ListItem>sprawdza, czy wszystkie elementy spełniają funkcję sprawdzającą
                    </ListItem>
                </ListUnordered>
                <SmallestHeader>filtrowanie</SmallestHeader>
                <Blockquote>
                    <b>const</b> numbers = [1, 2, 3, 4];<br/><br/>
                    <b>const</b> evenNumbers = numbers.filter(number => number % 2 === 0);<br/><br/>
                    <b>const</b> tasks = [<br/>
                    &nbsp;&nbsp;&#123; content: "Przeczytać książkę", done: false &#125;,<br/>
                    &nbsp;&nbsp;&#123; content: "Zrobić zakupy", done: true &#125;,<br/>
                    ];<br/><br/>
                    <b>const</b> doneTasks = tasks.filter((&#123;done&#125;) => done);
                </Blockquote>
                <ListUnordered>
                    <ListItem>zwraca nową tablicę, która zawiera elementy, spełniające funkcję
                        sprawdzającą
                    </ListItem>
                </ListUnordered>
                <SmallestHeader>Mapowanie / odwzorowanie</SmallestHeader>
                <Blockquote>
                    <b>const</b> numbers = [1, 5, 10];<br/>
                    <b>const</b> doubledNumbers = numbers.map(number => number * 2);<br/><br/>
                    <b>const</b> persons = [<br/>
                    &nbsp;&nbsp;&#123; name: "Kasia", surname: "Pelasia" &#125;,<br/>
                    &nbsp;&nbsp;&#123; name: "Marta", surname: "Karta" &#125;,<br/>
                    ];<br/><br/>
                    <b>const</b> personFirstNames = persons.map((&#123; name &#125;) => name);<br/><br/>
                    <b>const</b> personHTMLTableRows = persons.map((&#123; name, surname &#125;) => `<br/>
                    &lt;tr>&lt;td>$&#123;name&#125;&lt;/td>&lt;td>$&#123;surname&#125;&lt;/td>&lt;/tr><br/>
                    `);
                </Blockquote>
                <ListUnordered>
                    <ListItem><b>map</b> zwraca nową tablicę, której elementami są wartości
                        zwrócone
                        przez podaną funkcję dla każdego elementu
                    </ListItem>
                </ListUnordered>
                <SmallestHeader>Sortowanie tablic</SmallestHeader>
                <Blockquote>
                    <b>const</b> strings = ["B", "a", 10, 2];<br/><br/>
                    strings.sort();<br/><br/>
                    console.log(strings); &nbsp;&nbsp;// [10, 2, "B", "a"]<br/><br/>
                </Blockquote>
                <ListUnordered>
                    <ListItem><b>sort</b> sortuje tablicę i zwraca posortowaną
                        <ListUnordered>
                            <ListItem>
                                <b>uwaga:</b> modyfikuje tablicę
                            </ListItem>
                        </ListUnordered>
                        <ListItem>domyślnie elementy konwertowane są na stringi i porównywane są
                            kody
                            znaków UTF-16
                            <ListUnordered>
                                <ListItem>dlatego to się prawie do niczego nie nadaje</ListItem>
                            </ListUnordered>
                        </ListItem>
                    </ListItem>
                </ListUnordered>
                <SmallestHeader>Sortowanie liczb</SmallestHeader>
                <Blockquote>
                    <b>const</b> numbers = [40, 8, 1, 0];<br/><br/>
                    numbers.sort((a, b) => a - b);&nbsp;&nbsp;// [0, 1, 8, 40]<br/>
                    numbers.sort((a, b) => b - a);&nbsp;&nbsp;// [40, 8, 1, 0]
                </Blockquote>
                <SmallestHeader>Sortowanie alfabetyczne</SmallestHeader>
                <Blockquote>
                    <b>const</b> surnames = ["Duda", "Dąbrowski"];<br/><br/>
                    surnames.sort((a, b) => a.localCompare(b));&nbsp;&nbsp;// ["Dąbrowski", "Duda"]<br/>
                    surnames.sort((a, b) => b.localCompare(a));&nbsp;&nbsp;// ["Duda", "Dąbrowski"]
                </Blockquote>
                <SmallestHeader>Sortowanie obiektów</SmallestHeader>
                <Blockquote>
                    <b>const</b> persons = [<br/>
                    &nbsp;&nbsp;&#123; name: "Kasia", surname: "Pelasia" &#125;,<br/>
                    &nbsp;&nbsp;&#123; name: "Marta", surname: "Karta" &#125;,<br/>
                    ];<br/><br/>
                    <b>const</b> getFullName = (&#123; name, surname &#125;) =>
                    `$&#123;name&#125; $&#123;surname&#123;`;<br/><br/>
                    persons.sort((person1, person2) => getFullName(person1).localCompare(getFullName(person2)));<br/>
                    ));
                </Blockquote>
                <SmallestHeader>Odwrócenie kolejności elementów</SmallestHeader>
                <Blockquote>
                    <b>const</b> numbers = [4, 5, 6, 8];<br/><br/>
                    numbers.reverse();&nbsp;&nbsp;// [8, 6, 5, 4]
                </Blockquote>
            </>
        )
    },
    {
        id: 68,
        date: "26 lipca 2023 roku",
        title: "JavaScript - tablice",
        body: (
            <>
                <SmallestHeader>Destrukturyzacja w zagnieżdżonym obiekcie</SmallestHeader>
                <blockquote className="article__blockquote">
                    <b>const</b> [number1, number2] = [20, 46, 18];<br/><br/>
                    // ignorujemy drugi element<br/>
                    <b>const</b> [number1, , number3] = [20, 46, 18];<br/><br/>
                    // pozostałe elementy utworzą nową tablicę<br/>
                    <b>const</b> [firstNumber, ...otherNumbers] = [20, 78, 11, 33];
                </blockquote>
                <h4 className="article__subsubsubheader">Łączenie tablic</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> numbers1 = [10, 45];<br/>
                    <b>const</b> numbers2 = [20, 49];<br/><br/>
                    <b>const</b> allNumbers = [...numbers1, ...numbers2];
                </blockquote>
                <h4 className="article__subsubsubheader">Klonowanie</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> numbers = [45, 12, 16];<br/>
                    <b>const</b> numbersCopy = [...number];
                </blockquote>
                <h4 className="article__subsubsubheader">Przekazywanie elementów tablicy jako argumenty funkcji</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> numbers = [12, 18, 19, 44, 64, 81];<br/><br/>
                    <b>const</b> console.log(Math.min(...numbers)); //12
                </blockquote>
                <h4 className="article__subsubsubheader">Niezdefiniowana liczba argumentów funkcji</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> myFunction = (firstParameter, ...otherParameters) => &#123;<br/>
                    &nbsp;&nbsp;console.log(`Pierwszy argument: $&#123;firstParameter&#125;`);<br/>
                    &nbsp;&nbsp;console.log(`Liczba pozostałych argumentów: $ &#123;otherParameters.length&#125;`);<br/>
                    &#125;;<br/><br/>
                    myFunction(4, 8, 1, 9, 74, 51);
                </blockquote>
            </>
        )
    },
    {
        id: 67,
        date: "26 lipca 2023 roku",
        title: "JavaScript - obiekty cz. 3",
        body: (
            <>
                <h4 className="article__subsubsubheader">Destrukturyzacja w zagnieżdżonym obiekcie</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> person = &#123;<br/>
                    &nbsp;&nbsp;name: "Kasia",<br/>
                    &nbsp;&nbsp;surname: "Pelasia",<br/>
                    &nbsp;&nbsp;father: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;name: "Jan",<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;surname: "Pelasia",<br/>
                    &nbsp;&nbsp;&#125;,<br/>
                    &#125;;<br/><br/>
                    <b>const</b> &#123;father: &#123;name: fatherName&#125;&#125; = person;<br/><br/>
                    console.log(`Imię ojca: $&#123;fatherName&#125;`);<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Łączenie obiektów (spread syntax)</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> personBasicData = &#123;<br/>
                    &nbsp;&nbsp;name: "Kasia",<br/>
                    &nbsp;&nbsp;surname: "Pelasia",<br/>
                    &#125;;<br/><br/>
                    &nbsp;&nbsp;<b>const</b> personAdditionalData = &#123;<br/>
                    &nbsp;&nbsp;age: 29,<br/>
                    &#125;;<br/><br/>
                    <b>const</b> allPersonData = &#123;<br/>
                    &nbsp;&nbsp;...personBasicData<br/>
                    &nbsp;&nbsp;...personAdditionalData<br/>
                    &#125;;<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Klonowanie (shallow copy - "płytka kopia")</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> person = &#123;<br/>
                    &nbsp;&nbsp;name: "Kasia",<br/>
                    &nbsp;&nbsp;surname: "Pelasia",<br/>
                    &nbsp;&nbsp;father: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;name: "Jan",<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;surname: "Pelasia",<br/>
                    &nbsp;&nbsp;&#125;,<br/>
                    &#125;;<br/><br/>
                    <b>const</b> personCopy = &#123;...person&#125;;<br/><br/>
                    console.log(personCopy === person);<br/> &nbsp;&nbsp;//false<br/>
                    console.log(personCopy.father === person.father);<br/> &nbsp;&nbsp;//true<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">for...in</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> person = &#123;<br/>
                    &nbsp;&nbsp;name: "Kasia",<br/>
                    &nbsp;&nbsp;surname: "Pelasia",<br/>
                    &#125;;<br/><br/>
                    <b>for (const</b> propertyName <b>in</b> person) &#123;<br/>
                    &nbsp;&nbsp;console.log(`$&#123;propertyName&#125;: $&#123;person[propertyName]&#125;`);<br/>
                </blockquote>
            </>
        )
    },
    {
        id: 66,
        date: "25 lipca 2023 roku",
        title: "JavaScript - obiekty cz. 2",
        body: (
            <>
                <h4 className="article__subsubsubheader">Skrócona notacja: właściwości</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> name = "Kasia";<br/>
                    <b>const</b> surname = "Pelasia";<br/><br/>
                    <b>const</b> person = &#123;<br/>
                    &nbsp;&nbsp;name,<br/>&nbsp;&nbsp;&nbsp;&nbsp;//zamiast name: name<br/>
                    &nbsp;&nbsp;surname,<br/>&nbsp;&nbsp;&nbsp;&nbsp;//zamiast surname: surname<br/>
                    &#125;;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">warto stosować, jeśli właściwość ma taką samą nazwę jak
                        zmienna/stała,
                        której wartość chcemy do tej właściwości przypisać
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Skrócona notacja: metody</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> person = &#123;<br/>
                    &nbsp;&nbsp;name: "Kasia",<br/>
                    &nbsp;&nbsp;sayHello() &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log(`Cześć! Jestem $&#123;this.name&#125;`);<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">słowo <b>function</b> niepotrzebne</li>
                </ul>
                <h4 className="article__subsubsubheader">Computed Property Names</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> currency = "EUR";<br/><br/>
                    <b>const</b> exchangeData = &#123;<br/>
                    &nbsp;&nbsp;PLN: 45,<br/>
                    &nbsp;&nbsp;[currency]: 200,<br/>
                    &#125;;<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Destrukturyzacja</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> person = &#123;<br/>
                    &nbsp;&nbsp;name: "Kasia",<br/>
                    &nbsp;&nbsp;surname: "Pelasia",<br/>
                    &nbsp;&nbsp;age: 30,<br/>
                    &nbsp;&nbsp;gender: "male",<br/>
                    &#125;;<br/><br/>
                    <b>const</b> &#123;name, surname, ...rest&#125; = person;<br/>
                    //rest - obiekt z pozostałymi właściwościami<br/><br/>
                    <b>const</b> &#123; city = "N/A"&#125; = person;<br/>&nbsp;&nbsp;//domyślna wartość<br/>
                    <b>const</b> &#123;surname: lastName&#125; = person;<br/>&nbsp;&nbsp;//inna nazwa zmiennej/
                    stałej<br/><br/>
                    //obiekt jako argument funkcji<br/>
                    <b>const</b> getPersonFullName = (&#123;name, surname&#125;) =>
                    `$&#123;name&#125; $&#123;surname&#125;`;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">iteruje po właściwościach obiektu</li>
                    <li className="article__listItem">kolejność może być różna</li>
                </ul>
            </>
        )
    },
    {
        id: 65,
        date: "25 lipca 2023 roku",
        title: "CSS - płynne przejścia, transformacje",
        body: (
            <>
                <h4 className="article__subsubsubheader">transition - najprostszy przykład</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;background: red;<br/>
                    &nbsp;&nbsp;transition: 1s;<br/>
                    &#125;<br/>
                    <br/>
                    .element:hover &#123;<br/>
                    &nbsp;&nbsp;background: blue;<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">płynne przejście między dwiema wartościami</li>
                </ul>
                <div className="article__container--transition"></div>
                <h4 className="article__subsubsubheader">transform: scale</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp; transform: scale(1.5);&nbsp;&nbsp;&nbsp;&nbsp;/* scaleX, scaleY */<br/>
                    &#125;<br/>
                </blockquote>
                <div className="article__container--transform"></div>
                <h4 className="article__subsubsubheader">transform: rotate</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;transform: rotate(60deg);<br/>
                    &#125;<br/>
                </blockquote>
                <div className="article__container--rotated"></div>
                <h4 className="article__subsubsubheader">transform: translate</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;transform: translateX(100%) translateY(50px);<br/>
                    &#125;<br/>
                </blockquote>
                <div className="article__container--translated"></div>
                <h4 className="article__subsubsubheader">Kilka transformacji po kolei</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;transform: rotate(90deg) scale(1.5);<br/>
                    &#125;<br/>
                </blockquote>
                <div className="article__container--translatedScale"></div>
                <h4 className="article__subsubsubheader">transform-origin</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;transform: rotate(90deg);<br/>
                    &nbsp;&nbsp;transform-origin: right bottom;<br/>
                    &nbsp;&nbsp;/* transform-origin: 20px 60% */<br/>
                    &#125;<br/>
                </blockquote>
                <div className="article__container--translatedOrigin"></div>
                <h4 className="article__subsubsubheader">Jak działa transform</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">zmienia kształt i położenie
                        elementów
                    </li>
                    <li className="article__listItem">nakłada transformację po kolei</li>
                    <li className="article__listItem">nie wpływa na inne elementy</li>
                </ul>
                <div className="article__container--transform"></div>
                <div className="article__container--transform"></div>
                <div className="article__container--transform"></div>
                <h4 className="article__subsubsubheader">transition-property</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;transition: background 1s, transform 2s;<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">warto podać, które właściwości
                        będą animowane, ponieważ może to
                        pozytywnie wpłynąć na wydajność
                    </li>
                    <li className="article__listItem">kiedy to możliwe, warto animować
                        transform zamiast np. width, height,
                        margin itd.
                    </li>
                </ul>
                <div className="article__container--transitionProperty"></div>
                <h4 className="article__subsubsubheader">transition-timing-function</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;transition: background 1s linear;<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">określa jak liczone są
                        wartości pośrednie w trakcie animacji
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">transition-delay</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;transition: background 2s 1s;<br/>
                    &#125;<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">właściwości
                    oddzielnie</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;transition-property: background, transform;<br/>
                    &nbsp;&nbsp;transition-duration: 1s 2s;<br/>
                    &nbsp;&nbsp;transition-delay: 0, 0.5s;<br/>
                    &nbsp;&nbsp;transition-timing-function: linear;<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">ale rekomendowane jest
                        korzystać ze skrótu transition
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">transition nie musi
                    działać po najechaniu</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">ale na przykład przy
                        zmianie klasy.
                    </li>
                </ul>
            </>
        )
    },
    // {
    //     id: 64,
    //     date: "21 lipca 2023 roku",
    //     title: "JavaScript - prosta lista zadań",
    //     body: (
    //         <>
    //             <form className="js-form4">
    //                 <fieldset className="calculator__fieldset">
    //                     <legend className="calculator__legend">Wpisz zadanie i kliknij "Dodaj zadanie" lub naciśnij
    //                         ENTER
    //                     </legend>
    //                     <div className="calculator__subContainer">
    //                         <label className="calculator__label">
    //                             Tu wpisz zadanie
    //                             <input className="js-newTask js-input">
    //                         </label>
    //                     </div>
    //                 </fieldset>
    //                 <button>Dodaj zadanie</button>
    //             </form>
    //             <ul className="js-tasks article__unorderedList"></ul>
    //         </>
    //     )
    // },
    {
        id: 63,
        date: "21 lipca 2023 roku",
        title: "JavaScript - wstęp do tablic",
        body: (
            <>
                <h4 className="article__subsubsubheader">Przykład</h4>
                <blockquote className="article__blockquote">
                    <b>const <i>products</i></b> = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">tablice <i>(ang. arrays)</i> przechowują listę elementów w jednej
                        zmiennej / stałej
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Jak sprawdzić, czy coś jest tablicą?</h4>
                <blockquote className="article__blockquote">
                    Array.isArray(products);<br/>
                    products <b>instanceof</b> Array;<br/>
                    <ul className="article__unorderedList">
                        <li className="article__listItem">typeof zwraca "object"</li>
                    </ul>
                </blockquote>
                <h4 className="article__subsubsubheader">Elementy tablicy mogą mieć różne typy</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> array = [5, "tekst", undefined, &#123;name: "Leon"&#125;, [3]];
                </blockquote>
                <h4 className="article__subsubsubheader">Dostęp do elementów tablicy</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> products = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/>
                    <b>const</b> secondProduct = products[1];
                    products[2] = "ser";
                </blockquote>
                <h4 className="article__subsubsubheader">Długość tablicy</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> products = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/>
                    <b>const</b> productsCount = products.length; // 5
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">tak samo jak w stringach</li>
                </ul>
                <h4 className="article__subsubsubheader">Konwertowanie tablicy na string</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> products = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/><br/>
                    <b>const</b> productsString = products.join(", "); //możemy wybrać separator<br/>
                    <b>const</b> productsString2 = products.toString(); // zawsze ","
                </blockquote>
                <h4 className="article__subsubsubheader">Konwertowanie tekstu na tablicę</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> productsString = "jajka, mleko, chleb";<br/>
                    <b>const</b> products = productsString.split(", ");
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">to jest metoda obiektu <i>String,</i> nie <i>Array</i></li>
                    <li className="article__listItem">nie pomijamy separatora!</li>
                </ul>
                <h4 className="article__subsubsubheader">Dodawanie elementów na koniec tablicy</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> products = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/><br/>
                    products.push("drożdże", "Lion");
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">dodaje na koniec tablicy</li>
                    <li className="article__listItem">zwraca nową długość tablicy</li>
                </ul>
                <h4 className="article__subsubsubheader">Usuwanie ostatniego elementu tablicy</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> products = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/><br/>
                    <b>const</b> removedItem = products.pop();
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">zwraca usunięty element</li>
                </ul>
                <h4 className="article__subsubsubheader">Dodawanie i usuwanie z początku tablicy</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> products = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/><br/>
                    <b>const</b> newLength = products.unshift("pasta Colgate"); //dodaje na początek<br/>
                    <b>const</b> removedItem = products.shift(); //usuwa z początku<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Usuwanie dowolnego elementu</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> products = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/><br/>
                    products.splice(1, 1);<br/>
                    // usuwa drugi element<br/><br/>
                    products.splice(2, 2, "rajstopy Gatta", "spód do pizzy");<br/>
                    //usuwa 3. i 4. element, dodaje dwa nowe w ich miejsce
                </blockquote>
                <h4 className="article__subsubsubheader">forEach</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> products = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/><br/>
                    products.forEach((product, index) => &#123;<br/>
                    &nbsp;&nbsp;console.log(`$&#123;index + 1&#125;.$&#123;product&#125;`);<br/>
                    &#125;);
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">iteruje po elementach tablicy</li>
                </ul>
                <h4 className="article__subsubsubheader">for...of</h4>
                <blockquote className="article__blockquote">
                    <b>const</b> products = ["jajka", "mleko", "chleb", "bułki", "czekolada"];<br/><br/>
                    <b>for</b> (<b>const</b> product <b>of</b> products) &#123;<br/>
                    &nbsp;&nbsp;console.log(product);<br/>
                    &#125;;
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">wygodne, jeśli nie potrzebujemy index-u</li>
                </ul>
                <h4 className="article__subsubsubheader">Przekazywanie tablic do funkcji oraz porównywanie działa tak
                    samo
                    jak w przypadku obiektów</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">przekazywanie przez referencję</li>
                    <li className="article__listItem">porównywanie dwóch tablic zawsze zwróci <b>false</b></li>
                </ul>
            </>
        )
    },
    {
        id: 62,
        date: "20 lipca 2023 roku",
        title: "JavaScript - wstęp do obiektów",
        body: (
            <>
                <h4 className="article__subsubsubheader">Przykład</h4>
                <blockquote className="article__blockquote">
                    <b>const <i>person</i></b> = &#123;<br/>
                    &nbsp;name: "Jan",<br/>
                    &nbsp;&nbsp;surname: "Kowalski",<br/>
                    &nbsp;&nbsp;age: 30,<br/>
                    &nbsp;&nbsp;sayHello: <b>function</b> () &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log(`Cześć! Nazywam się $&#123;<b>this</b>.name&#125; $&#123;
                    <b>this</b>.surname&#125; i
                    mam $&#123;<b>this</b>.age&#125; lat.`);<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">złożony typ, lepiej opisujący rzeczywistość,</li>
                    <li className="article__listItem">składa się z pól/właściwości i funkcji/metod</li>
                </ul>
                <h4 className="article__subsubsubheader">Korzystanie z właściwości i metod obiektu <i>(dot
                    notation)</i>
                </h4>
                <blockquote className="article__blockquote">
                    console.log(person.name);<br/>
                    console.log(person["age"]);<br/>
                    person.sayHello();<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">this</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">słowo <i>this</i> odnosi się w naszym przypadku do obiektu,
                        "wewnątrz
                        którego" wykonuje się kod
                    </li>
                    <li className="article__listItem">funkcje strzałkowe "nie mają swojego <i>this</i>"</li>
                </ul>
                <h4 className="article__subsubsubheader">Obiekt w obiekcie</h4>
                <blockquote className="article__blockquote">
                    <b>const <i>person</i></b> = &#123;<br/>
                    &nbsp;&nbsp;name: "Jan",<br/>
                    &nbsp;&nbsp;surname: "Kowalski",<br/>
                    &nbsp;&nbsp;parent: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;name: "Anna",<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;surname: "Kowalska",<br/>
                    &nbsp;&nbsp;&#125;,<br/>
                    &#125;;<br/><br/>

                    console.log(person.parent.name);<br/>
                    console.log(person["parent"]["surname"]);<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Korzystaliśmy już wielokrotnie z wielu metod
                    obiektów:</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">document.querySelector</li>
                    <li className="article__listItem">Math.min</li>
                    <li className="article__listItem">String.includes</li>
                    <li className="article__listItem">itd.</li>
                </ul>
                <h4 className="article__subsubsubheader">Porównywanie obiektów</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">porównanie dwóch obiektów zawsze zwróci <b>false</b></li>
                    <li className="article__listItem">tylko porównanie tego samego obiektu ze sobą
                        zwróci <b>true</b></li>
                </ul>
                <h4 className="article__subsubsubheader">Obiekty do funkcji przekazujemy przez referencję</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">funkcja może modyfikować właściwości i metody obiektu
                        przekazanego w
                        argumencie
                    </li>
                    <li className="article__listItem">obiekt nie jest kopiowany jak typy prymitywne (string,
                        number, boolean
                        itd.)
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 61,
        date: "20 lipca 2023 roku",
        title: "Przedbiegi",
        body: (
            <>
                <p>Jako, że na blogu nie tylko o programowaniu, to wrzucę taką małą aktualizację dotyczącą moich
                    postępów.</p>
                <p>W poprzednim tygodniu wróciłam do biegów dwa razy w tygodniu. Nie nazwałabym tego co
                    prawda <em>bieganiem</em>,
                    ponieważ zwiększona masa i zastane stawy robią swoje, więc określmy to mianem <em>aktywności
                        fizycznej</em>. Zwykle jest to 2,5 km w bardzo żółwim tempie. Według garminowego AI <i>Trenera
                        Grega</i> pewność, że ukończę 5 km jest bliżej na <em>nie</em>, niż na <em>tak</em>. Ale ten,
                    kto
                    mnie zna, wie, że łatwo się nie poddaję. Ciężko jest porównywać swoją kondycję z dziś z kondycją
                    sprzed 2 lat, więc może po prostu przestanę się biczować i skupię się na progresie.</p>
                <p>Trzymając się też filozofii <i>małych kroków</i> w tym tygodniu wprowadziłam liczenie spożywanych
                    kalorii i ścinanie 200 - 300 kcal na dzień. Od razu złapało mnie jakieś choróbsko, mimo tego, że
                    jestem od rana z gorączką z zatkanym nosem nie przekreśliłam swoich planów i poszłam pobiegać.
                    Uciszyłam tego małego &#123;wstaw tu słowo&#125; w mojej głowie. Satysfakcja jest niesamowita! Mimo
                    że są to
                    nadal tylko 2,5 km.</p>
                <p>Jeśli chodzi o programowanie — tak jak pisałam wcześniej, wprowadziłam system naprawczy. Na początku
                    mojej pracy było mi trudno odnaleźć się w środowisku projektu komercyjnego i cały czas czułam, że
                    nie dorównuję wiedzą innym developerom, więc zamiast się poddawać — postanowiłam wprowadzić nawyk w
                    postaci nauki porannej, przed pracą i poświęcenie tych 2 godzin dziennie na powtórzenie materiału
                    czy czytanie dokumentacji związanej z projektem. Powiem szczerze, że widzę efekty!</p>
                <p>Jeszcze daleko mi do podsumowania, który będzie na początku sierpnia, ale czuję w kościach, że moja
                    praca nie pójdzie na marne.</p>
                <p>To tyle z mojej strony, jeśli chodzi o prywatę. Wracam do nauki!</p>
            </>
        )
    },
    {
        id: 60,
        date: "19 lipca 2023 roku",
        title: "JavaScript - więcej o funkcjach i zmiennych",
        body: (
            <>
                <h4 className="article__subsubsubheader">typeof "function"</h4>
                <p>Najprostszy sposób, aby sprawdzić, czy coś jest funkcją.</p>
                <blockquote className="article__blockquote">
                    <b>const <i>myFunction</i></b> = () => &#123;<br/>
                    &nbsp;&nbsp;console.log("something");<br/>
                    &#125;<br/><br/>

                    console.log(typeof myFunction === "function");
                </blockquote>
                <p>Jeśli <i>myFunction</i> jest funkcją, to konsola zwróci mi:</p>
                <blockquote className="article__blockquote">
                    true
                </blockquote>
                <h4 className="article__subsubsubheader">Jeśli tworzymy funkcję za pomocą słowa function lub tworzymy
                    zmienną za pomocą słowa var</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">występuje tzw. <i>hoisting</i>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">funkcja lub zmienna jest dostępna w całej funkcji
                                niezależnie
                                od tego, w której linii została zadeklarowana
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        jeśli deklarujemy poza jakąś funkcją, tworzymy zmienną lub funkcję globalną
                    </li>
                    <li className="article__listItem">
                        taka funkcja lub zmienna globalna będzie dostępna jako właściwość obiektu <i>window</i>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Zmienne let lub stała const poza blokiem lub funkcją staną się
                    globalne.</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        ale nie będzie właściwością obiektu window
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Ponowna deklaracja var nie jest błędem</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <b>let</b> i <b>const</b> - tak
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">var i let mogę zadeklarować, a później przypisać wartość</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        nie mogę tak zrobić z <b>const</b>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Można zadeklarować kilka zmiennych po przecinku</h4>
                <blockquote className="article__blockquote">
                    <b> let <i>result, amount</i></b> = 10;<br/><br/>
                    <b> const</b><br/>
                    &nbsp;&nbsp;number = 5,<br/>
                    &nbsp;&nbsp;string = "tekst";<br/><br/>
                    <b>var <i>myVariable</i></b>;
                </blockquote>
                <h4 className="article__subsubsubheader">Funkcja może posiadać parametry domyślne</h4>
                <blockquote className="article__blockquote">
                    <b>const <i>power</i></b> = (a, b = 1) => a**b;
                </blockquote>
                <h4 className="article__subsubsubheader">Funkcja może wywoływać samą siebie</h4>
                <blockquote className="article__blockquote">
                    <b>const <i>factorial</i></b> = (number) => &#123;<br/>
                    &nbsp;&nbsp;if (!number) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;return 1;<br/>
                    &nbsp;&nbsp;&#125;<br/><br/>
                    return factorial(number - 1) * number;<br/>
                    &#125;
                </blockquote>
                <p>Nazywa się to <i>rekurencją (ang. recursion)</i></p>
            </>
        )
    },
    {
        id: 59,
        date: "19 lipca 2023 roku",
        title: "CSS - Grid c.d.",
        body: (
            <>
                <h4 className="article__subsubsubheader">Skróty</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">Zamiast rozpisywania <i>grid-row-start, grid-row-end,
                        grid-column-start i grid-column-end</i> możemy użyć skrótu
                        <ul className="article__unorderedList">
                            <li className="article__listItem"><i>grid-row:</i> (grid-row start) / (grid-row-end)</li>
                            <li className="article__listItem"><i>grid-column:</i> (grid-column-start) /
                                (grid-column-end)
                            </li>
                        </ul>
                    </li>
                    <blockquote className="article__blockquote">
                        .container__element &#123;<br/>
                        &nbsp;&nbsp;grid-row: 2 / span 2;<br/>
                        &nbsp;&nbsp;grid-column: 3 / -2<br/>
                        &#125;<br/>
                    </blockquote>
                </ul>
                <ul className="article__unorderedList">
                    <li className="article__listItem">Natomiast możemy użyć skrótu
                        <i>grid-area zamiast</i>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                grid-row-start,
                            </li>
                            <li className="article__listItem">
                                grid-row-end,
                            </li>
                            <li className="article__listItem">
                                grid-column-start
                            </li>
                            <li className="article__listItem">
                                i grid-column-end
                            </li>
                        </ul>
                    </li>
                    <blockquote className="article__blockquote">
                        .container__element &#123;<br/>
                        &nbsp;&nbsp;grid-area: 2 / 3 / span 2 / - 2;<br/>
                        &#125;<br/>
                    </blockquote>
                </ul>
            </>
        )
    },
    {
        id: 58,
        date: "18 lipca 2023 roku",
        title: "CSS - Grid",
        body: (
            <>
                <p><i>Grid</i> jest połączeniem tabeli i <i>FLex-a</i>.</p>
                <h4 className="article__subsubsubheader">Podstawowy przykład</h4>
                <p>Trzy kolumny - szerokie na 100px, 200px i 300px.</p>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: 100px 200px 300px<br/>
                    &#125;<br/>
                </blockquote>
                <div className="container--Grid">
                    <div className="container__item--Grid">1</div>
                    <div className="container__item--Grid">2</div>
                    <div className="container__item--Grid">3</div>
                    <div className="container__item--Grid">4</div>
                    <div className="container__item--Grid">5</div>
                    <div className="container__item--Grid">6</div>
                    <div className="container__item--Grid">7</div>
                    <div className="container__item--Grid">8</div>
                </div>
                <h4 className="article__subsubsubheader">Jednostka fr</h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: 100px 1fr 2fr<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">ułamek (fraction) dostępnej przestrzeni
                    </li>
                    <li>3 kolumny:
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                100px,
                            </li>
                            <li className="article__listItem">
                                1/3 dostępnej przestrzeni,
                            </li>
                            <li className="article__listItem">
                                2/3 dostępnej przestrzeni,
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="container--Grid2">
                    <div className="container__item--Grid2">1</div>
                    <div className="container__item--Grid2">2</div>
                    <div className="container__item--Grid2">3</div>
                    <div className="container__item--Grid2">4</div>
                    <div className="container__item--Grid2">5</div>
                    <div className="container__item--Grid2">6</div>
                    <div className="container__item--Grid2">7</div>
                    <div className="container__item--Grid2">8</div>
                </div>
                <h4 className="article__subsubsubheader">Repeat</h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        wygodny zapis
                    </li>
                    <li className="article__listItem">
                        3 kolumny równiej szerokości
                    </li>
                </ul>
                <div className="container--Grid3">
                    <div className="container__item--Grid3">1</div>
                    <div className="container__item--Grid3">2</div>
                    <div className="container__item--Grid3">3</div>
                    <div className="container__item--Grid3">4</div>
                    <div className="container__item--Grid3">5</div>
                    <div className="container__item--Grid3">6</div>
                    <div className="container__item--Grid3">7</div>
                    <div className="container__item--Grid3">8</div>
                </div>
                <h4 className="article__subsubsubheader">Bardziej złożony przykład repeat</h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: 100px repeat(2, 1fr, 2fr);<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        5 kolumn
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                100px,
                            </li>
                            <li className="article__listItem">
                                1/6 dostępnej przestrzeni
                            </li>
                            <li className="article__listItem">
                                1/3 dostępnej przestrzeni
                            </li>
                            <li className="article__listItem">
                                1/6 dostępnej przestrzeni
                            </li>
                            <li className="article__listItem">
                                1/3 dostępnej przestrzeni
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="container--Grid4">
                    <div className="container__item--Grid4">1</div>
                    <div className="container__item--Grid4">2</div>
                    <div className="container__item--Grid4">3</div>
                    <div className="container__item--Grid4">4</div>
                    <div className="container__item--Grid4">5</div>
                    <div className="container__item--Grid4">6</div>
                    <div className="container__item--Grid4">7</div>
                    <div className="container__item--Grid4">8</div>
                </div>
                <h4 className="article__subsubsubheader">Auto-fill</h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: repeat(auto-fill, 200px);<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        kolumny szerokie na 200px,
                    </li>
                    <li className="article__listItem">
                        tyle, ile się zmieści
                    </li>
                </ul>
                <div className="container--Grid5">
                    <div className="container__item--Grid4">1</div>
                    <div className="container__item--Grid4">2</div>
                    <div className="container__item--Grid4">3</div>
                    <div className="container__item--Grid4">4</div>
                    <div className="container__item--Grid4">5</div>
                    <div className="container__item--Grid4">6</div>
                    <div className="container__item--Grid4">7</div>
                    <div className="container__item--Grid4">8</div>
                </div>
                <h4 className="article__subsubsubheader">Minmax</h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: repeat(auto-fill, minmax(200px, 1fr);<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        bardziej elastyczne podejście do szerokości kolumn
                    </li>
                </ul>
                <div className="container--Grid6">
                    <div className="container__item--Grid4">1</div>
                    <div className="container__item--Grid4">2</div>
                    <div className="container__item--Grid4">3</div>
                    <div className="container__item--Grid4">4</div>
                    <div className="container__item--Grid4">5</div>
                    <div className="container__item--Grid4">6</div>
                    <div className="container__item--Grid4">7</div>
                    <div className="container__item--Grid4">8</div>
                </div>
                <h4 className="article__subsubsubheader">gap</h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br/>
                    &nbsp;&nbsp;grid-gap: 20px 30px;<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        odstęp między wierszami i kolumnami
                    </li>
                    <li className="article__listItem">
                        jedna wartość — równe odstępy
                    </li>
                    <li className="article__listItem">
                        właściwość <i>gap</i> nie działa w Safari.
                    </li>
                    <li className="article__listItem">
                        właściwość <i>gap</i> nie istnieje
                        we <i>Flex-ie</i> poza <i>Mozillą</i>.
                    </li>
                </ul>
                <div className="container--Grid7">
                    <div className="container__item--Grid7">1</div>
                    <div className="container__item--Grid7">2</div>
                    <div className="container__item--Grid7">3</div>
                    <div className="container__item--Grid7">4</div>
                    <div className="container__item--Grid7">5</div>
                    <div className="container__item--Grid7">6</div>
                    <div className="container__item--Grid7">7</div>
                    <div className="container__item--Grid7">8</div>
                </div>
                <h4 className="article__subsubsubheader">gap - row/column</h4>
                <p>Możemy też ustawić <i>gap</i> <em>tylko</em> między wierszami
                    lub <em>tylko</em> między kolumnami.
                </p>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br/>
                    &nbsp;&nbsp;grid-row-gap: 20px;<br/>
                    &#125;<br/>
                </blockquote>
                <div className="container--Grid8">
                    <div className="container__item--Grid7">1</div>
                    <div className="container__item--Grid7">2</div>
                    <div className="container__item--Grid7">3</div>
                    <div className="container__item--Grid7">4</div>
                    <div className="container__item--Grid7">5</div>
                    <div className="container__item--Grid7">6</div>
                    <div className="container__item--Grid7">7</div>
                    <div className="container__item--Grid7">8</div>
                </div>
                <p>lub:</p>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br/>
                    &nbsp;&nbsp;grid-column-gap: 20px;
                    &#125;<br/>
                </blockquote>
                <div className="container--Grid9">
                    <div className="container__item--Grid7">1</div>
                    <div className="container__item--Grid7">2</div>
                    <div className="container__item--Grid7">3</div>
                    <div className="container__item--Grid7">4</div>
                    <div className="container__item--Grid7">5</div>
                    <div className="container__item--Grid7">6</div>
                    <div className="container__item--Grid7">7</div>
                    <div className="container__item--Grid7">8</div>
                </div>
                <p>Podsumowując, nie używamy <i>gap: 20px</i> tylko stosujemy <i>grid-gap:
                    20px</i>, ponieważ pierwsze
                    rozwiązanie nie zadziała nam w przeglądarce <i>Safari</i></p>
                <h4 className="article__subsubsubheader">grid-template-rows</h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-rows: repeat(3, 100px 200px);<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        definiujemy wiersze zamiast kolumn,
                    </li>
                    <li className="article__listItem">
                        możemy definiować i wiersze i kolumny
                    </li>
                </ul>
                <div className="container--Grid10">
                    <div className="container__item--Grid7">1</div>
                    <div className="container__item--Grid7">2</div>
                    <div className="container__item--Grid7">3</div>
                    <div className="container__item--Grid7">4</div>
                    <div className="container__item--Grid7">5</div>
                    <div className="container__item--Grid7">6</div>
                    <div className="container__item--Grid7">7</div>
                    <div className="container__item--Grid7">8</div>
                </div>
                <h4 className="article__subsubsubheader">grid-auto-rows</h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: repeat(2, 1fr);<br/>
                    &nbsp;&nbsp;grid-template-rows: 50px;<br/>
                    &nbsp;&nbsp;grid-auto-rows: 100px 200px;<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        wysokość wierszy dodanych automatycznie
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                czyli tzw. <i>implicit grid</i> (niejawny,
                                domniemany)
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        domyślnie takie wiersze mają wysokość odpowiadającą
                        treści najwyższego elementu w wierszu
                    </li>
                </ul>
                <div className="container--Grid11">
                    <div className="container__item--Grid7">1</div>
                    <div className="container__item--Grid7">2</div>
                    <div className="container__item--Grid7">3</div>
                    <div className="container__item--Grid7">4</div>
                    <div className="container__item--Grid7">5</div>
                    <div className="container__item--Grid7">6</div>
                    <div className="container__item--Grid7">7</div>
                    <div className="container__item--Grid7">8</div>
                </div>
                <h4 className="article__subsubsubheader">Zagnieżdżanie
                    grida</h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: repeat(2, 1fr);<br/>
                    &nbsp;&nbsp;grid-gap: 10px;<br/>
                    &#125;<br/>
                    .container__item &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-rows: 100px 200px<br/>
                    &nbsp;&nbsp;grid-gap: 20px;<br/>
                    &#125;<br/>
                </blockquote>
                <div className="container--Grid12">
                    <div className="container__item--Grid12">1</div>
                    <div className="container__item--Grid12">2</div>
                    <div className="container__item--Grid12">3</div>
                    <div className="container__item--Grid12">4</div>
                    <div className="container__item--Grid12">
                        <div>A</div>
                        <div>B</div>
                    </div>
                    <div className="container__item--Grid12">6</div>
                    <div className="container__item--Grid12">7</div>
                    <div className="container__item--Grid12">8</div>
                </div>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        dwa zupełnie odrębne gridy ze swoimi
                        właściwościami - <i>siatka w siatce</i></li>
                </ul>
                <h4 className="article__subsubsubheader">Wyrównanie</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <b>align-items, justify-items</b>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                wyrównują w wierszach lub w kolumnach
                            </li>
                            <li className="article__listItem">
                                wartości: start | end | center
                            </li>
                            <li className="article__listItem">
                                domyślnie elementy się rozciągają
                            </li>
                            <li className="article__listItem">
                                <b>align-self i
                                    justify-self</b> pozwalają na inne
                                wyrównanie dla poszczególnych
                                elementów
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="container--Grid13">
                    <div className="container__item--Grid13">1</div>
                    <div className="container__item--Grid13">2</div>
                    <div className="container__item--Grid13">3</div>
                    <div className="container__item--Grid13">4</div>
                    <div className="container__item--Grid13">5</div>
                    <div className="container__item--Grid13">6</div>
                    <div className="container__item--Grid13">7</div>
                    <div
                        className="container__item--Grid13 container__item--Grid13last">8
                    </div>
                </div>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <b>align-content, justify-content</b>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                określają rozmieszczenie przestrzeni
                                między wierszami lub kolumnami
                            </li>
                            <li className="article__listItem">
                                wartości: start | end | center | stretch
                                | space-around | space-between |
                                space-evenly
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="container--Grid14">
                    <div className="container__item--Grid14">1</div>
                    <div className="container__item--Grid14">2</div>
                    <div className="container__item--Grid14">3</div>
                    <div className="container__item--Grid14">4</div>
                </div>
                <h4 className="article__subsubsubheader">Zmiana
                    położenia elementu w <i>Grid-zie</i></h4>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;display: grid;<br/>
                    &nbsp;&nbsp;grid-template-columns: repeat(5,
                    1fr);<br/>
                    &nbsp;&nbsp;grid-template-rows: repeat(5,
                    100px);<br/>
                    &#125;<br/><br/>
                    .container__elemenent &#123;<br/>
                    &nbsp;&nbsp;grid-column-start: 3;<br/>
                    &nbsp;&nbsp;grid-column-end: -2;<br/>
                    &nbsp;&nbsp;grid-row-start: 1<br/>
                    &nbsp;&nbsp;grid-row-end: 3;<br/>
                    &#125;
                </blockquote>
                <div className="container--Grid15">
                    <div className="container__item--Grid15">1</div>
                    <div className="container__item--Grid15">2</div>
                    <div className="container__item--Grid15">3</div>
                    <div className="container__item--Grid15">4</div>
                    <div className="container__item--Grid15">5</div>
                    <div className="container__item--Grid15">6</div>
                    <div className="container__item--Grid15">7</div>
                    <div
                        className="container__item--Grid15 container__item--Grid15last">8
                    </div>
                </div>
                <p>Jeszcze inny przykład z użyciem <i>span</i>.</p>
                <blockquote className="article__blockquote">
                    .container__elemenent &#123;<br/>
                    &nbsp;&nbsp;grid-column-start: 3;<br/>
                    &nbsp;&nbsp;grid-column-end: span 3;<br/>
                    &nbsp;&nbsp;grid-row-start: 1<br/>
                    &nbsp;&nbsp;grid-row-end: span 3;<br/>
                    &#125;
                </blockquote>
                <div className="container--Grid15">
                    <div className="container__item--Grid15">1
                    </div>
                    <div className="container__item--Grid15">2
                    </div>
                    <div className="container__item--Grid15">3
                    </div>
                    <div className="container__item--Grid15">4
                    </div>
                    <div className="container__item--Grid15">5
                    </div>
                    <div className="container__item--Grid15">6
                    </div>
                    <div className="container__item--Grid15">7
                    </div>
                    <div
                        className="container__item--Grid15 container__item--Grid16last">8
                    </div>
                </div>
            </>
        )
    },
    {
        id: 57,
        date: "17 lipca 2023 roku",
        title: "CSS- Media queries",
        body: (
            <>
                <p>Media queries to zapytania, które pozwalają na zmianę stylów CSS w zależności od rozmiaru ekranu
                    urządzenia, na którym wyświetlana jest strona. Najczęściej stosuje się do dostosowania wyglądu
                    strony na smartfonach i tabletach.</p>
                <blockquote className="article__blockquote">
                    .image &#123;<br/>
                    &nbsp;&nbsp;width: 50%;<br/>
                    &#125;<br/><br/>
                    <b>@media (max-width: 767px) &#123;</b><br/>
                    &nbsp;&nbsp;.image &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;width: 100%;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;<br/>
                </blockquote>
                <p>Każde z urządzeń <i>zgłasza</i> szerokość ekranu w pixelach.</p>
                <h4 className="article__subsubsubheader">Mobile-first</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        alternatywna koncepcja projektowania stron internetowych,
                    </li>
                    <li className="article__listItem">
                        pole na projektowaniu najpierw pod wąskie ekrany, a potem dostosowywaniu pod coraz
                        szersze,
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Orientation</h4>
                <blockquote className="article__blockquote">
                    <b>@media (orientation: landscape) &#123;</b> /* lub portrait */<br/>
                    &nbsp;&nbsp;.image &#125;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;width: 50%;<br/>
                    &nbsp;&nbsp;&#123;<br/>
                    &#125;<br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        inne style w zależności od orientacji urządzenia,
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Inne "media features"</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        jest bardzo dużo różnych features,
                    </li>
                    <li className="article__listItem">
                        najczęściej używamy <b>width</b> i <b>height</b>,
                    </li>
                    <li className="article__listItem">
                        inne dotyczą np. tego, czy użytkownik używa myszy, jaka jest gęstość pikseli, ile jest
                        kolorów,
                        jakie są proporcje viewport itd.
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Breakpointy</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        zwykle wybieramy kilka <i>punktów granicznych</i>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                np.: 768px, 992px, 1200px
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        dzięki temu myślimy o projekcie strony w kilku przedziałach szerokości,
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Inne style do druku i dla ekranów</h4>
                <blockquote className="article__blockquote">
                    <b>@media print &#123;<br/></b>
                    & nbsp;&nbsp;.whatever &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;...<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">OR</h4>
                <p>Możemy dodać kilka <b>media queries</b> i w tym celu używamy <b>OR</b></p>
                <blockquote className="article__blockquote">
                    <b>@media</b> (max-width: 767px), (min-width: 1200px) &#123;<br/>
                    &nbsp;&nbsp;.image &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;width: 50%;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">AND</h4>
                <blockquote className="article__blockquote">
                    <b>@media</b> (min-width: 768px) <b>and</b> (max-width: 1199px) &#123;<br/>
                    &nbsp;&nbsp;.image &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;width: 50%;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Zagnieżdżanie</h4>
                <blockquote className="article__blockquote">
                    <b>@media</b> (min-width: 768px) &#123;<br/>
                    &nbsp;&nbsp;<b>@media</b> (max-width: 1199px) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;.image &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 50%;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Nie zawsze potrzebujesz media query!</h4>
                <p>Zamiast np. sztywno ustawionej <i>width</i> użyjemy <i>max-width</i> i już
                    otrzymamy jakąś
                    responsywność. To samo się tyczy <i>flex-a</i></p>
                <h4 className="article__subsubsubheader">Pamiętaj o viewport meta tag!</h4>
                <blockquote className="article__blockquote">
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
                </blockquote>
                <p>Jeżeli <i>media queries</i> nie działają, to zwykle może to być związane właśnie
                    z niedodaniem tego
                    powyższego znacznika.</p>
            </>

        )
    },
    {
        id: 56,
        date: "17 lipca 2023 roku",
        title: "JavaScript - prosty kalkulator walutowy",
        body: (
            <>
                <p>Dziś ćwiczę <i>JavaScript</i> tworząc prosty kalkulator walutowy.</p>
                <div className="calculator__titleContainer--currency">
                    <h4 className="calculator__title">Kalkulator walut</h4>
                </div>
                <form className="js-form2">
                    <fieldset className="calculator__fieldset">
                        <legend className="calculator__legend">Podaj wartość i wybierz walutę, aby obliczyć wartość zł
                            po
                            kursie
                        </legend>
                        <div className="calculator__subContainer">
                            <label className="calculator__label">
                                Kwota w PLN
                                <input className="calculator__input js-input" name="PLN" type="number" min="0.01"
                                       step="any"
                                       placeholder="PLN" required/>
                            </label>
                            <label className="calculator__label">
                                Waluta
                                <select className="calculator__input js-currency" name="currency">
                                    <option className="calculator__selectOption" value="EUR">EUR</option>
                                    <option className="calculator__selectOption" value="GBP">GBP</option>
                                </select>
                            </label>
                        </div>
                    </fieldset>
                    <button className="calculator__button">Pokaż wartość waluty po kursie</button>
                    <p className="calculator__paragraph result js-result"> - </p>
                    <p className="calculator__paragraph--centered">Kurs walut pochodzi z Tabeli nr 135/A/NBP/2023 z dnia
                        2023-07-14</p>
                </form>
            </>
        )
    },
    {
        id: 55,
        date: "14 lipca 2023 roku",
        title: "JavaScript - wstęp do funkcji",
        body: (
            <>
                <p>Przeżyjmy to jeszcze raz! Czym jest funkcja?</p>
                <p>Funkcja to zestaw instrukcji, które ma wykonać dany program.</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        może mieć nazwę (mamy też funkcje anonimowe),
                    </li>
                    <li className="article__listItem">
                        może przyjmować parametry (argumenty),
                    </li>
                    <li className="article__listItem">
                        może zwracać wartość.
                    </li>
                </ul>
                <p>Pora na praktykę.</p>
                <p>Stwórzmy funkcję, która będzie zwracać liczbę pomnożoną przez 2:</p>
                <blockquote className="article__blockquote">
                    function double(number) &#123;<br/>
                    &nbsp;&nbsp;return number * 2;<br/>
                    &#125;<br/>
                </blockquote>
                <p>Na razie nic się nie dzieje, ponieważ funkcja została jedynie zadeklarowana. Aby wywołać funkcję,
                    możemy np. użyć <i>console.log</i>:</p>
                <blockquote className="article__blockquote">
                    function double(number) &#123;<br/>
                    &nbsp;&nbsp;return number * 2;<br/>
                    &#125;<br/><br/>
                    <b>console.log(double(10));<br/></b>
                </blockquote>
                <p>Na Konsoli wypisze mi się:</p>
                <blockquote className="article__blockquote">
                    20
                </blockquote>
                <h4 className="article__subsubsubheader">Składnia</h4>
                <blockquote className="article__blockquote">
                    <b>function <i>nazwa</i></b> (parametr1, parametr2) &#123;<br/>
                    &nbsp;&nbsp;// instrukcje<br/>
                    &nbsp;&nbsp;<b>return</b> wartość;<br/>
                    &#125;
                </blockquote>
                <p>W przypadku parametrów typu <i>number, string, undefined, null i boolean</i> wartość
                    zostanie
                    skopiowana do funkcji,</p>
                <blockquote className="article__blockquote">
                    <b>function <i>double2</i></b>(number) &#123;<br/>
                    &nbsp;&nbsp;return number * 2;<br/>
                    &#125;<br/><br/>
                    let myNumber = 5;<br/><br/>
                    console.log(double2(myNumber));<br/>
                </blockquote>
                <p>Na konsoli wypisze mi się teraz:</p>
                <blockquote className="article__blockquote">
                    10
                </blockquote>
                <h4 className="article__subsubsubheader">Wywołanie funkcji</h4>
                <blockquote className="article__blockquote">
                    let doubled = double(5);
                </blockquote>
                <h4 className="article__subsubsubheader">Funkcje strzałkowe - <b>arrow functions</b>
                </h4>
                <blockquote className="article__blockquote">
                    let double = number => number * 2;
                </blockquote>
                <p>Funkcja strzałkowa daje nam prostszy, krótszy zapis. Ten zapis: </p>
                <blockquote className="article__blockquote">
                    <b>function <i>double2</i></b>(number) &#123;<br/>
                    &nbsp;&nbsp;return number * 2;<br/>
                    &#125;<br/><br/>
                    let myNumber = 5;<br/><br/>
                    console.log(double2(myNumber));<br/>
                </blockquote>
                <p>Można zamienić na taki zapis:</p>
                <blockquote className="article__blockquote">
                    <b>let <i>double2</i></b> = (number) => &#123;<br/>
                    &nbsp;&nbsp;return number * 2;<br/>
                    &#125;<br/><br/>
                    let myNumber = 5;<br/><br/>
                    console.log(double2(myNumber));<br/>
                </blockquote>
                <p>Od tego momentu ma znaczenie, czy funkcja, którą chcemy wywołać jest
                    zadeklarowana przed jej
                    wywołaniem. <i>Hoisting (windowanie)</i> tutaj nie zadziała.</p>
                <p>Możemy jeszcze bardziej ten zapis skrócić:</p>
                <blockquote className="article__blockquote">
                    <b>let <i>double2</i></b> = number => &#123;<br/>
                    &nbsp;&nbsp;return number * 2;<br/>
                    &#125;<br/><br/>
                    let myNumber = 5;<br/><br/>
                    console.log(double2(myNumber));<br/>
                </blockquote>
                <p>A potem <em>jeszcze bardziej</em> skrócić:</p>
                <blockquote className="article__blockquote">
                    <b>let <i>double2</i></b> = number => &#123;<br/>
                    &nbsp;&nbsp; number * 2;<br/>
                    &#125;<br/><br/>
                    let myNumber = 5;<br/><br/>
                    console.log(double2(myNumber));<br/>
                </blockquote>
                <p>I <em>jeszcze bardziej</em> skrócić:</p>
                <blockquote className="article__blockquote">
                    <b>let <i>double2</i></b> = number => number * 2;
                    <br/><br/>
                    let myNumber = 5;<br/><br/>
                    console.log(double2(myNumber));<br/>
                </blockquote>
                <p>W tym przypadku nie musimy używać <i>return</i>, ponieważ funkcja
                    zwraca wartość.</p>
                <h4 className="article__subsubsubheader">Zasięg zmiennych w funkcji</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        wewnątrz funkcji mamy dostęp do zmiennych zadeklarowanych poza
                        funkcją,
                    </li>
                    <li className="article__listItem">
                        poza funkcją nie mamy dostępu do zmiennych zadeklarowanych
                        wewnątrz funkcji.
                    </li>
                </ul>
                <p>Brzmi to bardzo skomplikowanie, jednak postaram się przećwiczyć to
                    jeszcze raz, aby mieć 100% jasność
                    o co chodzi.</p>
                <p>Jeżeli wyżej została zadeklarowana zmienna <b>myNumber</b> to ja mogę
                    jej sobie tutaj użyć.</p>
                <blockquote className="article__blockquote">
                    <b>let <i>double2</i></b> = number => &#123;<br/>
                    <b>&nbsp;&nbsp; console.log(`myNumber wynosi $&#123;myNumber&#125;`)</b><br/>
                    &#125;<br/>
                    &nbsp;&nbsp;return number * 2;<br/>
                    &#125;<br/><br/>
                    <b>let myNumber = 5;<br/><br/></b>
                    console.log(double2(myNumber));<br/>
                </blockquote>
                <p> Konsola pokaże mi dzięki temu:</p>
                <blockquote className="article__blockquote">
                    myNumber wynosi 5
                </blockquote>
                <p>Ale gdybyśmy wewnątrz tej funkcji zadeklarować inną zmienną, to
                    nie będzie jej widać na zewnątrz.</p>
                <blockquote className="article__blockquote">
                    function double2(number) &#123;<br/>
                    &nbsp;&nbsp;console.log(`myNumber wynosi $&#123;myNumber&#125;`);<br/>
                    &nbsp;&nbsp;<b>let zmienna = 11;</b><br/>
                    &nbsp;&nbsp;return number * 2;<br/>
                    &#125;;<br/><br/>
                    let myNumber = 5;<br/><br/>
                    console.log(double2(myNumber));<br/>
                    <b>zmienna</b>
                </blockquote>
                <p>Zmienna zadeklarowana funkcji może być obsługiwana jedynie w
                    funkcji. Nigdzie indziej jej nie ma.</p>
                <h4 className="article__subsubsubheader">let, const, var</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <b>let</b> - zmienna — zasięg blokowy — jeżeli
                        zadeklaruję zmienną przez <i>let</i> w bloku, to
                        ta zmienna nie będzie widoczna poza tym blokiem
                        <blockquote className="article__blockquote">
                            &#123;<br/><br/>
                            <b>let <i>zmienna</i></b> = 5;<br/>
                            console.log(zmienna&#125;;<br/>
                            &#125;<br/>
                            <br/>
                            console.log(zmienna);<br/>
                        </blockquote>
                        <p>W tym przypadku konsola pokaże mi błąd,
                            ponieważ zmienna <b>zmienna</b> jest
                            zadeklarowana w
                            bloku i nie jest widoczna poza nim.</p>
                    </li>
                    <li className="article__listItem">
                        <b>const</b> - stała - zasięg blokowy -
                        gdybyśmy zamienili w tym samym
                        przykładzie <i>let</i> na
                        <i>const</i> to zadziałałoby nam to podobnie
                        jak <i>let</i>, ale nie będziemy mogli
                        zmienić
                        wartości tej zmiennej:
                        <blockquote className="article__blockquote">
                            &#123;<br/><br/>
                            <b>const <i>zmienna</i></b> = 5;<br/>
                            <b>zmienna = 6;<br/></b>
                            console.log(zmienna&#125;;<br/>
                            &#125;<br/>
                            <br/>
                            console.log(zmienna);<br/>
                        </blockquote>
                        Dostanę wtedy błąd na konsoli
                        mówiący, że nie mogę zmienić
                        wartości stałej.
                    </li>
                    <li className="article__listItem">
                        <b>var</b> - zmienna - zasięg
                        funkcyjny. Jeżeli wewnątrz
                        funkcji
                        zadeklaruję <i>var</i> to
                        pomimo wpisania console.log w
                        środku funkcji, to zmienna nie
                        pokaże się, dopóki nie wywołam
                        funkcji.
                        <blockquote
                            className="article__blockquote">
                            <b>function <i>myFunction</i></b>() &#123;
                            <br/>
                            & nbsp;&nbsp;var zmienna
                            = 5;<br/>
                            &nbsp;&nbsp;console.log(zmienna);<br/>
                            &#125;<br/>
                            myFunction();<br/>
                        </blockquote>
                        Jeżeli jednak wywołam
                        zmienną
                        w <i>console.log</i> poza
                        funkcją, to ona się nie
                        wyświetli. Ale
                        jeżeli umieścimy var w
                        bloku, to wywołanie
                        zmiennej poza blokiem
                        zadziała:
                        <blockquote
                            className="article__blockquote">
                            <b>function <i>myFunction</i></b>() &#123;
                            <br/>
                            &#125;<br/>
                            &nbsp;&nbsp;var
                            zmienna = 5;<br/>
                            &#125;<br/>
                            &nbsp;&nbsp;console.log(zmienna);<br/>
                            &#125;<br/>
                            myFunction();<br/>
                        </blockquote>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Funkcja
                    anonimowa</h4>
                <p><b>Funkcja
                    anonimowa</b> to
                    taka,
                    która
                    nie ma
                    nazwy.
                    Właściwie
                    każda
                    funkcja
                    strzałkowa
                    jest
                    funkcją
                    anonimową.
                    Również
                    funkcja
                    z użytym
                    słowem <i>function</i> też
                    jest
                    funkcją
                    anonimową.
                    Używamy <i>funkcji
                        anonimowych</i> gdy
                    przekazujemy
                    funkcję
                    do
                    innych
                    funkcji.
                </p>
                <blockquote
                    className="article__blockquote">
                    <b>let <i>double</i></b> =
                    function
                    (number) &#123;
                    <br/>
                    & nbsp;&nbsp;return
                    number
                    * 2;<br/>
                    &#125;;<br/>
                </blockquote>
                <p>Powyżej
                    jest
                    pokazany
                    przykład
                    funkcji
                    anonimowej
                    —
                    jak
                    zauważymy
                    —
                    nie
                    ma
                    nazwy
                    funkcji
                    po
                    słowie
                    <i>function</i>.
                </p>
            </>
        )
    },
    {
        id: 54,
        date: "13 lipca 2023 roku",
        title: "JavaScript - boolean, null, undefined",
        body: (
            <>
                <Figure>
                    <img alt="różnica między null i undefined " className="article__image"
                         src={Null}/>
                    <figcaption className="article__figcaption">
                        Różnica między null i undefined<br/>
                        Źródło: https://codecrumbs.com/
                    </figcaption>
                </Figure>
                <h4 className="article__subsubsubheader">boolean</h4>
                <p>Mamy dwie wartości typu boolean: <i>true</i> i <i>false</i> i <i>on</i>
                    <i>off</i>. <i>Boolean</i>
                    jest zwracany przez <i>operatory porównania</i>.</p>
                <blockquote className="article__blockquote">
                    > let <b>zmienna</b> = true;
                </blockquote>
                <blockquote className="article__blockquote">
                    > typeof <b>zmienna</b><br/>
                    &lt;
                    "boolean"
                </blockquote>
                <p>Możemy teraz zmienić tą wartość, ale tylko na <i>false</i>:</p>
                <blockquote className="article__blockquote">
                    > let <b>zmienna</b> = false<br/>
                </blockquote>
                <p>Możemy też <i>pobawić się</i> <i>boolean-em</i> przypisując działanie do jakiejś
                    zmiennej, np.</p>
                <blockquote className="article__blockquote">
                    > 10 > 4<br/>
                    &lt; true
                </blockquote>
                <blockquote className="article__blockquote">
                    > let <b>czy10JestWiekszeNiz4</b> = 10 > 4<br/>
                </blockquote>
                <blockquote className="article__blockquote">
                    > <b>czy10JestWiekszeNiz4</b><br/>
                    &lt; true
                </blockquote>
                <h4 className="article__subsubsubheader">wartości <i>falsy</i></h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        0, -0,
                    </li>
                    <li className="article__listItem">
                        "" - pusty łańcuch znaków,
                    </li>
                    <li className="article__listItem">
                        false,
                    </li>
                    <li className="article__listItem">
                        NaN
                    </li>
                    <li className="article__listItem">
                        undefined,
                    </li>
                    <li className="article__listItem">
                        null,
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Konwertowanie na boolean</h4>
                <p>Tak jak każdą zmienną możemy sobie konwertować na string, np. za pomocą
                    metody <i>toString</i> albo
                    na liczby za pomocą metody <i>Number</i> tak i możemy przekonwertować na <i>boolean</i>.
                    Możemy to
                    zrobić w następujący sposób:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        !!wartość - <b>logical NOT</b> - operator zaprzeczający
                    </li>
                    <li className="article__listItem">
                        Boolean(wartość)
                    </li>
                </ul>
                <blockquote className="article__blockquote">
                    > let <b>liczba</b> = 5;<br/>
                </blockquote>
                <blockquote className="article__blockquote">
                    > let <b>czyLiczba</b> = !!liczba;<br/>
                </blockquote>
                <blockquote className="article__blockquote">
                    > <b>czyLiczba</b><br/>
                    &lt; true
                </blockquote>
                <h4 className="article__subsubsubheader">Typ null</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        let zmienna = null — deklarujemy tylko w taki sposób,
                    </li>
                    <li className="article__listItem">
                        "celowy brak wartości",,
                    </li>
                    <li className="article__listItem">
                        jedyna możliwa wartość: null
                    </li>
                    <li className="article__listItem">
                        jeżeli chcemy sprawdzić, czy zmienna jest <i>null-em</i>:
                        <blockquote className="article__blockquote">
                            if (zmienna === null)
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        <b>uwaga!</b>
                        <blockquote className="article__blockquote">
                            typeof null = "object"
                        </blockquote>
                    </li>
                </ul>
                <p>Używamy tego typu, jeżeli nie ma wartości.</p>
                <h4 className="article__subsubsubheader">Typ undefined</h4>
                <blockquote className="article__blockquote">
                    let <b>zmienna</b>;<br/>
                </blockquote>
                <blockquote className="article__blockquote">
                    let <b>zmienna</b> = undefined;
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        "wartość niezdefiniowana"
                    </li>
                    <li className="article__listItem">
                        jedyna możliwa wartość: <b>undefined</b>,,
                    </li>
                    <li className="article__listItem">
                        sprawdzenie, czy zmienna jest <i>undefined</i>:
                        <blockquote className="article__blockquote">
                            if (<b>zmienna</b> === undefined)
                        </blockquote>
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 53,
        date: "13 lipca 2023 roku",
        title: "CSS - Flex c.d.",
        body: (
            <>
                <h4 className="article__subsubsubheader">align-items</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        określa wyrównanie elementów w osi prostopadłej
                    </li>
                    <li className="article__listItem">
                        wartości: flex-start, flex-end, center - "góra", "dół", "środek",
                    </li>
                    <li className="article__listItem">
                        domyślnie: stretch.
                    </li>
                </ul>
                <p>Dlaczego w <i>wartościach</i> właściwości mamy <i>flex-start</i> i <i>flex-end</i>? Ponieważ
                    położenie tych elementów jest względne, zależnie od właściwości <i>flex-direction</i>.</p>
                <div className="article__div--FlexAligned">
                    <div className="article__div--FlexItemAligned">1
                    </div>
                    <div className="article__div--FlexItemAligned">2
                    </div>
                    <div className="article__div--FlexItemAligned">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores atque autem
                    </div>
                </div>
                <p>Powyższy przykład przedstawia się następująco:</p>
                <blockquote className="article__blockquote">
                    &lt;div class="article__div--FlexAligned"><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--FlexItemAligned">1<br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--FlexItemAligned">2<br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--FlexItemAligned"><br/>
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores atque autem<br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &lt;/div><br/>
                </blockquote>
                <blockquote className="article__blockquote">
                    .article__div--FlexAligned &#123;<br/>
                    &nbsp;&nbsp;display: flex;<br/>
                    &nbsp;&nbsp;flex-wrap: wrap;<br/>
                    &nbsp;&nbsp;margin: auto;<br/>
                    &nbsp;&nbsp;max-width: 500px;<br/>
                    &nbsp;&nbsp;border: 10px solid black;<br/>
                    &nbsp;&nbsp;<b>align-items: center;</b><br/>
                    &nbsp;&nbsp;flex-direction: column;<br/>
                    &#125;<br/><br/>

                    .article__div--FlexItemAligned &#123;<br/>
                    &nbsp;&nbsp;padding: 20px;<br/>
                    &nbsp;&nbsp;background: #39744a;<br/>
                    &nbsp;&nbsp;color: white;<br/>
                    &nbsp;&nbsp;margin: 10px;<br/>
                    &#125;<br/><br/>
                </blockquote>
                <h4 className="article__subsubsubheader">align-self</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        pozwala ustawić wyrównanie dla pojedynczego elementu
                    </li>
                    <li className="article__listItem">
                        wartości takie same jak <i>align-items</i>
                    </li>
                </ul>
                <div className="article__div--FlexAligned">
                    <div className="article__div--FlexItemAligned article__div--FlexItemFirst">1
                    </div>
                    <div className="article__div--FlexItemAligned">2
                    </div>
                    <div className="article__div--FlexItemAligned">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores atque autem
                    </div>
                </div>
                <p>Natomiast w kodzie przedstawia nam się to tak:</p>
                <blockquote className="article__blockquote">
                    &lt;div class="article__div--FlexAligned"><br/>
                    &nbsp;&nbsp;&lt;div
                    class="article__div--FlexItemAligned <b>article__div--FlexItemFirst</b>">1<br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--FlexItemAligned">2<br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--FlexItemAligned"><br/>
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores atque
                    autem<br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &lt;/div><br/>
                </blockquote>
                <blockquote className="article__blockquote">
                    .article__div--FlexItemFirst &#123;<br/>
                    &nbsp;&nbsp;<b>align-self: flex-end;</b><br/>
                    &#125;<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">justify-content</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        wyrównuje elementy w głównej osi,
                    </li>
                    <li className="article__listItem">
                        wartości: flex-start, flex-end, center - podobnie jak przy <i>align-items</i>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                <b>space-between</b> - równa przestrzeń między elementami
                            </li>
                            <li className="article__listItem">
                                <b>space-around</b> - równa przestrzeń po obu stronach elementów,
                            </li>
                            <li className="article__listItem">
                                <b>space-evenly</b> - równa przestrzeń między elementami i przy krawędzi
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        domyślna wartość: <i>flex-start</i>.
                    </li>
                </ul>
                <div className="article__div--FlexContented">
                    <div className="article__div--FlexItem">1
                    </div>
                    <div className="article__div--FlexItem">2
                    </div>
                    <div className="article__div--FlexItem">3
                    </div>
                </div>
                <blockquote className="article__blockquote">
                    .article__div--FlexContented &#123;<br/>
                    &nbsp;&nbsp;display: flex;<br/>
                    &nbsp;&nbsp;flex-wrap: wrap;<br/>
                    &nbsp;&nbsp;margin: auto;<br/>
                    &nbsp;&nbsp;max-width: 500px;<br/>
                    &nbsp;&nbsp;border: 10px solid black;<br/>
                    &nbsp;&nbsp;<b>justify-content: center;</b><br/>
                    &#125;<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">order</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        pozwala zmienić kolejność elementów,
                    </li>
                    <li className="article__listItem">
                        domyślnie każdy element ma wartość 0, ale możemy sobie ustawić dowolną liczbę
                        dodatnią lub
                        ujemną,
                    </li>
                    <li className="article__listItem">
                        jeżeli chcemy, aby któryś z elementów pokazał się przed wszystkimi, stosujemy
                        wartość ujemną
                    </li>
                </ul>
                <div className="article__div--FlexContented">
                    <div className="article__div--FlexItem">1
                    </div>
                    <div className="article__div--FlexItem">2
                    </div>
                    <div className="article__div--FlexItem article__div--FlexItemLast">3
                    </div>
                </div>
                <blockquote className="article__blockquote">
                    .article__div--FlexItemLast &#123;<br/>
                    &nbsp;&nbsp;<b>order: -1;</b><br/>
                    &#125;<br/>
                </blockquote>
                <blockquote className="article__blockquote">
                    &lt;div class="article__div--FlexContented"><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--FlexItem">1<br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--FlexItem">2<br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--FlexItem <b>article__div--FlexItemLast</b>">3<br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &lt;/div>
                </blockquote>
                <h4 className="article__subsubsubheader">flex-wrap</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        określa, czy elementy mogą przechodzić do kolejnego wiersza,
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                jeśli tak, to w jakim kierunku mają się układać,
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        <b>wrap</b> - pozwala na przechodzenie do kolejnego wiersza,
                    </li>
                    <li className="article__listItem">
                        <b>wrap-reverse</b> - odwrotny kierunek,
                    </li>
                    <li className="article__listItem">
                        domyślnie <b>nowrap</b>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">align-content</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        określa rozmieszczenie pustej przestrzeni w osi prostopadłej
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                jeśli jest wiele linii
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">skrót flex-flow</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        flex-direction i flex-wrap w jednym
                    </li>
                    <li className="article__listItem">
                        np. column wrap
                        <blockquote className="article__blockquote">
                            .element &#123;<br/>
                            &nbsp;&nbsp;flex-flow: column wrap;<br/>
                            &#125;
                        </blockquote>
                    </li>
                </ul>
                <p>A tutaj można utrwalić swoją wiedzę z <i>Flex-a</i>:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <a href="https://flexboxfroggy.com/#pl" target="_blank">Flexbox Froggy</a>
                    </li>
                    <li className="article__listItem">
                        <a href="https://mastery.games/flexboxzombies" target="_blank">Flexbox Zombies</a>
                    </li>
                    <li className="article__listItem">
                        <a href="https://codepen.io/osublake/pen/dMLQJr" target="_blank">CodePen Demo</a>
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 52,
        date: "12 lipca 2023 roku",
        title: "CSS - Flex c.d.",
        body: (
            <>
                <h4 className="article__subsubsubheader">flex-grow</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        określa ile pozostałego miejsca ma zostać przypisane do <i>flex item</i>.
                        <blockquote className="article__blockquote">
                            .element1 &#123;<br/>
                            &nbsp;&nbsp;flex-grow: 1;<br/>
                            &#125;;<br/><br/>
                            .element2 &#123;<br/>
                            &nbsp;&nbsp;flex-grow: 2;<br/>
                            &#125;<br/><br/>
                            .element3 &#123;<br/>
                            &nbsp;&nbsp;flex-grow: 0;<br/>
                            &#125;<br/>
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        domyślnie 0, czyli nie rozciąga się, ale można to zmienić na 1, czyli rozciąga się.
                    </li>
                    <li className="article__listItem">
                        działa na zasadzie proporcji, więc jeżeli jeden element ma wartość 1, a drugi 2, to
                        drugi będzie
                        miał dwa razy więcej miejsca. Jeżeli jeden element ma wartość 1, a drugi 0, to drugi nie
                        będzie
                        miał miejsca.
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">flex-shrink</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        określa jak bardzo element może się skurczyć, by zmieścić wszystkie elementy w linii.
                        <blockquote className="article__blockquote">
                            .element1 &#123;<br/>
                            &nbsp;&nbsp;flex-shrink: 1;<br/>
                            &#125;;<br/><br/>
                            .element2 &#123;<br/>
                            &nbsp;&nbsp;flex-shrink: 2;<br/>
                            &#125;<br/><br/>
                            .element3 &#123;<br/>
                            &nbsp;&nbsp;flex-shrink: 0;<br/>
                            &#125;<br/>
                        </blockquote>
                    </li>
                    <li className="article__listItem">gdyby każdy element, miałby wartość 0 w <i>flex-shrink</i>,
                        to
                        elementy wyjdą z <i>kontenera nadrzędnego</i></li>
                    <li className="article__listItem">działa na zasadzie proporcji</li>
                    <li className="article__listItem">wartość domyślna to 1.</li>
                </ul>
                <h4 className="article__subsubsubheader">skrót flex</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        flex-grow, flex-shrink, flex-basis
                        <ul className="article__unorderedList">
                            <li className="article__listItem">elementy nie poszerzają się, ale mogą się kurczyć, a ich
                                szerokość jest automatyczna:
                                <blockquote className="article__blockquote">
                                    .element1 &#123;<br/>
                                    &nbsp;&nbsp;flex: 0 1 auto;<br/>
                                    &#125;;<br/>
                                </blockquote>
                            </li>
                            <li className="article__listItem">elementy i poszerzają się i się kurczą, ale mogą się
                                kurczyć, a ich szerokość jest automatyczna (nie będą wystawały poza kontener):
                                <blockquote className="article__blockquote">
                                    .element1 &#123;<br/>
                                    &nbsp;&nbsp;flex: 1 1 auto;<br/>
                                    &#125;;<br/>
                                </blockquote>
                                zamiast tego zapisu, możemy napisać samo <i>flex: auto</i> i zadziała nam tak samo
                            </li>
                            <li className="article__listItem">elementy mają rozmiar zależny od ich treści, ale
                                się ani nie
                                zwężają, ani nie poszerzają:
                                <blockquote className="article__blockquote">
                                    .element1 &#123;<br/>
                                    & nbsp;&nbsp;flex: 0 0 auto;<br/>
                                    &#125;;<br/>
                                </blockquote>
                                zamiast tego zapisu, możemy napisać samo <i>flex: none</i> i zadziała nam
                                tak samo
                            </li>
                            <li className="article__listItem">elementy mają identyczną
                                szerokość/wysokość, nie poszerzają
                                się i się nie kurczą
                                <blockquote className="article__blockquote">
                                    .element1 &#123;<br/>
                                    &nbsp;&nbsp;flex: 1 0 0;<br/>
                                    &#125;;<br/>
                                </blockquote>
                                zamiast tego zapisu, możemy napisać samo <i>flex: 1</i> i zadziała
                                nam tak samo
                            </li>
                            <li className="article__listItem">elementy mogą się nie mieścić —
                                nie pozwalają się skurczyć,
                                ani poszerzyć, a ich wartość szerokości/wysokości jest ustawiona
                                na "sztywno".
                                <blockquote className="article__blockquote">
                                    .element1 &#123;<br/>
                                    &nbsp;&nbsp;flex: 0 0 100;<br/>
                                    &#125;;<br/>
                                </blockquote>
                            </li>
                        </ul>
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 51,
        date: "11 lipca 2023",
        title: "CSS - Flex c.d.",
        body: (
            <>
                <h4 className="article__subsubsubheader">flex-direction</h4>
                <p>Flex layout ma dwie osie: główną i prostopadłą (main i cross). Oś prostopadła to oś pionowa.</p>
                <p>Wartości dla <b>flex-direction</b>, to:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        row
                    </li>
                    <li className="article__listItem">
                        row-reverse,
                    </li>
                    <li className="article__listItem">
                        column - gdy wpiszemy do właściwości <i>flex-direction</i> wartość <i>column</i>, nasz element
                        będzie zachowywał się, jakby w ogóle <i>Flex-a</i> nie było. Czy aby <em>na pewno</em>? Jeżeli
                        mamy ustawionego <i>Flex-a</i>, to nie zachodzi <i>margin collapsing</i>.
                        <blockquote className="article__blockquote">
                            .container &#123;<br/>
                            &nbsp;&nbsp;display: flex;<br/>
                            &nbsp;&nbsp;<b>flex-direction: column;</b><br/>
                            &#125;;
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        column reverse.
                    </li>
                </ul>
                <p>Bardzo fajnym ćwiczeniem będzie, jeśli za pomocą <i>DevTools-ów</i> "złapiesz" <i>div-a</i> z
                    poprzedniego wpisu i dodasz właściwość <i>flex-direction</i> i "pobawisz się" z wartościami, które
                    są też dostępne w tym narzędziu.</p>
                <h4 className="article__subsubsubheader">flex-basis</h4>
                <p>Gdy ustawimy sobie elementy w <i>kontenerze nadrzędnym</i> jako <i>flex-direction: row</i>, to
                    zauważymy, że szerokość elementów powinna być stała, jednak wysokość będzie się rozciągać na
                    wysokość rodzica. Możemy wyznaczyć stałą szerokość elementów w tym przypadku i do tego posłuży nam
                    właśnie <i>flex-basis</i>. Jeżeli ustawiliśmy <i>flex-direction: column</i>, to <i>flex-basis</i>
                    będzie się odnosił do wysokości elementów, a nie szerokości. Oczywiście nie możemy powiększać
                    szerokości/ wysokości elementów w nieskończoność — możemy je ustawić maksymalnie tak, aby nie
                    przekroczyć dostępnej szerokości lub wysokości narzuconej przez rodzica. Właściwości <i>width</i> i
                    <i>height</i> również zadziałają, jednak wygodniej jest stosować <i>flex-basis</i>, ponieważ nie
                    musimy wtedy pilnować czy mamy ustawiony <i>flex direction</i> na <i>row</i>, czy <i>column</i> i
                    przede wszystkim <i>flex-basis</i> ma wyższy priorytet.</p>
            </>
        )
    },
    {
        id: 50,
        date: "09 lipca 2023 roku",
        title: "CSS - Flex",
        body: (
            <>
                <p><b>Flex</b> to moduł w CSS-ie, który pozwala nam układać elementy w wierszach i kolumnach.</p>
                <p>Aby dodać <b>Flex-a</b> należy przede wszystkim dodać wartość <i>flex</i> do właściwości
                    <i>display</i>. Nasz (w tym przypadku <i>div</i> zostanie <i>flex-container-em.</i></p>
                <blockquote className="article__blockquote">
                    .container &#123;<br/>
                    &nbsp;&nbsp;<b>display: flex</b>;<br/>
                    &#125;;
                </blockquote>
                <p>Jeżeli chcemy zobaczyć różnicę położenia obiektów przy wyborze <i>Flex-a</i> i bez wybrania
                    <i>Flex-a</i>, to weźmy sobie na przykład 3 <i>divy z poniższymi klasami</i>:</p>
                <div className="article__div--noFlex">
                    <div className="article__div--noFlexItem">
                    </div>
                    <div className="article__div--noFlexItem">
                    </div>
                    <div className="article__div--noFlexItem">
                    </div>
                </div>
                <blockquote className="article__blockquote">
                    &lt;div class="article__div--noFlex"><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--noFlexItem"><br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--noFlexItem"><br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &nbsp;&nbsp;&lt;div class="article__div--noFlexItem"><br/>
                    &nbsp;&nbsp;&lt;/div><br/>
                    &lt;/div><br/>
                </blockquote>
                <blockquote className="article__blockquote">
                    .article__div--noFlex &#123;<br/>
                    &nbsp;&nbsp;margin: auto;<br/>
                    &nbsp;&nbsp;max-width: 500px;<br/>
                    &nbsp;&nbsp;border: 10px solid black;<br/>
                    &#125;<br/><br/>

                    .article__div--noFlexItem &#123;<br/>
                    &nbsp;&nbsp;padding: 20px;<br/>
                    &nbsp;&nbsp;background: #39744a;<br/>
                    &nbsp;&nbsp;color: white;<br/>
                    &nbsp;&nbsp;margin: 10px;<br/>
                    &#125;<br/>
                </blockquote>
                <p>To jest przykład ułożenia kontenerów <i>bez Flex-a</i>. <i>Div</i> jest elementem blokowym,
                    więc
                    będzie zajmował całą szerokość dostępnej powierzchni. Oczywiście troszeczkę udoskonaliłam,
                    dodając
                    <i>max-width</i> zamiast <i>width</i>, aby wyglądało to też dobrze na mniejszych ekranach.
                </p>
                <p>Jak natomiast będą się zachowywały <i>div-y</i>, jeżeli dodamy wartość <i>flex</i> do
                    właściwości <i>display</i>?
                    Zobaczmy:</p>
                <div className="article__div--Flex">
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                </div>
                <p>Jak zauważymy, <i>div-y</i> przestały być elementami blokowymi, natomiast zmieniły się w
                    elementy
                    liniowe i zajmują tyle miejsca, ile pozwala im na zmieszczenie się
                    w <i>div-ie</i> nadrzędnym, czyli
                    zgodnie z obraną wartością <i>max-width: 500px</i>. Jeśli chodzi o kod, wygląda to teraz
                    tak:</p>
                <blockquote className="article__blockquote">
                    .article__div--Flex &#123;<br/>
                    &nbsp;&nbsp;<b>display: flex</b><br/>
                    &nbsp;&nbsp;margin: auto;<br/>
                    &nbsp;&nbsp;max-width: 500px;<br/>
                    &nbsp;&nbsp;border: 10px solid black;<br/>
                    &#125;<br/><br/>

                    .article__div--FlexItem &#123;<br/>
                    &nbsp;&nbsp;padding: 20px;<br/>
                    &nbsp;&nbsp;background: #39744a;<br/>
                    &nbsp;&nbsp;color: white;<br/>
                    &nbsp;&nbsp;margin: 10px;<br/>
                    &#125;<br/>
                </blockquote>
                <p>W sumie, jak już ćwiczę — sprawdzę jak będą zachowywać się elementy
                    w <i>div-ie</i> nadrzędnym, jeśli
                    zwiększę ilość elementów:</p>
                <div className="article__div--Flex">
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                    <div className="article__div--FlexItem">
                    </div>
                </div>
                <p>Będą <em>wyłazić</em> poza kontener (aktualnie tego nie widać, bo od razu naniosłam
                    zmiany), więc
                    najrozsądniej jest tutaj wpisać kolejną właściwość, jaką
                    jest <i>flex-wrap</i> na <i>wrap;</i></p>
                <blockquote className="article__blockquote">
                    .article__div--Flex &#123;<br/>
                    &nbsp;&nbsp;<b>display: flex<br/>
                    &nbsp;&nbsp;flex-wrap: wrap;</b><br/>
                    &nbsp;&nbsp;margin: auto;<br/>
                    &nbsp;&nbsp;max-width: 500px;<br/>
                    &nbsp;&nbsp;border: 10px solid black;<br/>
                    &#125;<br/><br/>
                </blockquote>
            </>
        )
    },
    {
        id: 49,
        date: "09 lipca 2023 roku",
        title: "CSS - wyrównanie tekstu, dekoracje, wcięcia, wielkość liter, object-fit, object-position, calc",
        body: (
            <>
                <h4 className="article__subsubsubheader">text-align</h4>
                <p>Wyrównuje treść wewnątrz elementów blokowych i komórek tabeli</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        Wartości właściwości <b>text-align</b>, których używamy:
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                left
                            </li>
                            <li className="article__listItem">
                                right
                            </li>
                            <li className="article__listItem">
                                center
                            </li>
                            <li className="article__listItem">
                                justify
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">text-indent</h4>
                <p><b>text-indent</b> to właściwość, która jest odpowiedzialna za wcięcie teksty w blokowym elemencie (%
                    odnosi się do szerokości bloku).</p>
                <h4 className="article__subsubsubheader">text-decoration</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        określa wygląd linii dekoracyjnych tekstu,
                    </li>
                    <li className="article__listItem">
                        gdy chcemy usunąć podkreślenie z linku, wpisujemy wartość <b>none</b>,
                        <blockquote className="article__blockquote">
                            .element &#123;<br/>
                            &nbsp;&nbsp;<b>text-decoration:</b> none;<br/>
                            &#125;;
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        <b>text-decoration: underline dotted red</b> - trzy wartości w jednej właściwości, spowodują, że
                        tekst zostanie podkreślony kropkowaną czerwoną linią,
                    </li>
                    <li className="article__listItem">
                        text-decoration-line:
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                <b>underline</b> - podkreślenie,
                            </li>
                            <li className="article__listItem">
                                <b>overline</b> - linia nad tekstem,
                            </li>
                            <li className="article__listItem">
                                <b>line-through</b> - przekreślenie,
                            </li>
                            <li className="article__listItem">
                                kilka po spacji, np <b>underline overline</b>,
                            </li>
                            <li className="article__listItem">
                                <b>none</b> - brak podkreślenia,
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        <b>text-decoration-color</b> - określa kolor linii
                    </li>
                    <li className="article__listItem">
                        <b>text-decoration-style</b>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                solid
                            </li>
                            <li className="article__listItem">
                                double
                            </li>
                            <li className="article__listItem">
                                dotted
                            </li>
                            <li className="article__listItem">
                                dashed
                            </li>
                            <li className="article__listItem">
                                wavy
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">text-transform</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        przydaje się do zamiany wszystkich liter na małe, wielkie lub do zamiany wszystkich pierwszych
                        liter na wielkie;
                    </li>
                    <li className="article__listItem">
                        wartości:
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                <b>uppercase</b> - wszystkie litery wielkie,
                            </li>
                            <li className="article__listItem">
                                <b>lowercase</b> - wszystkie litery małe,
                            </li>
                            <li className="article__listItem">
                                <b>capitalize</b> - pierwsza litera w każdym słowie jest wielka, a reszta liter
                                pozostaje bez zmian,
                            </li>
                            <li className="article__listItem">
                                <b>none</b> - nie zmienia nic,
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">object-fit</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        określa, jak skalować np. obrazek, by wpasować się w kontener,
                    </li>
                    <li className="article__listItem">
                        wartości:
                    </li>
                    <li className="article__listItem">
                        <b>cover</b> - wypełnia kontener, ścina boki,
                    </li>
                    <li className="article__listItem">
                        <b>contain</b> - mieści się w kontenerze, zostawia pustą przestrzeń po bokach,
                    </li>
                    <li className="article__listItem">
                        <b>fill</b> - wartość domyślna - wypełnia kontener, nie zachowując proporcji,
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">object-position</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        położenie, np. obrazka w kontenerze,
                    </li>
                    <li className="article__listItem">
                        format taki sam jak przy background-position,
                    </li>
                    <li className="article__listItem">
                        domyślnie: 50% 50%,
                    </li>
                    <li className="article__listItem">
                        <b>contain</b> - mieści się w kontenerze, zostawia pustą przestrzeń po bokach,
                    </li>
                    <li className="article__listItem">
                        <b>fill</b> - wartość domyślna - wypełnia kontener, nie zachowując proporcji,
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">calc</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        obliczenia w CSS-ie, kiedy nie chcemy przypisać stałej wartości
                    </li>
                    <li className="article__listItem">
                        <b>width: calc(100%-80px);</b>,
                    </li>
                    <li className="article__listItem">
                        działania
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                +-
                                <ul className="article__unorderedList">
                                    <li className="article__listItem">
                                        koniecznie ze spacją, inaczej nie zadziała
                                    </li>
                                </ul>
                            </li>
                            <li className="article__listItem">
                                */
                            </li>
                        </ul>
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 48,
        date: "08 lipca 2023 roku",
        title: "CSS - obraz w tle",
        body: (
            <>
                <p>Za pomocą CSS-a możemy umieścić obrazek w tle wybranego elementu. Do tego użyjemy
                    właściwości <i>background-image</i>.
                </p>
                <h4 className="article__subsubsubheader">background-image</h4>
                <blockquote className="article__blockquote">
                    .element &#123;<br/>
                    &nbsp;&nbsp;background-image: url(".../images/nazwaObrazka.jpg");<br/>
                    &#125;;
                </blockquote>
                <p>Przechodząc do praktyki, dodaję <i>div-a</i> z klasą <i>"article__div--highlighted"</i>:</p>
                <div className="article__div--highlighted"></div>
                <blockquote className="article__blockquote">
                    .article__div--highlighted &#123;<br/>
                    &nbsp;&nbsp;width: 300px;<br/>
                    &nbsp;&nbsp;height: 300px;<br/>
                    &nbsp;&nbsp;background-image: url("../images/pink.png");<br/>
                    &#125;
                </blockquote>
                <p>Jeżeli chcemy, aby wielkość obrazka była dynamicznie zamienialna, dodajemy następujące
                    właściwości:</p>
                <blockquote className="article__blockquote">
                    .article__div--highlighted &#123;<br/>
                    &nbsp;&nbsp;width: 300px;<br/>
                    <b>&nbsp;&nbsp;resize: both;</b><br/>
                    &nbsp;&nbsp;overflox: auto;<br/>//
                </blockquote>
                <p>Mała uwaga, też przy okazji powtórzenia materiału pewne rzeczy rozjaśnię — warto dodawać
                    ".." przed /
                    (slash-em), ponieważ miejsce ".." stanowi adres, do którego podpięty jest obrazek zaraz
                    po /
                    (slash-u). Jeżeli wpiszemy w to miejsce:</p>
                <blockquote className="article__blockquote">
                    &nbsp;&nbsp;background-image: url("/images/pink.png");<br/>
                </blockquote>
                <p>to na naszym lokalnym serwerze to nam zadziała, ale korzystając z innej opcji, np.
                    używając
                    DevTools-ów i wchodząc w Styles, a potem klikając na adres obrazka, pojawi nam się błąd
                    z
                    informacją, że pliku nie znaleziono.</p>
                <h4 className="article__subsubsubheader">background-repeat i jej wartości:</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <b>no repeat</b> - obrazek w ogóle się nie powtarza,
                    </li>
                    <li className="article__listItem">
                        <b>space</b> - obrazek powtarza się tyle razy ile się zmieści cały, pusta przestrzeń
                        jest równo
                        rozmieszczona między obrazkami, elementy są wyjustowane i w poziomie i pionie,
                    </li>
                    <li className="article__listItem">
                        <b>round</b> - obrazki rozciągają się tak, aby nie było żadnej przestrzeni między
                        nimi, skalują
                        się, przez co mogą powstać nieproporcjonalne wartości obrazka,
                    </li>
                    <li className="article__listItem">
                        <b>repeat</b> - wartość domyślna,
                    </li>
                    <li className="article__listItem">
                        różne wartości w pionie i poziomie
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                np. <b>no-repeat repeat</b> - obrazek będzie się powtarzał w pionie, ale nie
                                będzie się
                                powtarzał w poziomie,
                            </li>
                            <li className="article__listItem">
                                <b>space round</b> - space jest w poziomie, a round jest w pionie.
                            </li>
                            <li className="article__listItem">
                                <b>repeat-y</b> lub <b>repeat-x</b>- powtarzanie wyłącznie w pionie lub w
                                poziomie
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">background-position i jej wartości:</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <b>center</b> - obrazek jest na środku niezależnie od rozmiaru elementu,
                    </li>
                    <li className="article__listItem">
                        <b>top | right | bottom | left</b> - obrazek jest na górze | na prawo | na dole | na
                        lewo —
                        niezależnie od rozmiaru elementu
                    </li>
                    <li className="article__listItem">
                        <b>top right | bottom | left</b> - obrazek jest wyrównany do górnego prawego rogu i
                        analogicznie
                        przy wypisywaniu wartości z lewej top | bottom i wartości z prawej left | right etc,
                    </li>
                    <li className="article__listItem">
                        <b>25% 75%</b> - obrazek ustawiony jest na 25% rozmiaru elementu od lewej i 75%
                        rozmiaru
                        elementu od góry,
                    </li>
                    <li className="article__listItem">
                        <b>10px 20px</b> - obrazek ustawiony jest na 10px od lewej i 20px od góry,
                    </li>
                    <li className="article__listItem">
                        <b>right 10% bottom 20%</b> - obrazek ustawiony jest na 10% od prawej i 20% od dołu,
                    </li>
                    <li className="article__listItem">
                        można ustawić kilka obrazków, aby wyświetlały się jeden w jednym miejscu, a drugi w
                        drugim
                        miejscu używając wartości po przecinku
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">background-size i jej wartości:</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <b>100px</b> - szerokość 100px, wysokość automatyczna,
                    </li>
                    <li className="article__listItem">
                        <b>auto 100px</b> - szerokość automatyczna, wysokość 100px
                    </li>
                    <li className="article__listItem">
                        <b>cover</b> - wypełnia element, zachowując proporcje, przycina w pionie lub w
                        poziomie.
                        <blockquote className="article__blockquote">
                            .article__div--highlighted &#123;<br/>
                            &nbsp;&nbsp;width: 300px;<br/>
                            &nbsp;&nbsp;resize: both;<br/>
                            &nbsp;&nbsp;overflox: auto;<br/>
                            &nbsp;&nbsp;height: 300px;<br/>
                            &nbsp;&nbsp;background-image: url("../images/pink.png");<br/>
                            <b>&nbsp;&nbsp;background-size: cover;<br/>
                                &nbsp;&nbsp;background-position: center;<br/></b>
                            &#125;
                        </blockquote>
                        <br/>
                        Przy dodaniu <i>background-position: center</i> obrazek będzie zawsze
                        docinany po zewnętrznych
                        krawędziach.
                    </li>
                    <li className="article__listItem">
                        <b>contain</b> - wypełnia element, zachowując proporcje, zostawia pustą
                        przestrzeń w pionie lub
                        w poziomie
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">background-attachment i jej
                    wartości:</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        określa jak zachowuje się tło przy przewijaniu
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                <b>fixed</b> - w ogóle się nie rusza
                                <blockquote className="article__blockquote">
                                    .article__div--highlighted &#123;<br/>
                                    &nbsp;&nbsp;width: 300px;<br/>
                                    &nbsp;&nbsp;resize: both;<br/>
                                    &nbsp;&nbsp;overflox: auto;<br/>
                                    &nbsp;&nbsp;height: 300px;<br/>
                                    &nbsp;&nbsp;background-image: url("../images/pink.png");<br/>
                                    &nbsp;&nbsp;background-size: cover;<br/>
                                    &nbsp;&nbsp;background-position: center;<br/>
                                    <b>&nbsp;&nbsp;background-attachment: fixed;<br/></b>
                                </blockquote>
                                <br/>
                            </li>
                            <li>
                                <b>local</b> - "przyklejone" do treści
                            </li>
                            <li>
                                <b>scroll</b> - "przyklejone" do elementu, nie przewija
                                się z treścią
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">skrót
                    background:</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        pozwala ustawić 8 właściwości związanych z tłem
                        naraz

                        <blockquote className="article__blockquote">
                            .element &#123;<br/>
                            &nbsp;&nbsp;background: center / contain
                            no-repeat url("../images/nazwaObrazka.jpg")
                            #ccc;<br/>
                            &#125;
                        </blockquote>
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 47,
        date: "06 lipca 2023 roku",
        title: "OpenGraph i ikonka strony",
        body: (
            <>
                <p>OpenGraph to protokół, który pozwala lepiej opisywać strony internetowe. Przydaje się do tego, aby
                    kontrolować m.in. jak wygląda miniaturka do naszej strony (np. og:image). Poza tym
                    używając <i>OpenGraph</i>,
                    możemy umieścić szereg informacji dotyczących naszej strony.</p>
                <p>Dodajemy wtedy konkretne znaczniki <i>&lt;meta></i> do <i>&lt;head></i> strony:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        og:title
                        <blockquote className="article__blockquote">
                            &lt;meta property="og:title" content="The Rock" />
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        og:type - np. article, website, book, video, movie etc.
                        <blockquote className="article__blockquote">
                            &lt;meta property="og:type" content="video.movie" />
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        og:image
                        <blockquote className="article__blockquote">
                            &lt;meta property="og:image:type" content="image/jpeg" /><br/>
                            &lt;meta property="og:image:width" content="400" /><br/>
                            &lt;meta property="og:image:height" content="300" /><br/>
                            &lt;meta property="og:image:alt" content="A shiny red apple with a bite taken out" /><br/>
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        og:url - pełen adres URL.
                        <blockquote className="article__blockquote">
                            &lt;meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
                        </blockquote>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Sharing Debugger</h4>
                <p>Nawiązując do wartości <i>og:image</i>, warto stworzyć taką miniaturkę strony w rozdzielczości 1200px
                    x 1200px i najlepiej ustawić tekst miniaturki w centrum obrazka, ponieważ zależnie od źródła, gdzie
                    link do strony został udostępniony, może wyglądać inaczej. Możemy w tym celu użyć np. w aplikacji
                    <i>Canva</i> i zapisać w formacie <i>.png</i>.</p>
                <p>Warto oczywiście używać statycznych grafik umieszczonych w kodzie źródłowym strony.</p>
                <p><i>Sharing Debugger</i> jest to narzędzie od <i>Meta</i>, w którym możemy sprawdzić
                    protokół <i>OpenGraph</i>
                    interesującej nas strony.</p>
                <p>Narzędzie to znajduje się pod tym <a href="https://developers.facebook.com/tools/debug/"
                                                        target="_blank" title="Sharing Debugger">linkiem.</a></p>
                <p>Możemy dzięki niemu sprawdzić, w jaki sposób zostanie udostępniona konkretna strona — w tym przypadku
                    udostępniona na Facebooku.</p>
                <h4 className="article__subsubsubheader">Ikonka strony</h4>
                <p>Ikonka strony to nic innego jak ten mały obrazek pokazujący się nam w lewym górnym rogu zakładki
                    strony w przeglądarce. Jakiś czas temu używać trzeba było jedynie ikon w formacie <i>ico</i>,
                    natomiast aktualnie można używać również formatu <i>.png</i> .</p>
                <blockquote className="article__blockquote">
                    &lt;link rel="icon" href="icon.png">
                </blockquote>
                <p>Po takim podsumowaniu, zabieram się za dodawanie tagów &lt;meta> .</p>
            </>
        )
    },
    {
        id: 46,
        date: "05 lipca 2023 roku",
        title: "README i Markdown",
        body: (
            <>
                <p>Przy okazji tej powtórki z lekcji, ogarnę moje README, bo widzę, że od momentu "przebranżowienia"
                    bloga ze starego projektu homepage, nie dokonałam zmiany w tym pliku.</p>
                <p>Cóż to jest README?</p>
                <p>README to plik napisany w języku znaczników, jakim jest Markdown.</p>
                <p>Markdown powstał w 2004 roku dzięki John-owi Gruber-owi i pozwala dodać formatowanie do prostych
                    dokumentów tekstowych, jak np. dokumentacje techniczne.</p>
                <p>Konwencja nakazuje, aby plik README pisać właśnie wielkimi literami.</p>
                <p>Pozwolę sobie na wrzucenie ściągi do Markdown.</p>
                <h4 className="article__subsubsubheader">Nagłówki</h4>
                <blockquote className="article__blockquote">
                    # H1<br/>
                    ## H2<br/>
                    ### H3<br/>
                    #### H4 <br/>
                    ##### H5<br/>
                    ###### H6
                </blockquote>
                <h4 className="article__subsubsubheader">Wytłuszczenie i kursywa</h4>
                <blockquote className="article__blockquote">
                    **wytłuszczenie**<br/>
                    *kursywa*<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Listy uporządkowane</h4>
                <blockquote className="article__blockquote">
                    1. element 1<br/>
                    2. element 2<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Listy nieuporządkowane</h4>
                <blockquote className="article__blockquote">
                    - element 1<br/>
                    - element 2<br/>
                </blockquote>
                <h4 className="article__subsubsubheader">Linki</h4>
                <blockquote className="article__blockquote">
                    [Nazwa hiperłącza](https://adresstronywww.com)
                </blockquote>
                <p>lub:</p>
                <blockquote className="article__blockquote">
                    https://adresstronywww.com
                </blockquote>
                <h4 className="article__subsubsubheader">Obrazki</h4>
                <blockquote className="article__blockquote">
                    ![Alternatywny tekst](https://adres-obrazka.com)
                </blockquote>
                <h4 className="article__subsubsubheader">Kod</h4>
                <p>krótki fragment kodu:</p>
                <blockquote className="article__blockquote">
                    `kod`
                </blockquote>
                <p>Blok kodu:</p>
                <blockquote className="article__blockquote">
                    ```nazwaJęzyka<br/>
                    pierwsza linia kodu;<br/>
                    druga linia kodu;<br/>```
                </blockquote>
                <p>Po więcej przykładów odsyłam do dokumentacji <a href="https://www.markdownguide.org/basic-syntax/"
                                                                   target="_blank"
                                                                   title="Dokumentacja Markdown">Markdown</a>
                </p>
                <p>Po krótkim powtórzeniu, zabieram się za edycję README.md!</p>
            </>
        )
    },
    {
        id: 45,
        date: "04 lipca 2023 roku",
        title: "Żółw programistyczny",
        body: (
            <>
                <p>Mam nieodparte wrażenie, że powtórka materiału z kursu idzie mi strasznie wolno, jednak dzisiaj
                    okazało się, że obrałam powolną, lecz słuszną drogę! Jeżeli ktoś z Was zastanawia się nad
                    wprowadzeniem takiej formy utrwalania wiedzy — gorąco zachęcam! Już mówię dlaczego.</p>
                <p>Wcześniej tworzyłam odręczne notatki po każdej lekcji. Błędem prowadzenia odręcznych notatek jest
                    niewątpliwie to, że treść pisaną piszemy... długopisem (albo rysikiem jak w moim przypadku). Gdybym
                    miała tę wiedzę, co dziś — prowadziłabym notatki w blogu. Dlaczego? Mając do dyspozycji kod, z
                    którym pracujesz, ćwiczysz wiedzę, praktykujesz ją. A jak wiemy — praktyka czyni mistrza!</p>
                <p>Zanim przejdę do powtórki materiału o README i Markdown, jeszcze po krótce przedstawię moje błędy
                    podczas nauki, tak abyś Ty — jeśli to czytasz i dopiero zaczynasz — uniknął moich błędów na początku
                    tejże fascynującej drogi.</p>
                <p>W grudniu 2022 roku postanowiłam przebranżowić się i wreszcie zacząć programować. Trafiłam tak na
                    kurs <a href="https://youcode.pl/" target="_blank"
                            title="strona kursu Frontend Developer od Podstaw od YouCode">YouCode</a>.
                    Jednak wewnętrzna motywacja sprawiła, że zaczęłam szukać materiałów z innych źródeł jak np. <a
                        href="https://www.freecodecamp.org/" target="_blank"
                        title="strona freeCodeCamp">freeCodeCamp</a>
                    czy mini-kursy <a href="https://codenga.pl/" target="_blank" title="strona Codenga">Codenga.</a></p>
                <p>Popełniłam pierwszy błąd - "latałam" po materiałach i stronach, przez to nie skupiłam się od dechy do
                    dechy na kursie. Jeśli jesteś na tej drodze — pamiętaj o pierwszej ważnej zasadzie - <b>Jedno źródło
                        nauki na raz!</b></p>
                <p>Miałam ostatnio przyjemność brać w rozmowach rekrutacyjnych i w porównaniu do mojego fiasco z końca
                    maja — czułam się pewniej i faktycznie mogłam podzielić się przyswojoną wiedzą i przede wszystkim
                    <b>rozumiałam to, o czym mówię</b>.</p>
                <p>Dlatego zachęcam do utrwalania wiedzy tym sposobem!</p>
            </>
        )
    },
    {
        id: 44,
        date: "04 lipca 2023 roku",
        title: "Git - rozproszony system kontroli wersji",
        body: (
            <>
                <p>Szukając trochę informacji na temat czym jest rozproszony system kontroli wersji, natknęłam się na
                    książkę o tym samym tytule Włodzimierza Gajdy. W dobie materiałów dostępnych online ciężko znaleźć
                    sprawdzone materiały papierowe, ponieważ aktualizacja informacji zawartych w materiałach papierowych
                    jest kosztowna, pracochłonna i nie każde wydawnictwo podejmuje się tego procesu. Z drugiej strony
                    tez możemy natknąć się na nieaktualizowanie materiały w sieci. </p>
                <p>Po powtórzeniu materiału z mojego kursu, chciałabym wgryźć się w temat związany z Git-em bardziej niż
                    tutaj.</p>
                <p>Jako, że blog prowadzę w postaci notatek, przede wszystkim wypunktuję, co trzeba "ogarnąć", aby
                    zaprzyjaźnić się z Git-em.</p>
                <ol className="article__orderedList">
                    <li className="article__listItem">
                        Przede wszystkich wchodzimy na <a href="https://git-scm.com/"> oficjalną stronę Git-a</a> i
                        pobieramy go do naszej wersji systemowej na komputerze.
                    </li>
                    <li className="article__listItem">
                        Uruchamiamy Git Bash. Tworzymy swoją "wizytówkę", podpinając naszą nazwę użytkownika i adres
                        e-mail poprzez wpisanie w oknie Git Bash-a:
                        <blockquote className="article__blockquote">
                            git config --global user.name "NAZWA UŻYTKOWNIKA"
                        </blockquote>
                        <blockquote className="article__blockquote">
                            git config --global user.email "ADRES@EMAIL.COM"
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        Inicjalizacja repozytorium — wchodzimy do folderu, w którym mamy projekt i wpisujemy np. za
                        pomocą Terminala w programie do edycji kodu:
                        <blockquote className="article__blockquote">
                            git init
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        Pierwszy commit
                        <blockquote className="article__blockquote">
                            git add<br/>
                        </blockquote>
                        <blockquote className="article__blockquote">
                            git commit -m "Initial commit"
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        Pokazanie indeksu i obszaru roboczego:
                        <blockquote className="article__blockquote">
                            git status<br/>
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        Dodanie wybranych plików do indeksu:
                        <blockquote className="article__blockquote">
                            git add style.css script.js
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        Lista commit-ów:
                        <blockquote className="article__blockquote">
                            git log
                        </blockquote>
                        <blockquote className="article__blockquote">
                            git log --pretty=oneline
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        Odrzucenie zmian:
                        <blockquote className="article__blockquote">
                            git reset --hard
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        Wypchnięcie zmian na serwer
                        <blockquote className="article__blockquote">
                            git push
                        </blockquote>
                    </li>
                    <li className="article__listItem">
                        Pobranie zmian z serwera
                        <blockquote className="article__blockquote">
                            git pull
                        </blockquote>
                    </li>
                </ol>
            </>
        )
    },
    {
        id: 43,
        date: "03 lipca 2023 roku",
        title: "JavaScript - Podstawowa matematyka",
        body: (
            <>
                <p>JS daje nam wiele sposobów na manipulowanie liczbami.</p>
                <ol className="article__orderedList">
                    <li className="article__listItem">
                        <b>Zaokrąglanie</b>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                Math.round(liczba) - do najbliższej liczby całkowitej,
                            </li>
                            <li className="article__listItem">
                                Math.ceil(liczba) - w górę,
                            </li>
                            <li className="article__listItem">
                                Math.floor(liczba) - w dół,
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        <b>Konkretna liczba miejsc po przecinku</b>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                5.12345.toFixed(2) // "5.12",
                            </li>
                            <li className="article__listItem">
                                zwraca łańcuch znaków,
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        <b>Pierwiastek kwadratowy</b>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                Math.sqrt(16) //4
                            </li>
                            <li className="article__listItem">
                                Math.sqrt(-1) //NaN
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        <b>Najmniejsza i największa wartość</b>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                Math.max(1,2,3) //3
                            </li>
                            <li className="article__listItem">
                                Math.min(1,2,3) //1
                            </li>
                            <li className="article__listItem">
                                Dowolna liczba argumentów
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        <b>Losowa liczba</b>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                Math.random()
                                <ul className="article__unorderedList">
                                    <li className="article__listItem">
                                        pseudo-losowa liczba od zera do "prawie 1", np. 0.37961
                                    </li>
                                </ul>
                            </li>
                            <li className="article__listItem">
                                Math.floor(Math.random()*5)
                                <ul className="article__unorderedList">
                                    <li className="article__listItem">
                                        losowa liczba całkowita od 0 do 4
                                    </li>
                                    <li className="article__listItem">
                                        <b>Symulator rzutu kością:</b> Math.floor(Math.random()*6)+1
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="article__listItem">
                        <b>Konwertowanie na liczbę</b>
                        <ul className="article__unorderedList">
                            <li className="article__listItem">
                                Konkatenacja
                                <blockquote className="article__blockquote">
                                    "10" + 0 === "100"
                                </blockquote>
                            </li>
                            <li className="article__listItem">
                                Number()
                                <blockquote className="article__blockquote">
                                    Number("5") &nbsp;&nbsp;&nbsp;&nbsp;//5<br/>
                                    Number("2 jabłka") &nbsp;&nbsp;&nbsp;&nbsp;//NaN<br/>
                                </blockquote>
                            </li>
                            <li className="article__listItem">
                                + (unary operators)
                                <blockquote className="article__blockquote">
                                    +"5" &nbsp;&nbsp;&nbsp;//5<br/>
                                    +"2 jabłka" &nbsp;&nbsp;&nbsp;&nbsp;//Nan<br/>
                                </blockquote>
                            </li>
                            <li className="article__listItem">
                                działania arytmetyczne inne niż dodawanie
                                <blockquote className="article__blockquote">
                                    "5" * 1 &nbsp;&nbsp;&nbsp;&nbsp;//5<br/>
                                    "5" - 3 &nbsp;&nbsp;&nbsp;&nbsp;//2<br/>
                                    "2 jabłka"/2 &nbsp;&nbsp;&nbsp;&nbsp;//NaN
                                </blockquote>
                            </li>
                            <li className="article__listItem">
                                parseInt(), parseFloat()
                                <blockquote className="article__blockquote">
                                    parseInt("5") &nbsp;&nbsp;&nbsp;&nbsp;//5<br/>
                                    parseInt("56") &nbsp;&nbsp;&nbsp;&nbsp;//5<br/>
                                    parseInt("2 jabłka") &nbsp;&nbsp;&nbsp;&nbsp;//2<br/>
                                    parseInt("jabłka") &nbsp;&nbsp;&nbsp;&nbsp;/NaN<br/>
                                    parseInt("kurki 3") &nbsp;&nbsp;&nbsp;&nbsp;//NaN<br/>
                                </blockquote>
                                <ul className="article__unorderedList">
                                    <li className="article__listItem">
                                        parseFloat - analogicznie dla liczb z cyframi po przecinku.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
            </>
        )
    },
    // {
    //     id: 42,
    //     date: "30 czerwca 2023 roku",
    //     title: "Kalkulator BMI",
    //     body: (
    //         <>
    //             <p>Dzisiaj będę ćwiczyć stylowanie kalkulatora BMI. Bo co to za Frontend-owiec, który nie podaje
    //                 użytkownikowi przepięknego interfejsu?</p>
    //             <div className="calculator__container">
    //                 <div className="calculator__titleContainer">
    //                     <h4 className="calculator__title">Kalkulator BMI</h4>
    //                 </div>
    //                 <form className="js-form">
    //                     <fieldset className="calculator__fieldset">
    //                         <legend className="calculator__legend">Podaj swoje wymiary, aby obliczyć swoje BMI</legend>
    //                         <div className="calculator__subContainer">
    //                             <label className="calculator__label">
    //                                 Twój wzrost:
    //                                 <input className="calculator__input js-height" required type="number" min="1"
    //                                        step="any"/>
    //                             </label>
    //                             <label className="calculator__label">
    //                                 Twoja waga:
    //                                 <input className="calculator__input js-weight" required type="number" min="1"
    //                                        step="any"/>
    //                             </label>
    //                         </div>
    //                     </fieldset>
    //                     <button className="calculator__button">Policz BMI!</button>
    //                     <p className="calculator__paragraph">Twoje BMI wynosi: <strong className="js-bmi">N/A</strong>.
    //                         Co to
    //                         oznacza - <strong className="js-result">N/A</strong></p>
    //                 </form>
    //             </div>
    //             <p>Wygląda lepiej, prawda?</p>
    //             <p>Kod przedstawia się następująco:</p>
    //             <blockquote className="article__blockquote">
    //                 <b>script.js</b><br/><br/>
    //                 let heightElement = document.querySelector(".js-height");<br/>
    //                 let weightElement = document.querySelector(".js-weight");<br/>
    //                 let formElement = document.querySelector(".js-form");<br/>
    //                 let bmiElement = document.querySelector(".js-bmi");<br/>
    //                 let resultElement = document.querySelector(".js-result");<br/><br/>
    //
    //                 formElement.addEventListener("submit", (event) => &#123;<br/>
    //                 event.preventDefault();<br/><br/>
    //
    //                 let height = heightElement.value;<br/>
    //                 let weight = weightElement.value;<br/>
    //                 let bmi = weight / ((height / 100) ** 2);<br/><br/>
    //
    //                 bmiElement.innerText = bmi.toFixed(2);<br/>
    //
    //                 let result = "";<br/>
    //
    //                 if (bmi &lt; 16) &#123;<br/>
    //                 result = "Wygłodzenie";<br/>
    //                 &#125; else if (bmi >= 16 && bmi &lt;= 16.99) &#123;<br/>
    //                 result = "Wychudzenie";<br/>
    //                 &#125; else if (bmi >= 17 && bmi &lt;= 18.49) &#123;<br/>
    //                 result = "Niedowaga";<br/>
    //                 &#125; else if (bmi >= 18.5 && bmi &lt;= 24.99) &#123;<br/>
    //                 result = "Wartość prawidłowa";<br/>
    //                 &#125; else if (bmi >= 25 && bmi &lt;= 29.99) &#123;<br/>
    //                 result = "Nadwaga";<br/>
    //                 &#125; else if (bmi >= 30 && bmi &lt;= 34.99) &#123;<br/>
    //                 result = "Otyłość I stopnia";<br/>
    //                 &#125; else if (bmi >= 35 && bmi &lt;= 39.99) &#123;<br/>
    //                 result = "Otyłość II stopnia";<br/>
    //                 &#125;<br/><br/>
    //
    //                 resultElement.innerText = result;<br/>
    //                 &#125;);<br/><br/>
    //
    //                 heightElement.addEventListener("input", () => &#123;<br/>
    //                 console.log(`Aktualny wzrost: $&#123;heightElement.value&#125;`);<br/>
    //                 &#125;);<br/>
    //             </blockquote>
    //         </>
    //     )
    // },
    {
        id: 41,
        date: "29 czerwca 2023 roku",
        title: "JavaScript - formularze c.d.",
        body: (
            <>
                <p>Dziś mam do zaprezentowania totalnie podstawowy kalkulator BMI. Kod w JS
                    wygląda następująco:</p>
                <blockquote className="article__blockquote">
                    let heightElement = document.querySelector(".js-height");<br/>
                    let weightElement = document.querySelector(".js-weight");<br/>
                    let formElement = document.querySelector(".js-form");<br/>
                    let bmiElement = document.querySelector(".js-bmi");<br/><br/>

                    formElement.addEventListener("submit", (event) => &#123;<br/>
                    &nbsp;&nbsp;event.preventDefault();<br/><br/>

                    &nbsp;&nbsp;let height = heightElement.value;<br/>
                    &nbsp;&nbsp;let weight = weightElement.value;<br/>
                    &nbsp;&nbsp;let bmi = weight / ((height / 100) ** 2);<br/><br/>

                    &nbsp;&nbsp;bmiElement.innerText = bmi.toFixed(2);<br/>
                    &#125;);
                </blockquote>
                <p>Natomiast w zwykłym HTML-u wygląda to tak:</p>
                <blockquote className="article__blockquote">
                    &lt;form class="js-form"><br/>
                    &nbsp;&nbsp;&lt;fieldset><br/>
                    &nbsp;&nbsp;&nbsp;&lt;legend>Twoje dane:&lt;/legend><br/>
                    &nbsp;&nbsp;&nbsp;&lt;p><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;label><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twój wzrost:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input class="js-height" required
                    type="number" min="1"
                    step="any"><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label><br/>
                    &nbsp;&nbsp;&nbsp;&lt;/p><br/>
                    &nbsp;&nbsp;&nbsp;&lt;p><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;label><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twoja waga:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input class="js-weight" required
                    type="number" min="1"
                    step="any"><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label><br/>
                    &nbsp;&nbsp;&nbsp;&lt;/p><br/>
                    &nbsp;&nbsp;&lt;/fieldset><br/>
                    &nbsp;&nbsp;&nbsp;&lt;p><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button>Policz BMI!&lt;/button><br/>
                    &nbsp;&nbsp;&nbsp;&lt;/p><br/>
                    &lt;/form><br/>
                </blockquote>
                <form className="js-form">
                    <fieldset>
                        <legend>Twoje dane:</legend>
                        <p>
                            <label>
                                Twój wzrost:
                                <input className="js-height" required type="number" min="1"
                                       step="any"/>
                            </label>
                        </p>
                        <p>
                            <label>
                                Twoja waga:
                                <input className="js-weight" required type="number" min="1"
                                       step="any"/>
                            </label>
                        </p>
                    </fieldset>
                    <p>
                        <button>Policz BMI!</button>
                    </p>
                </form>
                <p>Twoje BMI wynosi: <strong className="js-bmi">N/A</strong></p>
            </>
        )
    },
    {
        id: 40,
        date: "28 czerwca 2023 roku",
        title: "Webstorm",
        body: (
            <>
                <p>Dziś zaczęłam korzystać z WebStorm-a. Odpaliłam bloga... i wykazało 492 błędy! Dziś poświęcę czas na
                    korektę kodu. Do nauki wrócę jutro.</p>
            </>
        )
    },
    {
        id: 39,
        date: "27 czerwca 2023 roku",
        title: "JavaScript - Formularze c.d.",
        body: (
            <>
                <p>Kontynuując ćwiczenia z formularzami, wracam do JavaScript-a. Później mamy przykładowe pole
                    radio.</p>
                <form action=" "
                      method="POST">
                    <fieldset>
                        <legend>
                            Pole typu radio
                        </legend>
                        <ul className="article__withoutBulletList">
                            <li>
                                <label>
                                    Opcja 1
                                    <input className="js-radio-1" name="radio" type="radio" value="opcja-1"/>
                                </label>
                            </li>
                            <li>
                                <label>
                                    Opcja 2
                                    <input className="js-radio-2" name="radio" type="radio" value="opcja-2"/>
                                </label>
                            </li>
                        </ul>
                    </fieldset>
                </form>
                <p>Kod przedstawia się mniej więcej tak:</p>
                <blockquote className="article__blockquote">
                    &lt;form action="https//postman-echo.com" method="POST"><br/>
                    &nbsp;&nbsp;&lt;fieldset><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;legend><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pole typu radio<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/legend><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul class="article__withoutBulletList"><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opcja 1<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="radio" value="opcja-1" name="radio"
                    class="js-radio-1"><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opcja 2<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="radio" value="opcja-2" name="radio"
                    class="js-radio-2"><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul><br/>
                    &nbsp;&nbsp;&lt;/fieldset><br/>
                    &lt;/form><br/>
                </blockquote>
                <p>Możemy "złapać" elementy typu radio, poprzez dopisanie klasy i użycie document.querySelector, jak
                    niżej:</p>
                <blockquote className="article__blockquote">
                    let radioElement1 = document.querySelector(".js-radio-1");<br/>
                    let radioElement2 = document.querySelector(".js-radio-2");<br/>
                    console.log(radioElement1);<br/>
                    console.log(radioElement2);<br/>
                </blockquote>
                <p>Następnie, jeśli chcielibyśmy zaznaczyć jeden element typu radio, używając np. Konsoli w
                    Devtools-ach, wpisujemy w konsolę:</p>
                <blockquote className="article__blockquote">
                    radioElement1.checked = true;
                </blockquote>
                <p>I tym o to sposobem zaznaczyliśmy interesującą nas opcję!</p>
                <p>Do przydatnych metod łapania pól na pewno zaliczymy:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        click() - symuluje kliknięcie,
                    </li>
                    <li className="article__listItem">
                        focus() - ustawia focus,
                    </li>
                    <li className="article__listItem">
                        blur() - usuwa focus,
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 38,
        date: "24 czerwca 2023 roku",
        title: "JavaScript - Formularze",
        body: (
            <>
                <h4 className="article__subsubsubheader">Przydatne właściwości pól formularza</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        value,
                    </li>
                    <li className="article__listItem">
                        checked dla radio i checkbox,
                    </li>
                </ul>
                <p>Żeby "złapać" input-a i móc nim operować w JS, musimy najpierw dopisać klasę, np.:</p>
                <blockquote className="article__blockquote">
                    &lt;input class="js-height">
                </blockquote>
                <label>
                    <input className="js-height" value="170"/>
                </label>
                <p>Następnie w naszym pliku script.js wpisujemy: </p>
                <blockquote className="article__blockquote">
                    let heightElement = document.querySelector(".js-height");
                </blockquote>
                <p>Następnie w script.js wpisujemy:</p>
                <blockquote className="article__blockquote">
                    console.log(heightElement);
                </blockquote>
                <p>Następnie w konsoli wpisujemy:</p>
                <blockquote className="article__blockquote">
                    heightElement.value;
                </blockquote>
                <p>Pojawi się tym samym wartość (string) wprowadzona do input-a. Żeby pokazać w konsoli liczbę, nie
                    string należy wpisać:</p>
                <blockquote className="article__blockquote">
                    +heightElement.value;
                </blockquote>
                <p>Aby zmienić wartość w inpucie, możemy wpisać do konsoli:</p>
                <blockquote className="article__blockquote">
                    heightElement.value = "192";
                </blockquote>
                <p>Gdy dodamy value "na wejściu" przez HTML, to będzie to inne value niż to wprowadzone w JS. Przy
                    wpisaniu value w JS, wartość w oknie dodana w HTML zostanie nadpisana, natomiast wartość atrybutu
                    value już nie.</p>
                <p>Żeby to sprawdzić, po ustawieniu w HTML value = "170", wpisujemy w konsolę:</p>
                <blockquote className="article__blockquote">
                    let heightElement = document.querySelector(".js-height");
                </blockquote>
                <p>Następnie wpiszemy heightElement.value, pokaże "170", ale jak zmienimy w inpucie na "180", to
                    value w HTML będzie nadal "170".</p>
            </>
        )
    },
    {
        id: 37,
        date: "22 czerwca 2023 roku",
        title: "HTML - walidacja formularzy",
        body: (
            <>
                <p>Zanim formularz zostanie wysłany, musi zostać zwalidowany.</p>
                <h4 className="article__subsubsubheader">atrybuty dotyczące walidacji</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <b>required</b> - pole nie może być puste,
                    </li>
                    <li className="article__listItem">
                        <b>minlength</b> i <b>maxlength</b> - minimalna i maksymalna liczba znaków dla tekstowych
                        pól,
                    </li>
                    <li className="article__listItem">
                        <b>min</b> lub <b>max</b> - minimalna lub maksymalna wartość dla pól liczbowych i dat/czasu,
                    </li>
                    <li className="article__listItem">
                        <b>type</b> - np. e-mail czy liczba,
                    </li>
                    <li className="article__listItem">
                        <b>pattern</b> - wyrażenie regularne (regular expression).
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">pattern</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        wyrażenie regularne,
                    </li>
                    <li className="article__listItem">
                        czyli wzór-kombinacje znaków,
                    </li>
                    <li className="article__listItem">
                        idealne do walidacji,
                    </li>
                    <li className="article__listItem">
                        type - np. e-mail czy liczba,
                    </li>
                    <li className="article__listItem">
                        przykłady:
                        <ul className="article__unorderedList">
                            <li className="article__listItem">https?
                                <ul className="article__unorderedList">
                                    <li className="article__listItem">http lub https,</li>
                                </ul>
                            </li>
                            <li className="article__listItem">[0-9]{2} - [0-9]{3},
                                <ul className="article__unorderedList">
                                    <li className="article__listItem">kod pocztowy — dwie cyfry, myślnik, 3 cyfry,</li>
                                </ul>
                            </li>
                            <li className="article__listItem">(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8},
                                <ul className="article__unorderedList">
                                    <li className="article__listItem">co najmniej 8 znaków, przynajmniej jedna mała
                                        litera, jedna wielka i jedna cyfra.
                                    </li>
                                    <li className="article__listItem">narzędzie do tłumaczenia pattern-ów: regex.com
                                    </li>
                                </ul>
                            </li>
                            <li className="article__listItem">pattern nie zastępuje required.
                            </li>
                        </ul>
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 36,
        date: "21 czerwca 2023 roku",
        title: "HTML - formularze c.d",
        body: (
            <>
                <h4 className="article__subsubsubheader">input / password - hasło</h4>
                <label>
                    Podaj swoje hasło:
                    <input name="password" type="password"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;label><br/>
                    &nbsp;&nbsp;&lt;Podaj swoje hasło:<br/>
                    &nbsp;&nbsp;&lt;input type="password" name="password"><br/>
                    &lt;/label><br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        ukrywa wpisywane znaki, natomiast jesteśmy w stanie podejrzeć hasło, wpisując w konsolę
                        $0.value,
                    </li>
                    <li className="article__listItem">
                        hasło jest wysyłane <i>plaintext-em</i>, jeśli połączenie nie jest szyfrowane.
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">input / number</h4>
                <label>
                    Twój wzrost:
                    <input name="height" type="number"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;label><br/>
                    &nbsp;&nbsp;&lt;Twój wzrost<br/>
                    &nbsp;&nbsp;&lt;input type="number" name="number"><br/>
                    &lt;/label><br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        pole liczbowe,
                    </li>
                    <li className="article__listItem">
                        atrybut step (step="any") (step="0,02") określa skalę co ile ma wzrastać wartość,
                    </li>
                    <li className="article__listItem">
                        atrybuty min i max określają minimalną i maksymalną wartość,
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">input / range</h4>
                <label>
                    Maksymalna cena:
                    <input max="2000" min="1000" name="maxPrice" step="100" type="range"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;label><br/>
                    &nbsp;&nbsp;&lt;Maksymalna cena:<br/>
                    &nbsp;&nbsp;&lt;input type="range" name="maxPrice" min="1000" max="2000" step="100"><br/>
                    &lt;/label><br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        inny sposób na wpisanie liczby,
                    </li>
                    <li className="article__listItem">
                        warto ustawić min, max i step,
                    </li>
                    <li className="article__listItem">
                        nie pokazuje liczby.
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">input / tel</h4>
                <label>
                    Numer telefonu:
                    <input name="tel" type="tel"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;label><br/>
                    &nbsp;&nbsp;&lt;Numer telefonu:<br/>
                    &nbsp;&nbsp;&lt;input type="tel" name="tel"><br/>
                    &lt;/label><br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        numer telefonu,
                    </li>
                    <li className="article__listItem">
                        można wpisać cokolwiek,
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">input / url</h4>
                <label>
                    Adres Twojej strony internetowej:
                    <input name="website" type="url"/>
                </label>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        adres URL,
                    </li>
                    <li className="article__listItem">
                        sprawdza poprawność,
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">autocomplete box</h4>
                <label>
                    Marka samochodu:
                    <input list="carBrands" name="carBrand"/>
                    <datalist id="carBrands">
                        <option>Audi</option>
                        <option>BMW</option>
                        &lt;
                        <option>Tesla</option>
                    </datalist>
                </label>
                <blockquote className="article__blockquote">
                    label><br/>
                    &nbsp;&nbsp;&lt;Marka samochodu:<br/>
                    &nbsp;&nbsp;&lt;input name="carBrand" list="carBrands"><br/>
                    &nbsp;&nbsp;&lt;datalist id="carBrands"><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;option>Audi&lt;/option><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;option>BMW&lt;/option><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;option>Tesla&lt;/option><br/>
                    &nbsp;&nbsp;&lt;/datalist><br/>
                    &lt;/label><br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        input z sugerowanymi opcjami (dropdown),
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">input / hidden</h4>
                <input name="something" type="hidden" value="something"/>
                <blockquote className="article__blockquote">
                    &lt;input type="hidden" name="something" value="something"><br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        pole niewidoczne dla użytkownika, ale widoczne dla developera,
                    </li>
                    <li className="article__listItem">
                        niemożliwe do edycji, ale wysyłane,
                    </li>
                    <li className="article__listItem">
                        powinien mieć atrybuty name i value.
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">input / color</h4>
                <label>
                    <input name="color" type="color" value="#ccc"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;input name="color" type="color" type="color" value="#ccc"><br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        wybór koloru,
                    </li>
                    <li className="article__listItem">
                        wartość zawsze w formacie 6-znakowego hexa.
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">input / data i czas</h4>
                <label>
                    <input name="date" type="date"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;input name="date" type="date"><br/>
                </blockquote>
                <label>
                    <input name="dateAndTime" type="datetime-local"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;input name="dateAndTime" type="datetime-local"><br/>
                </blockquote>
                <label>
                    <input name="time" type="time"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;input name="time" type="time"><br/>
                </blockquote>
                <label>
                    <input name="week" type="week"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;input name="week" type="week"><br/>
                </blockquote>
                <label>
                    <input name="month" type="month"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;input name="month" type="month"><br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        słabo wspierane.
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 35,
        date: "18 czerwca 2023 roku",
        title: "HTML - formularze",
        body: (
            <>
                <p>Formularze są najprostszym sposobem na zebranie i wysłanie informacji o użytkowniku.</p>
                <p>Kod podstawowego formularza wygląda następująco, a poniżej mamy przykład jak taki formularz może
                    wyglądać.</p>
                <blockquote className="article__blockquote">
                    &lt;form><br/>
                    &nbsp;&nbsp;&lt;p><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;label><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Imię i nazwisko &lt;input name="name"><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label><br/>
                    &nbsp;&nbsp;&lt;/p><br/>
                    &nbsp;&nbsp;&lt;p><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button>Wyślij!&lt;/button><br/>
                    &nbsp;&nbsp;&lt;/p><br/>
                    &lt;/form><br/>
                </blockquote>
                <form>
                    <p>
                        <label>
                            Imię i nazwisko <input name="name"/>
                        </label>
                    </p>
                    <p>
                        <button>Wyślij!</button>
                    </p>
                </form>
                <h4 className="article__subsubsubheader">Form - szczegóły</h4>
                <blockquote className="article__blockquote">
                    &lt;form <b>action</b>="/strona-docelowa" <b>method</b>="post">&lt;/form>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        atrybut <b>action</b> - adres url, pod który zostanie wysłany formularz
                    </li>
                    <li className="article__listItem">
                        atrybut <b>method</b> - definiuje, jakiej metody HTTP użyjemy do wysłania formularza
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">Input (text)</h4>
                <blockquote className="article__blockquote">&lt;input name="myName"></blockquote>
                <p>Atrybuty:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        <b>name</b> - nazwa pola,
                    </li>
                    <li className="article__listItem">
                        <b>readonly</b> - pole tylko do odczytu,
                        <label>
                            <input readOnly/>
                        </label>
                    </li>
                    <li className="article__listItem">
                        <b>disabled</b> - pole wyłączone/ nieaktywne,
                        <label>
                            <input disabled/>
                        </label>
                    </li>
                    <li className="article__listItem">
                        <b>placeholder</b> - tekst w przypadku pustej wartości,
                        <label>
                            <input placeholder="Wpisz coś"/>
                        </label>
                    </li>
                    <li className="article__listItem">
                        <b>autofocus</b> - skupienie wskaźnika na danym polu input,
                    </li>
                </ul>
                <p><b>label</b> - opisuje pole, ważny pod kątem dostępności</p>
                <blockquote className="article__blockquote">
                    &lt;label>Imię i nazwisko&lt;input name="name">&lt;/label><br/><br/>
                    &lt;!-- lub: --><br/><br/>
                    &lt;label for="name">Imię i nazwisko:&lt;/label><br/>
                    &lt;input id="name" name="name"><br/>
                </blockquote>
                <label>Imię i nazwisko<input name="name"/></label>
                <h4 className="article__subsubsubheader">przyciski</h4>
                <blockquote className="article__blockquote">
                    &lt;button>Wyślij!&lt;/button><br/><br/>
                    &lt;!-- lub: --><br/><br/>
                    &lt;input type="submit" value="Wyślij!">
                </blockquote>
                <button>Wyślij!</button>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        mogą mieć różne funkcje w zależności od atrybutu type:
                        <ul className="article__unorderedList">
                            <li className="article__listItem"><b>submit</b> - wysyła formularz (domyślny dla
                                formularza),
                            </li>
                            <li className="article__listItem"><b>reset</b> - resetuje formularz,</li>
                            <li className="article__listItem"><b>button</b> - zwykły przycisk, brak domyślnej akcji,
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4 className="article__subsubsubheader">textarea</h4>
                <blockquote className="article__blockquote">
                    &lt;textarea name="description">&lt;/textarea>
                </blockquote>
                <p><label>
                    <textarea name="description"></textarea>
                </label></p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">pole na wiele linii tekstu,</li>
                    <li className="article__listItem">przyjmuje tylko zwykły niesformatowany tekst,</li>
                    <li className="article__listItem">domyślna wartość wewnątrz znacznika,</li>
                    <li className="article__listItem">posiada znacznik zamykający,</li>
                    <li className="article__listItem">białe znaki mają znaczenie,</li>
                    <li className="article__listItem">domyślnie da się zmienić rozmiar okna,</li>
                    <li className="article__listItem">atrybut <b>cols</b> - szerokość w kolumnach,</li>
                    <li className="article__listItem">atrybut <b>rows</b> - wysokość w wierszach,</li>
                </ul>
                <h4 className="article__subsubsubheader">fieldset i legend</h4>
                <fieldset>
                    <legend>Dane osobowe</legend>
                    <p>
                        <label>Imię: <input name="firstName"/>
                        </label>
                    </p>
                </fieldset>
                <ul className="article__unorderedList">
                    <li className="article__listItem">wygodne rozwiązanie do tworzenia grup pól,</li>
                    <li className="article__listItem">ważne z punktu widzenia dostępności,</li>
                </ul>
                <h4 className="article__subsubsubheader">input / checkbox — pole wyboru</h4>
                <label>
                    <input checked name="Kuba Badach" type="checkbox"/>
                </label>Kuba Badach
                <blockquote className="article__blockquote">
                    &lt;input type="checkbox" name="Kuba Badach" checked>Kuba Badach
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">tak / nie</li>
                    <li className="article__listItem">atrybut checked — domyślne zaznaczenie,</li>
                    <li className="article__listItem">wartość jest wysyłana tylko, jeśli pole jest zaznaczone,</li>
                    <li className="article__listItem">jeśli nie ma value, wysyłana jest wartość "on".</li>
                </ul>
                <h4 className="article__subsubsubheader">input / radio — jeden wybór z wielu opcji</h4>
                <label>
                    <input checked name="favouriteSinger" type="radio" value="badach"/>
                </label> Kuba Badach
                <label>
                    <input name="favouriteSinger" type="radio" value="bieber"/>
                </label> Justin Bieber
                <blockquote className="article__blockquote">
                    &lt;input type="radio" name="favouriteSinger" value="badach" checked> Kuba Badach<br/>
                    &lt;input type="radio" name="favouriteSinger" value="bieber" checked> Justin Bieber
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">pola z tym samym atrybutem name,</li>
                    <li className="article__listItem">tylko jedno pole z grupy może być zaznaczone,</li>
                    <li className="article__listItem">wysyłana jest wartość tylko zaznaczonego pola,</li>
                    <li className="article__listItem">nie da się odznaczyć pola.</li>
                </ul>
                <h4 className="article__subsubsubheader">select</h4>
                <label>
                    ulubiony wokalista:
                    <select name="favouriteSinger">
                        <option value="badach">Kuba Badach</option>
                        <option selected value="timberlake">Justin Timberlake</option>
                    </select>
                </label>
                <blockquote className="article__blockquote">
                    &lt;label><br/>
                    &nbsp;&nbsp;ulubiony wokalista:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;select name="favouriteSinger"><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value="badach">Kuba Badach&lt;/option><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value="timberlake" selected>Justin Timberlake
                    &lt;/option><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/select><br/>
                    &lt;/label>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">rozwijana lista opcji,</li>
                    <li className="article__listItem">atrybut selected w option - domyślna wartość,</li>
                    <li className="article__listItem">zostanie wysłana wartość wybranej opcji,</li>
                    <li className="article__listItem">atrybut size — liczba widocznych opcji,</li>
                    <li className="article__listItem">atrybut multiple — wielokrotny wybór.</li>
                </ul>
                <h4 className="article__subsubsubheader">input / file</h4>
                <label>
                    Załącz swoje CV
                    <input name="cv" type="file"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;label><br/>
                    &nbsp;&nbsp;Załącz swoje CV<br/>
                    &nbsp;&nbsp;&lt;input type="file" name="cv"><br/>
                    &lt;/label>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">wybór plików,</li>
                    <li className="article__listItem">atrybut multiple — wiele plików,</li>
                </ul>
                <h4 className="article__subsubsubheader">input / email</h4>
                <label>
                    Adres e-mail do kontaktu:
                    <input name="email" type="email"/>
                </label>
                <blockquote className="article__blockquote">
                    &lt;label><br/>
                    &nbsp;&nbsp;Adres e-mail do kontaktu:<br/>
                    &nbsp;&nbsp;&lt;input type="email" name="email"><br/>
                    &lt;/label><br/>
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">adres e-mail,</li>
                    <li className="article__listItem">w bardzo podstawowy sposób sprawdza poprawność,</li>
                    <li className="article__listItem">przy walidacji można użyć atrybutu pattern.</li>
                </ul>
            </>
        )
    },
    {
        id: 34,
        date: "16 czerwca 2023 roku",
        title: "CSS - konwencja BEM",
        body: (
            <>
                <p>Bardzo się cieszę, że mogę znowu udoskonalić bloga o tym razem znaczniki z klasami w zgodzie z
                    konwencją BEM. Nie mogę się doczekać, kiedy powtórzę <i>React-a</i> i przeniosę strukturę plików —
                    ale nie
                    wszystko na raz!</p>
                <p>Konwencja BEM polega na dodaniu nazwy klasy, w której umieszczamy nazwę bloku, w którym jest element,
                    łącznik w postaci znaku "__" z nazwą stylowanego elementu i/lub <i>modyfikator</i>.</p>
                <blockquote className="article__blockquote">.block__element--modifier</blockquote>
                <p>Zgodnie z konwencją BEM, zawsze stylujemy po klasach, nie po znacznikach. Dzielimy tym samym stronę
                    na
                    bloki, które są niezależne i mogą być używane w różnych miejscach. Bloki to najwyższe poziomy
                    stylowania. Wewnątrz każdego z bloków są elementy, które nie są samodzielne. W nazwie klasy zgodnie
                    z konwencją BEM nie zagnieżdżamy elementów. Używamy nazwy klasy zgodnie z powyższym wzorem.</p>
                <p>Do najważniejszych cech BEM-a niewątpliwie należą:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">pomaga w tworzeniu komponentów wielokrotnego użytku,</li>
                    <li className="article__listItem">bloki są samodzielne i nie polegają na sobie nawzajem,</li>
                    <li className="article__listItem">łatwość implementacji — wystarczy trzymać się prostej konwencji
                        nazywania klas,
                    </li>
                    <li className="article__listItem">sprawia, że kod jest łatwiejszy do zrozumienia,</li>
                    <li className="article__listItem">sprawia, że łatwiej pracować z kodem i go utrzymywać,</li>
                    <li className="article__listItem">pozwala na swobodne rozrastanie się aplikacji (skalowanie),</li>
                    <li className="article__listItem">sprawia, że wszyscy developerzy w zespole "mówią tym samym
                        językiem",
                    </li>
                    <li className="article__listItem">sprawia, że kod powstaje szybciej,</li>
                    <li className="article__listItem">sprawia, że powstaje mniej kodu,</li>
                    <li className="article__listItem">jest bardzo popularny na świecie,</li>
                    <li className="article__listItem">eliminuje problem nadpisywania się styli (specify),</li>
                    <li className="article__listItem">pozwala na szybkie wdrożenie nowych osób w zespole.</li>
                </ul>
                <p>Teoria, teorią, a ja zabieram się do roboty!</p>
            </>
        )
    },
    {
        id: 33,
        date: "15 czerwca 2023 roku",
        title: "CSS - powtórzenie z pseudo klas i stylowania tabel, list i linków",
        body: (
            <>
                <p>Dziś będzie krótko. Pozwólcie, że wrócę do spisania notatek w późniejszym czasie, gdy już czas na
                    to pozwoli. Na ten moment przejdę do zadań praktycznych i odpicuję stronę zgodnie z powtórką z
                    dzisiaj, w ramach utrwalenia. Każdą zmianę można nadal obejrzeć w repozytorium na GitHub-ie.</p>
            </>
        )
    },
    {
        id: 32,
        date: "14 czerwca 2023 roku",
        title: "Jak działa Internet?",
        body: (
            <>
                <p>
                    <b>Internet</b> to globalna sieć połączonych ze sobą urządzeń; urządzenia komunikują się między sobą
                    za pomocą protokołu <i>TCP / IP</i>. Każde urządzenie ma przypisany swój adres <i>IP</i>. Internet
                    <em>nie</em> może się zepsuć, dopóki urządzenia mogą się so tej sieci podpiąć.
                </p>
                <p>
                    <b>URL - Uniform Resource Locator (URL)</b>, lub potocznie <i>adres internetowy</i>, posiada
                    następującą składnię:
                </p>
                <blockquote className="article__blockquote">
                    &#123;protokół&#125;://&#123;host&#125;(:&#123;port&#125;)&#123;ścieżka&#125;(?&#123;parametry&#125;)(#&#123;sekcja&#125;)
                </blockquote>
                <blockquote className="article__blockquote">https: &#47;/ domena.pl:8080/ sciezka?
                    param1=wartosc1&amp;param2=wartosc2 #sekcja
                </blockquote>
                <p>Przejdźmy sobie do krótkiego omówienia elementów składni <i>URL</i>:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem"><b>https - protokół (<i>protocol</i>)</b> - wersja protokołu
                        <i>http</i> z szyfrowaniem <i>SSL</i> jest wersją bezpieczną, szyfrowaną, uniemożliwiającą
                        <em>podsłuchanie</em> tego, co wprowadzamy na stronie.
                    </li>
                    <li className="article__listItem"><b> domena.pl</b> - zarejestrowana nazwa (domena) lub adres
                        <i>IP</i> (host); gdy używamy przeglądarki - używamy domen, a nie adresów <i>IP</i>.
                    </li>
                    <li className="article__listItem"><b>8080 port</b> - pod różnymi portami możemy otrzymać różne
                        odpowiedzi z serwera; jeśli nie wpiszemy portu, przeglądarka doda port domyślny. Jeśli mamy
                        protokół <i>http</i>, to możemy być pewni, że przeglądarka dopisze nam port 80. W przypadku
                        protokołu <i>https</i>, przeglądarka dopisze port 443.
                    </li>
                    <li className="article__listItem"><b>/sciezka</b> - ścieżka (path), pod jakim folderem dostępny jest
                        dany zasób; serwer może na podstawie ścieżki dowolnie operować, co ma zwrócić
                    </li>
                    <li className="article__listItem"><b>parametr1=wartosc1&amp;parametr2=wartosc2</b> - parametry /
                        zapytanie (query).
                    </li>
                </ul>
                <p><b>DNS - Domain Name System</b> - dzięki niemu urządzenia mogą powiązać domenę z adresem. Jest to
                    system rozproszony, więc nie ma jednego serwera, który odpowiada na pytanie, która <i>domena</i>, to
                    które <i>IP</i>. To jest jak książka telefoniczna, wpisujemy sobie w przeglądarkę nazwę domeny, ale
                    przeglądarka potrzebuje adresu <i>IP</i>, żeby połączyć nas z danym serwerem i właśnie <i>DNS</i>
                    tłumaczy nazwy domen na odpowiadające im adresy <i>IP</i>.</p>
                <p>Adres <i>IP</i> to jest synonim miejsca zamieszkania. Musimy go znać, żeby się połączyć z danym
                    urządzeniem i dzięki temu systemowi, nie musimy pamiętać adresów <i>IP</i> i tylko wystarczy, że
                    pamiętamy nazwę domeny. Sytuacja jest analogiczna w przypadku zapisywania numeru telefonu przyjaciół
                    lub członków rodziny — zapisujemy je w telefonie pod <i>nazwą</i>. Nie musimy pamiętać wtedy
                    konkretnych numerów telefonów. </p>
                <p>Aby sprawdzić adres IP, wystarczy:</p>
                <ol className="article__orderedList">
                    <li className="article__listItem">użyć <i>DevTools-ów</i> (np. w przeglądarce Chrom),</li>
                    <li className="article__listItem">wybrać zakładkę <i>Network</i>,</li>
                    <li className="article__listItem">odświeżyć stronę,</li>
                    <li className="article__listItem"> wejść na samą górę w zakładce <i>Network</i>,</li>
                    <li className="article__listItem">kliknąć w wiersz, w którym mamy nazwę domeny, którą obserwujemy,
                    </li>
                    <li className="article__listItem">wybrać zakładkę <i>Header</i> i podzakładkę <i>General</i></li>
                    <li className="article__listItem">w linii "Remote Address" mamy podany adres <i>IP</i> domeny.</li>
                </ol>
                <p><b>Protokół HTTP(s)</b> - HyperText Transfer Protocol — działa na zasadzie
                    <i>request-response</i> (żądanie - odpowiedź). Na tej zasadzie odbywa się cała komunikacja
                    między przeglądarką a serwerem. <i>Żądanie</i> i <i>odpowiedź</i> mają nagłówki i treść
                    (ciało/body).
                </p>
                <p>Analogicznie do poprzedniej instrukcji, gdzie sprawdzaliśmy adres IP, możemy sprawdzić też jak
                    wyglądają <i>nagłówki</i> i <i>ciała</i> dla <i>żądań</i> i <i>odpowiedzi</i>.</p>
                <div className="div-table-overflow">
                    <table className="article__table">
                        <caption className="article__caption">Kody błędów protokołów http</caption>
                        <thead className="article__thead">
                        <tr className="article__tr">
                            <th className="article__th">
                                kody:
                            </th>
                            <th className="article__th">
                                rodzaj odpowiedzi
                            </th>
                            <th className="article__th">
                                opis słowny
                            </th>
                            <th className="article__th">
                                znaczenie / zwrócony zasób
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="article__tr">
                            <td>100</td>
                            <td>informacyjne</td>
                            <td>Continue</td>
                            <td>Kontynuuj – prośba o dalsze wysyłanie zapytania</td>
                        </tr>
                        <tr className="article__tr">
                            <td>101</td>
                            <td>informacyjne</td>
                            <td>Switching Protocols</td>
                            <td>Zmiana protokołu</td>
                        </tr>
                        <tr className="article__tr">
                            <td>110</td>
                            <td>informacyjne</td>
                            <td>Connection Timed Out</td>
                            <td>Przekroczono czas połączenia. Serwer zbyt długo nie odpowiada</td>
                        </tr>
                        <tr className="article__tr">
                            <td>111</td>
                            <td>informacyjne</td>
                            <td>Connection refused</td>
                            <td>Serwer odrzucił połączenie</td>
                        </tr>
                        <tr className="article__tr">
                            <td>200</td>
                            <td>Kod powodzenia</td>
                            <td>OK</td>
                            <td>Zawartość żądanego dokumentu (najczęściej zwracany nagłówek odpowiedzi w
                                komunikacji WWW Internetu)
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>201</td>
                            <td>Kod powodzenia</td>
                            <td>Created</td>
                            <td>Utworzono – wysłany dokument został zapisany na serwerze</td>
                        </tr>
                        <tr className="article__tr">
                            <td>202</td>
                            <td>Kod powodzenia</td>
                            <td>Accepted</td>
                            <td>Przyjęto – zapytanie zostało przyjęte do obsłużenia, lecz jego zrealizowanie
                                jeszcze się nie skończyło
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>203</td>
                            <td>Kod powodzenia</td>
                            <td>Non-Authoritative Information</td>
                            <td>Informacja nieautorytatywna – zwrócona informacja nie odpowiada dokładnie
                                odpowiedzi pierwotnego serwera, lecz została utworzona z lokalnych bądź
                                zewnętrznych kopii
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>204</td>
                            <td>Kod powodzenia</td>
                            <td>No content</td>
                            <td>Brak zawartości – serwer zrealizował zapytanie klienta i nie potrzebuje zwracać
                                żadnej treści
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>205</td>
                            <td>Kod powodzenia</td>
                            <td>Reset Content</td>
                            <td>Przywróć zawartość – serwer zrealizował zapytanie i klient powinien przywrócić
                                pierwotny wygląd dokumentu
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>206</td>
                            <td>Kod powodzenia</td>
                            <td>Partial Content</td>
                            <td>Część zawartości – serwer zrealizował tylko część zapytania typu GET, odpowiedź
                                musi zawierać nagłówek Content-Range informujący o zakresie bajtowym zwróconego
                                elementu
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>300</td>
                            <td>Kod powodzenia</td>
                            <td>Multiple Choices</td>
                            <td>Wiele możliwości – istnieje więcej niż jeden sposób obsłużenia danego zapytania,
                                serwer może podać adres zasobu, który pozwala na wybór jednoznacznego zapytania
                                spośród możliwych
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>301</td>
                            <td>Kod przekierowania</td>
                            <td>Moved Permanently</td>
                            <td>Trwale przeniesiony – żądany zasób zmienił swój URI i w przyszłości zasób
                                powinien być szukany pod wskazanym nowym adresem
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>302</td>
                            <td>Kod przekierowania</td>
                            <td>Found</td>
                            <td>Znaleziono – żądany zasób jest chwilowo dostępny pod innym adresem, a przyszłe
                                odwołania do zasobu powinny być kierowane pod adres pierwotny
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>303</td>
                            <td>Kod przekierowania</td>
                            <td>See Other</td>
                            <td>Zobacz inne – odpowiedź na żądanie znajduje się pod innym URI i tam klient
                                powinien się skierować. To jest właściwy sposób przekierowywania w odpowiedzi na
                                żądanie metodą POST
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>304</td>
                            <td>Kod przekierowania</td>
                            <td>Not Modified</td>
                            <td>Nie zmieniono – zawartość zasobu nie podległa zmianie według warunku
                                przekazanego przez klienta (np. data ostatniej wersji zasobu pobranej przez
                                klienta – pamięć podręczna przeglądarki)
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>305</td>
                            <td>Kod przekierowania</td>
                            <td>Use proxy</td>
                            <td>Użyj serwera proxy – do żądanego zasobu trzeba odwołać się przez serwer proxy
                                podany w nagłówku Location odpowiedzi
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>306</td>
                            <td>Kod przekierowania</td>
                            <td>Switch proxy</td>
                            <td>Kod nieużywany, aczkolwiek zastrzeżony dla starszych wersji protokołu</td>
                        </tr>
                        <tr className="article__tr">
                            <td>307</td>
                            <td>Kod przekierowania</td>
                            <td>Too many redirects</td>
                            <td>Zbyt wiele przekierowań</td>
                        </tr>
                        <tr className="article__tr">
                            <td>310</td>
                            <td>Kod przekierowania</td>
                            <td>Temporary Redirect</td>
                            <td>Tymczasowe przekierowanie – żądany zasób znajduje się chwilowo pod innym adresem
                                URI, odpowiedź powinna zawierać zmieniony adres zasobu, na który klient
                                zobowiązany jest się przenieść
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>400</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Bad Request</td>
                            <td>Nieprawidłowe zapytanie – żądanie nie może być obsłużone przez serwer z powodu
                                nieprawidłowości postrzeganej jako błąd użytkownika (np. błędna składnia
                                zapytania)
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>401</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Unauthorized</td>
                            <td>Nieautoryzowany dostęp – żądanie zasobu, który wymaga uwierzytelnienia</td>
                        </tr>
                        <tr className="article__tr">
                            <td>402</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Payment Required</td>
                            <td>Wymagana opłata – odpowiedź zarezerwowana na przyszłość. Google Developers API
                                korzysta z tego kodu, jeśli dany programista przekroczył dzienny limit zapytań
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>403</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Forbidden</td>
                            <td>Zabroniony – serwer zrozumiał zapytanie, lecz konfiguracja bezpieczeństwa
                                zabrania mu zwrócić żądany zasób
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>404</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Not Found</td>
                            <td>Nie znaleziono – serwer nie odnalazł zasobu według podanego URL ani niczego co
                                by wskazywało na istnienie takiego zasobu w przeszłości
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>405</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Method Not Allowed</td>
                            <td>Niedozwolona metoda – metoda zawarta w żądaniu nie jest dozwolona dla wskazanego
                                zasobu, odpowiedź zawiera też listę dozwolonych metod
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>406</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Not Acceptable</td>
                            <td>Niedozwolone – zażądany zasób nie jest w stanie zwrócić odpowiedzi mogącej być
                                obsłużonej przez klienta według informacji podanych w zapytaniu
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>407</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Proxy Authentication Required</td>
                            <td>Wymagane uwierzytelnienie do serwera pośredniczącego (ang. proxy) – analogicznie
                                do kodu 401, dotyczy dostępu do serwera proxy
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>408</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Request Timeout</td>
                            <td>Koniec czasu oczekiwania na żądanie – klient nie przesłał zapytania do serwera w
                                określonym czasie
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>409</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Conflict</td>
                            <td>Konflikt – żądanie nie może być zrealizowane, ponieważ występuje konflikt z
                                obecnym statusem zasobu, ten kod odpowiedzi jest zwracany tylko w przypadku
                                podejrzewania przez serwer, że klient może znaleźć przyczyny błędu i przesłać
                                ponownie prawidłowe zapytanie. Odpowiedź serwera powinna zawierać informację
                                umożliwiające klientowi rozwiązanie problemu, jednak nie jest to obowiązkowe
                                (np. przesłanie 2 razy identycznego dokumentu, kiedy wymagana jest unikalność)
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>410</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Gone</td>
                            <td>Zniknął (usunięto) – zażądany zasób nie jest dłużej dostępny i nieznany jest
                                jego ewentualny nowy adres URI; klient powinien już więcej nie odwoływać się do
                                tego zasobu
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>411</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Length required</td>
                            <td>Wymagana długość – serwer odmawia zrealizowania zapytania ze względu na brak
                                nagłówka Content-Length w zapytaniu; klient może powtórzyć zapytanie dodając doń
                                poprawny nagłówek długości
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>412</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Precondition Failed</td>
                            <td>Warunek wstępny nie może być spełniony – serwer nie może spełnić przynajmniej
                                jednego z warunków zawartych w zapytaniu
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>413</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Request Entity Too Large</td>
                            <td>Encja zapytania zbyt długa – całkowita długość zapytania jest zbyt długa dla
                                serwera
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>414</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Request-URI Too Long</td>
                            <td>Adres URI zapytania zbyt długi – długość zażądanego URI jest większa niż
                                maksymalna oczekiwana przez serwer
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>415</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Unsupported Media Type</td>
                            <td>Nieznany sposób żądania – serwer odmawia przyjęcia zapytania, ponieważ jego
                                składnia jest niezrozumiała dla serwera
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>416</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Requested Range Not Satisfiable</td>
                            <td>Zakres bajtowy podany w zapytaniu nie do obsłużenia – klient podał w zapytaniu
                                zakres, który nie może być zastosowany do wskazanego zasobu
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>417</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Expectation Failed</td>
                            <td>Oczekiwana wartość nie do zwrócenia – oczekiwanie podane w nagłówku Expect
                                żądania nie może być spełnione przez serwer lub – jeśli zapytanie realizuje
                                serwer proxy – serwer ma dowód, że oczekiwanie nie będzie spełnione przez
                                następny w łańcuchu serwer realizujący zapytanie
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>418</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>I’m a teapot</td>
                            <td>„Jestem czajnikiem” – tzw. easter egg. Zdefiniowany w 1998. Obecnie nie jest
                                implementowany do serwerów HTTP, ale znane są takie przypadki
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>421</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Misdirected Request</td>
                            <td>Zapytanie zostało skierowane do serwera, który nie powinien go otrzymać lub
                                który nie jest w stanie na nie odpowiedzieć
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>422</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Unprocessable entity</td>
                            <td> Zapytanie było poprawnie sformułowane, ale było niemożliwe do kontynuowania z
                                powodu semantycznych błędów
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>423</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Locked (WebDAV)</td>
                            <td>Próba uzyskania dostępu do zasobu, który jest aktualnie zablokowany</td>
                        </tr>
                        <tr className="article__tr">
                            <td>424</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Failed Dependency (WebDAV)</td>
                            <td>Brak powodzenia żądania, ponieważ jest ono zależne od innego żądania, które
                                również nie powiodło się
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>425</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Too Early</td>
                            <td>Serwer nie chce ryzykować przetwarzania żądania, które może zostać powtórzone ze
                                względu na ryzyko ataku typu Replay
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>426</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Upgrade Required</td>
                            <td>Serwer odmawia wykonania żądania, używając aktualnego protokołu. Wymagany
                                protokół dla klienta przekazany jest w nagłówku Upgrade
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>428</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Precondition Required</td>
                            <td>Brak nagłówka wstępnego, który jest wymagany przez serwer. Żądanie musi być
                                warunkowe
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>429</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Too Many Requests</td>
                            <td>Użytkownik wysłał za wiele żądań w danym czasie</td>
                        </tr>
                        <tr className="article__tr">
                            <td>429</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Too Many Requests</td>
                            <td>Użytkownik wysłał za wiele żądań w danym czasie</td>
                        </tr>
                        <tr className="article__tr">
                            <td>431</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Request Header Fields Too Large</td>
                            <td>Serwer odmawia wykonania żądania ze względu na zbyt duże pole lub pola nagłówka
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>451</td>
                            <td>Kod błędu aplikacji po stronie klienta</td>
                            <td>Unavailable For Legal Reasons</td>
                            <td>Zawartość niedostępna z powodów prawnych – strona lub zasób zostały zablokowane
                                z powodów naruszenia prawa, w tym także z powodu ocenzurowania zawartości przez
                                władze. Wartość kodu jest nawiązaniem do powieści „451 stopni Fahrenheita”
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>500</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Internal Server Error</td>
                            <td>Wewnętrzny błąd serwera – serwer napotkał niespodziewane trudności, które
                                uniemożliwiły zrealizowanie żądania
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>501</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Not Implemented</td>
                            <td>Nie zaimplementowano – serwer nie dysponuje funkcjonalnością wymaganą w
                                zapytaniu; ten kod jest zwracany, gdy serwer otrzymał nieznany typ zapytania
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>502</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Bad Gateway</td>
                            <td>Błąd bramy – serwer – spełniający funkcję bramy lub pośrednika – otrzymał
                                niepoprawną odpowiedź od serwera nadrzędnego i nie jest w stanie zrealizować
                                żądania klienta
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>503</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Service Unavailable</td>
                            <td>Usługa niedostępna – serwer nie jest w stanie w danej chwili zrealizować
                                zapytania klienta ze względu na przeciążenie
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>504</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Gateway Timeout</td>
                            <td>Przekroczony czas bramy – serwer – spełniający funkcję bramy lub pośrednika – nie
                                otrzymał w ustalonym czasie odpowiedzi od wskazanego serwera HTTP, FTP, LDAP
                                itp. lub serwer DNS jest potrzebny do obsłużenia zapytania
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>505</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>HTTP Version Not Supported</td>
                            <td>Nieobsługiwana wersja HTTP – serwer nie obsługuje bądź odmawia obsługi wskazanej
                                przez klienta wersji HTTP
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>506</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Variant Also Negotiates</td>
                            <td>Wariant również negocjuje (w wolnym tłumaczeniu)</td>
                        </tr>
                        <tr className="article__tr">
                            <td>507</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Insufficient Storage (WebDAV)</td>
                            <td>Serwer nie jest w stanie zapisać danych związanych z wykonaniem zapytania</td>
                        </tr>
                        <tr className="article__tr">
                            <td>508</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Loop Detected (WebDAV)</td>
                            <td>Serwer wykrył nieskończoną pętlę w trakcie przetwarzania zapytania</td>
                        </tr>
                        <tr className="article__tr">
                            <td>509</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Bandwidth Limit Exceeded</td>
                            <td>Serwer jest tymczasowo niedostępny, ponieważ właściciel strony przekroczył limit
                                transferu danych.
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>510</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Not Extended</td>
                            <td>Brak rozszerzenia HTTP koniecznego do obsługi danego zapytania</td>
                        </tr>
                        <tr className="article__tr">
                            <td>511</td>
                            <td>Kod błędu serwera HTTP</td>
                            <td>Network Authentication Required</td>
                            <td>Wymagane uwierzytelnienie przed otrzymaniem dostępu do sieci. W zamyśle
                                wykorzystywane przez pośredników kontrolujących dostęp do sieci (np.: wymaganie
                                potwierdzenia zasad użytkowania przed udostępnieniem połączenia)
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </>
        )
    },
    {
        id: 31,
        date: "13 czerwca 2023 roku",
        title: "JavaScript - if/else vs ternary vs switch",
        body: (
            <>
                <p>Poniżej wstawiłam przycisk, podłączony do body i do button. Do buttona dodałam klasę
                    <i>switchButton</i>, a do body dałam klasę <i>body</i>. Jeśli chodzi o kod w JS, wygląda to tak:
                </p>
                <blockquote className="article__blockquote">
                    let <b>button</b> = document.querySelector(".switchButton");<br/>
                    let <b>body</b> = document.querySelector(".body");<br/>
                    <br/>
                    button.addEventListener("click", () => &#123;<br/>
                    body.classList.add("dark")<br/>
                    &#125;);
                </blockquote>
                <button className="switchButton">Włącz <span className="themeName">ciemny</span> motyw</button>
                <p>Natomiast w CSS-ach wygląda to tak:</p>
                <blockquote className="article__blockquote"><b>.dark </b>&#123;<br/>
                    &nbsp;&nbsp;color: #eee;<br/>
                    &nbsp;&nbsp;background-color: #222;<br/>
                    &#125;
                </blockquote>
                <p><s>Generalnie spoko działa, jednak musiałabym podpiąć blockquote z ciemnym tekstem, żeby
                    nie
                    znikał
                    tekst po kliknięciu.</s> - zrobione. K.</p>
                <p>Co dalej? Wypadałoby, aby po wybraniu ciemnego motywu, zmieniała się nazwa na przycisku.
                    Możemy
                    to zrobić, otaczając znacznikiem <i>span</i> konkretne słowo, lub wyrażenie, które
                    chcemy
                    zmienić, np.:</p>
                <blockquote className="article__blockquote">&lt;button
                    class="switchButton"&gt;Włącz &lt;span
                    class="<b>themeName</b>"&gt;ciemny&lt;/span&gt; motyw&lt;/button&gt;
                </blockquote>
                <p>Natomiast kod w <i>JavaScript</i>, po dodaniu warunku <i>if else</i> oraz zmianie metody
                    z
                    <i>add</i> na <i>toggle</i>będzie wyglądał teraz tak:
                </p>
                <blockquote className="article__blockquote">
                    let <b>button</b> = document.querySelector(".switchButton");<br/>
                    let <b>body</b> = document.querySelector(".body");<br/>
                    let <b>themeName</b> = document.querySelector(".themeName");<br/>
                    <br/>
                    button.addEventListener("click", () => &#123;<br/>
                    &nbsp;&nbsp;body.classList.toggle("dark");<br/>

                    &nbsp;&nbsp;<b>if</b> (body.classList.contains("dark")) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;themeName.innerText = "jasny";<br/>
                    &nbsp;&nbsp;&#125; <b>else </b>&#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;themeName.innerText = "ciemny";<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;);
                </blockquote>
                <p>Natomiast używamy dwa razy tej samej operacji, jednak zmienia się jedynie tekst.
                    W tej sytuacji
                    lepiej jest użyć potrójnego operatora <i>ternary</i>. Wyrażenie będzie w ten
                    sposób krótsze,
                    np.: </p>
                <blockquote className="article__blockquote">let <b>button</b> =
                    document.querySelector(".switchButton");<br/>
                    let <b>body</b> = document.querySelector(".body");<br/>
                    let <b>themeName</b> = document.querySelector(".themeName");<br/>
                    <br/>
                    button.addEventListener("click", () => &#123;<br/>
                    &nbsp;&nbsp;body.classList.toggle("dark");<br/>
                    &nbsp;&nbsp;themeName.innerText = body.classList.contains("dark") ?
                    "jasny" : "ciemny";<br/>
                    &#125;);
                </blockquote>
                <p>Reasumując, <i>if else</i> przyda nam się, kiedy będziemy chcieli
                    przeprowadzić <em>różne</em>
                    operacje na <em>jednym</em> warunku. Natomiast jeśli chcemy
                    przeprowadzić jedną akcję na różnych
                    wartościach, wtedy używamy <i>ternary</i>.</p>
                <p>Pora na kolejny przykład.</p>
                <p>Dzień tygodnia: <strong className="day">czwartek</strong></p>
                <p>Mam jeszcze <strong className="howMuch"></strong> czasu na zrobienie
                    pracy domowej.</p>
                <blockquote className="article__blockquote">Dzień tygodnia: &lt;strong
                    class="day">poniedziałek&lt;/span>&lt;/strong>
                    Mam jeszcze &lt;strong class="<b>howMuch</b>">&lt;/strong> czasu na
                    zrobienie pracy domowej.
                </blockquote>
                Po wpisaniu dowolnego dnia tygodnia, pojawi się opcja "dużo", "trochę"
                lub "mało". Ze strony
                <i>JavaScript</i>, wygląda to tak:
                <blockquote className="article__blockquote">
                    let <b>day</b> = document.querySelector(".day").innerText;<br/>
                    let <b>howMuch</b> = document.querySelector(".howMuch");<br/>
                    <br/>
                    <b>if</b> (day === "poniedziałek" || day === "wtorek") &#123;<br/>
                    &nbsp;&nbsp;howMuch.innerText = "dużo";<br/>
                    &#125; <b>else if</b> (day === "środa" || day === "czwartek") &#123;<br/>
                    &nbsp;&nbsp;howMuch.innerText = "trochę";<br/>
                    &#125; <b>else</b> &#123;<br/>
                    &nbsp;&nbsp;howMuch.innerText = "mało";<br/>
                    &#125;
                </blockquote>
                <p>W tym przypadku możemy również użyć potrójnego operatora,
                    ponieważ robię to samo, tyle że z inną
                    wartością. Wyglądałoby to tak: </p>
                <blockquote className="article__blockquote">
                    let <b>day</b> =
                    document.querySelector(".day").innerText;<br/>
                    let <b>howMuch</b> = document.querySelector(".howMuch");<br/><br/>
                    howMuch.innerText = (day === "poniedziałek" || day ===
                    "wtorek")<br/>
                    &nbsp;&nbsp;? "dużo"<br/>
                    &nbsp;&nbsp;: (<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;(day === "środa" || day ===
                    "czwartek")<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;? "trochę"<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: "mało"<br/>
                    );
                </blockquote>
                <p>Niby spoko pomysł, ale mamy teraz trzypoziomowego potrójnego
                    operatora, co w zasadzie czytelne nie
                    jest. Przyda nam się tutaj <i>switch</i>!</p>
                <blockquote className="article__blockquote">
                    let <b>day</b> =
                    document.querySelector(".day").innerText;<br/>
                    let <b>howMuch</b> = document.querySelector(".howMuch");<br/>
                    <br/>
                    switch (day) &#123;<br/>
                    & nbsp;&nbsp;<b>case "poniedziałek":</b><br/>
                    &nbsp;&nbsp;<b>case "wtorek":</b><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;howMuch.innerText = "dużo";<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<b>break;</b><br/>
                    <br/>
                    &nbsp;&nbsp;<b>case "środa":</b><br/>
                    &nbsp;&nbsp;<b>case "czwartek":</b><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;howMuch.innerText =
                    "trochę";<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<b>break;</b><br/>
                    <br/>
                    &nbsp;&nbsp;<b>default:</b><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;howMuch.innerText =
                    "mało";<br/>
                    &#125;
                </blockquote>
                <p>Jedno zadanie, trzy możliwości, a ile
                    radochy! Najbardziej przejrzysty jest
                    tutaj <i>switch</i></p>
            </>
        )
    },
    {
        id: 30,
        date: "13 czerwca 2023 roku",
        title: "A gdybyś tak...",
        body: (
            <>
                <p>... już dziś wiedział, że za rok będziesz mistrzem w jakiejś dziedzinie. Poddałbyś się?</p>
                <p>W sytuacjach kryzysowych, przypominam sobie tę frazę. Ma swoją moc. No właśnie, gdybyśmy z góry
                    wiedzieli, że w przyszłości wszystko się ułoży, balibyśmy się przyszłości?</p>
                <p>Czy warto się bać przyszłości? I tak i nie. Z jednej strony, gdybyśmy z góry wiedzieli, że w
                    przyszłości osiągniemy swoje cele, spoczęlibyśmy na "laurach", nie robiąc nic, bo przecież i tak
                    będzie wszystko ok. Z drugiej strony, gdybyśmy bali się przyszłości, bez wiedzy co nas czeka,
                    stalibyśmy w miejscu i również nie robilibyśmy nic.</p>
                <p>Preferuję inne podejście — obierz cel, działaj, a wtedy na pewno Ci się uda!</p>
                <p>Życie to sinusoida — raz na górze, raz w dołku, ale pewni jesteśmy jednego — będąc na górze,
                    zejdziemy do doliny, a będąc w dole, zaczniemy się wspinać do góry. Nie wiem, czy potrzebujesz tych
                    słów. Może jesteś teraz w kryzysie, może chcesz zrezygnować, ale jeśli mogę Ci coś poradzić — nie
                    poddawaj się!</p>
                <p>Jest 21:33. Jestem po pracy w dwóch miejscach. Padam na twarz. Normalnie o tej godzinie położyłabym
                    się spać. Jednak postanowiłam działać i się uczyć. Dlaczego? Bo wiem, że będzie dobrze,
                    <em>jeśli</em> będę działać.</p>
                <p>Tak więc powracam do powtórki mojego kursu programowania.</p>
                <img alt="Nigdy nie lekceważ potęgi małych kroków"
                     className="article__image"
                     src="https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.6435-9/195448370_4005096606272698_2037275807942576100_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=_ZntUwXTkdEAX_JsaPK&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfBWsLmeh-BowoYlGFB-BdAYGn0q84PTylwtyMyB8UnmeQ&oe=64B0299E"
                     title="Nigdy nie lekceważ potęgi małych kroków"/>
            </>
        )
    },
    {
        id: 29,
        date: "8 czerwca 2023 roku",
        title: "JavaScript - Ternary (operator potrójny)",
        body: (
            <>
                <blockquote className="article__blockquote">warunek ? jeśliSpełniony() : jeśliNieSpełniony();
                </blockquote>
                <p>Jest to krótka i przydatna składnia wtedy, kiedy chcemy sprawdzić prosty warunek — stawiamy warunek,
                    który jeśli jest spełniony, odpalamy funkcję <i>jeśliSpełniony()</i>, a jeśli nie został spełniony,
                    odpalamy funkcję <i>jeśliNieSPełniony()</i></p>
                <p>Na pewno zaletami takiego typu zapisu są</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">krótka i wygodna składnia</li>
                    <li className="article__listItem">najlepszy w sytuacji, gdy mamy jedną zmienną i warunki typu
                        "tak/nie".
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 28,
        date: "8 czerwca 2023 roku",
        title: "Sandomierz & JavaScript - Switch",
        body: (
            <>
                <p>
                    Dziś zawędrowałam do <i>miasta ojca Mateusza</i>. Mam tym samym niezwykłą sposobność zmiany
                    środowiska i może częściowe wytchnienie. Jednak mimo urlopu nie zatrzymuje się i wracam do powtórki
                    materiałów z kursu <i>Krzyśka Dąbrowskiego</i>. Jeszcze tylko mały obrazek z Sandomierzem i
                    działamy.
                </p>
                <Figure>
                    <img alt="starówka Sandomierza" className="panorama article__image"
                         src="https://swietokrzyskie.travel/media/cache/original/uploads/5d3814683ddf7.jpg"/>
                    <figcaption className="article__figcaption">">widok z lotu ptaka na starówkę w
                        Sandomierzu<br/>źródło: <a
                            href="https://swietokrzyskie.travel/informator_turystyczny/miasta_i_regiony/sandomierz_sandomierz"
                            title="swietokrzyskie.travel">https://swietokrzyskie.travel/informator_turystyczny/miasta_i_regiony/sandomierz_sandomierz</a>
                    </figcaption>
                </Figure>
                <p>
                    Zauważyłam też, że mam problem z akapitami w &lt;blockquote&gt; i wszystkie odstępy się zlewają —
                    naprawię poprzednie wpisy z czasem, a na razie pozwoliłam sobie na poprawkę w poniższym elemencie
                    HTML.
                </p>
                <blockquote className="article__blockquote">
                    <b>switch</b> (wyrażenie) &#123;<br/>
                    &nbsp;&nbsp;<b>case</b> opcja 1:<br/>
                    &nbsp;&nbsp;<b>case</b> opcja 2:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;wykonajTenKod();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>break</b>;<br/><br/>
                    &nbsp;&nbsp;<b>case</b> opcja 3:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;zamiastTegoWykonajTenKod();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>break</b>;<br/><br/>
                    &nbsp;&nbsp;<b>default</b>:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;jeśliNicNiePasujeWykonajTenKod();<br/>
                    &#125;
                </blockquote>
                <p>
                    Konstrukcja switch pozwala na operacje na kilku opcjach naraz bez wchodzenia w
                    stan <i>"ifozy"</i>.
                    Pomoże nam uprościć sprawę, jeśli chcemy w zależności od jakiegoś wyrażenia, zrobić kilka
                    różnych
                    rzeczy. Mamy tutaj:
                </p>
                <ul className="article__unorderedList">
                    <li className="article__listItem"><b>switch</b></li>
                    <li className="article__listItem"><b>wyrażenie</b> - może tutaj być cokolwiek</li>
                    <li className="article__listItem"><b>case1 & case2</b> - opcje; tutaj kod wykona się zarówno
                        przy opcji1, jak i opcji2
                    </li>
                    <li className="article__listItem"><b>break</b> - słowo kluczowe, które jest potrzebne, żeby nie
                        wykonał się kolejny kod;
                        umożliwia zakończenie <i>switch</i>-a, po spełnieniu (w tym przypadku) którejś z opcji.
                    </li>
                    <li className="article__listItem"><b>case3</b> - opcja trzecia, gdzie mamy jeszcze inny kod do
                        wykonania
                    </li>
                    <li className="article__listItem"><b>default</b> - blok, w którym wykona się kod, jeżeli żadna z
                        powyższych opcji nie jest
                        spełniona, czyli jeżeli żadna opcja nie pasuje do tego wyrażenia, które daliśmy w nawiasie
                        po <i>switch</i>; nie jest obowiązkowy, ale pomijajmy go, dopiero jak będziemy 100% pewnie,
                        że
                        zawarliśmy wszystkie opcje w <i>switch!</i></li>
                </ul>
                <p>Kiedy przydaje się switch?</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">kiedy byłoby za dużo <i>if else</i></li>
                    <li className="article__listItem">kiedy mamy kilka opcji w zależności od wartości jednego
                        wyrażenia
                    </li>
                </ul>
            </>
        )
    },
    {
        id: 27,
        date: "7 czerwca 2023 roku",
        title: "JavaScript - else if - ćwiczenie",
        body: (
            <>
                <p>Do instrukcji warunkowej <i>if else</i> możemy dodać kolejny blok <i>else if</i>. Służy to do
                    dodania większej ilości warunków, np.</p>
                <blockquote className="article__blockquote">
                    <b>if</b> (warunek1) &#123;<br/>
                    &nbsp;&nbsp;wykonajKodNr1();<br/>
                    &#125; <b>else if</b> (warunek2) &#123;<br/>
                    &nbsp;&nbsp;wykonajKodNr2();<br/>
                    &#125; <b>else</b> &#123;<br/>
                    &nbsp;&nbsp;wykonajKodNr3();<br/>
                    &#125;
                </blockquote>
            </>
        )
    },
    // {
    //     id: 27,
    //     date: "7 czerwca 2023 roku",
    //     title: "JavaScript - if else - ćwiczenie",
    //     body: (
    //         <>
    //             <p>Pozwoliłam sobie na przećwiczenie po raz enty warunku if/else. W tym przypadku pojawi się kolejny
    //                 przycisk, który powinien zmienić tekst po wciśnięciu. Spróbujmy.</p>
    //             <button className="button">Włącz ciemny motyw</button>
    //         </>
    //     )
    // },
    {
        id: 26,
        date: "6 czerwca 2023 roku",
        title: "JavaScript - if else",
        body: (
            <>
                <p>
                    Zanim przejdę do powtórzenia materiału, ogłoszę wszem wobec, że zostałam obdarzona <em>mega
                </em>zaufaniem i otrzymałam swoją drugą szansę w postaci pracy!
                </p>
                <p>Na razie ogrom informacji trochę mnie przytłacza, jednak głęboko wierzę, że się wyrobię z czasem.
                </p>
                <p>Niestety muszę na moment opuścić <i>HTML</i> i <i>CSS</i>, żeby wgryźć się jeszcze raz z
                    <i>JavaScript</i>-em.
                </p>
                <p>Instrukcje warunkowe są niesamowicie przydatne w podejmowaniu decyzji. Podstawową instrukcją
                    warunkową jest na pewno <i>if else:</i>
                </p>
                <blockquote className="article__blockquote">
                    <b>if</b> (warunek) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;zróbCośJeśliSpełniony();<br/>
                    &#125; <b>else</b> &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;zróbCośInnegoJeśliNiespełniony();
                </blockquote>
                <p>Tłumacząc najprościej, powyżej mamy <i>if</i> (jeżeli) warunek zostanie wykonany, wykonaj funkcję
                    (program) zróbCośJeśliSpełniony(); w innym przypadku wykonaj funkcję (program)
                    zróbCośInnegoJeśliNiespełniony().</p>
                <p>A oto i kilka innych przykładów z <i>if else</i></p>
                <blockquote className="article__blockquote">
                    <b>if</b> (number1 > number2) &#123;<br/>
                    &nbsp;&nbsp;console.log("number1 jest większa.");<br/>
                    &#125;<b> else</b> &#123;<br/>
                    &nbsp;&nbsp;console.log("number1 nie jest większa!");<br/>&#125;
                </blockquote>
                <p>Czyli znowu, jeżeli warunek, w którym number1 jest większa od number2 zostanie spełniony, pokaż w
                    konsoli "number1 jest większa". W przeciwnym przypadku pokaż w konsoli "number1 nie jest
                    większa"</p>
                <blockquote className="article__blockquote">
                    <b>if</b> (container.classList.contains("dark"))&#123;<br/>
                    &nbsp;&nbsp;console.log("Jest ustawiony ciemny motyw!"); <br/>
                    &#125;
                </blockquote>
                <p>Jeżeli klasa elementu z nazwą <i>container</i> zawiera klasę "dark", wyświetl na konsoli
                    "Jest
                    ustawiony ciemny motyw!"</p>
                <blockquote className="article__blockquote">
                    <b>if</b> (button.innerText === "Zamknij")&#123;<br/>
                    &nbsp;&nbsp;button.innerText === "Otwórz";<br/>&#125;
                </blockquote>
                <p>
                    Jeżeli w przycisku jest tekst "Zamknij", to wpisujemy do przycisku tekst "Otwórz".
                </p>
                <p>
                    Należy pamiętać, że <i>else</i> nie jest obowiązkowy, natomiast kod w
                    bloku <i>if</i> wykona się
                    zawsze, niezależnie od warunku.
                </p>
                <p>
                    Klamry nie zawsze są wymagane, ale lepiej <b>ich nie pomijać</b>
                </p>
            </>
        ),
    },
    // {
    //     id: 25,
    //     date: "4 czerwca 2023 roku",
    //     title: "JavaScript - ćwiczenie z przyciskiem (addEventListener)",
    //     body: (
    //         <>
    //             <blockquote className="article__blockquote">
    //                 button.addEventListener("click", () =>&#123;<br/>
    //                 &nbsp;&nbsp;naglowek.remove();
    //                 <br/>&#125;);&lt;br>
    //             </blockquote>
    //             <button className="button">Usuń nagłówek</button>
    //         </>
    //     )
    // },
    {
        id: 24,
        date: "4 czerwca 2023 roku",
        title: "JavaScript - document.querySelector()",
        body: (
            <>
                <p>Metody querySelector używamy do <em>"złapania"</em> elementu <i>HTML</i>, np. wpisując w konsolę
                    (za pomocą <i>DevTools</i>):</p>
                <blockquote className="article__blockquote">
                    &gt; <i>document.querySelector</i>("h2");<br/>
                    &lt; &lt;h2&gt;O mnie&lt;/h2&gt;;
                </blockquote>
                <p>Możemy następnie danemu elementowi HTML (albo klasie elementu, lub konkretnemu elementowi HTML
                    (id)), <strong>dodać</strong> klasę: </p>
                <blockquote className="article__blockquote">
                    nazwaKlasyElementuHTML.<i>classList.add</i>("nowaNazwaKlasy");
                </blockquote>
                <p>Możemy <strong>usunąć</strong> klasę elementowi HTML, np.:</p>
                <blockquote className="article__blockquote">
                    nazwaKlasyElementuHTML.<i>classList.remove</i>("nowaNazwaKlasy");
                </blockquote>
                <p>Możemy <strong>przełączać</strong> klasę elementowi HTML, np.:</p>
                <blockquote className="article__blockquote">
                    nazwaKlasyElementuHTML.<i>classList.toggle</i>("nowaNazwaKlasy");
                </blockquote>
                <p>Możemy <strong>zmienić</strong> tekst elementowi HTML, np.:</p>
                <blockquote className="article__blockquote">
                    nazwaKlasyElementuHTML.<i>innerText</i> = "Nowy tekst";
                </blockquote>
                <p>Możemy <strong>zmienić</strong> zawartość HTML elementowi HTML, np.:</p>
                <blockquote className="article__blockquote">
                    nazwaKlasyElementuHTML.<i>innerHTML</i> = "Nowa treść ze
                    &lt;span&gt; znacznikiem HTML
                    &lt;/span&gt;".;
                </blockquote>
                <p>Możemy <strong>usunąć</strong> element HTML, np.:</p>
                <blockquote className="article__blockquote">
                    nazwaKlasyElementuHTML.<i>remove()</i>;
                </blockquote>
            </>
        )
    },
    {
        id: 23,
        date: "4 czerwca 2023 roku",
        title: "JavaScript - składnia",
        body: (
            <>
                <blockquote className="article__blockquote">
                    <b>let</b> nazwa = wartość;
                </blockquote>
                <p>Nazwa zmiennej ma znaczenie — inaczej niż w przypadku <i>HTML</i>, w <i>JavaScript</i> różnice
                    liter są ważne, więc przypisując wartość do zmiennej <i>nazwa</i>, nie będzie ona przypisana
                    automatycznie do zmiennych <i>Nazwa</i>, <i>NaZwA</i> itd.
                </p>
                <p>Nazwa zmiennej musi zaczynać się od litery, "_" (ang. <i>underscore</i>) lub "$".</p>
                <p>Nazwa zmiennej jak najbardziej może zawierać cyfry, ale nie mogą one być na pierwszym miejscu.
                </p>
                <p>Jest kilka słów wbudowanych do <i>JavaScript-a</i>, których nie możemy użyć do nazwania zmiennej, np.
                    <i>var</i>, <i>let</i>, <i>function</i> itd. <a href="https://mothereff.in/js-variables"
                                                                    target="_blank"
                                                                    title="JavaScript variable name validator">Przydatna
                        stronka, do
                        sprawdzenia, czy nazwa, której chcesz użyć, nie jest zajęta</a>.
                </p>
                <p>Przy nazywaniu zmiennych używamy konwencji <i>camelCase</i> oraz liter alfabetu łacińskiego..</p>
            </>
        )
    },
    {
        id: 22,
        date: "4 czerwca 2023 roku",
        title: "JavaScript - sposoby osadzania",
        body: (
            <>
                <p><i>JavaScript-a</i> możemy umieścić na stronie na kilka sposobów:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">poprzez zastosowanie znacznika &lt;script&gt; &lt;/script&gt;
                        przed końcowym znacznikiem
                        &lt;/body&gt;, tak aby załadować skrypt, dopiero jak załaduje nam się cała zawartość DOM,
                        np.:
                    </li>
                </ul>
                <blockquote className="article__blockquote">
                    &lt;script&gt;<br/>console.log("Hello
                    world");<br/>&lt;/script&gt;
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">poprzez odwołanie do pliku z <i>JavaScript-em</i>, przed końcowym
                        znacznikiem &lt;/body&gt;, tak, aby załadować skrypt dopiero jak załaduje nam się cała zawartość
                        DOM, np.:
                    </li>
                </ul>
                <blockquote className="article__blockquote">
                    &lt;script src="js/script.js"&gt;&lt;/script&gt;
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">poprzez odwołanie do pliku z <i>JavaScript-em</i> z atrybutem
                        <i>defer</i>
                        i umieszczeniem odwołania
                        przed końcowym znacznikiem &lt;/head&gt;, tak aby załadować skrypt dopiero jak załaduje nam
                        się cała zawartość DOM, np.:
                    </li>
                </ul>
                <blockquote className="article__blockquote">
                    &lt;script defer src="js/script.js"&gt;&lt;/script&gt;
                </blockquote>
            </>
        )
    },
    {
        id: 21,
        date: "4 czerwca 2023 roku",
        title: "Porządki z CSS-ami",
        body: (
            <>
                <p>Tak jak podejrzewałam — powtarzając wiedzę z kursu i pochłaniając materiały dydaktyczne z Uczelni
                    spowodowałam, że patrzę innym spojrzeniem na to, co już poznałam i jeszcze lepiej zaczynam
                    rozumieć co z czym się łączy.</p>
                <p>Minusem tego trybu nauki jest niewątpliwie pracochłonność, ale koniec końców efektem
                    jest specjalista, który <em>rozumie</em> co robi.</p>
                <p>Zrobiłam porządek z blogiem — pousuwałam na razie <i>JavaScript</i>, wyczyściłam <i>klasy</i> i
                    ostylowałam stronę po <i>elementach</i> - dużo prościej i krócej zarazem. Gdy wpadnie mi
                    oczywiście kwestia dodawania elementów, które powinny być inne od pozostałych — wrócę do
                    stylowania po <i>klasach</i> i po <i>id.</i></p>
            </>
        )
    },
    {
        id: 20,
        date: "1 czerwca 2023 roku",
        title: "HTML - znaczniki span i div",
        body: (
            <>
                <p>
                    Powyższe znaczniki nie mają znaczenia semantycznego. Służą zwykle do osadzania długich treści w
                    <i>elementach liniowych</i> (&lt;div&gt;) i do osadzania fragmentów tekstu w <i>elementach
                    blokowych</i> (&lt;span&gt;). Są pożyteczne ze względu na <em>łapanie</em> elementów w
                    <i>JavaScript</i>.
                </p>
            </>
        )
    },
    {
        id: 19,
        date: "1 czerwca 2023 roku",
        title: "CSS - podstawy",
        body: (
            <>
                <p>
                    Pora na przećwiczenie podstawowych zagadnień ze składni. Odwołanie do elementu <i>HTML</i> może
                    być poprzez <i>id</i>, <i>klasę</i> lub poprzez <i>nazwę elementu</i>. Gdy odwołujemy się do
                    <i>klasy</i>, w miejscu selektora wpisujemy "." (kropkę) i nazwę <i>klasy</i>; gdy odwołujemy
                    się do konkretnego <em>jedynego</em> elementu <i>HTML</i>, używamy "#" (hashtaga) i nazwy
                    nadanego <i>id</i>. Są jeszcze dwie opcje stylowania elementów <i>HTML</i>, gdzie nie
                    potrzebujemy ani <i>klasy</i> ani <i>id</i> i stylujemy wszystkie dane rodzaje elementu o
                    konkretnej nazwie, używając:
                </p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        "zagnieżdżania"
                    </li>
                </ul>
                <blockquote className="article__blockquote">
                    article header h3 &#123;<br/>
                    &nbsp;&nbsp;text-align: left;<br/>
                    &#125;
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        TYLKO nazwy znacznika
                    </li>
                </ul>
                <blockquote className="article__blockquote">
                    h3 &#123;<br/>
                    &nbsp;&nbsp;text-align: left;<br/>
                    &#125;<br/>
                </blockquote>
                <p>Aby to lepiej zobrazować, posłużę się tutaj przykładem odwołania po <i>klasie</i></p>
                <blockquote className="article__blockquote">
                    <b>&#46;header</b> &#123;<br/>
                    &nbsp;&nbsp;color&#58; purple;<br/>
                    &#125;
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem"><i>selektor</i> - określa które elementy są ostylowane
                    </li>
                    <li className="article__listItem"><i>klamry</i> (brackets)</li>
                    <li className="article__listItem"><i>nazwa właściwości</i> - czyli jak styl będzie
                        zmieniany
                    </li>
                    <li className="article__listItem">wartość zmienianej właściwości po dwukropku</li>
                    <li className="article__listItem"><i>deklaracje</i> - pary właściwość: wartość</li>
                </ul>
                <h4 className="article__subsubsubheader">Jakie są sposoby osadzania?</h4>
                <ul className="article__unorderedList">
                    <li className="article__listItem">osobny link do arkusza styli w oddzielnym pliku</li>
                </ul>
                <blockquote className="article__blockquote">&lt;link href="css/style.css"
                    rel="stylesheet"&gt;
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">znacznik &lt;style&gt;</li>
                </ul>
                <blockquote className="article__blockquote">
                    &lt;style&gt;<br/>
                    <b>&#46;header</b> &#123;<br/>
                    &nbsp;&nbsp;color&#58; purple;<br/>
                    &#125;<br/>
                    &lt;/style&gt;
                </blockquote>
                <ul className="article__unorderedList">
                    <li className="article__listItem">atrybut style</li>
                </ul>
                <blockquote className="article__blockquote">&lt;p style="color:
                    red"&gt;Tekst&lt;/p&gt;
                </blockquote>
            </>
        )
    },
    {
        id: 18,
        date: "1 czerwca 2023 roku",
        title: "Odkopałam pierwszą lekcję o CSS",
        body: (
            <>
                <p>
                    Coraz bardziej się cieszę na powtórki materiałów, ponieważ z każdą powtórką będę mogła
                    zaktualizować bloga o nowe funkcje. I chociaż korci mnie, by od razu zrobić porządek z
                    <i>CSS</i> i <i>JS</i> na mojej stronie, to czekam cierpliwie na ten moment aż przejdę do
                    powtórki z lekcji właściwych tym tematom.
                </p>
                <p>
                    Naukę podzieliłam sobie na część z kursu <i>YouCode - Frontend Developer od podstaw</i> i na
                    materiały z Uczelni na temat <i>Frontend-u</i>. Powiem szczerze, że wybrałam dobry moment, bo
                    jedne materiały uzupełniają drugie i na odwrót. W programie nauki mam wykłady z zaawansowanego
                    <i>HTML</i> i <i>CSS</i> - dla mnie super sprawa!
                </p>
                <p>
                    Tak więc <i>CSS</i> - <i>Cascading Style Sheets</i>, czyli kaskadowe arkusze stylów to język
                    arkusza stylów używanego do ... stylowania znaczników <i>HTML</i>. (Chyba muszę poszukać
                    synonimów słowa styl).
                </p>
                <p>
                    <i>CSS</i> to oddzielna warstwa strony, która jest odpowiedzialna za to, jak wyglądają elementy w
                    <i>HTML</i>. I każda przeglądarka może mieć swoją interpretację <i>CSS</i>, a już w ogóle
                    najgorzej radzi sobie <i>IE</i>. Na kursie dowiedziałam się, że warto sprawdzać kompatybilność
                    <i>CSS</i> z różnymi wersjami różnych przeglądarek. Przydatne linki do sprawdzenia są <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"
                    title="MDN, a jakże">TU</a> i <a href="https://caniuse.com/" target="_blank"
                                                     title="CanIUse">TU</a>. Natomiast muszę jeszcze dokładniej
                    poczytać, o co chodzi z tym <a
                    href="https://www.w3.org/TR/css-2020/" target="_blank"
                    title="Strona W3C o CSS Snapshot 2020">CSS Snapshot 2020.</a> I wypadałoby mi odwiedzić też
                    i <a href="https://www.w3.org/Style/CSS/" target="_blank"
                         title="Ironicznie brzydka strona o CSS">TĄ</a> stronę, by zapoznać się z dokumentacją.
                </p>
                <p>
                    Będę jeszcze wałkować temat związany z <i>CSS</i>, więc rozsiądźcie się wygodnie.
                </p>
            </>
        )
    },
    {
        id: 17,
        date: "31 maja 2023 roku",
        title: "HTML - Semantyczność",
        body: (
            <>
                <p>
                    Dziś wsłuchiwałam się w wykład Tomasza Kanieckiego dotyczącego znaczników w HTML5. Łapię się na
                    tym, że często zapominam o semantyczności, czyli o stosowaniu znaczników zgodnie z
                    przeznaczeniem, aby m.in. umożliwić przeglądanie strony osobom z czytnikami ekranów.
                </p>
                <p>
                    Od razu po przykładach z wykładu, przystąpiłam do edycji kodu mojego bloga. Dodałam znaczniki
                    takie jak &lt;article&gt;, &lt;header&gt;, &lt;figure&gt; i &lt;figcaption&gt;. Z czasem pewnie
                    je ostyluję w CSS-ie, ale nie wyprzedzam faktów. Preferuję jednak naukę powolną, ale opartą na
                    praktyce. Zauważyłam, że ta metodologia nauki sprawia, że więcej przyswajam i zapamiętuję. Mamy
                    progres!
                </p>
                <p>
                    Jeśli śledzicie repozytorium bloga na<i> GitHub-ie</i>, to zauważycie, w których miejscach co nieco
                    poprawiłam.
                </p>
                <p>
                    Mam nadzieję, że w przyszłości moje aplikacje webowe będą dostępne dla osób również z
                    niepełnosprawnościami.
                </p>
            </>
        )
    },
    {
        id: 16,
        date: "30 maja 2023 roku",
        title: "HTML - elementy liniowe, elementy blokowe i elementy liniowo-blokowe",
        body: (
            <>
                <p>
                    <i>Elementami blokowymi</i> są znaczniki, w których zawierany jest tekst ciągiem, np. &lt;p&gt;
                    czy &lt;h1&gt;, &lt;h2&gt; itd.
                </p>
                <p>
                    <i>Elementy blokowe</i> zajmują całą dostępną szerokość (można to zobaczyć w
                    <i>DevTools-ach</i>).
                </p>
                <p>
                    Natomiast <i>elementy liniowe</i> to znaczniki typu np. &lt;strong&gt; czy &lt;em&gt; i zajmują
                    tyle miejsca, ile potrzebują dla swojej treści.
                </p>
                <p>
                    Ciekawostka jest tutaj <i>textarea</i>, który jest elementem liniowo-blokowym.
                </p>
                <p>
                    Nie układamy elementów <i>blokowych</i> w <i>liniowych</i>.
                </p>
            </>
        )
    },
    {
        id: 15,
        date: "30 maja 2023 roku",
        title: "HTML - utrwalenie różnic między kilkoma znacznikami",
        body: (
            <>
                <p>
                    Oto kilka znaczników <i>HTML</i>, których gwoli powtórzenia uzupełnię w poniższej tabeli. Po
                    umieszczeniu przejrzę tą całą moją dotychczasową treść i zmienię w/w znaczniki tak, aby były
                    one
                    używane zgodnie z konwencją.
                </p>
                <div className="div-table-overflow">
                    <table className="article__table">
                        <caption className="article__caption">przykłady znaczników HTML wraz ze znaczeniem</caption>
                        <thead className="article__thead">
                        <tr className="article__tr">
                            <th className="article__th">
                                symbol
                            </th>
                            <th className="article__th">
                                nazwa
                            </th>
                            <th className="article__th">
                                opis
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="article__tr">
                            <td>&lt;br&gt;</td>
                            <td><i>line break</i></td>
                            <td>łamie wiersz w miejscu wskazanym, ale nie należy go używać w celu dodania odstępu
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>&lt;strong&gt;</td>
                            <td><i>strong importance</i></td>
                            <td>używamy, gdy jest coś ważnego/pilnego do przekazania, lub gdy jest to ostrzeżenie
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>&lt;b&gt;</td>
                            <td><i>bring attention to</i></td>
                            <td>używamy, gdy chcemy zwrócić uwagę na jakiś fragment, ale nie jest on ważniejszy od
                                pozostałej treści, używany rzadziej niż &lt;strong&gt;
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>&lt;em&gt;</td>
                            <td><i>emphasis</i></td>
                            <td>używamy, gdy kładziemy nacisk na jakieś słowo w wyrażeniu</td>
                        </tr>
                        <tr className="article__tr">
                            <td>&lt;i&gt;</td>
                            <td><i>idiomatic text</i></td>
                            <td>używamy do pojęć technicznych, słów w obcym języku lub myśli</td>
                        </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </>
        )
    },
    {
        id: 14,
        date: "30 maja 2023 roku",
        title: "Operatory operacji logicznych",
        body: (
            <>
                <div className="div-table-overflow">
                    <table className="article__table">
                        <caption className="article__caption">
                            Przykład operatora
                        </caption>
                        <thead className="article__thead">
                        <tr className="article__tr">
                            <th className="article__th">
                                symbol
                            </th>
                            <th className="article__th">
                                Operator
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="article__tr">
                            <td>=</td>
                            <td>Operator przypisania; jeżeli nazwa zmiennej znajduje się po lewej stronie symbolu
                                przypisania " = ", to otrzymuje ona nową wartość, np.
                                <blockquote className="article__blockquote">suma = 1; // <i>Odtąd zmienna suma
                                    będzie
                                    mieć wartość 1.</i>
                                </blockquote>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="div-table-overflow">
                    <table className="article__table">
                        <caption className="article__caption">
                            Proste typy danych
                        </caption>
                        <thead className="article__thead">
                        <tr className="article__tr">
                            <th className="article__th">
                                skrót
                            </th>
                            <th className="article__th">
                                opis
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="article__tr">
                            <td><i>int</i></td>
                            <td> - liczba całkowita
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td><i>float</i></td>
                            <td> - liczba zmiennoprzecinkowa
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td><i>string</i></td>
                            <td> - łańcuch znaków
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td><i>bool</i></td>
                            <td> - typ True/False
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="div-table-overflow">
                    <table className="article__table">
                        <caption className="article__caption">
                            Proste operatory
                        </caption>
                        <thead className="article__thead">
                        <tr className="article__tr">
                            <th className="article__th">
                                rodzaj
                            </th>
                            <th className="article__th">
                                symbole
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="article__tr">
                            <td><i>bitowe</i></td>
                            <td>(OR, AND)
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td><i>arytmetyczne</i></td>
                            <td>(+ - * /)
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td><i>porównania</i></td>
                            <td>&#40;== &lt; &gt; &#41;
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td><i>logiczne</i></td>
                            <td>(prawda/fałsz)
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </>
        ),
    },
    {
        id: 13,
        date: "30 maja 2023 roku",
        title: "Instrukcja",
        body: (
            <>
                <p>
                    Co zawierają instrukcje?
                </p>
                <ul className="article__unorderedList">
                    <li className="article__listItem"><i>literały</i> - wartości (np. napisy, liczby) wpisane w kod
                        źródłowy,
                        kopiowane do kodu wykonywalnego podczas kompilacji;
                    </li>
                    <li className="article__listItem"><i>stałe</i> - symbole (nazwy) reprezentujące ustalone
                        wartości,
                        zastępowane tymi wartościami podczas kompilacji;
                    </li>
                    <li className="article__listItem"><i>wyrażenia</i> - zapis obliczeń;</li>
                    <li className="article__listItem"><i>zmienne lub nazwy zmiennych</i> - symbole reprezentujące
                        wartości,
                        które mogą zmieniać w czasie wykonywania programu;
                    </li>
                    <li className="article__listItem"><i>słowa kluczowe</i> - symbole reprezentujące określone
                        działania
                        (np.
                        <i>for, do, while, if, else, return</i>);
                    </li>
                    <li className="article__listItem"><i>wywołania funkcji</i> - symbole oznaczające miejsca w
                        programie,
                        w
                        których należy wykonać instrukcje wchodzące w skład treści danej funkcji (wyniki wykonania
                        funkcji też "pojawiają się" w tych miejscach);
                    </li>
                    <li className="article__listItem"><i>znaki przerwy;</i></li>
                    <li className="article__listItem"><i>spacje;</i></li>
                    <li className="article__listItem"><i>tabulacje poziome;</i></li>
                    <li className="article__listItem">przejścia do następnego wiersza (są pomijane podczas
                        kompilacji,
                        tylko
                        istnieją pewne ograniczenia dotyczące miejsc, w których może być umieszczone przejście do
                        następnego wiersza, o ile nie zostanie poprzedzone znakiem "\" (<i>backslash</i>));
                    </li>
                    <li className="article__listItem">komentarze, które umieszczamy po symbolu "//" do końca
                        wiersza,
                        lub
                        między symbolami "/* oraz */" (komentarze są ignorowane przez kompilator).
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: 12,
        date: "30 maja 2023 roku",
        title: "Funkcja",
        body: (
            <>
                <p>
                    Po dniu w biurze, ogarnięciu kilku kilometrów i spełnieniu kilku obowiązków domowych, powracam
                    teraz
                    do swoich materiałów z Uczelni. Czymże jest funkcja?
                </p>
                <p>
                    <i>Funkcja</i> to wyróżniona część <i>kodu źródłowego</i>, stanowiąca odrębną całość, składająca
                    się
                    z treści oraz nagłówka.
                </p>
                <p>
                    <i>Treść funkcji</i> to blok, którego sposób wykonywania w ogóle zależy od pewnej liczby
                    wartości,
                    zwanych <i>parametrami</i> lub <i>argumentami funkcji</i>, pochodzących z innych części programu
                    i
                    kończy się wygenerowaniem <i>wyniku</i>, przeznaczonego do wykorzystania w innych częściach
                    programu.
                </p>
                <p>
                    <i>Nagłówek funkcji</i> to część definicji funkcji określająca typ danych dla wyniku, nazwę
                    funkcji
                    oraz listę jej argumentów.
                </p>
            </>
        ),
    },
    {
        id: 11,
        date: "30 maja 2023 roku",
        title: "Wsparcie i hejterzy",
        body: (
            <>
                <p>
                    Czy słyszeliście o wszelkiego rodzaju grupach juniorów w <i>IT</i> szukających na portalach
                    społecznościowych stażu lub pierwszej pracy? Mogłabym określić część tej społeczności jako
                    zgrupowanie <em>sfrustrowanych</em> hejterów, którym się nie udało (lub nie udaje) i których
                    zadaniem jest <em>zniechęcać i przyczepiać</em> się do każdego, kto określi, że szuka stażu.
                </p>
                <p>
                    Można przeczytać tam, że teraz, żeby wejść do <i>Frontend-u</i> to jest za późno, albo że <i>>po
                    co
                    próbujesz skoro i tak się nie dostaniesz</i>. A nie daj borze zielony, jak wrzucisz tam info
                    o
                    sobie i swój pierwszy draft CV (<i>który może być kogoś pierwszym w życiu</i>)! Od razu
                    przeczytasz,
                    że ten angielski to <em>nie taki</em>, a tutaj same oklepane projekty, a jeszcze tam klauzula
                    informacyjna i zgoda na przetwarzanie jest niepotrzebna (!)...
                </p>
                <p>
                    Też stałam się ofiarą zmasowanego hejtu pod jednym z moich postów. I nie było mi z tym
                    przyjemnie,
                    oj nie! Pokazałam nawet je P.: <i>"Popatrz, ja się chyba nie nadaję..."</i>, na co on swoim
                    spokojnym głosem odpowiedział <i>"Nie słuchaj frustratów. Nie daj się zniechęcić. Przecież
                    wiesz, że
                    to jest Twój konik!"</i>.
                </p>
                <p>
                    P. miał rację. Jeszcze nigdy nie czułam takiej pasji w tym, co robię. No dobra, może oprócz
                    chwil,
                    gdy robiłam zestawy tzw. "skrętek" (<i>RJ45</i>). Olałam temat. Negatywne komentarze nie
                    przestały
                    się wysypywać. Jeden komentarz był o charakterze pozytywnym, gdzie życzono mi powodzenia.
                </p>
                <p>
                    Dostałam po jakimś czasie i wiadomość prywatną od mojej imienniczki. Napisała mi wiele ciepłych
                    słów
                    i opowiedziała trochę o sobie. Jeszcze nie zaczęła programować, ale o tym marzy. Pomyślałam o
                    sobie
                    sprzed 6ciu miesięcy — pamiętam dokładnie to uczucie towarzyszące ekscytacji, gdy mogłam sobie
                    pozwolić na pójście na kurs i zacząć tę przygodę!
                </p>
                <p>
                    Jednak są normalni ludzie na tym świecie!
                </p>
                <p>
                    <strong>Nigdy w siebie nie wątp!</strong>
                </p>
            </>
        ),
    },
    {
        id: 10,
        date: "29 maja 2023 roku",
        title: "Podstawy języka programowania",
        body: (
            <>
                <p>
                    Aby rozwiązać problem przy pomocy programowania, należy najpierw:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">Określić problem (co chcę osiągnąć)</li>
                    <li className="article__listItem">Wybrać algorytm, czyli metodę poszukiwania rozwiązania (jak będę
                        to
                        robić)
                    </li>
                    <li className="article__listItem">Tworzyć kod źródłowy, stanowiący reprezentację wybranego algorytmu
                        (kodowanie)
                    </li>
                    <li className="article__listItem">Kompilować kod źródłowy, czyli tworzyć kod wykonywalny gotowy do
                        wykonania programu
                    </li>
                    <li className="article__listItem">Sprawdzić i testować program. Jeśli znajdę błąd, wrócić do etapu
                        tworzenia kodu źródłowego (lub nawet do etapu algorytmu).
                    </li>
                </ul>
                <p>
                    No dobra, ale czym jest algorytm?
                </p>
                <p>
                    Zgodnie z poprawną definicją, algorytm to zbiór <u>dobrze</u> zdefiniowanych instrukcji
                    przeznaczony
                    do wykonania określonego zadania, który przy ustalonym stanie początkowym pozwala na uzyskanie
                    <u>odpowiedniego, rozpoznawalnego</u> stanu końcowego.
                </p>
                <p>
                    Jeszcze bardziej upraszczając, to metoda poszukiwania (lub tworzenia) rozwiązania zadanego
                    problemu.
                </p>
                <p>
                    Niestety nie dla każdego problemu istnieje skuteczny algorytm pozwalający znaleźć rozwiązanie.
                    Mamy
                    wtedy do czynienia z tzw. <i>Problemami nieobliczalnymi</i> lub Problemami, dla których
                    algorytmy są
                    złożone na tyle, by spowodować zbyt długie wykonywanie programu.
                </p>
            </>
        ),
    },
    {
        id: 9,
        date: "29 maja 2023 roku",
        title: "Zmiany",
        body: (
            <>
                <Q>Szaleństwem jest robić wciąż to samo i oczekiwać różnych rezultatów.</Q>
                <p>
                    Tym cytatem Einsteina podsumowałabym swoje dotychczasowe poczynania. Nadeszły zmiany. Zmiany we
                    mnie, zmiany wokół. Po kursie miałam do wyboru znowu wpaść w błędne koło aplikowania na
                    stanowisko
                    Frontend-owca, gdy moim jedynym sprzymierzeńcem w tej bitwie był React.
                </p>
                <p>
                    Kojarzycie grupy wsparcia dla Juniorów na portalach społecznościowych, na których m.in można
                    poprosić kogoś o ocenę CV? Ktoś skwitował mnie dosyć mocno, ale otworzyło to moje oczy:
                </p>
                <Q>
                    3 jeźdźcy junior frontend developera:<br/>
                    - bootcamp<br/>
                    - todo lista<br/>
                    - kalkulator.
                </Q>
                <p>
                    Czy to oznacza, że zmarnowałam czas? Niee! Jednak mam wrażenie, że kręcę się w kółko. Moja
                    wewnętrzna motywacja jest silniejsza niż dotychczas! Chcę się rozwijać, dlatego podjęłam decyzję
                    o
                    podjęciu studiów podyplomowych, tym razem Frontend-owca w Angular-ze. Na pewno wiedza, którą
                    aktualnie
                    zdobyłam, pomoże mi merytorycznie poskładać w całość. A projekty, no cóż... Pozwoli mi też na
                    rozbudowanie portfolio pod okiem wykładowcy.
                </p>
                <p>
                    Trzymajcie klawiatury! Nadchodzę!
                </p>
                <p>
                </p>
                <p>
                </p>
            </>
        ),
    },
    {
        id: 8,
        date: "29 maja 2023 roku",
        title: "HTML - atrybut contenteditable",
        body: (
            <>
                <p>
                    Hej, czy wiesz, że używając atrybutu "contenteditable" w jakimkolwiek ze znaczników, umożliwisz
                    edycję treści?</p>
                <blockquote className="article__blockquote">&lt;p&gt; contenteditable&lt;/p&gt;</blockquote>
                <p contentEditable>
                    Spróbuj tutaj coś napisać.</p>
                <p>
                    Dzięki tej funkcji, przy użyciu Devtool-sów, możesz dodać atrybut "contenteditable" do znaczników
                    z
                    każdej strony, zedytować jej treść i przesłać print-screen-a osobie, którą chcesz wkręcić. Nie
                    znam
                    innego zastosowania tego atrybutu...</p>
            </>
        ),
    },
    {
        id: 7,
        date: "28 maja 2023 roku",
        title: "HTML - znaki specjalne w odwołaniu do jednostek",
        body: (
            <>
                <p>
                    Wrzucę tutaj przydatną ściągawkę, co gdy nie chcemy za każdym razem oznaczać np. nawiasów
                    ostrokątnych span-em, a chcemy odwołać się do jakiegoś znacznika. </p>
                <div className="div-table-overflow">
                    <table className="article__table">
                        <caption className="article__caption">
                            Przykłady skrótów literałów w HTML
                        </caption>
                        <thead className="article__thead">
                        <tr className="article__tr">

                            <th className="article__th">
                                literał
                            </th>
                            <th className="article__th">
                                skrót do użycia literału bez "uruchomienia"
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="article__tr">
                            <td>
                                &#60;
                            </td>
                            <td>
                                <xmp>&lt;</xmp>
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>></td>
                            <td>
                                <xmp>&gt;</xmp>
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>"</td>
                            <td>
                                <xmp>&quot;</xmp>
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>'</td>
                            <td>
                                <xmp>&apos;</xmp>
                            </td>
                        </tr>
                        <tr className="article__tr">
                            <td>&</td>
                            <td>
                                <xmp>&amp;</xmp>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                <p>
                    Ciekawą sztuczką też do ignorowania kodu jest zastosowanie znacznika otaczającego element</p>
                <blockquote className="article__blockquote">
                    &lt;xmp&gt;
                </blockquote>
                <p>Jednak nie jest on wspierany przez wszystkie przeglądarki, więc możliwe, że
                    jeśli
                    oglądasz to na którejś, która tego nie czyta, to masz pewnie zagwostkę, co ja miałam na
                    myśli...
                </p>
            </>
        )
    },
    {
        id: 6,
        date: "28 maja 2023 roku",
        title: "HTML - Input disabled",
        body: (
            <>
                <p>
                    Witam ponownie! </p>
                <p>
                    Wiecie, że dziś mija 4. rocznica, od kiedy W3C i WHATWG się dogadały? </p>
                <p>
                    Powolutku, małymi krokami udoskonalam to, co zapisane. Jeszcze raz przypomnę, cała wizja tego
                    bloga
                    polega na zastosowaniu powtórzenia z kursu programowania. Tak jak poprzednio wrzuciłam teorię z
                    przykładem z MDN-a, tak teraz bardziej się będę skupiała na praktyce. Oczywiście może to
                    oznaczać, że
                    nagle niż gruchy ni z pietruchy pojawi się tutaj jakiś losowy element, np. input.</p>
                <label>
                    <input/>
                </label>
                <p>
                    Powyżej mamy przykład input-a bez atrybutów. Co jednak stanie się, gdy dodam atrybut "disabled"?
                </p>
                <label>
                    <input disabled/>
                </label>
                <p>
                    Jak nazwa wskazuje, widzimy wtedy input-a, do którego nie da się nic wpisać.</p>
            </>
        )
    },
    {
        id: 5,
        date: "27 maja 2023 roku",
        title: "HTML - paragraph",
        body: (
            <>
                <p>
                    Będę teraz bazować na przykładach z MDN-a i przekładać to na swój prosty rozum. Mamy sobie
                    poniższy
                    przykład zdania:
                </p>
                <blockquote className="article__blockquote">My cat is very grumpy.</blockquote>
                <p>
                    Nie wiem za bardzo jak przetłumaczyć "stands by itself", ale chodzi tu o sytuację, gdy chcemy,
                    stworzyć nowy akapit z treścią. Do tego celu służy znacznik
                    &lt;p&gt;&lt;/p&gt;.
                </p>
                <p>
                    &lt;p&gt;My cat is very grumpy.&lt;/p&gt;
                </p>
                <p>
                    <b>BTW</b> Właśnie odkryłam jak w HTML umieścić w/w znaczniki tak, aby kod został zignorowany!
                </p>
                <Figure>
                    <img className="article__image"
                         src="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started/grumpy-cat-small.png"
                         alt="grafika przedstawiająca tagi w HTML"/>
                    <figcaption className="article__figcaption">">Uwaga! Tagi w HTML nie są wrażliwe na zmianę
                        wysokości
                        liter! Znów przykład z MDN-a —
                        gdy mamy znacznik &lt;title&gt; &lt;/title&gt;, możemy użyć
                        np. &lt;Title&gt; &lt;/Title&gt; czy
                        &lt;TiTlE&gt; &lt;/TiTlE&gt; i nie będzie to miało żadnego znaczenia.
                    </figcaption>
                </Figure>
                <p>
                    Dobrze, to teraz wyjaśniając, z czym tu mamy do czynienia:</p>
                <ul className="article__unorderedList">
                    <li className="article__listItem">
                        The opening tag (znacznik otwierający): Zawiera nazwę elementu, jak w tym przykładzie p od
                        "paragraph". Umieszczony jest przed tekstem i otoczony jest nawiasami ostrokątnymi.
                    </li>
                    <li className="article__listItem">The content (treść): Mamy tutaj dosłownie treść, którą chcemy
                        otoczyć
                        znacznikami HTML
                    </li>
                    <li className="article__listItem">The closing tag (znacznik zamykający): Tak samo, jak w
                        przypadku
                        znacznika otwierającego, tyle że umieszczany po treści. Pokazuje gdzie dany element się
                        kończy.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: 4,
        date: "27 maja 2023 roku",
        title: "HTML, czyli przeżyjmy to jeszcze raz",
        body: (
            <>
                <p>
                    HTML, czyli <i>HyperText Markup Language</i>jest to język znaczników, który ma za zadanie opisać
                    strukturę strony, opakować treść w znaczniki i utworzyć różnego typu elementy na stronie.
                    Przeglądarka następnie parsuje kod HTML i renderuje utworzone tam elementy.</p>
                <p>
                    HTML <em>nie jest</em> językiem programowania!</p>
                <p>
                    <strong>W 1993 roku powstał pierwszy szkic dokumentu w <i>HTML-u</i>.</strong>
                </p>
                <p>
                    Aktualnie mamy wersję <i>HTML5</i>, jednak nie czekamy na nowszą wersję. Ta wersja jest
                    udoskonalana
                    od <b>28 maja 2019</b> roku przez już dwie współpracujące ze sobą organizacje <i>W3C</i> i
                    <i>WHATWG.</i>
                </p>
                <p>
                    Po więcej teorii odsyłam do
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"
                       title="HTML na MDNie"><i>MDNa</i></a>
                    lub <a href="https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer"
                           target="_blank" title="MDN - ścieżka Frontend-owca">TU</a>
                    lub do stron wyżej wymienionych organizacji
                    <a href="https://www.w3.org/" target="_blank" title="W3C">W3C</a>
                    i <a href="https://html.spec.whatwg.org/multipage/" target="_blank"
                         title="WHATWG"><i>WHATWG</i></a>.
                </p>
                <p>
                    Ja tymczasem zabieram się do lektury dokumentacji i wrócę z przykładami.
                </p>
            </>
        ),

    },
    {
        id: 3,
        date: "27 maja 2023 roku",
        title: "Początki początków, czyli algorytmy i schematy blokowe",
        body: (
            <>
                <p>
                    Jeszcze za czasów moich studiów logistycznych, byłam uczona czym są procesy zachodzące w
                    organizacji
                    i jak je sukcesywnie opisywać i usprawniać. Temat dosyć ciekawy, zważywszy na fakt, że można
                    pisemną
                    notatkę czy instrukcję zawierającą informacje o przepływie informacji zamienić w coś prostszego
                    —
                    właśnie w schemat blokowy. Los chciał, że wtedy zdobytą wiedzę, mogłam użyć w pełni
                    profesjonalnie
                    dopiero u mojego aktualnego pracodawcy.
                </p>
                <p>
                    Czy są algorytmy? To spis operacji w danym procesie, nierzadko zawierających warunki. Algorytmy
                    stosujemy używając schematów blokowych w opisie przepływu czynności lub właśnie używając kodu i
                    np.
                    instrukcji warunkowych tak, aby sprawić, że dana aplikacja zadziała w ten, a nie inny sposób.
                </p>
                <p>
                    Gdy zobaczyłam ten pierwszy temat właśnie w zawartości mojego kursu programowania, niezmiernie
                    się
                    ucieszyłam. Wspaniale bowiem jest, gdy uczymy się nowych rzeczy i nawiązujemy do analogii z
                    doświadczenia. Pamiętam, jak moja pierwszą pracą domową było wrzucenie schematu blokowego
                    jakiejś
                    wymyślonej przeze mnie czynności. Daleko nie musiałam szukać.
                </p>
                <Figure>
                    <img alt="schemat pakowania dziecka do szkoły" className="article__image" src={Schema}/>
                    <figcaption className="article__figcaption">Schemat pakowania dziecka do szkoły</figcaption>
                </Figure>
                <p>Mamy tutaj następujące elementy:</p>
                <ul className="list">
                    <li className="article__listItem">START / KONIEC — początek lub koniec procesu</li>
                    <li className="article__listItem">równoległobok - "przygotowanie"</li>
                    <li className="article__listItem">prostokąt - instrukcja / akcja / operacja</li>
                    <li className="article__listItem">romb - warunek.</li>
                </ul>
                <p>
                    Kto ma dzieci, ten — mam nadzieję — zgodzi się ze mną, że szykowanie latorośli do szkoły to
                    <em>bardzo</em> pochłaniający czas proces. Ale tak, właśnie podeszłam do tego zagadnienia w
                    ten
                    sposób. W organizacjach schematy procesów i przepływu informacji wyglądają podobnie. Czy w
                    programowaniu również? Jeśli tak, to jesteśmy w DOMu! (taki żarcik).
                </p>
                <p>
                    <b>PS.</b><s>Widzę, że mimo poprawnego ustawienia importu do obrazków, jakimś cudem nie
                    pojawiają
                    się one po wrzuceniu strony na GitHub pages. Mało tego, wyrównanie do lewej listy na local-u
                    działa, a na GitHub pages już nie. Mam ot praktyczny przykład problemu, który możemy
                    rozwiązać
                    na dniach.</s>Już działa!
                </p>
                <p>
                    <b>PS2.</b> Zaczyna mnie razić wygląd bloga (pewnie Ciebie też), ale jeszcze raz podkreślam
                    <strong> Blog ma być żywym organizmem, przykładem postępu w mojej powtórce nauki HTML, CSS i
                        JS.</strong>
                </p>
            </>
        ),
    },
    {
        id: 2,
        date: "26 maja 2023 roku",
        title: "Bieganie, czyli powrót na swój tor",
        body: (
            <>
                <p>
                    Nastał czas refleksji dotyczącej mojej <s>ostatniej</s> ogólnej aktywności fizycznej.
                    Jeszcze
                    rok
                    temu, dokładnie 14 maja 2022, spełniłam swoje marzenie o wzięciu udziału w biegu górskim
                    na
                    <i>SCARPA
                        Ultra Trail</i>. Zadanie było to niełatwe, bo musieliśmy pokonać stromy odcinek 600
                    m różnicy
                    między
                    poziomami. Dla amatora, takiego jak ja, pokonanie 10 km biegnąc po wzniesieniu było mega
                    wyzwaniem.
                    Razem z P. byliśmy
                    ostatni. Ale satysfakcja była niesamowita!
                </p>
                <Q>No tak, ale przecież byliście ostatni.</Q>
                <p>
                    Czy byliśmy pierwsi czy ostatni — nie miało to dla mnie większego znaczenia. No, dobra,
                    gdybym
                    żyła
                    z nagród w zawodach i ze sponsoringu partnerów - <em>wtedy</em> miałoby to dla mnie
                    ogromne
                    znaczenie! Ale
                    dopóki jestem amatorem, cieszę się taką drobnostką, bo pamiętam jak to było na początku.
                </p>
                <p>
                    Początek to moment budowania bazy — pamiętam jak nie potrafiłam przebiec nawet pełnej
                    minuty.
                    Jednak
                    z każdym treningiem, każdym kilometrem i każdą <em>właściwie</em> spędzoną regeneracją
                    stawałam
                    się
                    silniejsza, a moja wytrzymałość rosła.</p>
                <Figure>
                    <img alt="Katarzyna na tle wzniesienia Mogielicy" className="article__image"
                         src={Kate}/>
                    <figcaption className="article__figcaption"><i>Scarpa Ultra Trail</i> 2022 Mogielica
                    </figcaption>
                </Figure>
                <p>
                    Dlaczego takiej samej metodyki nie zastosowałam przy moich początkach nauki
                    programowania?
                    Dlaczego
                    dopiero teraz dotarło do mnie, że mózg również potrzebuje regeneracji i jak w przypadku
                    intensywnych
                    treningów mięśnie doprowadzi się do zakwaszenia, tak i tutaj dojdzie do <i>przeładowania
                    informacji</i>?
                </p>
                <p>
                    Błąd nowicjusza — tak bym to skomentowała. Przychylniej patrzę teraz na swoje błędy i na
                    ich
                    podstawie wyciągam wnioski.
                </p>
                <p>
                    Wracam do biegania i do przerabiania materiału z kursu jeszcze raz. Tym razem zastosuję
                    przerwy
                    (regenerację) i krótsze dystanse (okresy na naukę) na początek.
                    <Q>Blog o programowaniu? A gdzie tu <em>JavaScript</em>?</Q>
                    Już spieszę z odpowiedzią - <strong>prowadzę bloga na moim totalnie pierwszym projekcie
                    na
                    początku
                    mojej
                    ścieżki. Z każdą powtórzoną wiedzą zamierzam udoskonalać bloga, tak aby był żywym
                    tworem,
                    pokazującym moją naukę również poprzez praktykę. A że nie samym programowaniem człowiek
                    żyje
                    —
                    na
                    pewno będę tutaj przemycała historie z mojego doświadczenia z bieganiem</strong>.
                </p>
                <p>
                    Trzymacie się ciepło i nie wątpcie w siebie!
                </p>
            </>
        ),
    },
    {
        id: 1,
        date: "25 maja 2023 roku",
        title: "Pierwsza rozmowa techniczna",
        body: (
            <>
                <p>
                    Zapamiętam ten dzień na dobre. Wczoraj miałam swoją pierwszą rozmowę techniczną. Moje
                    zawodowe
                    zboczenie jako m.in. Inspektora Ochrony Danych zobowiązuje mnie również do
                    przypomnienia, że
                    dziś mija 5 lat od wprowadzenia <i>RODO</i> w Polsce. Ale to w ramach ciekawostki.
                    Przecież
                    tutaj będę
                    pisać o
                    swojej przygodzie z programowaniem.</p>
                <p>
                    Wracając do tej rozmowy technicznej. Nie wiem, czy nadal pamiętacie to uczucie albo, czy
                    rozmowa
                    techniczna jest także przed Wami jak przede mną była owego wczorajszego dnia, ale to
                    czas, gdy
                    wątpliwości są poddawane Twoje umiejętności i na pewno wiara w siebie. I rozmowa
                    techniczna nie
                    ma na celu oczywiście pokazania czego kandydat nie umie (a nie umiałam sporo!), ale
                    zwrócenie
                    uwagi na
                    to, z czego należy się jeszcze dokształcić.
                </p>
                <p>
                    Piszę to akurat na moim pierwszym projekcie z kursu <i>"YouCode - Frontend Developer od
                    podstaw"</i>
                    z taką nostalgią jednak, ponieważ pamiętam, jaka ekscytacja towarzyszyła mi przy oddaniu
                    tejże
                    mojej <b>pierwszej</b> pracy domowej. Mimo że była nieidealna - <i>CSS</i> porozrzucane
                    oddzielnie i
                    znaczniki też jakoś z konwencją <i>BEM</i> mało co miały związane, to jednak złapałam
                    się na
                    tym, że to
                    uczucie do mnie wróciło.
                </p>
                <p>
                    Dzień po takiej <em>małej katastrofie</em>, ze świeżym umysłem zasiadłam do podsumowania
                    mojej
                    ścieżki,
                    którą obrałam w grudniu 2022 roku. Dlaczego "małej katastrofie"? Dlatego, że podeszłam
                    totalnie
                    źle
                    do zadania rekrutacyjnego, którego wykonanie otworzyło mi drzwi do rozmowy technicznej,
                    na
                    której
                    omawiane były metody z tegoż, że zadania. Dlaczego źle, zapytacie? Ponieważ tak skupiłam
                    się na
                    wykonaniu zadania, że wyłączyłam myślenie, uporczywie szukając rozwiązania, które
                    mogłoby mi
                    pomóc,
                    implementując je i nie rozumiejąc jego specyfiki.
                </p>
                <p>
                    (Czytając poprzedni akapit, dochodzę do wniosku, że używam strasznie długich zdań. Może
                    się
                    wyrobię,
                    ponieważ praktyka czyni mistrza).
                </p>
                <p>
                    Dostałam na pewno nauczkę, a jako że <b>uczę się na błędach</b>, postanowiłam jeszcze
                    raz wrócić
                    do
                    kursu.
                    Słyszeliście o <i>syndromie oszusta</i>? Wczoraj uświadomiłam sobie, na czym on polega.
                    A
                    słyszeliście też o
                    zjawisku <i>przeładowania treści</i> lub <i>nadmiaru informacji</i> w mózgu? Jest to
                    raczej
                    przypadłość
                    nowicjuszy, takich jak ja, którzy napędzani wewnętrzną motywacją zdobywania nauki,
                    pochłaniają
                    wiedzę
                    hurtowymi ilościami, by potem... ta wiedza zniknęła! Skąd to wiem? Dowiedziałam się o
                    tym
                    zjawisku
                    dosyć niedawno, po ukończeniu kursu i oczywiście przepracowaniu każdego z modułów.
                    Miałam
                    momenty,
                    że moduły tygodniowe pochłaniałam podczas <em></em>jednego dnia. Bardzo niezdrowo i
                    bardzo bez
                    sensu
                    zważywszy na fakt, że nie pamiętam części materiału z tego okresu. Brzmi znajomo?
                </p>
                <p>
                    Szukałam teorii wszędzie — na kursie, na <i>Codenga</i>, na <i>youtube</i>,
                    na <i>freeCodeCamp</i>
                    (bardzo
                    fajna
                    strona - polecam!), ale zapomniałam o jednym — o codziennej praktyce. Jak to się mówi
                    mądry
                    Polak po
                    szkodzie — tak ze swojej strony mogę tylko podpowiedzieć, żeby jednak nie składać
                    wypowiedzenia,
                    jeśli nie ma się planu B. Możliwe, że moim wczorajszym popisem przekreśliłam swoje
                    szanse na
                    pracę w
                    naprawdę super firmie. Czeka mnie teraz miesiąc na wypowiedzeniu — miesiąc niepewności
                    co dalej.
                </p>
                <p>
                    Natomiast dzięki temu doświadczeniu wiem, co chcę robić. <strong>Chcę zostać zawodowym
                    <i>Frontend</i>-owcem!</strong>
                </p>
            </>
        ),
    },
];