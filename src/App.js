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
                        </>
                    }
                />
            </Container>
            <Footer title="2023 Katarzyna Żałoba"/>
        </div>
    );
}

export default App;
