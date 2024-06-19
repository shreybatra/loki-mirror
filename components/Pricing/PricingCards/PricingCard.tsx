import { IoRocketOutline } from "react-icons/io5";

interface PricingCardsProps {
    heading: string;
    price: string;
    color?: string;
    features: IFeatures[];
    isMontly?: boolean;
} 
interface IFeatures {
    desc: string;
    isExcluded?: boolean;
}

const PricingCard = ({ heading, price, color, isMontly,features }: PricingCardsProps) => {
  return (
      (
          <div>
              <div className="mb-8 lg:mb-0 mx-auto md:w-[360px] w-[300px]">
                  <div
                      className="max-w-sm lg:max-w-none border-background flex flex-col gap-[16px] p-[12px] feature-description mx-auto pt-10 px-10 pb-8 rounded-3xl"
                  >

                      <div className="text-center mb-6">
                          <h5 className={`text-3xl whitespace-nowrap font-semibold text-gray-200 mb-3`}>{heading}</h5>
                          <span className={`block   ${isMontly ? 'my-7 text-gray-400 text-sm' : 'mb-1 text-xl text-gray-200'}`}> {price}</span>
                          {
                              !isMontly && <span className="block text-gray-400 text-xs mb-6">per month</span>
                          }                        <a
                              href="#"
                              className="relative group inline-block w-full py-4 px-6 text-center text-gray-300 hover:text-gray-50 bg-gray-800 font-semibold rounded-full overflow-hidden transition duration-200"
                          >
                              <div
                                  className="absolute top-0 right-full w-full h-full button-gradient transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                              ></div>
                              <span className="relative">Start 7-days Trial</span>
                          </a>
                      </div>
                      <ul>
                          
                          {
                              features.map((feature, index) => (
                                    <li key={index} className="flex gap-2 mb-4 items-center">
                                        <div className="w-[26px] max-w-[26px]">
                                            <IoRocketOutline width={"26px"} height={"26px"} className="fill-current w-[26px] max-w-[26px] text-gray-200" />
                                        </div>
                                        <span className={`${feature.isExcluded ? 'text-gray-500' : 'text-gray-100'}`}>{feature.desc}</span>
                                    </li>
                                ))
                          }
                          {/* <li className="flex gap-2 mb-4 items-center">
                              <div className="w-[26px] max-w-[26px]">
                                  <IoRocketOutline width={"26px"} height={"26px"} className="fill-current w-[26px] max-w-[26px] text-gray-200" />
                              </div>
                              <span className=" text-gray-500  line-through">Enhanced security and management controls, including Vault </span>
                          </li> */}
                      </ul>
                  </div>
              </div>

          </div>
      )
  )
}

export default PricingCard