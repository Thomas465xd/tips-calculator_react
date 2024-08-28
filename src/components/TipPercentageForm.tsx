import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-30',
        value: .30,
        label: '30%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Escoge tu Propina:</h3>

            <form>

                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="space-y-3 flex gap-2">
                        <label htmlFor="">{tipOption.label}</label>
                        <input 
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={ e => setTip(Number(e.target.value))}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}

            </form>
        </div>
    )
}
