import React from "react";
import "./style.css";
import Kate from "../../../images/scarpa.jpg";
import Schema from "../../../images/schemat.png";

export const articlesLink = [
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
                                który nie jest w stanie na nie odpowiedzieć</td>
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
                <figure className="article__figure">
                    <img alt="starówka Sandomierza" className="panorama article__image"
                         src="https://swietokrzyskie.travel/media/cache/original/uploads/5d3814683ddf7.jpg"/>
                    <figcaption className="article__figcaption">">widok z lotu ptaka na starówkę w
                        Sandomierzu<br/>źródło: <a
                            href="https://swietokrzyskie.travel/informator_turystyczny/miasta_i_regiony/sandomierz_sandomierz"
                            title="swietokrzyskie.travel">https://swietokrzyskie.travel/informator_turystyczny/miasta_i_regiony/sandomierz_sandomierz</a>
                    </figcaption>
                </figure>
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
                         alt="grafika przedstawiająca tagi w HTML"/>
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