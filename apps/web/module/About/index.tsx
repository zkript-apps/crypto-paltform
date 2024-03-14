"use client"
import Image from "next/image"
import YoutubeIFrame from "@/common/components/YoutubeIFrame"
import OrderedLists from "@/common/components/OrderedLists"

const firstLists = [
  {
    title: "Leistungsstarke Infrastruktur",
    body: "NoosphereApp verfügt über hochmoderne Rechenzentren und Hochleistungsnetzwerke, die eine schnelle und zuverlässige Verarbeitung großer Datenmengen ermöglichen, die für KI-Anwendungen erforderlich sind. Die Infrastruktur von NoosphereApp bietet die erforderliche Rechenkapazität, um komplexe KI-Modelle zu trainieren und anspruchsvolle Analysen durchzuführen.",
  },
  {
    title: "Schnelle und großvolumige Skalierbarkei",
    body: "NoosphereApp bietet schnelle und großvolumige Skalierbarkeit, um sich den sich ändernden Anforderungen von KI-Anwendungen anzupassen. Unternehmen können ihre Rechenkapazität schnell und effizient erweitern, um den Bedarf an Datenverarbeitung und Modelltraining zu decken, wenn ihr KI-Projekt wächst.",
  },
  {
    title: "Expertenwissen und Support",
    body: "NoosphereApp verfügt über ein Team von Experten mit umfassender Erfahrung im Bereich Cloud- und Colocation-Dienste sowie im Umgang mit KI-Anwendungen. Das Team von NoosphereApp bietet professionellen Support und Beratungsdienste, um Unternehmen bei der optimalen Nutzung ihrer Infrastruktur für KI-Projekte zu unterstützen.",
  },
  {
    title: "Sicherheit und Datenschutz",
    body: "NoosphereApp legt großen Wert auf Sicherheit und Datenschutz und bietet eine hochsichere Umgebung für die Verarbeitung sensibler Daten. Die Rechenzentren von NoosphereApp verfügen über fortschrittliche Sicherheitsmaßnahmen und Compliance-Zertifizierungen, um die Sicherheit und Integrität von Daten zu gewährleisten.",
  },
  {
    title: "Flexibilität und Anpassungsfähigkeit",
    body: "NoosphereApp bietet eine Vielzahl von Cloud- und Colocation-Diensten, die flexibel an die spezifischen Anforderungen von KI-Anwendungen angepasst werden können. Unternehmen können die Dienste von NoosphereApp je nach Bedarf und Budget anpassen und skalieren, um die optimalen Ressourcen für ihre KI-Projekte bereitzustellen.",
  },
]

const secondLists = [
  {
    title: "Parallel Computing",
    body: "HPC-Systeme verwenden Parallel Computing, um Aufgaben auf mehreren Prozessoren gleichzeitig auszuführen, was die Verarbeitungsgeschwindigkeit erheblich erhöht. Dies ermöglicht die gleichzeitige Verarbeitung großer Datenmengen und die Beschleunigung von Berechnungen.",
  },
  {
    title: "Distributed Computing",
    body: "HPC-Systeme können auch Distributed Computing nutzen, bei dem Aufgaben auf mehrere verteilte Rechner verteilt werden, um die Rechenlast zu verteilen und die Skalierbarkeit zu erhöhen. Dies ermöglicht die Verarbeitung von Big Data und die Ausführung von komplexen Algorithmen in verteilten Umgebungen.",
  },
  {
    title: "Spezialisierte Hardware",
    body: "HPC-Systeme verwenden oft spezialisierte Hardware wie Hochleistungsprozessoren, Grafikprozessoren (GPUs), Field-Programmable Gate Arrays (FPGAs) und Tensor Processing Units (TPUs), um die Rechenleistung zu maximieren und die Ausführung von spezifischen Aufgaben zu optimieren.",
  },
  {
    title: "Schnelle Netzwerke",
    body: "HPC-Systeme nutzen schnelle Netzwerke und Verbindungen, um eine schnelle Kommunikation zwischen den einzelnen Knoten im Cluster zu ermöglichen und die Datenübertragungsgeschwindigkeit zu maximieren.",
  },
]

const thirdLists = [
  {
    title: "Training von KI-Modellen",
    body: "HPC ermöglicht die schnelle und effiziente Ausführung von Trainingsalgorithmen für KI-Modelle, insbesondere für Deep Learning-Modelle, die eine enorme Rechenleistung erfordern.",
  },
  {
    title: "Big Data-Analyse",
    body: "KI-Anwendungen basieren oft auf der Analyse großer Datenmengen, um Muster und Trends zu erkennen. HPC-Systeme ermöglichen die schnelle und parallele Verarbeitung großer Datenmengen, was die Effizienz und Genauigkeit der Analyse verbessert.",
  },
  {
    title: "Simulationen und Modellierung",
    body: "KI-Anwendungen erfordern oft komplexe Simulationen und Modellierungen, um verschiedene Szenarien zu testen und Vorhersagen zu treffen. HPC ermöglicht die schnelle Ausführung von Simulationen und Modellierungen, was die Entwicklung und Optimierung von KI-Modellen unterstützt.",
  },
]

const fourthLists = [
  {
    title: "Deep Learning",
    body: "Die Trainingsalgorithmen für Deep Learning-Modelle erfordern enorme Rechenleistung, um komplexe neuronale Netzwerke zu trainieren und zu optimieren. HPC-Systeme werden verwendet, um diese Berechnungen zu beschleunigen und die Leistung von Deep Learning-Anwendungen zu verbessern.",
  },
  {
    title: "Big Data-Analyse",
    body: "HPC-Systeme werden für die schnelle und parallele Verarbeitung großer Datenmengen in KI-Anwendungen wie Predictive Analytics, Natural Language Processing und Data Mining eingesetzt.",
  },
  {
    title: "Molekulardynamiksimulation",
    body: "In der Medizin und Pharmazie werden HPC-Systeme verwendet, um komplexe molekulardynamische Simulationen durchzuführen, die bei der Entwicklung neuer Medikamente und der Erforschung von Krankheiten helfen.",
  },
  {
    title: "Robotik und autonome Fahrzeuge",
    body: "HPC wird verwendet, um Simulationen und Tests für autonome Systeme wie Roboter und selbstfahrende Fahrzeuge durchzuführen, um deren Leistung und Verhalten in verschiedenen Szenarien zu optimieren.",
  },
  {
    title: "Natural Language Processing (NLP)",
    body: "HPC wird verwendet, um komplexe NLP-Algorithmen zu entwickeln und zu trainieren, die die menschliche Sprache verstehen und verarbeiten können. Dies ermöglicht Anwendungen wie Chatbots, automatische Übersetzungen und Textanalysen.",
  },
  {
    title: "Computer Vision",
    body: "HPC-Systeme werden für die Verarbeitung von Bild- und Videodaten verwendet, um Objekte zu erkennen, Muster zu identifizieren und visuelle Informationen zu analysieren. Dies findet Anwendung in Bereichen wie Gesichtserkennung, medizinischer Bildgebung und autonomer Fahrzeuge.",
  },
  {
    title: "Genomik und Bioinformatik",
    body: "HPC wird in der Genomik und Bioinformatik eingesetzt, um komplexe Berechnungen für die Sequenzierung und Analyse von DNA und RNA durchzuführen. Dies ermöglicht die Entdeckung von Genmutationen, die Entwicklung personalisierter Medizin und die Erforschung genetischer Krankheiten.",
  },
  {
    title: "Finanzwesen",
    body: "HPC wird im Finanzwesen eingesetzt, um komplexe Modelle für das Risikomanagement, die Portfoliooptimierung, die Vorhersage von Markttrends und den Hochfrequenzhandel zu entwickeln. Dies ermöglicht es Finanzinstituten, fundierte Entscheidungen zu treffen und Wettbewerbsvorteile zu erzielen.",
  },
]

const fifthLists = [
  {
    title: "Wissenschaftliche Simulationen",
    body: "HPC wird in der Wissenschaft für komplexe Simulationen in Bereichen wie Astrophysik, Klimaforschung, Geophysik und Materialwissenschaft eingesetzt, um komplexe Phänomene zu modellieren und zu verstehen.",
  },
  {
    title: "Medizinische Bildgebung",
    body: "HPC wird in der medizinischen Bildgebung verwendet, um komplexe Bildverarbeitungs- und Analysen für diagnostische Verfahren wie Magnetresonanztomographie (MRT), Computertomographie (CT) und Positronenemissionstomographie (PET) durchzuführen.",
  },
  {
    title: "Wettervorhersage und Klimamodellierung",
    body: "HPC wird in der Meteorologie und Klimatologie verwendet, um Wettervorhersagen zu verbessern, Naturkatastrophen zu prognostizieren und die Auswirkungen des Klimawandels zu modellieren.",
  },
  {
    title: "Luft- und Raumfahrt",
    body: "HPC wird in der Luft- und Raumfahrt für die Modellierung und Simulation von Flugzeugdesigns, Strömungsmechanik, Raketenflugbahnen und Weltraummissionen eingesetzt, um die Sicherheit und Effizienz von Flugzeugen und Raumfahrzeugen zu verbessern.",
  },
]

const sixthLists = [
  {
    title: "Maschinelles Lernen (ML)",
    body: "Maschinelles Lernen ist ein Teilbereich der KI, der sich mit der Entwicklung von Algorithmen und Techniken befasst, die es Computern ermöglichen, aus Daten zu lernen und Muster oder Regeln zu erkennen, ohne explizit programmiert zu werden. Die Hauptaufgabe des maschinellen Lernens besteht darin, Modelle zu trainieren, indem es große Datenmengen analysiert und aus diesen Daten lernt, um Vorhersagen zu treffen oder Entscheidungen zu treffen.",
    subList: {
      title: "Funktionen",
      body: "Klassifizierung, Regression, Clustering, Anomalieerkennung, Vorhersage, Entscheidungsfindung.",
    },
  },
  {
    title: "Deep Learning",
    body: "Deep Learning ist eine Unterart des maschinellen Lernens, die sich auf künstliche neuronale Netzwerke konzentriert, die aus vielen Schichten („Tiefen“) von Neuronen bestehen. Diese Netzwerke sind in der Lage, komplexe Muster in großen Datenmengen zu erkennen und komplexe Probleme zu lösen, wie zum Beispiel Bilderkennung, Sprachverarbeitung und autonomes Fahren.",
    subList: {
      title: "Funktionen",
      body: "Bilderkennung, Sprachverarbeitung, Natural Language Processing (NLP), Objekterkennung, autonome Navigation.",
    },
  },
  {
    title: "Sprachverarbeitung (NLP)",
    body: "Die Sprachverarbeitung ist ein Bereich der KI, der sich mit der Verarbeitung und Interpretation menschlicher Sprache befasst. Dies umfasst die Spracherkennung, das Verständnis von natürlicher Sprache, die Generierung von menschenähnlicher Sprache und die Interaktion mit sprachgesteuerten Systemen.",
    subList: {
      title: "Funktionen",
      body: "Spracherkennung, Sprachverständnis, Übersetzung, Chatbots, Textanalyse.",
    },
  },
  {
    title: "Computer Vision",
    body: "Computer Vision ist ein Bereich der KI, der sich mit der Interpretation und Analyse von Bildern und Videos befasst. Diese Technologie ermöglicht es Computern, visuelle Informationen zu verstehen, Objekte zu erkennen, Muster zu identifizieren und visuelle Daten zu analysieren.",
    subList: {
      title: "Funktionen",
      body: "Objekterkennung, Gesichtserkennung, Bildsegmentierung, optische Charaktererkennung (OCR), medizinische Bildgebung.",
    },
  },
  {
    title: "Autonome Systeme und Robotik",
    body: "Autonome Systeme und Robotik sind Bereiche der KI, die sich mit der Entwicklung von autonomen Maschinen und Robotern befassen, die in der Lage sind, komplexe Aufgaben auszuführen, ohne menschliche Eingriffe zu erfordern. Diese Systeme verwenden KI-Algorithmen und -Techniken, um ihre Umgebung wahrzunehmen, Entscheidungen zu treffen und Handlungen auszuführen.",
    subList: {
      title: "Funktionen",
      body: "Autonome Navigation, Robotersteuerung, kollaborative Robotik, Drohnen, selbstfahrende Fahrzeuge.",
    },
  },
]

const seventhLists = [
  {
    title: "Komplexe Berechnungen",
    body: "AGI erfordert komplexe Berechnungen für das Training von KI-Modellen, das Lernen aus Daten, das Ausführen von Simulationen und vieles mehr. Diese Berechnungen erfordern eine hohe Rechenleistung, die von HPC-Systemen bereitgestellt werden kann.",
  },
  {
    title: "Große Datenmengen",
    body: "AGI arbeitet oft mit großen Datenmengen, um Muster zu erkennen, Vorhersagen zu treffen und zu lernen. Die Verarbeitung dieser Daten erfordert schnelle und leistungsfähige Systeme, die in der Lage sind, große Datenmengen effizient zu verarbeiten.",
  },
  {
    title: "Parallele Verarbeitung",
    body: "AGI-Algorithmen können parallelisiert werden, um die Verarbeitungszeit zu verkürzen und die Leistung zu verbessern. HPC-Systeme ermöglichen die parallele Verarbeitung von Daten und Algorithmen, um die Effizienz von AGI-Anwendungen zu maximieren.",
  },
  {
    title: "Skalierbarkeit",
    body: "AGI erfordert eine skalierbare Infrastruktur, die je nach Bedarf erweitert werden kann. HPC-Systeme bieten die Möglichkeit, die Rechenleistung und Speicherkapazität bei Bedarf zu erweitern, um den Anforderungen von AGI-Anwendungen gerecht zu werden.",
  },
]

export default function About() {
  const videoId = "0oRVLf16CMU"

  return (
    <>
      <div className="lg:mx-auto flex-grow mb-auto items-center justify-between">
        <div className="grid mb-auto bg-black w-full lg:h-[50rem] h-auto justify-center items-center">
          <div className="grid  -gap-x-20 sm:pb-10 lg:grid-cols-2 sm:grid-cols-1 bg-black w-full lg:h-[40rem] h-auto justify-center">
            <div className="flex-col">
              <h1 className="lg:size-[33rem] lg:ml-32 text-white lg:text-[5rem] md:text-[35px] md:ml-5 sm:text-[25px] font-bold font-sans leading-[7rem] sm:ml-10">
                Die #42 und der Bot
              </h1>
              <p className="lg:size-[33rem] lg:ml-[8rem] text-white lg:text-[2rem] md:text-[35px] md:ml-5 sm:text-[25px] font-bold font-sans sm:ml-10 lg:-mt-[19rem]">           
                Denn #21 ist nur die halbe Wahrheit!
              </p>
            </div>
            <div className="mx-10 ml-40 text-white text-[5rem]">
              <Image
                src="/about_image.jpg"
                alt="Your Company"
                width={350}
                height={100}
                className="mx-auto h-auto w-auto"
              />
              <button
                type="button"
                className="relative rounded-md bg-primary-500 px-6 py-5 text-sm  font-bold text-white shadow-sm hover:bg-primary-700 overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div>HIER KÖNNEN SIE TOKEN KAUFEN</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="grid mb-auto w-full h-auto justify-center items-center">
          <div className="lg:flex w-auto grid-cols-1 lg:m-0 h-auto justify-center mx-auto">
            <div className="border-primary-500 border lg:h-auto lg:w-[39rem] lg:mb-[16rem] lg:ml-24 lg:-mt-[20rem] lg:mx-0 mx-[4rem] bg-white flex items-center">
              {" "}
              {/* Updated this line */}
              <div className="lg:ml-16 lg:py-[0.5rem] my-[5rem] lg:mr-40 text-justify lg:w-[25rem] lg:mx-10 mx-5 h-auto">
                <h1 className="font-bold lg:text-[3rem] text-[1.5rem] h-auto text-left">
                “Maximierung der Synergie: Die QCI und die NoosphereApp – 
                Die Stärke der Integration verschiedener Technologien mit schneller und großvolumiger Skalierbarkeit: 
                Die optimale Lösung für den KI-Markt zur Bereitstellung der erforderlichen Rechenkapazitäten”
                </h1>
                <h3 className="mt-5 font-bold lg:text-[2rem] text-[1.5rem]">Die NoosphereApp</h3>
                <p className="mt-5 text-md">
                NoosphereApp ist die beste Lösung, um auf die Bedürfnisse im KI-Markt einzugehen, aufgrund seiner einzigartigen Fähigkeit, hochleistungsfähige Cloud- und Colocation-Dienste anzubieten, die speziell darauf ausgelegt sind, die Anforderungen von KI-Anwendungen zu erfüllen. Hier sind einige Gründe, warum NoosphereApp die optimale Lösung für den KI-Markt ist:
                </p>
                <OrderedLists lists={firstLists} />
                <p className="mt-5 text-md">
                Insgesamt bietet NoosphereApp die optimale Lösung für den KI-Markt, indem es leistungsstarke Infrastruktur, schnelle und großvolumige Skalierbarkeit, Expertenwissen und Support, Sicherheit und Datenschutz sowie Flexibilität und Anpassungsfähigkeit kombiniert, um den Anforderungen von KI-Anwendungen gerecht zu werden.
                </p>
                <p className="mt-5 text-md">
                <strong>High Performance Computing (HPC)</strong> ist ein Bereich der Informatik, der sich mit der Verwendung von leistungsstarken Computerressourcen beschäftigt, um komplexe und rechenintensive Aufgaben zu lösen. Diese Aufgaben umfassen unter anderem komplexe Simulationen, Modellierungen, Datenanalysen und maschinelles Lernen, die eine enorme Rechenleistung erfordern. HPC-Systeme bestehen typischerweise aus einem Cluster von Hochleistungsrechnern, die miteinander verbunden sind und parallel arbeiten, um die Rechenleistung zu erhöhen.
                </p>
                <h5 className="mt-5 text-md font-bold" >
                Arten und Funktionen von High Performance Computing:
                </h5>
                <OrderedLists lists={secondLists} />
                <h5 className="mt-5 text-md font-bold" >
                Warum ist High Performance Computing in den einzelnen Bereichen nützlich für KI-Anwendungen:
                </h5>
                <OrderedLists lists={thirdLists} />
                <h5 className="mt-5 text-md font-bold" >
                Beispiele für High Performance Computing im KI-Bereich:
                </h5>
                <OrderedLists lists={fourthLists} />
                <h5 className="mt-5 text-md font-bold" >
                Weitere Anwendungen von High Performance Computing:
                </h5>
                <OrderedLists lists={fifthLists} />
                <p className="mt-5 text-md">
                In all diesen Anwendungen spielt High Performance Computing eine entscheidende Rolle, um komplexe Probleme zu lösen, innovative Lösungen zu entwickeln und wissenschaftliche Erkenntnisse voranzutreiben.
                </p>
                <h5 className="mt-5 text-center border-b border-gray-800">Formularbeginn</h5>
                <p className="mt-5 text-md">
                Insgesamt ist High Performance Computing von entscheidender Bedeutung für KI-Anwendungen, da es die erforderliche Rechenleistung, Skalierbarkeit und Effizienz bietet, um komplexe Aufgaben zu lösen und innovative KI-Modelle zu entwickeln.
                </p>
                <h5 className="mt-5 text-md font-bold" >
                Einblicke in die Welt der Künstlichen Intelligenz: Arten und Funktionen verschiedener Bereiche der KI
                </h5>
                <h5 className="mt-5 text-md font-bold" >
                Was ist KI: Von Maschinellem Lernen bis zur Robotik
                </h5>
                <p className="mt-5 text-md">
                Künstliche Intelligenz (KI) ist ein Bereich der Informatik, der sich mit der Entwicklung von Computersystemen und -programmen befasst, die in der Lage sind, Aufgaben auszuführen, die normalerweise menschliche Intelligenz erfordern. Diese Systeme sind darauf ausgelegt, Muster zu erkennen, Probleme zu lösen, Entscheidungen zu treffen, Sprache zu verstehen, zu lernen und sich weiterzuentwickeln. KI basiert auf Algorithmen und Techniken aus den Bereichen Maschinelles Lernen, Datenanalyse, Wissensrepräsentation, Robotik, Sprachverarbeitung und mehr.
                </p>
                <h5 className="mt-5 text-md font-bold" >
                Arten und Funktionen der verschiedenen Bereiche der Künstlichen Intelligenz:
                </h5>
                <OrderedLists lists={sixthLists} />
                <p className="mt-5 text-md">
                Die verschiedenen Bereiche der Künstlichen Intelligenz arbeiten oft zusammen und ergänzen sich gegenseitig, um komplexe Probleme zu lösen und innovative Lösungen zu entwickeln. Durch die Kombination von Maschinellem Lernen, Deep Learning, Sprachverarbeitung, Computer Vision und Robotik können KI-Systeme Aufgaben ausführen, die normalerweise menschliche Intelligenz erfordern, und dazu beitragen, neue Erkenntnisse zu gewinnen und die menschliche Erfahrung zu verbessern.
                </p>
                <h5 className="mt-5 text-md font-bold" >
                Entdecken Sie die Zukunft: Die Revolution der Künstlichen Intelligenz mit Artificial General Intelligence (AGI) und die entscheidende Rolle von High Performance Computing (HPC)
                </h5>
                <p className="mt-5 text-md">
                AGI steht für "Artificial General Intelligence" oder auch "Allgemeine Künstliche Intelligenz". Im Gegensatz zu "Schwacher Künstlicher Intelligenz" (englisch: Narrow AI), die darauf ausgelegt ist, spezifische Aufgaben oder Probleme zu lösen, strebt AGI danach, eine künstliche Intelligenz zu schaffen, die in der Lage ist, eine Vielzahl von Aufgaben zu verstehen, zu lernen und auszuführen, die normalerweise menschliche Intelligenz erfordern.             
                </p>
                <p className="mt-5 text-md">
                AGI soll über ein breites Spektrum von Fähigkeiten verfügen, die dem menschlichen Verstand ähnlich sind, einschließlich Sprachverarbeitung, visuelle Wahrnehmung, logisches Denken, abstraktes Denken, Lernen aus Erfahrung, kreatives Problemlösen und vieles mehr. Es wird angestrebt, dass AGI in der Lage ist, komplexe Probleme zu lösen und sich kontinuierlich zu verbessern, ähnlich wie der menschliche Verstand.
                </p>
                <p className="mt-5 text-md">
                Warum benötigt AGI HPC (High Performance Computing)?
                </p>
                <p className="mt-5 text-md">
                AGI erfordert High Performance Computing (HPC), um die erforderliche Rechenleistung und Skalierbarkeit für die Verarbeitung großer Datenmengen und die Ausführung komplexer Algorithmen bereitzustellen. Da AGI darauf abzielt, eine umfassende künstliche Intelligenz zu schaffen, die in der Lage ist, eine Vielzahl von Aufgaben zu verstehen und auszuführen, erfordert dies enorme Rechenressourcen.
                </p>
                <OrderedLists lists={seventhLists} />
                <p className="mt-5 text-md">
                Insgesamt ist High Performance Computing von entscheidender Bedeutung für die Entwicklung und den Einsatz von AGI, da es die erforderliche Rechenleistung, Skalierbarkeit und Effizienz bietet, um komplexe Probleme zu lösen und eine umfassende künstliche Intelligenz zu schaffen.
                </p>
                <h5 className="mt-5 text-md font-bold" >
                Entdecken Sie die Zukunft: Das ertragreich Wettrennen im Bereich Künstliche Intelligenz
                </h5>
                <div className="mt-5">
                  <YoutubeIFrame videoId="EJsa6wZ6ovY" title={""}/>
                </div>
              </div>
            </div>
            <div className="items-end lg:ml-5 pb-[16rem]  sm:mx-10 sm:mt-5 flex">
              <Image
                src="/homepage_image.png"
                alt="Your Company"
                width={600}
                height={600}
                className="mx-auto h-auto w-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-black -mt-28">
          <div className="lg:mx-auto mx-20 max-w-7xl pt-16 sm:pt-24 lg:px-8 lg:pt-32 items-center justify-center">
            <div className="flex-col lg:ml-16 mt-16 pb-28">
              <h1 className=" text-primary-500 font-bold text-sm">         
              TYPEN UND FUNKTIONEN
              </h1>
              <h1 className=" text-white lg:text-[50px] font-bold font-sans text-[30px] mb-32">
                Was ist ein Bot?
              </h1>
              <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 justify-center text-justify gap-10 gap-x-16">
                <div>
                  <h1 className="text-primary-500 text-lg font-extrabold">
                    WAS IST EIN BOT?
                  </h1>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-5">
                  Das Wort Bot leitet sich vom englischen Begriff robot ab. Bots sind Computerprogramme, die für einen Benutzer oder ein anderes Programm arbeiten oder eine menschliche Aktivität simulieren. Bots werden typischerweise dazu eingesetzt, bestimmte Aufgaben zu automatisieren, d. h. sie können ohne spezifische Anweisungen von Menschen ausgeführt werden. Ein Unternehmen oder eine Einzelperson kann einen Bot verwenden, um eine sich wiederholende Aufgabe zu ersetzen und zu erleichtern, die sonst von einem Menschen ausgeführt werden müsste. Bots sind bei diesen Aufgaben auch viel schneller als Menschen. Obwohl Bots nützliche Funktionen ausführen können, können sie auch bösartig sein und in Form von Malware-Bots auftreten.
                  </p>
                </div>
                <div>
                  <h1 className="text-primary-500 text-lg font-extrabold">
                  WAS IST EIN BOT?
                  </h1>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-5">
                  Das Wort Bot leitet sich vom englischen Begriff robot ab. Bots sind Computerprogramme, die für einen Benutzer oder ein anderes Programm arbeiten oder eine menschliche Aktivität simulieren. Bots werden typischerweise dazu eingesetzt, bestimmte Aufgaben zu automatisieren, d. h. sie können ohne spezifische Anweisungen von Menschen ausgeführt werden. Ein Unternehmen oder eine Einzelperson kann einen Bot verwenden, um eine sich wiederholende Aufgabe zu ersetzen und zu erleichtern, die sonst von einem Menschen ausgeführt werden müsste. Bots sind bei diesen Aufgaben auch viel schneller als Menschen. Obwohl Bots nützliche Funktionen ausführen können, können sie auch bösartig sein und in Form von Malware-Bots auftreten.
                  </p>
                </div>
                <div>
                  <h1 className="text-primary-500 text-lg font-extrabold">
                    WAS IST EIN BOT?
                  </h1>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-5">
                  Das Wort Bot leitet sich vom englischen Begriff robot ab. Bots sind Computerprogramme, die für einen Benutzer oder ein anderes Programm arbeiten oder eine menschliche Aktivität simulieren. Bots werden typischerweise dazu eingesetzt, bestimmte Aufgaben zu automatisieren, d. h. sie können ohne spezifische Anweisungen von Menschen ausgeführt werden. Ein Unternehmen oder eine Einzelperson kann einen Bot verwenden, um eine sich wiederholende Aufgabe zu ersetzen und zu erleichtern, die sonst von einem Menschen ausgeführt werden müsste. Bots sind bei diesen Aufgaben auch viel schneller als Menschen. Obwohl Bots nützliche Funktionen ausführen können, können sie auch bösartig sein und in Form von Malware-Bots auftreten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark-950">
          <div className="mx-auto max-w-7xl lg:px-8 items-center justify-center">
            <div className="mx-auto max-w-7xl sm:pt-24 lg:px-8 items-center justify-center">
              <div className="flex-col lg:ml-10 mx-16">
                <h1 className=" text-primary-500 font-bold text-sm">
                TYPEN UND FUNKTIONEN
                </h1>
                <h1 className=" text-white lg:text-[50px] font-bold font-sans text-[30px]">
                  Was ist Künstliche Intelligenz (KI)?
                </h1>
                <div className="text-justify">
                  <h1 className="text-primary-500 font-extrabold pt-16 text-lg">
                  DEFINITION VON KI?
                  </h1>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-2">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </p>
                </div>
              </div>
            </div>
            <div className="justify-center items-center flex mt-20 lg:ml-16 mx-16">
              <YoutubeIFrame videoId={videoId} title={""} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
