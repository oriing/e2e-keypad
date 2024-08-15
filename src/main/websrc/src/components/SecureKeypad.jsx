import '../style/keypad.css'

const columnCount = 4
const rowCount = 3

export default function SecureKeypad({ keypad, onKeyPressed }) {
    return (
        <>
            <table className="table-style">
                <tbody>
                {Array.from({length: rowCount}).map((_, rowIdx) => (
                    <tr key={rowIdx}>
                        {Array.from({length: columnCount}).map((_, columnIdx) => {
                            const idx = rowIdx * columnCount + columnIdx;

                            return <td key={columnIdx} className="td-style">
                                <button className="button-style" onClick={() => onKeyPressed(idx)}>
                                    <img className="number-style" src={`data:image/png;base64,${keypad[idx].imageData}`}/>
                                </button>
                            </td>
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
