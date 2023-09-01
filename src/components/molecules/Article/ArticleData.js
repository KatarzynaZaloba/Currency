import React from "react";
import "./style.css";
import Kate from "../../../images/scarpa.jpg";
import Schema from "../../../images/schemat.png";

export const articlesLink = [
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
                <q className="article__quote">Szaleństwem jest robić wciąż to samo i oczekiwać różnych rezultatów.</q>
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
                <q className="article__quote">
                    3 jeźdźcy junior frontend developera:<br/>
                    - bootcamp<br/>
                    - todo lista<br/>
                    - kalkulator.
                </q>
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
                    <figure className="article__figure">
                        <img className="article__image"
                             src="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started/grumpy-cat-small.png"
                             alt="grafika przedstawiająca tagi w HTML" />
                            <figcaption className="article__figcaption">">Uwaga! Tagi w HTML nie są wrażliwe na zmianę
                                wysokości
                                liter! Znów przykład z MDN-a —
                                gdy mamy znacznik &lt;title&gt; &lt;/title&gt;, możemy użyć
                                np. &lt;Title&gt; &lt;/Title&gt; czy
                                &lt;TiTlE&gt; &lt;/TiTlE&gt; i nie będzie to miało żadnego znaczenia.
                            </figcaption>
                    </figure>
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
                <figure className="article__figure">
                    <img alt="schemat pakowania dziecka do szkoły" className="article__image" src={Schema}/>
                        <figcaption className="article__figcaption">Schemat pakowania dziecka do szkoły</figcaption>
                </figure>
                    <p>Mamy tutaj następujące elementy:</p>
                    <ul className="list">
                        <li className="article__listItem">START / KONIEC — początek lub koniec procesu</li>
                        <li className="article__listItem">równoległobok - "przygotowanie"</li>
                        <li className="article__listItem">prostokąt - instrukcja / akcja / operacja</li>
                        <li className="article__listItem">romb - warunek.</li>
                    </ul>
                    <p>
                        Kto ma dzieci, ten — mam nadzieję — zgodzi się ze mną, że szykowanie latorośli do szkoły to
                        <em>bardzo</em> pochłaniający czas proces. Ale tak, właśnie podeszłam do tego zagadnienia w ten
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
                    Nastał czas refleksji dotyczącej mojej <s>ostatniej</s> ogólnej aktywności fizycznej. Jeszcze
                    rok
                    temu, dokładnie 14 maja 2022, spełniłam swoje marzenie o wzięciu udziału w biegu górskim na
                    <i>SCARPA
                        Ultra Trail</i>. Zadanie było to niełatwe, bo musieliśmy pokonać stromy odcinek 600 m różnicy
                    między
                    poziomami. Dla amatora, takiego jak ja, pokonanie 10 km biegnąc po wzniesieniu było mega
                    wyzwaniem.
                    Razem z P. byliśmy
                    ostatni. Ale satysfakcja była niesamowita!
                </p>
                <q className="article__quote">No tak, ale przecież byliście ostatni.</q>
                <p>
                    Czy byliśmy pierwsi czy ostatni — nie miało to dla mnie większego znaczenia. No, dobra, gdybym
                    żyła
                    z nagród w zawodach i ze sponsoringu partnerów - <em>wtedy</em> miałoby to dla mnie ogromne
                    znaczenie! Ale
                    dopóki jestem amatorem, cieszę się taką drobnostką, bo pamiętam jak to było na początku.</p>
                <p>
                    Początek to moment budowania bazy — pamiętam jak nie potrafiłam przebiec nawet pełnej minuty.
                    Jednak
                    z każdym treningiem, każdym kilometrem i każdą <em>właściwie</em> spędzoną regeneracją stawałam
                    się
                    silniejsza, a moja wytrzymałość rosła.</p>
                <figure className="article__figure">
                    <img alt="Katarzyna na tle wzniesienia Mogielicy" className="article__image"
                         src={Kate}/>
                    <figcaption className="article__figcaption"><i>Scarpa Ultra Trail</i> 2022 Mogielica</figcaption>
                </figure>
                <p>
                    Dlaczego takiej samej metodyki nie zastosowałam przy moich początkach nauki programowania?
                    Dlaczego
                    dopiero teraz dotarło do mnie, że mózg również potrzebuje regeneracji i jak w przypadku
                    intensywnych
                    treningów mięśnie doprowadzi się do zakwaszenia, tak i tutaj dojdzie do <i>przeładowania
                    informacji</i>?
                </p>
                <p>
                    Błąd nowicjusza — tak bym to skomentowała. Przychylniej patrzę teraz na swoje błędy i na ich
                    podstawie wyciągam wnioski.
                </p>
                <p>
                    Wracam do biegania i do przerabiania materiału z kursu jeszcze raz. Tym razem zastosuję przerwy
                    (regenerację) i krótsze dystanse (okresy na naukę) na początek.
                    <q className="article__quote">Blog o programowaniu? A gdzie tu <em>JavaScript</em>?</q>
                    Już spieszę z odpowiedzią - <strong>prowadzę bloga na moim totalnie pierwszym projekcie na
                    początku
                    mojej
                    ścieżki. Z każdą powtórzoną wiedzą zamierzam udoskonalać bloga, tak aby był żywym tworem,
                    pokazującym moją naukę również poprzez praktykę. A że nie samym programowaniem człowiek żyje
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
                        Zapamiętam ten dzień na dobre. Wczoraj miałam swoją pierwszą rozmowę techniczną. Moje zawodowe
                        zboczenie jako m.in. Inspektora Ochrony Danych zobowiązuje mnie również do przypomnienia, że
                        dziś mija 5 lat od wprowadzenia <i>RODO</i> w Polsce. Ale to w ramach ciekawostki. Przecież
                        tutaj będę
                        pisać o
                        swojej przygodzie z programowaniem.</p>
                    <p>
                        Wracając do tej rozmowy technicznej. Nie wiem, czy nadal pamiętacie to uczucie albo, czy rozmowa
                        techniczna jest także przed Wami jak przede mną była owego wczorajszego dnia, ale to czas, gdy
                        wątpliwości są poddawane Twoje umiejętności i na pewno wiara w siebie. I rozmowa techniczna nie
                        ma na celu oczywiście pokazania czego kandydat nie umie (a nie umiałam sporo!), ale zwrócenie
                        uwagi na
                        to, z czego należy się jeszcze dokształcić.
                    </p>
                    <p>
                        Piszę to akurat na moim pierwszym projekcie z kursu <i>"YouCode - Frontend Developer od
                        podstaw"</i>
                        z taką nostalgią jednak, ponieważ pamiętam, jaka ekscytacja towarzyszyła mi przy oddaniu tejże
                        mojej <b>pierwszej</b> pracy domowej. Mimo że była nieidealna - <i>CSS</i> porozrzucane
                        oddzielnie i
                        znaczniki też jakoś z konwencją <i>BEM</i> mało co miały związane, to jednak złapałam się na
                        tym, że to
                        uczucie do mnie wróciło.
                    </p>
                    <p>
                        Dzień po takiej <em>małej katastrofie</em>, ze świeżym umysłem zasiadłam do podsumowania mojej
                        ścieżki,
                        którą obrałam w grudniu 2022 roku. Dlaczego "małej katastrofie"? Dlatego, że podeszłam totalnie
                        źle
                        do zadania rekrutacyjnego, którego wykonanie otworzyło mi drzwi do rozmowy technicznej, na
                        której
                        omawiane były metody z tegoż, że zadania. Dlaczego źle, zapytacie? Ponieważ tak skupiłam się na
                        wykonaniu zadania, że wyłączyłam myślenie, uporczywie szukając rozwiązania, które mogłoby mi
                        pomóc,
                        implementując je i nie rozumiejąc jego specyfiki.
                    </p>
                    <p>
                        (Czytając poprzedni akapit, dochodzę do wniosku, że używam strasznie długich zdań. Może się
                        wyrobię,
                        ponieważ praktyka czyni mistrza).
                    </p>
                    <p>
                        Dostałam na pewno nauczkę, a jako że <b>uczę się na błędach</b>, postanowiłam jeszcze raz wrócić
                        do
                        kursu.
                        Słyszeliście o <i>syndromie oszusta</i>? Wczoraj uświadomiłam sobie, na czym on polega. A
                        słyszeliście też o
                        zjawisku <i>przeładowania treści</i> lub <i>nadmiaru informacji</i> w mózgu? Jest to raczej
                        przypadłość
                        nowicjuszy, takich jak ja, którzy napędzani wewnętrzną motywacją zdobywania nauki, pochłaniają
                        wiedzę
                        hurtowymi ilościami, by potem... ta wiedza zniknęła! Skąd to wiem? Dowiedziałam się o tym
                        zjawisku
                        dosyć niedawno, po ukończeniu kursu i oczywiście przepracowaniu każdego z modułów. Miałam
                        momenty,
                        że moduły tygodniowe pochłaniałam podczas <em></em>jednego dnia. Bardzo niezdrowo i bardzo bez
                        sensu
                        zważywszy na fakt, że nie pamiętam części materiału z tego okresu. Brzmi znajomo?
                    </p>
                    <p>
                        Szukałam teorii wszędzie — na kursie, na <i>Codenga</i>, na <i>youtube</i>,
                        na <i>freeCodeCamp</i>
                        (bardzo
                        fajna
                        strona - polecam!), ale zapomniałam o jednym — o codziennej praktyce. Jak to się mówi mądry
                        Polak po
                        szkodzie — tak ze swojej strony mogę tylko podpowiedzieć, żeby jednak nie składać wypowiedzenia,
                        jeśli nie ma się planu B. Możliwe, że moim wczorajszym popisem przekreśliłam swoje szanse na
                        pracę w
                        naprawdę super firmie. Czeka mnie teraz miesiąc na wypowiedzeniu — miesiąc niepewności co dalej.
                    </p>
                    <p>
                        Natomiast dzięki temu doświadczeniu wiem, co chcę robić. <strong>Chcę zostać zawodowym
                        <i>Frontend</i>-owcem!</strong>
                    </p>
                </>
            ),
    },
];