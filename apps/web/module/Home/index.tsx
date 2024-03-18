"use client"
import YoutubeIFrame from "@/common/components/YoutubeIFrame"
import Image from "next/image"
import OrderedLists from "@/common/components/OrderedLists"
import {Tweet} from "react-tweet"

const lists = [
  {
    title: "Training von KI-Modellen",
    body: "Die Entwicklung und das Training von KI-Modellen erfordern große Mengen an Daten und komplexe Algorithmen. HPC ermöglicht es, diese Daten schnell zu verarbeiten und die Modelle effizient zu trainieren, was die Entwicklungszeit verkürzt und die Genauigkeit der Modelle verbessert.",
  },
  {
    title: "Deep Learning",
    body: "Deep-Learning-Algorithmen, die in vielen KI-Anwendungen verwendet werden, erfordern eine enorme Rechenleistung, um komplexe neuronale Netzwerke zu trainieren und zu optimieren. HPC-Systeme können diese Berechnungen parallelisieren und beschleunigen, was die Leistung und Effizienz von Deep-Learning-Anwendungen verbessert.",
  },
  {
    title: "Big-Data-Analyse",
    body: "KI-Anwendungen basieren oft auf der Analyse großer Datenmengen, um Muster und Trends zu erkennen. HPC ermöglicht es, große Datenmengen schnell zu verarbeiten und komplexe Analysen durchzuführen, was die Erkenntnisgewinnung und Entscheidungsfindung verbessert.",
  },
  {
    title: "Echtzeitverarbeitung",
    body: "In einigen KI-Anwendungen ist Echtzeitverarbeitung erforderlich, um schnelle Entscheidungen zu treffen oder auf sich schnell ändernde Daten zu reagieren. HPC ermöglicht die Verarbeitung von Daten in Echtzeit, was die Leistungsfähigkeit und Effizienz von KI-Systemen verbessert",
  },
  {
    title: "Skalierbarkeit",
    body: "HPC-Systeme sind hochgradig skalierbar und können je nach Bedarf erweitert werden, um den Anforderungen von KI-Anwendungen gerecht zu werden. Dies ermöglicht es, große Datenmengen zu verarbeiten und komplexe Berechnungen durchzuführen, ohne die Leistung zu beeinträchtigen.",
  },
]

const tweetNews = [
  "1758205817134989694", 
  "1756240598296625485", 
  "1753055783145676976", 
  "1756436711926550615", 
  "1757514717084475396", 
  "1751043610899099978", 
  "1752469801212244198", 
  "1751610043160764496", 
  "1750025219454943404", 
  "1751970253792481484", 
  "1601633605306183681", 
  "1767844515476345059", 
  "1402969695603601412", 
  "1720280757380206912",
  "1702680806919975174",
  "1714546619465564615",
  "1725399460413645047",
  "1719161763084513316",
  "1739982491950416081",
  "1739954255371329642",
  "1708828657060548818",
  "1741665601272111186",
  "1755834173032439972",
  "1744381009846587621",
]

export default function Home() {
  const videoId = "wDchsz8nmbo"

  return (
    <>
      <div>
        <div className="bg-persian-indigo">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 pb-24 md:pb-44 mx-12 xl:mx-80">
            <h1 className="text-[3rem] xl:text-[5rem] text-white font-bold">
              Die Zukunft mit #42
            </h1>
            <div>
              <YoutubeIFrame videoId={videoId} title={""} />
              <div className="mt-8">
                <button
                  type="button"
                  className="relative rounded-md bg-mardi-gras px-6 py-5 text-sm font-bold text-white shadow-sm hover:bg-pink-600 overflow-hidden group"
                >
                  HIER KÖNNEN SIE TOKEN KAUFEN
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-auto w-full h-auto justify-center items-center">
              <div className="lg:flex w-auto lg:mr-0 h-auto justify-center mx-auto">
                  <div className="border-tekhelet border mb-16 mt-12 lg:-mt-28 mx-8 md:mx-16 xl:mx-52 bg-white flex items-center">
                      <div className="p-12">
                <h1 className="font-bold lg:text-[3rem] text-[1.5rem] h-auto text-left">
                “Die Bedeutung von High Performance Computing für Künstliche Intelligenz: Beschleunigung von Datenverarbeitung und Modelltraining”
                </h1>
                <p className="mt-5 text-md">
                High Performance Computing (HPC) bezeichnet die Verwendung von leistungsstarken Computerressourcen, um komplexe und rechenintensive Aufgaben zu lösen. Dies umfasst die Nutzung von Hochleistungsrechnern, die aus einem Cluster von miteinander verbundenen Prozessoren bestehen, sowie spezielle Hochleistungsnetzwerke und Speicherlösungen. HPC ermöglicht die Verarbeitung großer Datenmengen in kurzer Zeit und wird in verschiedenen Bereichen wie Wissenschaft, Forschung, Ingenieurwesen, Finanzwesen und Medizin eingesetzt.{" "}
                </p>
                <p className="mt-5 text-md">
                <strong>Künstliche Intelligenz (KI)</strong> erfordert oft eine enorme Rechenleistung für die Verarbeitung großer Datenmengen und komplexe Berechnungen. Hier sind einige Gründe, warum HPC für künstliche Intelligenz so wichtig ist:
                </p>
                <OrderedLists lists={lists} />
                <p className="mt-5 text-md">
                Insgesamt ist High Performance Computing von entscheidender Bedeutung für die Entwicklung und den Einsatz von künstlicher Intelligenz, da es die erforderliche Rechenleistung und Skalierbarkeit bietet, um komplexe Probleme zu lösen und innovative KI-Anwendungen zu ermöglichen.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:ml-5 pb-[12rem] sm:mx-10 sm:mt-5 flex">
              <Image
                src="/homepage_image.png"
                alt="Your Company"
                width={600}
                height={600}
                className="mx-auto h-auto w-auto"
              />
            </div>
        </div>
        <div className="bg-persian-indigo -mt-28">
          <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:px-8 lg:pt-32 items-center justify-center">
            <div className="flex-col ml-20 mt-16 mx-auto">
              <h1 className=" text-persimmon font-bold text-sm">DIENSTLEISTUNGEN</h1>
              <h1 className=" text-white lg:text-[50px] font-bold font-sans pb-32 text-[30px]">
                Neuigkeiten aus der Szene...
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#13101c]">
          <div className="mx-auto max-w-7xl px-6 sm:pt-24 lg:px-8 lg:py-20 items-center justify-center">
            <div className="grid md:grid-cols-2 gap-16 justify-center items-center lg:mx-20 md:mx-20 mx-10 text-justify">
             {tweetNews.map((tweet, index) => (
              <Tweet id={tweet} key={index}/>
             ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
