import Link from "next/link"

const DisputeResolution = () => {
  return (
      <div className="lg:mx-auto mb-auto items-center justify-between">
          <div className="mb-auto w-full bg-persian-indigo h-auto justify-center items-center">
              <h1 className="py-36 text-white text-center font-semibold text-[3rem] lg:text-[4rem]">
                AUSSERGERICHTLICHE STREITBEILEGUNG
              </h1>
          </div>
          <div className="mb-auto w-full h-auto justify-center items-center">
              <div className="lg:flex w-auto lg:mr-0 h-auto justify-center mx-auto">
                  <div className="border-tekhelet border mb-16 -mt-14 mx-8 lg:mx-24 bg-white flex items-center">
                      <div className="p-12">
                            <p className="text-md">
                            Die Europäische Kommission hat unter <Link href="http://ec.europa.eu/consumers/odr/" target="_blank" className="underline text-primary-400">ODR für Verbraucher</Link> eine Europäische Online-Streitbeilegungsplattform (OS-Plattform) errichtet.
                          </p>
                          <p className="text-md mt-4">
                            Die OS-Plattform kann ein Verbraucher für die außergerichtliche Beilegung einer Streitigkeit aus Online-Verträgen mit einem in der EU niedergelassenen Unternehmen nutzen.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DisputeResolution