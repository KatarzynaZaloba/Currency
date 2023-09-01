import React from "react";
import "./style.css";
import Kate from "../../../images/scarpa.jpg";
import Schema from "../../../images/schemat.png";

export const articlesLink = [
    {},
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