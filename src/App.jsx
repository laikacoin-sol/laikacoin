import { ArrowRight, Rocket, DollarSign, Users, Globe } from "lucide-react"
import laikaImg from './assets/laika.png'
import Address from "./Address"

export default function LaikaLandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={laikaImg} alt="Laika Logo"
          width={40}
            height={40}
            
            />
          <span className="text-2xl font-bold">$LAIKA</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="hover:text-yellow-400 transition-colors">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-yellow-400 transition-colors">
                Community
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">To The Moon with Laika!</h1>
        <p className="text-xl md:text-2xl mb-8">The first memecoin to honor space exploration&apos;s goodest girl.</p>
        <a
          href="https://pump.fun/coin/57GJspLHHMRyeVC4neEdmxDtSvoBjXkcVCXN52Z7pump"
          className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center"
        >
          Buy $LAIKA
          <ArrowRight className="ml-2" />
        </a>

        <Address />
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Laika</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Laika, the brave space dog, paved the way for human space exploration. Now, $LAIKA aims to pave the way
                for a new era of memecoins on Solana.
              </p>
              <p className="text-lg">
                Join us on this cosmic journey as we honor Laika&apos;s legacy and reach for the stars!
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={laikaImg}
                alt="Laika in Space"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Tokenomics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-2">1 Billion</h3>
              <p>Total Supply</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-2">5% Tax</h3>
              <p>On Buy/Sell for Development</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-2">Community Driven</h3>
              <p>Governance through DAO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Join the $LAIKA Community</h2>
          <p className="text-xl mb-8">Be part of our growing pack of space enthusiasts and memecoin lovers!</p>
          <div className="flex justify-center space-x-4 ">
            <a
              href="https://x.com/LaikaMemeCoin"
              className="bg-blue-500 hover:bg-blue-100 text-white transition-colors px-6 py-3 rounded-full inline-flex items-center "
            >
              <Globe className="mr-2" />
              Twitter
            </a>
            <a
              href="https://t.me/laikamemecoinofficial"
              className="bg-indigo-500 hover:bg-indigo-100 text-white transition-colors px-6 py-3 rounded-full inline-flex items-center"
            >
              <Globe className="mr-2" />
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 $LAIKA. To the moon and beyond! 🚀🐾</p>
        </div>
      </footer>
    </div>
  )
}

