const CancellationPolicy = () => {
  return (
      <div className="lg:mx-auto mb-auto items-center justify-between">
          <div className="mb-auto w-full bg-persian-indigo h-auto justify-center items-center">
              <h1 className="py-36 text-white text-center font-semibold text-[3rem] lg:text-[4rem]">
                Widerrufsbelehrung
              </h1>
          </div>
          <div className="mb-auto w-full h-auto justify-center items-center">
              <div className="lg:flex w-auto lg:mr-0 h-auto justify-center mx-auto">
                  <div className="border-tekhelet border mb-16 -mt-14 mx-8 lg:mx-24 bg-white flex items-center">
                      <div className="p-12">
                          <h3 className="font-semibold text-lg">Widerrufsrecht</h3>
                          <p className="text-md mt-4">
                            Als Auftraggeber haben Sie das Recht, diesen Vertrag binnen vierzehn Tagen ohne Angabe von Gründen zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                          </p>
                          <p className="mt-5 text-md">
                            Um Ihr Widerrufsrecht auszuüben, müssen Sie der QCI EUROPA AG mittels einer eindeutigen Erklärung (z.B. per Post, per Fax oder per E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                          </p>
                          <p className="mt-5 text-md underline font-semibold">Widerruf per Post an:</p>
                          <p>QCI EUROPA AG</p>
                          <p>Bahnhofstrasse 4</p>
                          <p>CH-9100 Herisau</p>
                          <p className="mt-5 text-md underline font-semibold">Widerruf per E-Mail an:</p>
                          <p>info@qci-europa.ch</p>
                          <p className="mt-5 text-md">
                            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden. 
                          </p>
                          <h3 className="font-semibold text-lg mt-4">Folgen des Widerrufs</h3>
                          <p className="text-md mt-4">
                            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
                          </p>
                          <p className="mt-5 text-md">
                            Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
                          </p>
                          <p className="mt-5 text-md">
                            Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CancellationPolicy