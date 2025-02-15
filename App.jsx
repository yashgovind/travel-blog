import Navbar from "./components/Navbar"
import Item from "./components/Entry"
import data from "./data";

export default function Page() {
    const items = data.map((item) => {
        return <Item
            key={item.id}
            {...item}
        />
    })
    return (
        <>
            <Navbar />
            {items}
        </>
    )
}