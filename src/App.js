import React from 'react';
import './App.css';
import './index.css';
import Footer from "./components/molecules/Footer";
import AboutMe from "./components/templates/AboutMe";
import Section from "./components/organisms/Section";
import Article from "./components/molecules/Article";

function App() {
    return (
        <div>
            <div className="container">
                <main className="main">
                    <AboutMe />
                </main>
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
                            <p>Zdecydowałam się w końcu na przeniesienie bloga na Reacta. Wracam niebawem!</p>
                            <p>Stara wersja bloga <a href="https://katarzynazaloba.github.io/blog-old/">TUTAJ</a></p>
                            </>
                        }
                        />
                        <Article
                        date="18 sierpnia 2023 roku"
                        title="React - formularze"
                        body={
                            <>
                            <h4 className="article__subsubsubheader">Elementy formularza naturalnie mają swój wewnętrzny
                                stan</h4>
                            <ul className="article__unorderedList">
                            <li className="article__listItem">
                            nam nie jest to na rękę
                            </li>
                            <li className="article__listItem">
                            my chcemy być <b>single source of truth</b>
                            </li>
                            <li className="article__listItem">
                            dlatego potrzebujemy <b>controlled components</b>
                            </li>
                            </ul>
                                <h4 className="article__subsubsubheader">Przykład</h4>
                                <blockquote className="article__blockquote">
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
                                </blockquote>
                                <h4 className="article__subsubsubheader">Controlled components</h4>
                                <ul className="article__unorderedList">
                                    <li className="article__listItem">
                                        tak nazywamy komponenty, których wartość jest kontrolowana przez <b>React</b>
                                    </li>
                                    <li className="article__listItem">
                                        Przekazując <b>value</b>, sprawiamy, że <b>input</b> jest takim komponentem
                                    </li>
                                    <li className="article__listItem">
                                        Dzięki temu w zmiennych stanowych mamy <b>single source of truth</b>
                                    </li>
                                    <li className="article__listItem">
                                        Zawsze w tej sytuacji potrzebny jest <b>onChange</b>
                                    </li>
                                </ul>
                                <h4 className="article__subsubsubheader">textarea</h4>
                                <blockquote className="article__blockquote">
                                    <b>return</b> (<br/>
                                    &nbsp;&nbsp;&lt;textarea value=&#123;content&#125; onChange=&#123;onContentChange /><br/>
                                    );
                                </blockquote>
                                <h4 className="article__subsubsubheader">Select</h4>
                                <blockquote className="article__blockquote">
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
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;select value=&#123;age&#125; onChange=&#123;onSelectChange&#125;><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option /><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option>1 - 49&lt;option><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option>50+&lt;/option><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/select><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button>Wyślij!&lt;/button><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form><br/>
                                    &nbsp;&nbsp;&#125;;<br/>
                                    &#125;
                                </blockquote>
                                    <h4 className="article__subsubsubheader">checkbox, radio</h4>
                                    <blockquote className="article__blockquote">
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
                                    </blockquote>
                            </>
                        }
                        />
                        <Article
                            date="18 sierpnia 2023"
                            title="React - useState"
                            body={
                            <>
                                <h4 className="article__subsubsubheader">Licznik</h4>
                                <blockquote className="article__blockquote">
                                    <b>import</b> React, &#123;useState&#125; from "react";<br/><br/>
                                    <b>function </b> App() &#123;<br/>
                                    &nbsp;&nbsp;<b>const</b> [counter, setCounter] = useState(0);<br/><br/>
                                    &nbsp;&nbsp;<b>return</b> (<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p>Liczba kliknięć: &#123;counter&#125;&lt;/p><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                                    onClick=&#123;() => setCounter(counter => counter +
                                    1)&#125;><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+1<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/><br/>
                                    &nbsp;&nbsp;);<br/>
                                    &#125;
                                </blockquote>
                                    <h4 className="article__subsubsubheader">useState</h4>
                                    <ul className="article__unorderedList">
                                        <li className="article__listItem">
                                            jest to tzw. <b>Hook</b>
                                        </li>
                                        <li className="article__listItem">
                                            wywołujemy tę funkcję wewnątrz komponentu, by zadeklarować <i>zmienne
                                            stanowe</i>
                                        </li>
                                        <li className="article__listItem">
                                            zwraca aktualną wartość i funkcję, która ją aktualizuje
                                        </li>
                                        <li className="article__listItem">
                                            jedyny argument, który przekazujemy, to początkowa wartość
                                        </li>
                                        <li className="article__listItem">
                                            aktualizacja <i>zmiennej stanowej</i> powoduje <i>rerender</i> komponentu,
                                            pod warunkiem, że jest to inna wartość
                                        </li>
                                    </ul>
                                    <h4 className="article__subsubsubheader">useState możemy wywołać wielokrotnie</h4>
                                    <blockquote className="article__blockquote">
                                        <b>const</b> [counter, setCounter] = useState(0);<br/>
                                        <b>const</b> [products, setProducts] = useState([&#123;id: 1, name: "Huel"&#125;]);<br/>
                                        <b>const</b> [task, setTask] = useState(&#123;name: "obejrzeć serial"&#125;);
                                    </blockquote>
                                    <h4 className="article__subsubsubheader">Hooki wywołujemy:</h4>
                                    <ul className="article__unorderedList">
                                        <li className="article__listItem">
                                            tylko wewnątrz komponentów
                                        </li>
                                        <li className="article__listItem">
                                            zawsze na <i>najwyższym poziomie</i>
                                        </li>
                                        <li className="article__listItem">
                                            zawsze w tej samej kolejności
                                        </li>
                                    </ul>
                            </>
                            }
                            />
                            </>
                    }
                    />
            </div>
            <Footer title="2023 Katarzyna Żałoba"/>
        </div>
);
}

export default App;
