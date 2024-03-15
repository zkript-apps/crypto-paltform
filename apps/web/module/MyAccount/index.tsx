"use client"

import OrderModal from "@/common/components/modals/OrderModal"
import RegisterWalletModal from "@/common/components/modals/RegisterWalletModal"
import TransferDetailsModal from "@/common/components/modals/TransferDetailsModal"
import { useState } from "react"

export default function MyAccount() {
  const [isWalletRegisterOpen, setIsWalletRegisterOpen] = useState(false)
  const [isOrderOpen, setIsOrderOpen] = useState(false)

  function walletRegisterClick(): void {
    setIsWalletRegisterOpen(true)
  }

  function orderClick(): void {
    setIsOrderOpen(true)
  }

  return (
    <>
      <div className="lg:mx-auto mb-auto items-center justify-between">
        <div className="grid bg-persian-indigo lg:h-auto justify-center items-center text-center pb-24">
          <div className="mx-10">
            <h1 className="py-28 text-white lg:text-[5rem] md:text-[35px] sm:text-[25px] font-semibold font-sans">
              AGI | Mein Konto
            </h1>

            <div className="bg-white h-auto py-8 rounded-2xl mt-5 border-tekhelet border justify-center items-center flex">
              <button
                onClick={() => walletRegisterClick()}
                type="button"
                className="text-[1.2rem] relative shadow-lg rounded-md bg-mardi-gras px-5 py-4 font-normal text-white hover:bg-pink-600 overflow-hidden group"
              >
                Wallet Registrieren
              </button>
            </div>
            <div className="bg-white h-auto py-8 rounded-2xl mt-5 border-tekhelet border justify-center items-center flex">
              <button
                onClick={() => orderClick()}
                type="button"
                className="text-[1.2rem] relative shadow-lg rounded-md bg-mardi-gras px-16 py-4 font-normal text-white hover:bg-pink-600 overflow-hidden group"
              >
                Befehl
              </button>
            </div>

            <div className="bg-white flex-col w-full h-auto py-10 rounded-2xl mt-5 border-tekhelet border justify-center items-center flex">
              <h1 className="underline text-[2rem] font-extrabold">
                Wallet Übersicht:
              </h1>
              <h1 className="text-md font-normal mt-10">
              Nicht in der Wallet eingeloggt.
              </h1>
              <h1 className="text-md font-normal mt-8">
                Balance Stck: 0 x Preis: 1.3340 € = Wert: 0.00 €
              </h1>
              <div className="grid grid-cols-3 gap-5 text-md font-normal mt-5">
                <h1>Investition: 0.00 €</h1>
                <h1>Ø Preis: 0.0000 €</h1>
                <h1 className="font-bold text-celestial-blue">
                Wertveränderung: 0 %
                </h1>
              </div>
            </div>
            <div className="bg-white flex-col w-full font-semibold h-auto py-10 rounded-2xl mt-5 border-primary-500 border flex text-justify">
              <div className="mx-10">
                <h1 className="text-[2.3rem] font-extrabold">
                Die Zukunft der Künstlichen Intelligenz (KI)
                </h1>
                <p className="text-lg mt-5 leading-24">
                Die Zukunft wird zweifellos von Künstlicher Intelligenz (KI) geprägt sein. Mit der stetigen Weiterentwicklung und Implementierung von KI-Technologien erleben wir eine Revolution, die beinahe jeden Aspekt unseres Lebens verändern wird.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Billionengeschäft mit KI
                </h1>
                <p className="text-lg mt-5 leading-24">
                Das Potenzial von KI als Billionengeschäft ist unbestritten. Unternehmen investieren massiv in die Entwicklung und Implementierung von KI-Lösungen, um ihre Prozesse zu optimieren, Kosten zu senken und ihre Wettbewerbsfähigkeit zu steigern. KI durchdringt alle Branchen von der Gesundheitsversorgung über das Finanzwesen bis hin zum Einzelhandel und bietet ein enormes Potenzial für Innovation und Wachstum.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Effizienzsteigerung durch KI
                </h1>
                <p className="text-lg mt-5 leading-24">
                Durch den Einsatz von KI-Technologien können Unternehmen effizienter arbeiten, bessere Entscheidungen treffen und neue Geschäftsmöglichkeiten erschließen. Die Anwendungsfelder von KI sind vielfältig, von der Vorhersage von Markttrends bis zur Verbesserung des Kundenservice, und bieten Unternehmen einen Wettbewerbsvorteil in einer zunehmend digitalen Welt.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Herausforderungen und Bedenken
                </h1>
                <p className="text-lg mt-5 leading-24">
                Trotz der enormen Chancen und Möglichkeiten, die KI bietet, sind auch die damit verbundenen Herausforderungen nicht zu unterschätzen. Fragen der Datensicherheit, ethischen Nutzung von KI und potenziellen Auswirkungen auf den Arbeitsmarkt müssen sorgfältig berücksichtigt werden.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Fazit: KI als Schlüssel zur Zukunft
                </h1>
                <p className="text-lg mt-5 leading-24">
                Insgesamt ist jedoch klar: KI wird alles in Zukunft beherrschen, und das Billionengeschäft mit der Künstlichen Intelligenz befindet sich erst am Anfang. Unternehmen, die in die Entwicklung und Implementierung von KI-Lösungen investieren, werden in der Lage sein, sich in einem zunehmend digitalen und datengetriebenen Umfeld erfolgreich zu behaupten und neue Chancen zu nutzen.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Jetzt ist der richtige Zeitpunkt!
                </h1>
                <p className="text-lg mt-5 leading-24">
                Aufgepasst: Wir stehen an der Schwelle einer Revolution, die Unternehmen weltweit verändern wird. Neben der physischen Welt und dem Internet werden Unternehmen in Zukunft ihre Tätigkeiten mit automatisierten Prozessen vernetzen. Jetzt ist der perfekte Zeitpunkt, um in die Zukunft mit zu gestalten.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Die Verschmelzung von Realität und Digitalität
                </h1>
                <p className="text-lg mt-5 leading-24">
                Künstliche Intelligenz wird die reale Welt und die digitale Welt nahtlos miteinander verbinden. Von Maschinen über Computerprogramme bis hin zu Lieferketten und Produktion - KI wird praktisch alles, was Unternehmen heute tun, revolutionieren.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Innovation und Effizienzsteigerung
                </h1>
                <p className="text-lg mt-5 leading-24">
                Die Integration von KI in Geschäftsprozesse verspricht enorme Vorteile für Unternehmen. Von der Automatisierung repetitiver Aufgaben bis hin zur Optimierung komplexer Entscheidungsprozesse - Investitionen in KI-Technologien werden Innovation und Effizienzsteigerung vorantreiben.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Wachstumspotenzial und Wettbewerbsvorteile
                </h1>
                <p className="text-lg mt-5 leading-24">
                Unternehmen, die frühzeitig in KI investieren, werden sich einen entscheidenden Wettbewerbsvorteil sichern. Durch die Nutzung von KI-Technologien können sie sich an die Spitze ihrer Branche setzen und ein nachhaltiges Wachstumspotenzial freisetzen.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Fazit: Jetzt handeln!
                </h1>
                <p className="text-lg mt-5 leading-24">
                Der richtige Zeitpunkt zum Handeln ist jetzt! Die Chancen erkennen und mit KI-Technologien zum Kreis der Gewinner dieser revolutionären Veränderungen gehören. Seien Sie Teil dieser Zukunft, und werden aktiv mit den Unternehmen, die die Art und Weise, wie wir arbeiten und leben, für immer verändern werden.
                </p>
                <h1 className="text-[2.3rem] font-extrabold my-5">
                Billionen hier, Billionen dort - bald wird es echtes Geld
                </h1>
                <p className="text-lg mt-5 leading-24">
                Experten sehen das Wachstum im Bereich High Performance Computing (HPC) als äußerst dynamisch an und schätzen, dass es in den nächsten 20 Jahren genauso dynamisch sein wird wie in den vorangegangenen fünfzig Jahren. Diese Einschätzung basiert auf einer jährlichen Wachstumsrate von etwa 65%... Das bedeutet, dass die weltweite Kapazität an Hochleistungsrechnern von heute etwa 0,01% der Kapazität im Jahr 2044 ausmachen wird...
                </p>
                <p className="text-lg mt-5 leading-24">
                Dieses Wachstum wird dazu führen, dass Unternehmen, Politik und Gesellschaft ihre Transformation fortsetzen müssen. Diese Transformation umfasst die Errichtung neuer High Perfomance Computing Center und den Ausbau der Kapazitäten. Dabei wird besonderer Wert auf Nachhaltigkeit gelegt, mit einem minimalen bis zu keinem ökologischen Fußabdruck. Dieser Ansatz erfüllt alle Prioritäten von Fonds- und Investmentbanken, die sich verstärkt für umweltfreundliche Investitionen einsetzen.
                </p>
                <p className="text-lg mt-5 leading-24">
                Die Märkte sind in der Lage, mit diesem komplexen Gebilde spontaner Ordnung umzugehen. Auf den gesellschaftlich geordnet-chaotischen Befehl hin werden sie in den kommenden Jahrzehnten zig Billionen Dollar in HPC-Technologien investieren. Diese Investitionen, ob mit oder ohne die aktuellen großen Player, werden erfolgen, um dem steigenden Bedarf gerecht zu werden.
                </p>
                <p className="text-lg mt-5 leading-24">
                Aktuell verfügt die Welt über lediglich 0,01% der erforderlichen HPC-Kapazität im Jahr 2044. Es liegt an uns, diese Kapazitäten zu erweitern und sicherzustellen, dass wir für die Herausforderungen der Zukunft gerüstet sind.
                </p>
              </div>
            </div>
            <div className="bg-white flex-col w-full font-semibold h-auto py-10 rounded-2xl mt-5 border-primary-500 border text-justify flex">
              <div className="mx-10">
                <h1 className=" text-[2.3rem] font-extrabold">
                  Rücktrittsrecht
                </h1>
                <p className="text-lg mt-5 leading-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque dapibus neque sed blandit viverra. Donec finibus
                  in arcu non molestie. Ut euismod turpis at ex condimentum,
                  quis fringilla turpis lobortis. Nullam vitae turpis ut neque
                  cursus faucibus. Fusce dictum molestie interdum. Duis viverra
                  semper sem, at tincidunt est congue ut. Integer felis neque,
                  efficitur at neque egestas, euismod volutpat nisl. Proin nec
                  viverra quam. Proin sollicitudin, erat nec porta suscipit,
                  neque nisl convallis orci, in efficitur dui neque sit amet
                  dui. Vestibulum accumsan pretium libero, at volutpat tellus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae;
                </p>
                <div className="my-5 underline">
                  <p className="mt-10">Stornierung per Post an:</p>
                  <p className="mt-20">Stornierung per E-Mail an:</p>
                  <p className="mt-10">Stornierung per FAX an:</p>
                </div>
                <p className="text-lg mt-10 leading-24">
                  Duis pulvinar vel metus eget fringilla. Suspendisse non eros
                  eros. Integer ipsum dolor, consequat vitae ante non, viverra
                  elementum quam. Vestibulum laoreet posuere lacus, ac rutrum
                  tellus tincidunt vel. Phasellus id enim quam. Morbi sagittis
                  felis ut risus pulvinar volutpat. Maecenas scelerisque leo non
                  est tristique, sit amet consequat lectus tempus.
                </p>
                <h1 className="text-[1.2rem] font-extrabold my-5">
                Folgen des Widerrufs
                </h1>
                <p className="text-lg mt-5 leading-24">
                  Morbi fringilla mi et volutpat ultrices. Morbi posuere, eros
                  aliquet suscipit sollicitudin, orci ipsum tristique nulla,
                  fringilla faucibus ex ligula a risus. In ac massa ut orci
                  consequat ultrices. Donec efficitur vulputate odio in
                  consequat. Fusce in enim nulla. Proin molestie odio ac
                  eleifend sodales. Fusce vitae fermentum lacus. Integer et
                  pellentesque metus, id semper mi.
                </p>
                <p className="text-lg mt-10 leading-24">
                  Donec pretium auctor gravida. Quisque eget velit sapien. Morbi
                  sed efficitur augue. Morbi sit amet mauris malesuada, gravida
                  odio id, commodo libero. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus. Suspendisse aliquet molestie leo,
                  eget fermentum quam tincidunt vitae. Vivamus eu feugiat mi.
                  Etiam malesuada in urna ac fringilla. Donec eu magna consequat
                  eros ornare condimentum. Sed tempor ultricies leo, et porta
                  metus vestibulum a.{" "}
                </p>
                <h1 className="text-[1.2rem] font-extrabold my-5">
                  Ende des Widerrufs
                </h1>
                <div className="w-full h-1 bg-primary-500 my-10"></div>
                <h1 className="text-[2rem]  my-5">Haftungsausschluss</h1>
                <p className="text-lg mt-5 leading-24">
                  LIn hac habitasse platea dictumst. Cras blandit ipsum at
                  pharetra convallis. Nullam tempus lorem id massa mollis
                  volutpat. Vestibulum id dapibus ante. Curabitur scelerisque
                  tellus dolor, efficitur vulputate nisi aliquet ullamcorper.
                  Etiam et eleifend nulla. Nulla eu dolor sem. Aenean interdum
                  venenatis turpis sit amet ornare. Pellentesque vel magna
                  consequat nunc ullamcorper volutpat.
                </p>
                <p className="text-lg mt-5 leading-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque dapibus neque sed blandit viverra. Donec finibus
                  in arcu non molestie. Ut euismod turpis at ex condimentum,
                  quis fringilla turpis lobortis. Nullam vitae turpis ut neque
                  cursus faucibus. Fusce dictum molestie interdum. Duis viverra
                  semper sem, at tincidunt est congue ut. Integer felis neque,
                  efficitur at neque egestas, euismod volutpat nisl. Proin nec
                  viverra quam. Proin sollicitudin, erat nec porta suscipit,
                  neque nisl convallis orci, in efficitur dui neque sit amet
                  dui. Vestibulum accumsan pretium libero, at volutpat tellus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae;
                </p>
              </div>
            </div>
          </div>

          <div className="grid mb-auto w-full h-auto justify-center items-center"></div>

          <RegisterWalletModal
            isOpen={isWalletRegisterOpen}
            onClose={() => setIsWalletRegisterOpen(false)}
          />
          <OrderModal
            isOpen={isOrderOpen}
            onClose={() => setIsOrderOpen(false)}
          />
        </div>
      </div>
    </>
  )
}
