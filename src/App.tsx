import Menuitem from "./components/Menuitem"
import { menuItems } from "./data/db"

function App() {

    return (
        <>
            <header className="bg-teal-400 py-5">
                <h1 className="text-3xl font-black text-center">Calculadora de Propinas</h1>
            </header>

            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-4xl font-black">Menú</h2>

                    <div className="space-y-3">
                        {menuItems.map(item => (
                            <Menuitem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                </div>

                <div className="">
                    <h2 className="">Consumo</h2>
                </div>
            </main>
        </>
    )
}

export default App
