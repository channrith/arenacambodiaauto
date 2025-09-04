import Image from "next/image";
import Advertisement from "../Advertisement";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__top">
                <h3>Car Producers</h3>

                <div className="producer">
                    <ul className="producer__list">
                        <li className="producer__item"><a className="producer__link" href="#">Toyota</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Ford</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Honda</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Chevrolet</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">BMW</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Mercedes-Benz</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Hyundai</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Kia</a></li>
                    </ul>

                    <ul className="producer__list">
                        <li className="producer__item"><a className="producer__link" href="#">Nissan</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Volkswagen</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Subaru</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Mazda</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Audi</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Lexus</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Jeep</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Dodge</a></li>
                    </ul>

                    <ul className="producer__list">
                        <li className="producer__item"><a className="producer__link" href="#">Volvo</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Tesla</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Peugeot</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Fiat</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Renault</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Jaguar</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Porsche</a></li>
                        <li className="producer__item"><a className="producer__link" href="#">Land Rover</a></li>
                    </ul>
                </div>
            </div>

            <Advertisement
                image="/image/Oct24-Cellcard-Hero-Banner-Mobile-720-x-460-eng.png"
                alt="Your ad could be here!"
                link="https://arenacambodiaauto.com/promo"
                height={300}
                width={300}
            />

            <Advertisement
                image="/image/f2qy2v60cFOQIjm3DxAbrULlUgiBvdTWCGOG4WUp.jpg"
                alt="Your ad could be here!"
                link="https://arenacambodiaauto.com/promo"
                height={300}
                width={300}
            />
        </aside >
    )
}

export default Sidebar;